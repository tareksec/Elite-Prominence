'use client'

import React from 'react'
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBriefcase,
  IconUsers,
  IconCompass,
  IconTrophy,
  IconArticle,
  IconBuilding,
  IconCalendarEvent,
} from "@tabler/icons-react"

export default function GlobalFloatingDock() {
  const items = [
    {
      title: "Elite Prominence",
      icon: (
        <img
          src="/new/logo.png"
          alt="Elite Prominence"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      ),
      href: "/",
      isBrand: true,
      separatorAfter: true,
    },
    {
      title: "Services",
      icon: <IconBriefcase size={20} stroke={1.8} />,
      href: "/services",
    },
    {
      title: "Solutions",
      icon: <IconUsers size={20} stroke={1.8} />,
      href: "/solutions",
    },
    {
      title: "Methodology",
      icon: <IconCompass size={20} stroke={1.8} />,
      href: "/how-it-works",
    },
    {
      title: "Case Studies",
      icon: <IconTrophy size={20} stroke={1.8} />,
      href: "/case-studies",
    },
    {
      title: "Insights",
      icon: <IconArticle size={20} stroke={1.8} />,
      href: "/blog-grid",
    },
    {
      title: "Firm",
      icon: <IconBuilding size={20} stroke={1.8} />,
      href: "/about",
      separatorAfter: true,
    },
    {
      title: "Private Consultation",
      icon: <IconCalendarEvent size={20} stroke={1.8} />,
      href: "/contact",
      highlight: true,
    },
  ]

  return <FloatingDock items={items} />
}



