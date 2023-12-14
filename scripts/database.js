const database = {
    bands: [
        {
            id: 1,
            bandName: "Eclipse Shadows",
            genre: "Rock",
            yearFormed: 2005,
            numberOfMembers: 4
        },
        {
            id: 2,
            bandName: "Crystal Serenity",
            genre: "Pop",
            yearFormed: 2010,
            numberOfMembers: 5
        },
        {
            id: 3,
            bandName: "Thunderstruck Echo",
            genre: "Metal",
            yearFormed: 2002,
            numberOfMembers: 3
        },
        {
            id: 4,
            bandName: "Neon Vortex",
            genre: "Electronic",
            yearFormed: 2015,
            numberOfMembers: 2
        },
        {
            id: 5,
            bandName: "Whispering Pines",
            genre: "Folk",
            yearFormed: 2008,
            numberOfMembers: 4
        }
    ],
    venues: [
        {
            id: 1,
            venueName: "Starlight Pavilion",
            address: "123 Galaxy Lane, Celestial City",
            squareFootage: 5000,
            maxOccupancy: 200
        },
        {
            id: 2,
            venueName: "Harmony Hall",
            address: "456 Serene Street, Tranquil Town",
            squareFootage: 7000,
            maxOccupancy: 300
        },
        {
            id: 3,
            venueName: "Thunder Dome",
            address: "789 Electric Avenue, Metropolis",
            squareFootage: 10000,
            maxOccupancy: 500
        },
        {
            id: 4,
            venueName: "Neon Nexus",
            address: "101 Glow Street, Techno City",
            squareFootage: 6000,
            maxOccupancy: 250
        },
        {
            id: 5,
            venueName: "Whispering Woods Center",
            address: "234 Forest Road, Nature Ville",
            squareFootage: 8000,
            maxOccupancy: 400
        }
    ],
    bookings: [
        {
            bookingId: 1,
            date: "2023-08-15",
            bandId: 1,
            venueId: 2
        },
        {
            bookingId: 2,
            date: "2023-09-10",
            bandId: 3,
            venueId: 4
        },
        {
            bookingId: 3,
            date: "2023-10-05",
            bandId: 2,
            venueId: 1
        },
        {
            bookingId: 4,
            date: "2023-11-20",
            bandId: 4,
            venueId: 5
        },
        {
            bookingId: 5,
            date: "2023-12-12",
            bandId: 5,
            venueId: 5
        }
    ]
}

export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}

