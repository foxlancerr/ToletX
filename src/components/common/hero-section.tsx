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
        <section className="relative w-full py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Hero Title */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        FIND YOUR{" "}
                        <span className="relative inline-block">
                            <span className="text-primary italic font-serif">memorable</span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
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
                    <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
                        Search Low Prices on Night Stay, Hotels, Homes and Much More...
                    </p>
                </div>

                {/* Search Card */}

                <Card className="bg-card rounded-sm shadow-lg border-none p-6 md:p-8 space-y-6">
                    {/* Main Search Fields */}
                    <div className="flex items-center justify-between">
                        <div className="grid grid-cols-6 gap-3">


                            {/* Type */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2 text-normal  font-bold text-primary">
                                    <Home className="h-4 w-4 text-primary" />
                                    Type
                                </Label>
                                <Select value={propertyType} onValueChange={setPropertyType}>
                                    <SelectTrigger className="w-full text-xs!">
                                        <SelectValue className="text-xs!" placeholder="Select" />
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
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <MapPin className="h-4 w-4 text-primary" />
                                    Location
                                </Label>
                                <Select value={location} onValueChange={setLocation}>
                                    <SelectTrigger className="w-full text-xs!">
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
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <Users className="h-4 w-4 text-primary" />
                                    Guests
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full justify-start text-left font-normal"
                                        >
                                            <span className="text-muted-foreground text-xs!">
                                                {guests === 1 ? "1 Guest" : `${guests} Guests`}
                                            </span>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-64" align="start">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium">Guests</span>
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
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <DollarSign className="h-4 w-4 text-primary" />
                                    Price
                                </Label>
                                <Select value={priceRange} onValueChange={setPriceRange}>
                                    <SelectTrigger className="w-full text-xs!">
                                        <SelectValue placeholder="Price/Night Range" />
                                    </SelectTrigger>
                                    <SelectContent className="text-xs">
                                        {priceRanges.map((range) => (
                                            <SelectItem key={range} value={range.toLowerCase()}>
                                                {range}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Gender */}
                            <div className="space-y-2">
                            <Label className="flex items-center gap-2 text-normal  font-bold text-primary">

                                    <User className="h-4 w-4 text-primary" />
                                    Gender
                                </Label>
                                <Select value={gender} onValueChange={setGender}>
                                    <SelectTrigger className="w-full text-xs!">
                                        <SelectValue placeholder="Boy/Girl" />
                                    </SelectTrigger>
                                    <SelectContent className="text-xs">
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="any">Any</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                            <Button
                                onClick={handleSearch}
                                size="lg"
                                className="w-full rounded-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                            >
                                <Search className="h-5 w-5" />
                                Search
                            </Button>
                            <Button
                                onClick={() => setIsAdvanced(!isAdvanced)}

                                size="lg"
                                className="bg-accent w-full rounded-full sm:w-auto text-black hover:bg-secondary px-8"
                            >
                                {isAdvanced ? "Basic Search" : "Advanced Search"}
                            </Button>
                        </div>


                    </div>



                    {/* Advanced Search Toggle */}
                    {isAdvanced && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                            {/* Check In */}
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2 text-sm font-medium">
                                    <CalendarIcon className="h-4 w-4 text-primary" />
                                    Check In
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
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
                                <Label className="flex items-center gap-2 text-sm font-medium">
                                    <CalendarIcon className="h-4 w-4 text-primary" />
                                    Check Out
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
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