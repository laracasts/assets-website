<template>
    <div>
        <p class="mb-10 text-grey-600 leading-normal">
            This spinner uses AirBnb's
            <a href="http://airbnb.io/lottie/#/web" class="text-blue font-bold">Lottie</a>
            library to render its animation. You may download the necessary
            assets below.
        </p>

        <div
            class="rounded-xl bg-card-700 flex items-center justify-center mb-8"
        >
            <div ref="lottie" class="w-64" style="height: 457px"></div>
        </div>

        <a href="/laracasts-spinner.zip" class="button">spinner.zip</a>
    </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    mounted() {
        lottie.loadAnimation({
            container: this.$refs.lottie,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/animations/spinner.json'
        });
    }
};
</script>
