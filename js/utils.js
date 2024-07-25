export function enhanceImage(imageData) {
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        const contrast = (brightness - 128) * 2 + 128;
        const value = contrast > 255 ? 255 : (contrast < 0 ? 0 : contrast);
        data[i] = data[i + 1] = data[i + 2] = value;
    }
    return imageData;
}