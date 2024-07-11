<template>
    <div>
        <!-- Original Symbol -->
        <div class="mb-10">
            <picture
                style="height: 382px;"
                class="block shadow flex items-center justify-center mb-6 bg-card-700 rounded-xl"
            >
                <img src="/images/primary-logo-symbol.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Primary symbol on dark background.
                </p>

                <a href="/images/primary-logo-symbol.svg" class="button underline" download>
                    white-logo-symbol.svg
                </a>
            </div>
        </div>

        <!-- Pure Negative Symbol -->
        <div class="mb-10">
            <picture
                style="height: 382px;"
                class="block shadow rounded-xl flex items-center justify-center mb-6 bg-white"
            >
                <img src="/images/secondary-logo-symbol.svg" alt="logo" />
            </picture>

            <div class="flex justify-between items-center">
                <p>
                    Original symbol on white background.
                </p>

                <a
                    href="/images/secondary-logo-symbol.svg"
                    class="button"
                    download
                >
                    dark-logo-symbol.svg
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
