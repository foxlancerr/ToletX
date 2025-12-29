// src/components/layout/footer.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Logo from "../common/logo"

const mainMenuLinks = [
    { title: "Become a Partner", href: "/become-partner" },
    { title: "List Your Property", href: "/list-property" },
    { title: "Property Inquiry", href: "/inquiry" },
    { title: "Property Assessment", href: "/assessment" }
]

const hiveLinks = [
    { title: "Buy", href: "/buy" },
    { title: "Sell", href: "/sell" },
    { title: "Blogging", href: "/blog" },
    { title: "Grouping", href: "/grouping" }
]

const propertyCategoryLinks = [
    { title: "Residential", href: "/residential" },
    { title: "Commercial", href: "/commercial" },
    { title: "Recreational", href: "/recreational" },
    { title: "Agricultural", href: "/agricultural" }
]

const aboutTolstxLinks = [
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Legal & Compliance", href: "/legal" },
    { title: "Contact Us", href: "/contact" }
]

const additionalLinks = [
    { title: "About Us", href: "/about" },
    { title: "Team", href: "/team" },
    { title: "FAQ", href: "/faq" },
    { title: "Help & Support", href: "/support" }
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-4">
                        {/* Logo */}
                        <Logo isWhiteVersion></Logo>
                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 opacity-90" />
                                <p className="leading-relaxed">
                                    18/5, Main road Mohammadia<br />
                                    Housing Ltd, Dhaka, Dhaka
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="h-4 w-4 flex-shrink-0 opacity-90" />
                                <a
                                    href="tel:+8801718461738"
                                    className="hover:text-accent transition-colors"
                                >
                                    + (88) 0171 8461738
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4 flex-shrink-0 opacity-90" />
                                <a
                                    href="mailto:tolsttxd@gmail.com"
                                    className="hover:text-accent transition-colors"
                                >
                                    tolsttxd@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Menu */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold">Main Menu</h3>
                        <ul className="space-y-2.5 text-sm">
                            {mainMenuLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hive */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold">Hive</h3>
                        <ul className="space-y-2.5 text-sm">
                            {hiveLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Category */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold">Property Category</h3>
                        <ul className="space-y-2.5 text-sm">
                            {propertyCategoryLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About ToletX */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold">About ToletX</h3>
                        <ul className="space-y-2.5 text-sm">
                            {aboutTolstxLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Links Column */}
                    <div className="space-y-4">
                        <h3 className="text-base font-semibold opacity-0">Links</h3>
                        <ul className="space-y-2.5 text-sm">
                            {additionalLinks.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-accent transition-colors inline-block"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <Separator className="my-8 bg-white/20" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-center">
                    <p className="opacity-90">
                        Copyright {currentYear} • ToletX. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}