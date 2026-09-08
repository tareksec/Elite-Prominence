'use client'
import { useEffect } from 'react';
import AOS from 'aos';

export default function Aos_Animation() {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        AOS.init({
            duration: 550,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            disable: prefersReducedMotion,
        });
    }, []);
    return null;
}
