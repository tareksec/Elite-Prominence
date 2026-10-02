'use client'

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const TooltipContext = createContext(null)

export function TooltipProvider({ children, openDelay = 150, closeDelay = 100 }) {
  return (
    <TooltipContext.Provider value={{ openDelay, closeDelay }}>
      {children}
    </TooltipContext.Provider>
  )
}

const SingleTooltipContext = createContext(null)

export function Tooltip({
  children,
  side = 'top',
  sideOffset = 8,
  open: controlledOpen,
  onOpenChange,
}) {
  const provider = useContext(TooltipContext) || { openDelay: 150, closeDelay: 100 }
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : internalOpen

  const timeoutRef = useRef(null)
  const triggerRef = useRef(null)

  const show = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (!isControlled) setInternalOpen(true)
      onOpenChange?.(true)
    }, provider.openDelay)
  }, [isControlled, onOpenChange, provider.openDelay])

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      if (!isControlled) setInternalOpen(false)
      onOpenChange?.(false)
    }, provider.closeDelay)
  }, [isControlled, onOpenChange, provider.closeDelay])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <SingleTooltipContext.Provider
      value={{
        isOpen,
        show,
        hide,
        side,
        sideOffset,
        triggerRef,
      }}
    >
      <div className="relative inline-flex items-center" style={{ display: 'inline-flex' }}>
        {children}
      </div>
    </SingleTooltipContext.Provider>
  )
}

export function TooltipTrigger({ children, asChild = false, className = '', ...props }) {
  const context = useContext(SingleTooltipContext)
  if (!context) {
    throw new Error('TooltipTrigger must be used within a Tooltip')
  }

  const { show, hide, triggerRef } = context

  return (
    <span
      ref={triggerRef}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      className={cn('inline-flex items-center cursor-pointer', className)}
      tabIndex={0}
      role="button"
      {...props}
    >
      {children}
    </span>
  )
}

export function TooltipContent({
  children,
  className = '',
  side: propSide,
  sideOffset: propSideOffset,
  ...props
}) {
  const context = useContext(SingleTooltipContext)
  if (!context) {
    throw new Error('TooltipContent must be used within a Tooltip')
  }

  const { isOpen, side: ctxSide, sideOffset: ctxSideOffset } = context
  const side = propSide || ctxSide || 'top'
  const offset = propSideOffset !== undefined ? propSideOffset : ctxSideOffset || 8

  // Position styles based on side
  const getPositionStyle = () => {
    switch (side) {
      case 'top':
        return {
          bottom: `calc(100% + ${offset}px)`,
          left: '50%',
          transform: 'translateX(-50%)',
        }
      case 'bottom':
        return {
          top: `calc(100% + ${offset}px)`,
          left: '50%',
          transform: 'translateX(-50%)',
        }
      case 'left':
        return {
          right: `calc(100% + ${offset}px)`,
          top: '50%',
          transform: 'translateY(-50%)',
        }
      case 'right':
        return {
          left: `calc(100% + ${offset}px)`,
          top: '50%',
          transform: 'translateY(-50%)',
        }
      default:
        return {
          bottom: `calc(100% + ${offset}px)`,
          left: '50%',
          transform: 'translateX(-50%)',
        }
    }
  }

  const initialOffset = {
    top: { y: 6 },
    bottom: { y: -6 },
    left: { x: 6 },
    right: { x: -6 },
  }[side] || { y: 6 }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            filter: 'blur(4px)',
            ...initialOffset,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            x: side === 'top' || side === 'bottom' ? '-50%' : 0,
            y: side === 'left' || side === 'right' ? '-50%' : 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            filter: 'blur(3px)',
            ...initialOffset,
          }}
          transition={{
            type: 'spring',
            stiffness: 450,
            damping: 30,
            mass: 0.8,
          }}
          style={{
            position: 'absolute',
            zIndex: 9999,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
            ...getPositionStyle(),
          }}
          className={cn(
            'px-3 py-1.5 text-xs font-semibold rounded-lg shadow-xl',
            'bg-[#121316] text-[#FFFFFF] border border-white/10 backdrop-blur-md',
            'flex items-center gap-1.5',
            className
          )}
          {...props}
        >
          {children}
          {/* Decorative Arrow */}
          {side === 'top' && (
            <span
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                borderWidth: '5px 5px 0 5px',
                borderColor: '#121316 transparent transparent transparent',
                borderStyle: 'solid',
                width: 0,
                height: 0,
              }}
            />
          )}
          {side === 'bottom' && (
            <span
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                borderWidth: '0 5px 5px 5px',
                borderColor: 'transparent transparent #121316 transparent',
                borderStyle: 'solid',
                width: 0,
                height: 0,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Tooltip
