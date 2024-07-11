<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="min-h-screen">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laracasts Assets</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Kanit:wght@500;700&display=swap"
        rel="stylesheet"
    >
    <link rel="stylesheet" href="/css/app.css?v=22">
    <style>
        .container {
            max-width: 1180px !important;
        }

        .router-link-exact-active {
            @apply bg-card-600 text-blue-400;
        }
    </style>
</head>

<body class="page-dark dark min-h-screen">
    <div id="app">
        <header class="section pt-10 pb-0 mb-8 flex items-center">
            <div class="container mx-auto">

                <h1 class="inline-block">
                    <a href="https://laracasts.com" class="flex items-center gap-4 text-2xl text-grey-600">
                        <img alt="Laracasts" src="https://laracasts.com/images/logo/logo-triangle.svg?v=3" width="50">
                        Brand Kit
                    </a>
                </h1>
            </div>
        </header>

        <div class="section pt-4 pb-8 lg:pb-10">
            <div class="container mx-auto">
                <main class="lg:flex gap-16">
                    <aside class="lg:w-48 lg:mt-8 lg:mr-8 flex-no-shrink mb-10 lg:mb-0">
                        <div class="mb-8">
                            <h5 class="font-semibold mb-5 text-xl">The Brand</h5>

                            <ul class="hide-scrollbar flex flex-col gap-y-2 text-white -ml-4">
                                <li>
                                    <x-nav-link to="/" exact>Logo</x-nav-link>
                                </li>

                                <li>
                                    <x-nav-link to="/logo-symbol">Logo Symbol</x-nav-link>
                                </li>

                                <li>
                                    <x-nav-link to="/colors">Colors</x-nav-link>
                                </li>

                                <li>
                                    <x-nav-link to="/wallpapers">Wallpapers</x-nav-link>
                                </li>

                                <li>
                                    <x-nav-link to="/typography">Typography</x-nav-link>
                                </li>
                            </ul>
                        </div>

                        <div class="mb-8">
                            <h5 class="font-semibold mb-5 text-xl">Doodles</h5>


                            <ul class="hide-scrollbar flex flex-col gap-y-2 text-white -ml-4">
                                <li>
                                    <x-nav-link to="/mascot">Mascot</x-nav-link>
                                </li>

                                <li>
                                    <x-nav-link to="/loaders-and-animations">Loaders and Animations</x-nav-link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <div class="primary flex-1">
                        <router-view></router-view>
                    </div>
                </main>
            </div>
        </div>
    </div>

    <script src="/js/app.js?v=20"></script>
</body>
</html>
