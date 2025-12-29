// src/components/sections/app-download-section.tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Bell } from "lucide-react"

export function AppDownloadSection() {
    return (
        <section className="appstore-download relative w-full mb-16 pt-16 bg-gradient-to-br from-secondary/20 via-background to-secondary/10 overflow-hidden">
            {/* Background Decorative Elements */}
           

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="space-y-6 md:space-y-8 relative z-10">
                        {/* Badge */}
                        <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 text-sm font-medium"
                        >
                            DOWNLOAD
                        </Badge>

                        {/* Heading */}
                        <div className="space-y-3">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tight">
                                Download ToletX
                                <br />
                                App for{" "}
                                <span className="text-primary">FREE</span>
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg max-w-md">
                                For faster, easier booking and exclusive offers.
                            </p>
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-row gap-4 pt-4">
                            <Image
                                src={"/assets/images/bg/appstore.png"}
                                alt="app store"
                                width={150}
                                height={150}
                            ></Image>
                            <Image
                                src={"/assets/images/bg/googleplay.png"}
                                alt="app store"
                                width={150}
                                height={150}
                            ></Image>


                        </div>


                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative flex sm:justify-end justify-center h-full">
                        <div className="relative">

                           
                            <Image
className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]"

                                src={"/assets/images/bg/mobile-preview.png"}
                                alt="mobile preview"
                                width={400}
                                height={400}
                            ></Image>
                            <Image


                                className="absolute top-15 -left-10 sm:w-[130px] sm:h-[130px] w-[80px] h-[80px]"
                                src={"/assets/images/bg/mobile-globe.png"}
                                alt="mobile preview"
                                width={130}
                                height={130}
                            ></Image>

                             {/* Notification Card */}
                             <div className="relative sm:absolute sm:top-[40%] sm:-left-55 mt-6 bg-gradient-to-r from-pink-500 to-rose-500 border-none shadow-lg max-w-[300px] rounded-sm">
                                <div className="p-4 flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <Bell className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-sm font-semibold">Get personalised</p>
                                        <p className="text-sm">offers now!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}