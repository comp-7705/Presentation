// Presentation dates
const dates = ["June 8", "June 15", "June 29", "July 6", "July 13", "July 20"];

let cards = [];
for (let i = 0; i < dates.length; i++) {
    const card = {
        id: i,
        title: `${dates[i]}, Slide ${i + 1}`,
        // description:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla nec sapien vestibulum aliquam.",
        image: "https://via.placeholder.com/400x300",
        to: dates[i].replaceAll(" ", ""),
    };
    cards.push(card);
}

// Sample slide
cards.push({
    id: dates.length + 1,
    title: "Sample Slide",
    image: "https://via.placeholder.com/400x300",
    to: "Sample",
});

export { dates, cards };
