// // src/components/sections/reviews-section.tsx
// "use client"

// import * as React from "react"
// import { Card } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { ChevronUp, ChevronDown } from "lucide-react"

// const reviews = [
//   {
//     id: 1,
//     name: "Golam Nabi Aunto",
//     location: "Dhaka, Bangladesh",
//     image: "/placeholder-avatar-1.jpg",
//     text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     role: "CEO of Real Button",
//     company: "Xion Salvatore"
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     location: "New York, USA",
//     image: "/placeholder-avatar-2.jpg",
//     text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
//     role: "Marketing Director",
//     company: "Tech Solutions Inc"
//   },
//   {
//     id: 3,
//     name: "Ahmed Hassan",
//     location: "Dubai, UAE",
//     image: "/placeholder-avatar-3.jpg",
//     text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
//     role: "Product Manager",
//     company: "Digital Ventures"
//   }
// ]

// export function ReviewsSection() {
//   const [currentIndex, setCurrentIndex] = React.useState(0)

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
//   }

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
//   }

//   const currentReview = reviews[currentIndex]

//   return (
//     <section className="relative flex items-center justify-center w-full py-16 md:py-24 bg-background overflow-hidden min-h-screen">
//       {/* Decorative Quote Marks */}
//       <div className="absolute top-4 right-8 md:top-12 md:right-24 opacity-5">
//         <svg
//           width="120"
//           height="120"
//           viewBox="0 0 120 120"
//           fill="none"
//           className="text-primary"
//         >
//           <path
//             d="M0 60C0 35 10 15 30 0L40 10C25 20 20 35 20 50H50V120H0V60ZM70 60C70 35 80 15 100 0L110 10C95 20 90 35 90 50H120V120H70V60Z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>

//       <div className="absolute bottom-4 left-8 md:bottom-12 md:left-24 opacity-5">
//         <svg
//           width="120"
//           height="120"
//           viewBox="0 0 120 120"
//           fill="none"
//           className="text-primary"
//         >
//           <path
//             d="M0 60C0 35 10 15 30 0L40 10C25 20 20 35 20 50H50V120H0V60ZM70 60C70 35 80 15 100 0L110 10C95 20 90 35 90 50H120V120H70V60Z"
//             fill="currentColor"
//           />
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 max-w-[70%]">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
//           {/* Left Side - Title */}
//           <div className="lg:col-span-4 space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
//               What People Say
//               <br />
//               About Us?
//             </h2>

//             {/* Pagination Dots */}
//             <div className="flex items-center gap-2">
//               {reviews.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     index === currentIndex
//                       ? "w-8 bg-primary"
//                       : "w-2 bg-muted"
//                   }`}
//                   aria-label={`Go to review ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Review Card */}
//           <div className="lg:col-span-8 relative">
//             <div className="relative">
//               {/* Main Review Card */}
//               <Card className="bg-card border shadow-lg rounded-lg p-6 md:p-8 relative transition-all duration-500">

//               <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-primary/20 absolute -top-10 -left-10 z-10 ">
//                     <AvatarImage src={currentReview.image} alt={currentReview.name} />
//                     <AvatarFallback className="bg-secondary text-primary text-lg font-semibold">
//                       {currentReview.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </AvatarFallback>
//                   </Avatar>
//                 {/* Top Section - Avatar and Quote */}
//                 <div className="flex items-start gap-4 mb-6 relative">


//                   <div className="flex-1">
//                     <p className="text-sm md:text-base text-foreground leading-relaxed">
//                       {currentReview.text}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom Section - Name and Location */}
//                 <div className="space-y-1">
//                   <h4 className="text-base md:text-lg font-bold text-foreground">
//                     {currentReview.name}
//                   </h4>
//                   <p className="text-sm text-muted-foreground">
//                     {currentReview.location}
//                   </p>
//                 </div>
//               </Card>



//               {/* Navigation Arrows */}
//               <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handlePrevious}
//                   className="h-10 w-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border-2 shadow-lg transition-all duration-300"
//                 >
//                   <ChevronUp className="h-5 w-5" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handleNext}
//                   className="h-10 w-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border-2 shadow-lg transition-all duration-300"
//                 >
//                   <ChevronDown className="h-5 w-5" />
//                 </Button>
//               </div>
//             </div>

//             {/* Additional spacing for overlapping card */}
//             <div className="h-8 md:h-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



// src/components/sections/reviews-section.tsx
"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

