'use client'

import React, { useRef, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { IconX } from "@tabler/icons-react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import Link from "next/link"

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}) => {
  return <FloatingDockDesktop items={items} className={cn(desktopClassName, mobileClassName)} />
}

const FloatingDockDesktop = ({
  items,
  className,
}) => {
  const mouseX = useMotionValue(Infinity)
  const pathname = usePathname()
  const [screenSize, setScreenSize] = useState({ isMobile: false, width: 1200 })

  useEffect(() => {
    const checkScreen = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        width: window.innerWidth,
      })
    }
    checkScreen()
    window.addEventListener('resize', checkScreen, { passive: true })
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const isMobile = screenSize.isMobile
  const screenWidth = screenSize.width

  const handleTouch = (e) => {
    if (e.touches && e.touches[0]) {
      mouseX.set(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    mouseX.set(Infinity)
  }

  return (
    <motion.nav
      initial={{ y: 55, opacity: 0, x: "-50%", scale: 0.92 }}
      animate={{ y: 0, opacity: 1, x: "-50%", scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
        mass: 0.85,
      }}
      onMouseMove={(e) => {
        mouseX.set(e.clientX)
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity)
      }}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={cn("floating-dock-desktop", className)}
      role="navigation"
      aria-label="Floating Navigation Dock"
    >
      <div className="floating-dock-desktop-inner">
        {items.map((item, idx) => {
          const isExternal = item.href?.startsWith('http')
          const isActive = !item.isBrand && !isExternal && (
            item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
          )

          return (
            <React.Fragment key={item.title}>
              <IconContainer
                mouseX={mouseX}
                isActive={isActive}
                isMobile={isMobile}
                screenWidth={screenWidth}
                index={idx}
                {...item}
              />
              {(item.separator || item.separatorAfter) && (
                <div className="floating-dock-separator" aria-hidden="true" />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </motion.nav>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  highlight,
  colorType,
  isBrand,
  isActive,
  isMobile,
  screenWidth,
  index = 0,
}) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const isSmallMobile = isMobile && screenWidth < 380
  const baseSize = isMobile ? (isSmallMobile ? 33 : 36) : 42
  const hoverSize = isMobile ? (isSmallMobile ? 44 : 48) : 68
  const baseIcon = isMobile ? (isSmallMobile ? 16 : 18) : 20
  const hoverIcon = isMobile ? (isSmallMobile ? 22 : 24) : 32
  const distanceThreshold = isMobile ? (isSmallMobile ? 65 : 75) : 140

  const widthTransform = useTransform(distance, [-distanceThreshold, 0, distanceThreshold], [baseSize, hoverSize, baseSize])
  const heightTransform = useTransform(distance, [-distanceThreshold, 0, distanceThreshold], [baseSize, hoverSize, baseSize])

  const widthTransformIcon = useTransform(distance, [-distanceThreshold, 0, distanceThreshold], [baseIcon, hoverIcon, baseIcon])
  const heightTransformIcon = useTransform(
    distance,
    [-distanceThreshold, 0, distanceThreshold],
    [baseIcon, hoverIcon, baseIcon]
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  })

  const [hovered, setHovered] = useState(false)

  const isExternal = href?.startsWith('http')
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href }

  return (
    <LinkComponent
      {...linkProps}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
      className="floating-dock-link"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        initial={{ opacity: 0, scale: 0.7, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 22,
          delay: 0.05 + index * 0.03,
        }}
        whileTap={{
          scale: isMobile ? 1.18 : 0.88,
          y: isMobile ? -5 : 0,
          transition: { type: "spring", stiffness: 450, damping: 15 },
        }}
        whileHover={!isMobile ? { y: -2 } : undefined}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        className={cn(
          "floating-dock-item",
          isBrand && "floating-dock-item-brand",
          highlight && "floating-dock-item-highlight",
          colorType && `floating-dock-item-${colorType}`,
          isActive && "floating-dock-item-active"
        )}
      >
        <AnimatePresence>
          {hovered && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: "-50%", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
              exit={{ opacity: 0, y: 4, x: "-50%", scale: 0.95 }}
              transition={{ duration: 0.14 }}
              className="floating-dock-tooltip"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "floating-dock-icon-wrapper",
            isBrand && "floating-dock-brand-wrapper"
          )}
        >
          {icon}
        </motion.div>
        {isActive && (
          <motion.div
            layoutId="dock-active-dot"
            className="floating-dock-active-dot"
            aria-hidden="true"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
    </LinkComponent>
  )
}

