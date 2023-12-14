import { getBookings, getVenues } from "./database.js"
import { getBands } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li 
        data-type="venues"
        data-id=${venue.id}>${venue.venueName}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "venues") {
        const venueId = parseInt(itemClicked.dataset.id);

        for (const venue of venues) {
            if (venue.id === venueId) {
                for (const booking of bookings) {
                    if (booking.venueId === venue.id) {
                       for (const band of bands)
                            if (band.id === booking.bandId) {

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


























// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         let venuesId = itemClicked.dataset.id
//         if (itemClicked.dataset.type === "venues") {
//             for (const venues of venues) {
//                 if (venues.id === +venuesId) {
//                     window.alert(`${venues.name} costs $${venues.price} `)
//                 }
//             }
//         }
//     }
// )