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
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
}) => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="floating-dock-mobile-backdrop"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className={cn("floating-dock-mobile", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="floating-nav-mobile"
              className="floating-dock-mobile-menu"
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Mobile Header with Full Brand Wordmark */}
              <div className="floating-dock-mobile-header">
                <img
                  src="/new/navbar.png"
                  alt="Elite Prominence"
                  style={{ height: "26px", width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>

              <div className="floating-dock-mobile-items-list">
                {items.map((item, idx) => {
                  const isExternal = item.href?.startsWith('http')
                  const LinkComponent = isExternal ? 'a' : Link
                  const linkProps = isExternal
                    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                    : { href: item.href }

                  const isActive = !item.isBrand && !isExternal && (
                    item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
                  )

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ delay: idx * 0.02, duration: 0.2 }}
                    >
                      <LinkComponent
                        {...linkProps}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "floating-dock-mobile-item",
                          item.highlight && "floating-dock-mobile-item-highlight",
                          item.colorType && `floating-dock-mobile-item-${item.colorType}`,
                          isActive && "floating-dock-mobile-item-active"
                        )}
                        aria-label={item.title}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="floating-dock-mobile-icon">{item.icon}</div>
                        <span className="floating-dock-mobile-label">{item.title}</span>
                        {item.badge && (
                          <span className="floating-dock-mobile-badge">{item.badge}</span>
                        )}
                        {isActive && <span className="floating-dock-active-dot-mobile" />}
                      </LinkComponent>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn("floating-dock-mobile-trigger", open && "floating-dock-mobile-trigger-open")}
          aria-label={open ? "Close menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {open ? (
              <IconX size={22} stroke={2.2} />
            ) : (
              <img
                src="/new/logo.png"
                alt="Elite Prominence"
                style={{ width: "28px", height: "28px", objectFit: "contain", display: "block" }}
              />
            )}
          </motion.div>
        </button>
      </div>
    </>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
}) => {
  const mouseX = useMotionValue(Infinity)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: 35, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
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
              <IconContainer mouseX={mouseX} isActive={isActive} {...item} />
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
}) {
  const ref = useRef(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-140, 0, 140], [42, 68, 42])
  const heightTransform = useTransform(distance, [-140, 0, 140], [42, 68, 42])

  const widthTransformIcon = useTransform(distance, [-140, 0, 140], [20, 32, 20])
  const heightTransformIcon = useTransform(
    distance,
    [-140, 0, 140],
    [20, 32, 20]
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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "floating-dock-item",
          isBrand && "floating-dock-item-brand",
          highlight && "floating-dock-item-highlight",
          colorType && `floating-dock-item-${colorType}`,
          isActive && "floating-dock-item-active"
        )}
      >
        <AnimatePresence>
          {hovered && (
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

