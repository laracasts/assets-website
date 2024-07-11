<template>
    <div>
        <div class="mb-10">
            <h1 class="mb-8 text-2xl font-medium">Primaries</h1>

            <div class="flex flex-wrap gap-x-4 gap-y-4">
                <ColorCard
                    from="#328AF1"
                    to="#328AF1"
                    label="Laracasts Blue"
                    single
                />

                <ColorCard
                    from="#BAD9FC"
                    to="#BAD9FC"
                    label="Elements & Icons"
                    single
                />
            </div>
        </div>

        <div class="mb-10">
            <h1 class="mb-8 text-2xl font-medium">Secondaries</h1>

            <div class="flex flex-wrap gap-x-4 gap-y-4">
                <ColorCard
                    from="#EC454F"
                    to="#F44881"
                    label="Frameworks"
                />

                <ColorCard
                    from="#637BFF"
                    to="#21C8F6"
                    label="Techniques"
                />

                <ColorCard
                    from="#1AAB8B"
                    to="#6EDCC4"
                    label="Testing"
                />

                <ColorCard
                    from="#F19A1A"
                    to="#FFC73C"
                    label="Languages"
                />

                <ColorCard
                    from="#8B60ED"
                    to="#B372BD"
                    label="Tooling"
                />

                <ColorCard
                    from="#253D63"
                    to="#A1B6E5"
                    label="DevOps"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ColorRange from './ColorRange';
import ColorCard from "./ColorCard";

export default {
    components: {
        ColorRange,
        ColorCard
    }
};
</script>
