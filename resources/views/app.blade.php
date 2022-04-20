<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Laracasts Assets</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap">
    <link rel="stylesheet" media="print" onload="this.onload=null;this.removeAttribute('media');" href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap">
    <link rel="stylesheet" href="/css/app.css?v=4">
</head>

<body class="font-sans">
	<div id="app">
		<header class="section py-6 mb-8 flex items-center" style="background: url('/images/splash.svg') 0 15px no-repeat; height: 84px;">
			<h1 class="inline-block">
				<a href="https://laracasts.com">
					<img alt="Laracasts" src="/images/logo.svg">
				</a>
			</h1>
		</header>

		<div class="section pb-8 lg:pb-10">
			<div class="container">
				<main class="lg:flex">
					<aside class="lg:w-64 lg:pt-8 flex-no-shrink mb-10 lg:mb-0">
						<div class="mb-10">
							<h5 class="uppercase font-bold mb-5 text-base font-cabin">The Brand</h5>

							<ul class="list-reset">
								<li class="text-sm leading-loose"><router-link class="text-black" to="/" exact>Logo</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/logo-symbol">Logo Symbol</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/colors">Colors</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/typography">Typography</router-link></li>
							</ul>
						</div>

						<div class="mb-10">
							<h5 class="uppercase font-bold mb-5 text-base font-cabin">Doodles</h5>

							<ul class="list-reset">
								<li class="text-sm leading-loose"><router-link class="text-black" to="/mascot">Mascot</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/illustrations">Illustrations</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/loaders-and-animations">Loaders and Animations</router-link></li>
								<li class="text-sm leading-loose"><router-link class="text-black" to="/wallpapers">Wallpapers</router-link></li>
							</ul>
						</div>

						<div>
							<h5 class="uppercase font-bold mb-5 text-base font-cabin">About Laracasts</h5>

							<ul class="list-reset">
								<li class="text-sm leading-loose"><router-link class="text-black" to="/about">The Team</router-link></li>
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

	<script src="/js/app.js?v=14"></script>
</body>
</html>
