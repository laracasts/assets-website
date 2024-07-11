<template>
    <div>
        <header class="mb-8">
            <h1 class="text-2xl font-medium">
                Laracasts Wallpapers
            </h1>
        </header>
        <template v-for="wallpaper in wallpapers">

        <div class="mb-10">
            <a :href="'/images/wallpapers/' + wallpaper">
                <img
                    :src="'/images/wallpapers/thumbnails/' + wallpaper"
                    class="mb-4"
                    style="width: 100%"
                />
            </a>

            <div class="flex justify-center items-center">
                <a
                    :href="'/images/wallpapers/' + wallpaper"
                    class="button"
                    download
                >
                    Download HD Wallpaper
                </a>
            </div>
        </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            wallpapers: [
                "Lara-Servers.jpeg",
                "Mountain-Pass.jpeg",
                "pastel-dream.jpeg",
                "Space-Codessey.jpeg",
                "Cyber-Splash.jpeg",
                "CyberLara.jpeg",
                "Lara-Matrix.jpeg",
                "CyberLara2.jpeg",
                "Digital-Glass.jpeg",
                "Future-Frameworks.jpeg"
            ]
        };
    }
};
</script>
