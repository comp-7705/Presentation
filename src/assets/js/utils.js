export function gallery(imagePaths) {
    const images = {}; // Access the images by their name
    // console.log(imagePaths);
    for (const path of imagePaths) {
        // Extract the image name from the URL
        let name = path.split("/").pop();
        name = name.substring(0, name.lastIndexOf(".")); // Remove the extension
        // if in build mode, remove the hash value
        if (import.meta.env.PROD) {
            name = name.substring(0, name.lastIndexOf("-"));
        }
        images[name] = path;
    }
    // console.log(images);
    return images;
}
