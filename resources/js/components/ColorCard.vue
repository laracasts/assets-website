<template>
    <div class="bg-blue/5 rounded-xl p-4" style="flex-basis: 225px">
        <div>
            <div
                class="rounded-xl"
                :style="`height: ${single ? 100 : 50}px; background: linear-gradient(to right, ${from}, ${to});`"
            ></div>

            <div v-if="single" class="bg-blue/5 mt-3 rounded-full text-center px-4 py-2 text-xs w-full font-medium"><span
                class="text-grey-600 font-medium"></span>{{ to }}
            </div>
        </div>

        <div class="mt-2 flex gap-x-4" v-if="! single">
            <div class="flex-1 flex justify-center flex-wrap">
                <div class="rounded-[10px] w-full" :style="`height: 50px; background-color: ${from}`"></div>
                <div class="bg-blue/5 mt-2 rounded-full text-center px-4 py-2 text-xs w-full font-medium"><span
                    class="text-grey-600 font-medium"></span>{{ from}}
                </div>
            </div>

            <div class="flex-1 flex justify-center flex-wrap">
                <div class="rounded-[10px] w-full" :style="`height: 50px; background-color: ${to}`"></div>
                <div class="bg-blue/5 mt-2 rounded-full text-center px-4 py-2 text-xs w-full font-medium"><span
                    class="text-grey-600 font-medium"></span>{{ to }}
                </div>
            </div>
        </div>

        <h5 class="text-center border-t border-t-blue/5 mt-4 max-w-[150px] mx-auto pt-2 text-xs text-grey-600 font-medium" v-text="label" />
    </div>
</template>

<script>
export default {
    props: {
        from: String,
        to: String,
        label: String,
        single: { type: Boolean, default: false }
    }
};
</script>
