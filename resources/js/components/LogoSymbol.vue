<template>
    <div>
        <!-- Original Symbol -->
        <div class="mb-12">
            <picture
                style="height: 382px;"
                class="block shadow flex items-center justify-center mb-6 bg-blue/5 rounded-xl"
            >
                <img src="/images/symbol-white.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Primary symbol on dark background.
                </p>

                <a href="/images/symbol-white.svg" class="button" download>
                    symbol-white.svg
                </a>
            </div>
        </div>

        <!-- Negative Symbol -->
        <div class="mb-12">
            <picture
                style="height: 382px;"
                class="block shadow rounded-xl bg-blue/5 flex items-center justify-center mb-6"
            >
                <img src="/images/symbol-white-negative.svg" alt="logo" />

            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Pure negative symbol on dark background.
                </p>

                <a href="/images/symbol-white-negative.svg" class="button" download>
                    symbol-white-negative.svg
                </a>
            </div>
        </div>

        <!-- Pure Negative Symbol -->
        <div class="mb-12">
            <picture
                style="height: 382px;"
                class="block shadow rounded-xl flex items-center justify-center mb-6 bg-white"
            >
                <img src="/images/symbol-dark.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Original symbol on white background.
                </p>

                <a
                    href="/images/symbol-dark.svg"
                    class="button"
                    download
                >
                    symbol-dark.svg
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