const reviews = [
    {
        id: 1,
        name: "Golam Nabi Aunto",
        location: "Dhaka, Bangladesh",
        image: "/placeholder-avatar-1.jpg",
        text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        role: "CEO of Real Button",
        company: "Xion Salvatore"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        location: "New York, USA",
        image: "/placeholder-avatar-2.jpg",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.",
        role: "Marketing Director",
        company: "Tech Solutions Inc"
    },
    {
        id: 3,
        name: "Ahmed Hassan",
        location: "Dubai, UAE",
        image: "/placeholder-avatar-3.jpg",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        role: "Product Manager",
        company: "Digital Ventures"
    }
]

export function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }

    const getNextIndex = () => {
        return currentIndex === reviews.length - 1 ? 0 : currentIndex + 1
    }

    const currentReview = reviews[currentIndex]
    const nextReview = reviews[getNextIndex()]

    return (
        <section className="relative flex items-center justify-center w-full py-16 md:py-24 bg-background overflow-hidden min-h-screen">
            {/* Decorative Quote Marks */}
            <div className="absolute top-4 right-8 md:top-12 md:right-24 opacity-30">
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    className="text-primary"
                >
                    <path
                        d="M0 60C0 35 10 15 30 0L40 10C25 20 20 35 20 50H50V120H0V60ZM70 60C70 35 80 15 100 0L110 10C95 20 90 35 90 50H120V120H70V60Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="absolute bottom-4 left-8 md:bottom-12 md:left-24 opacity-30">
                <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    className="text-primary"
                >
                    <path
                        d="M0 60C0 35 10 15 30 0L40 10C25 20 20 35 20 50H50V120H0V60ZM70 60C70 35 80 15 100 0L110 10C95 20 90 35 90 50H120V120H70V60Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 max-w-[70%]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Title */}
                    <div className="lg:col-span-4 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            What People Say
                            <br />
                            About Us?
                        </h2>

                        {/* Pagination Dots */}
                        <div className="flex items-center gap-2">
                            {reviews.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? "w-8 bg-primary"
                                            : "w-2 bg-muted"
                                        }`}
                                    aria-label={`Go to review ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Review Cards Stack */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative">
                            {/* Background Card (Next Review) */}
                            <Card
                                className="bg-card border-2 border-primary rounded-lg p-6 md:p-8 absolute inset-0 transition-all duration-500 opacity-40"
                                style={{
                                    transform: "translateY(140px) translateX(80px) scale(1.05)",
                                    zIndex: 1
                                }}
                            >
                                <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-primary/20 absolute -top-10 -left-10">
                                    <AvatarImage src={nextReview.image} alt={nextReview.name} />
                                    <AvatarFallback className="bg-secondary text-primary text-lg font-semibold">
                                        {nextReview.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-1">
                                        <p className="text-sm md:text-base text-foreground leading-relaxed">
                                            {nextReview.text}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-base md:text-lg font-bold text-foreground">
                                        {nextReview.name}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {nextReview.location}
                                    </p>
                                </div>
                            </Card>

                            {/* Active Card (Current Review) */}
                            <Card
                                key={currentIndex}
                                className="bg-card border-none shadow-none flex-row justify-end border p-6 md:p-8 relative transition-all duration-500 opacity-100 scale-100"
                                style={{
                                    transform: "translateY(0) translateX(0) scale(1)",
                                    zIndex: 2
                                }}
                            >
                                <Avatar className=" absolute top-0 left-0 h-16 w-16 md:h-20 md:w-20 border-2 border-primary/20">
                                    <AvatarImage src={currentReview.image} alt={currentReview.name} />
                                    <AvatarFallback className="bg-secondary text-primary text-lg font-semibold">
                                        {currentReview.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="w-13/15 justify-end flex flex-col mt-10">
                                    <div className="flex items-start gap-4 mb-6 relative">
                                        <div className="flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <p className="text-sm md:text-base text-foreground leading-relaxed">
                                                {currentReview.text}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                                        <h4 className="text-base md:text-lg font-bold text-foreground">
                                            {currentReview.name}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {currentReview.location}
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            {/* Navigation Arrows */}
                            <div className="absolute -right-30 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[3]">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handlePrevious}
                                    className="h-10 w-10 rounded-full hover:text-primary-foreground border-2 shadow-lg transition-all duration-300"
                                >
                                    <ChevronUp size={42} />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleNext}
                                    className="h-10 w-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground border-2 shadow-lg transition-all duration-300"
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Additional spacing */}
                        <div className="h-8 md:h-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}