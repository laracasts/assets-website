<template>
    <div class="pb-10">
        <h1 class="font-normal font-cabin text-3xl leading-none mb-10">
            So, Hi!
        </h1>

        <div class="md:flex md:items-center mb-12 bg-blue/5 rounded-xl px-8">
            <div>
                <div
                    class="flex flex-col block shadow rounded-lg flex items-center justify-center mr-10 py-10 mb-6 md:mb-0"
                    style="width: 300px"
                >
                    <picture
                        class="rounded-full overflow-hidden mb-3 flex items-center"
                        style="width: 135px; height: 135px;"
                    >
                        <img src="/images/jeffrey.jpg" alt="Tuds"/>
                    </picture>

                    <strong class="text-xl font-medium tracking-wide"
                    >Jeffrey Way</strong
                    >
                    <p class="leading-relaxed text-sm mb-6 text-grey-600">
                        Owner of Laracasts
                    </p>

                    <a
                        href="https://laracasts.com/@jeffreyway"
                        class="button bg-blue/5 text-white w-5/6 text-center py-3 border-none hover:bg-blue/13"
                    >Say Hi</a
                    >
                </div>
            </div>

            <div class="leading-relaxed text-sm">
                <p class="mb-6">
                    There's a chance you may already know me!
                </p>

                <p>
                    A veteran in the PHP community, I was a co-host on the
                    official Laravel podcast, have written successful books,
                    built popular packages, spoken at multiple Laracon
                    conferences, been a guest on countless podcasts (including
                    PHP Town Hall, Shop Talk, No Capes, and Full Stack Radio),
                    and have contributed to the largest development magazines in
                    the world.
                </p>
            </div>
        </div>

        <div class="md:flex md:items-center bg-blue/5 rounded-xl px-8">
            <div>
                <div
                    class="flex flex-col block shadow rounded-lg flex items-center justify-center mr-10 py-10 mb-6 md:mb-0"
                    style="width: 300px"
                >
                    <img
                        src="/images/tuds.jpg"
                        alt="Tuds"
                        class="mb-3 rounded-full"
                        style="width: 135px; height: 135px;"
                    />

                    <strong class="text-xl font-medium tracking-wide">Tuds (Adrian)</strong>
                    <p class="leading-relaxed text-sm mb-6 text-grey-600">
                        Design at Laracasts
                    </p>

                    <a
                        href="https://laracasts.com/@_adrian"
                        class="button bg-blue/5 text-white w-5/6 text-center py-3 border-none hover:bg-blue/13"
                    >Say Hi</a
                    >
                </div>
            </div>

            <div class="leading-relaxed text-sm">
                <p class="mb-6">
                    After many years working as a creative it’s become apparent that this is what I’ll be doing for a
                    very long time. Design is an expression of my core and something I love doing on a daily basis.
                </p>

                <p> The joy of creating something new and releasing it into the world, seeing it take shape and become
                    alive and functional is one of the most fulfilling feelings to me. Especially knowing that, given
                    the chance and potential, it will end up helping others grow and push their own boundaries.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
