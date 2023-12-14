import { getBands } from "./database.js"
import { getBookings } from "./database.js"
import { getVenues } from "./database.js"
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()
export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li
        data-type="band"
        data-id=${band.id}>${band.bandName}</li>`
    }

    html += "</ul>"

    return html
}

// const bandBookings = (id) => {
//     let fulfilledBookings = 0

//     for (const booking of bookings) {
//         if (booking.bandId === id) {
//             fulfilledBookings++
            
//             // Increment the number of fulfilled bookings
//         }
//     }
//     return fulfilledBookings
//     // Return how many bookings were fulfilled
// }

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "band") {
        const bandId = parseInt(itemClicked.dataset.id);

        for (const band of bands) {
            if (band.id === bandId) {
                for (const booking of bookings) {
                    if (band.id === booking.bandId) {
                       for (const venue of venues)
                            if (booking.venueId === venue.id) {

                            window.alert(`${band.bandName} is playing at ${venue.venueName}`);
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


// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.dataset.type === "band") {
//             const bandId = itemClicked.dataset.id

//             for (const band of bands) {
//                 if ( === parseInt(bandId)) {

//                     const bookingCount = bandBookings()

//                     window.alert(` ${band.name} sold ${} venues `)
//                 }
//             }
//         }
//     }
// )

