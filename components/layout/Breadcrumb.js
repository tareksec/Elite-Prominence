import React from "react"
import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, subtitle, breadcrumbTrail }) {
    let resolvedSubtitle = subtitle
    let resolvedTrail = breadcrumbTrail

    if (!resolvedSubtitle || !resolvedTrail) {
        const titleStr = typeof breadcrumbTitle === 'string' ? breadcrumbTitle.toLowerCase() : ''

        if (titleStr.includes('about')) {
            resolvedSubtitle = resolvedSubtitle || 'Executive Profile'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'About' }]
        } else if (titleStr.includes('recognition') || titleStr.includes('testimonial') || titleStr.includes('review') || titleStr.includes('client')) {
            resolvedSubtitle = resolvedSubtitle || 'Client Experience'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Testimonials' }]
        } else if (titleStr.includes('consultation') || titleStr.includes('contact')) {
            resolvedSubtitle = resolvedSubtitle || 'Private Advisory'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Contact' }]
        } else if (titleStr.includes('career') || titleStr.includes('mandate') || titleStr.includes('appointment')) {
            resolvedSubtitle = resolvedSubtitle || 'Executive Opportunities'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Careers' }]
        } else if (titleStr.includes('case stud') || titleStr.includes('proof')) {
            resolvedSubtitle = resolvedSubtitle || 'Proven Track Record'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Case Studies', href: '/case-studies' }, ...(titleStr.includes('&') || titleStr.includes('proof') ? [] : [{ label: breadcrumbTitle }])]
        } else if (titleStr.includes('assessment')) {
            resolvedSubtitle = resolvedSubtitle || 'Diagnostic Instrument'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' }, { label: 'Assessment' }]
        } else if (titleStr.includes('resource') || titleStr.includes('tool')) {
            resolvedSubtitle = resolvedSubtitle || 'Knowledge Assets'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Resources' }]
        } else if (titleStr.includes('solution') || titleStr.includes('who we serve') || titleStr.includes('cohort')) {
            resolvedSubtitle = resolvedSubtitle || 'Executive Cohorts'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, ...(titleStr.includes('who') ? [] : [{ label: breadcrumbTitle }])]
        } else if (titleStr.includes('capability') || titleStr.includes('capabilities') || titleStr.includes('service architecture')) {
            resolvedSubtitle = resolvedSubtitle || 'Practice Areas'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, ...(titleStr.includes('capabilities') || titleStr.includes('architecture') ? [] : [{ label: breadcrumbTitle }])]
        } else if (titleStr.includes('methodology') || titleStr.includes('how it works')) {
            resolvedSubtitle = resolvedSubtitle || 'Our Framework'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'How It Works' }]
        } else if (titleStr.includes('privacy')) {
            resolvedSubtitle = resolvedSubtitle || 'Security & Confidentiality'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]
        } else if (titleStr.includes('term')) {
            resolvedSubtitle = resolvedSubtitle || 'Governance & Ethics'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]
        } else if (titleStr.includes('404') || titleStr.includes('not found')) {
            resolvedSubtitle = resolvedSubtitle || 'Status 404'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: '404' }]
        } else {
            resolvedSubtitle = resolvedSubtitle || 'Prominence Sovereign'
            resolvedTrail = resolvedTrail || [{ label: 'Home', href: '/' }, { label: breadcrumbTitle }]
        }
    }

    return (
        <section className="page_breadcrumb">
            <div className="container">
                <div className="breadcrumb_content centred">
                    <div className="breadcrumb_sutitle"><h6>{resolvedSubtitle}</h6></div>
                    <h1 className="breadcrumb_title">{breadcrumbTitle}</h1>
                    <ul className="breadcrumb_menu">
                        {resolvedTrail.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <li>/</li>}
                                <li>
                                    {item.href ? (
                                        <Link href={item.href}>{item.label}</Link>
                                    ) : (
                                        <span>{item.label}</span>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
