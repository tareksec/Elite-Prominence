'use client'

import React from "react"
import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1]

const container = (stagger, delay) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delay,
        },
    },
})

const item = {
    hidden: { y: "110%" },
    show: {
        y: "0%",
        transition: { duration: 0.6, ease: EASE },
    },
}

export function StaggerText({
    children,
    delay = 0,
    divideBy = "word",
    className = "",
}) {
    if (typeof children !== "string") {
        if (typeof children === "number" || typeof children === "boolean") {
            children = String(children)
        } else {
            return <span className={className}>{children}</span>
        }
    }

    const text = children
    const parts = divideBy === "letter" ? text.split("") : text.split(" ")
    const stagger = divideBy === "letter" ? 0.02 : 0.05

    return (
        <motion.span
            variants={container(stagger, delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`inline-flex flex-wrap ${className}`}
            style={{ display: "inline-flex", flexWrap: "wrap", rowGap: "0.15em" }}
        >
            {parts.map((part, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden relative"
                    style={{
                        verticalAlign: "top",
                        marginRight: divideBy === "word" ? "0.26em" : "0",
                    }}
                >
                    <motion.span
                        variants={item}
                        className="inline-block will-change-transform"
                    >
                        {divideBy === "letter"
                            ? part === " "
                                ? "\u00A0"
                                : part
                            : part}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    )
}

export default StaggerText
