<template>
    <div>
        <!-- Original Logo -->
        <div class="mb-12">
            <picture
                style="height: 382px;"
                class="shadow rounded-xl flex items-center justify-center mb-6 bg-blue/5"
            >
                <img src="/images/logo-white.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>Primary logo on dark background.</p>

                <a href="/images/logo-white.svg" class="button" download>logo.svg</a>
            </div>
        </div>

        <!-- Negative Logo With Accent -->
        <div class="mb-12">
            <picture
                style="height: 382px;"
                class="shadow rounded-lg flex items-center justify-center mb-6 bg-blue/5"
            >
                <img src="/images/logo-white-negative.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Pure negative logo on dark background.
                </p>

                <a href="/images/logo-white-negative.svg" class="button" download>
                    negative-logo.svg
                </a>
            </div>
        </div>

        <!-- Pure Negative Logo -->
        <div>
            <picture
                style="height: 382px;"
                class="shadow rounded-lg flex items-center justify-center mb-6 bg-white"
            >
                <img src="/images/logo-dark.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>Primary logo on light background.</p>

                <a
                    href="/images/logo-dark.svg"
                    class="button"
                    download
                >
                    pure-negative-logo.svg
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
