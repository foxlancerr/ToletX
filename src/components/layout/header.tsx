// src/components/layout/header.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Menu,
    Heart,
    Bell,
    Home,
    Building,
    ChevronDown,
    User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Logo from "../common/logo"

const earnWithTolstx = [
    { title: "List Property", href: "/list-property" },
    { title: "Become Host", href: "/become-host" },
    { title: "Referral Program", href: "/referral" },
    { title: "Agent Partnership", href: "/agent-partnership" }
]

const propertyCategories = [
    { title: "Apartments", href: "/apartments" },
    { title: "Houses", href: "/houses" },
    { title: "Villas", href: "/villas" },
    { title: "Commercial", href: "/commercial" },
    { title: "Land", href: "/land" },
    { title: "Luxury Properties", href: "/luxury" }
]

const hiveItems = [
    { title: "Community", href: "/community" },
    { title: "Events", href: "/events" },
    { title: "Blog", href: "/blog" },
    { title: "Resources", href: "/resources" }
]

const officeShiftingServices = [
    { title: "Office Relocation", href: "/office-relocation" },
    { title: "Corporate Moving", href: "/corporate-moving" },
    { title: "Packing Services", href: "/packing" },
    { title: "Storage Solutions", href: "/storage" }
]

export function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all",
               
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Logo></Logo>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList className="space-x-1">
                            {/* Earn with TolstX */}
                            <NavigationMenuItem className="bg-transparent">
                                <NavigationMenuTrigger className="bg-transparent text-black hover:text-primary hover:bg-transparent">
                                    Earn with TolstX
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[280px] gap-3 p-4">
                                        {earnWithTolstx.map((item) => (
                                            <li key={item.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Property Category */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-9 bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Property Category
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[320px] gap-3 p-4 md:grid-cols-2">
                                        {propertyCategories.map((item) => (
                                            <li key={item.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Hive */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-9 bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Hive
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[280px] gap-3 p-4">
                                        {hiveItems.map((item) => (
                                            <li key={item.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Office Shifting Services */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-9 bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                                    Office Shifting Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[280px] gap-3 p-4">
                                        {officeShiftingServices.map((item) => (
                                            <li key={item.title}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">
                                                            {item.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        {/* Globe/Language Selector */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden lg:flex h-9 w-9 rounded-full"
                        >
                            <div className="h-8 w-8 rounded-full flex items-center justify-center">
                                <span className="text-normal font-bold text-white">🌐</span>
                            </div>
                        </Button>

                        {/* Favorites */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden lg:flex h-9 w-9 relative"
                        >
                            <Heart className="h-5 w-5" />
                            <Badge
                                variant="destructive"
                                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                            >
                                3
                            </Badge>
                        </Button>

                        {/* Notifications */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="hidden lg:flex h-9 w-9 relative"
                        >
                            <Bell className="h-5 w-5" />
                            <Badge
                                variant="destructive"
                                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]"
                            >
                                5
                            </Badge>
                        </Button>

                        {/* Become a Partner */}
                        <Button
                            variant="outline"
                            className="hidden lg:flex h-9 border-primary/20 hover:bg-primary/5"
                        >
                            Become a Partner
                        </Button>

                        {/* User Menu */}
                        <div className="hidden lg:flex items-center gap-2">
                            <div className="h-9 gap-2 px-2 flex items-center">

                                <span className="text-sm font-medium">Aunto</span>
                                <Avatar className="h-7 w-7">
                                    <AvatarImage src="/placeholder-avatar.jpg" />
                                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                                        AU
                                    </AvatarFallback>
                                </Avatar>
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <MobileMenu />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

function MobileMenu() {
    return (
        <div className="flex flex-col gap-6 py-6">
            {/* User Info */}
            <div className="flex items-center gap-3 pb-6 border-b">
                <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                        AU
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold">Aunto</span>
                    <span className="text-sm text-muted-foreground">aunto@example.com</span>
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-2">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent"
                >
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                </Link>

                <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                    Earn with TolstX
                </div>
                {earnWithTolstx.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="px-3 py-2 rounded-md hover:bg-accent text-sm pl-6"
                    >
                        {item.title}
                    </Link>
                ))}

                <div className="px-3 py-2 text-sm font-semibold text-muted-foreground mt-2">
                    Property Category
                </div>
                {propertyCategories.slice(0, 4).map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="px-3 py-2 rounded-md hover:bg-accent text-sm pl-6"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>

            {/* Footer Actions */}
            <div className="mt-auto pt-6 border-t flex flex-col gap-2">
                <Button className="w-full" variant="default">
                    Become a Partner
                </Button>
                <div className="flex items-center justify-around pt-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Heart className="h-5 w-5" />
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px]"
                        >
                            3
                        </Badge>
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px]"
                        >
                            5
                        </Badge>
                    </Button>
                </div>
            </div>
        </div>
    )
}