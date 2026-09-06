'use client'
import { useEffect } from 'react';
import AOS from 'aos';

export default function Aos_Animation() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
    }, []);
}
