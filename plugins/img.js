const { cmd, commands } = require("../command");
const axios = require("axios");
const config = require('../config');

cmd({
    pattern: "img",
    alias: ["pinterest", "image", "searchpin"],
    react: "🔍",
    desc: "Search and download Pinterest images using the API.",
    category: "fun",
    use: ".pin <keywords>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("*❗ Please provide a search query.*");
        }

        // Notify user that the request is being processed
        await reply(`*🔎 Searching and downloading images for:* ${query}...`);

        if (!config.WALLPAPER_API_URL) return reply("Image search API is not configured. Set WALLPAPER_API_URL in settings.js.");
        const apiUrl = `${config.WALLPAPER_API_URL}${config.WALLPAPER_API_URL.includes('?') ? '&' : '?'}text=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);

        // Validate the response and ensure results exist
        if (!response.data || !response.data.result || response.data.result.length === 0) {
            return reply("*⚠️ No results found. Please try using different keywords.*");
        }

        const results = response.data.result;

        // Randomly select up to 5 images from the results
        const selectedImages = results.sort(() => 0.5 - Math.random()).slice(0, 5);

        // Send each selected image to the user
        for (const image of selectedImages) {
            await conn.sendMessage(
                from,
                {
                    image: { url: image.src },
                    caption: `*🔎 Results for:* ${query}\n\n> *Powered by WhatsApp Bot ✨*`
                },
                { quoted: mek }
            );
        }
    } catch (error) {
        console.error(error);
        reply("*❌ An error occurred while processing your request. Please try again later.*");
    }
});
