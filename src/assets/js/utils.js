export function gallery(imagePaths) {
    const images = {}; // Access the images by their name
    // console.log(imagePaths);
    for (const path of imagePaths) {
        // Extract the image name from the URL
        let name = path.split("/").pop();
        name = name.split(".")[0]; // Remove the extension
        images[name] = path;
    }
    // console.log(images);
    return images;
}
