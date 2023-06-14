import { gallery } from "./utils.js";
// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../images/Home/*.{png,jpg,jpeg,PNG,JPEG}", {
        eager: true,
        as: "url",
    })
);
const images = gallery(imagePaths);

const h = 174; // 870pt
const w = 296; // 1480pt
const defaultImgUrl = `https://via.placeholder.com/${w}x${h}`;

// Presentation dates
const dates = ["June 8", "June 15", "June 29", "July 6", "July 13", "July 20"];

let cards = [];
for (let i = 0; i < dates.length; i++) {
    const date = dates[i].replaceAll(" ", "");
    const card = {
        id: i,
        title: `${dates[i]}, Slide ${i + 1}`,
        // if the image exists, use it, otherwise use the default image
        image: images.hasOwnProperty(date) ? images[date] : defaultImgUrl,
        to: date,
    };
    cards.push(card);
}

// Sample slide
cards.push({
    id: dates.length + 1,
    title: "Sample Slide",
    image: defaultImgUrl,
    to: "Sample",
});

export { dates, cards };
