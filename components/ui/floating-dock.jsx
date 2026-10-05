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
  return <FloatingDockDesktop items={items} className={desktopClassName} />
}

const FloatingDockDesktop = ({
  items,
  className,
}) => {
  const mouseX = useMotionValue(Infinity)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.nav
      initial={{ y: 35, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => {
        if (!isMobile) mouseX.set(e.pageX)
      }}
      onMouseLeave={() => {
        if (!isMobile) mouseX.set(Infinity)
      }}
      className={cn("floating-dock-desktop", className)}
      role="navigation"
      aria-label="Floating Navigation Dock"
    >
      <div className="floating-dock-desktop-inner">
        {items.map((item) => {
          const isExternal = item.href?.startsWith('http')
          const isActive = !item.isBrand && !isExternal && (
            item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
          )

          return (
            <React.Fragment key={item.title}>
              <IconContainer mouseX={mouseX} isActive={isActive} isMobile={isMobile} {...item} />
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
}) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const baseSize = isMobile ? 38 : 42
  const hoverSize = isMobile ? 44 : 68
  const baseIcon = isMobile ? 18 : 20
  const hoverIcon = isMobile ? 22 : 32

  const widthTransform = useTransform(distance, [-140, 0, 140], [baseSize, hoverSize, baseSize])
  const heightTransform = useTransform(distance, [-140, 0, 140], [baseSize, hoverSize, baseSize])

  const widthTransformIcon = useTransform(distance, [-140, 0, 140], [baseIcon, hoverIcon, baseIcon])
  const heightTransformIcon = useTransform(
    distance,
    [-140, 0, 140],
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
        whileTap={{ scale: 0.88 }}
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

