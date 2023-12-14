import { getVenues, getBands, getBookings } from "./database.js"

// Get copy of state for use in this module
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


// Function whose responsibility is to find the venues for an booking
const findBooking = (booking, allVenues) => {
    let bookingEvent = null

    for (const venues of allVenues) {
        if (venues.id === booking.venueId) {
            bookingEvent = venues
        }
    }

    return bookingEvent
}

// Function whose responsibility is to find the band for an booking
const findBand = (booking, allBands) => {
    let bookingBand = null

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}

export const Bookings = () => {
    let html = ""
    html += "<ul>"

    for (const booking of bookings) {
        const band = findBand(booking, bands)
        const venue = findBooking(booking, venues)
      
        

        html += `<li data-type = "booking" data-id=${booking.bookingId}>${band.bandName} are playing at ${venue.venueName} on ${new Date(booking.date).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "booking") {
        const bookingId = parseInt(itemClicked.dataset.id);

        for (const booking of bookings) {
            if (booking.bookingId === bookingId) {
                for (const band of bands) {
                    if (band.id === booking.bandId) {
                       for (const venue of venues)
                            if (booking.venueId === venue.id) {

                            window.alert(`${band.bandName} \n ${band.genre} \n Formed in ${band.yearFormed} \n ${band.numberOfMembers} band members`);
                }     
// import get venues and get bookings
// set variables to those functions
            }            
}
            }
        }
    }
});







// document.addEventListener("click", (clickEvent) => {
//     const itemClicked = clickEvent.target;

//     if (itemClicked.dataset.type === "band") {
//         const bandId = parseInt(itemClicked.dataset.id);

//         for (const band of bands) {
//             if (band.id === bandId) {
//                 const bookingCount = bandBookings(bandId);

//                 window.alert(`${band.name} sold ${bookingCount} venues`);
//             }
//         }
//     }
// });