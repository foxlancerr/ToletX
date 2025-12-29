// src/components/sections/hero-section.tsx
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
    Home,
    MapPin,
    Users,
    DollarSign,
    User,
    CalendarIcon,
    Minus,
    Plus,
    Search
} from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Card } from "../ui/card"

const propertyTypes = [
    "Apartment",
    "House",
    "Villa",
    "Condo",
    "Studio",
    "Commercial",
    "Land"
]

const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Miami, FL",
    "Seattle, WA",
    "Austin, TX",
    "Boston, MA",
    "San Francisco, CA"
]

const priceRanges = [
    "Any Price",
    "$0 - $500",
    "$500 - $1,000",
    "$1,000 - $2,000",
    "$2,000 - $5,000",
    "$5,000+"
]

export function HeroSection() {
    const [propertyType, setPropertyType] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [guests, setGuests] = React.useState(1)
    const [priceRange, setPriceRange] = React.useState("")
    const [gender, setGender] = React.useState("")
    const [checkIn, setCheckIn] = React.useState<Date>()
    const [checkOut, setCheckOut] = React.useState<Date>()
    const [isAdvanced, setIsAdvanced] = React.useState(false)

    const handleSearch = () => {
        // Handle search logic here
        console.log({
            propertyType,
            location,
            guests,
            priceRange,
            gender,
            checkIn,
            checkOut
        })
    }

    return (
        <section className="relative w-full py-12 md:py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Hero Title */}
                <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        FIND YOUR{" "}
                        <span className="relative inline-block">
                            <span className="text-primary italic font-serif">memorable</span>
                            <svg
                                className="absolute -bottom-1 md:-bottom-2 left-0 w-full"
                                height="8"
                                viewBox="0 0 200 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 5.5C50 2.5 150 2.5 199 5.5"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="text-primary"
                                />
                            </svg>
                        </span>{" "}
                        STAY
                    </h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                        Search Low Prices on Night Stay, Hotels, Homes and Much More...
                    </p>
                </div>

                {/* Search Card */}
                <Card className="bg-card rounded-sm shadow-lg border-none p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 max-w-7xl mx-auto">
                    {/* Main Search Fields */}
                    <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-4 lg:gap-6">
                        {/* Search Fields Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 flex-1">
                            {/* Type */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                                    <Home className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Type
                                </Label>
                                <Select value={propertyType} onValueChange={setPropertyType}>
                                    <SelectTrigger className="w-full h-9 sm:h-10 text-xs">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {propertyTypes.map((type) => (
                                            <SelectItem className="text-xs" key={type} value={type.toLowerCase()}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Location
                                </Label>
                                <Select value={location} onValueChange={setLocation}>
                                    <SelectTrigger className="w-full h-9 sm:h-10 text-xs">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {locations.map((loc) => (
                                            <SelectItem className="text-xs" key={loc} value={loc.toLowerCase()}>
                                                {loc}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Guests */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                                    <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Guests
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full h-9 sm:h-10 justify-start text-left font-normal"
                                        >
                                            <span className="text-muted-foreground text-xs">
                                                {guests === 1 ? "1 Guest" : `${guests}`}
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64" align="start">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Guests</span>
                                                <div className="flex items-center gap-3">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => setGuests(Math.max(1, guests - 1))}
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="w-8 text-center font-medium">{guests}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                        onClick={() => setGuests(guests + 1)}
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                                    <DollarSign className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Price
                                </Label>
                                <Select value={priceRange} onValueChange={setPriceRange}>
                                    <SelectTrigger className="w-full h-9 sm:h-10 text-xs">
                                        <SelectValue placeholder="Range" />
                                    </SelectTrigger>
                                    <SelectContent className="text-xs">
                                        {priceRanges.map((range) => (
                                            <SelectItem className="text-xs" key={range} value={range.toLowerCase()}>
                                                {range}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Gender */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary">
                                    <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Gender
                                </Label>
                                <Select value={gender} onValueChange={setGender}>
                                    <SelectTrigger className="w-full h-9 sm:h-10 text-xs">
                                        <SelectValue placeholder="Any" />
                                    </SelectTrigger>
                                    <SelectContent className="text-xs">
                                        <SelectItem className="text-xs" value="male">Male</SelectItem>
                                        <SelectItem className="text-xs" value="female">Female</SelectItem>
                                        <SelectItem className="text-xs" value="any">Any</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <Button
                                onClick={handleSearch}
                                size="lg"
                                className="w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 h-10 sm:h-11 text-sm sm:text-base"
                            >
                                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                                Search
                            </Button>
                            <Button
                                onClick={() => setIsAdvanced(!isAdvanced)}
                                size="lg"
                                className="bg-accent w-auto rounded-full text-black hover:bg-accent/90 px-6 sm:px-8 h-10 sm:h-11 text-sm sm:text-base"
                            >
                                {isAdvanced ? "Basic" : "Advanced"}
                            </Button>
                        </div>
                    </div>

                    {/* Advanced Search Toggle */}
                    {isAdvanced && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t animate-in slide-in-from-top-2 duration-300">
                            {/* Check In */}
                            <div className="space-y-2">
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <CalendarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Check In
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full h-10 justify-start text-left font-normal text-xs sm:text-sm",
                                                !checkIn && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkIn ? format(checkIn, "PPP") : "Select date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkIn}
                                            onSelect={setCheckIn}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Check Out */}
                            <div className="space-y-2">
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <CalendarIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                                    Check Out
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full h-10 justify-start text-left font-normal text-xs sm:text-sm",
                                                !checkOut && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkOut ? format(checkOut, "PPP") : "Select date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkOut}
                                            onSelect={setCheckOut}
                                            initialFocus
                                            disabled={(date) => checkIn ? date < checkIn : false}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </section>
    )
}