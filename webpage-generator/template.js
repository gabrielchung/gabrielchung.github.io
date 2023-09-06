let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include the Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    <style id="my-css-style">
        html {
            scroll-behavior: smooth;
        }

        :root {
            --primary-color: {{ primary_color }};
            --secondary-color: {{ secondary_color }};
            --button-color: {{ button_text_color }};
            --button-background-color: {{ button_bg_color }};
        }


        .primary-color {
            color: var(--primary-color);
        }

        .primary-bg {
            background-color: var(--primary-color);
        }

        .secondary-color {
            color: var(--secondary-color);
        }

        .secondary-bg {
            background-color: var(--secondary-color);
        }

        .button-style {
            color: var(--button-color);
            background-color: var(--button-background-color);
        }
        
        /* .button-hover:hover {
            background-color: var(--neutral-color);
        } */

        /* ========================================== */

        /*
         *
         * Navigation
         *
         */

        #logo-container {
            display: flex;
            align-items: center;
            height: 100%;
        }
        
        nav #home-link {
            white-space: nowrap;
            margin-right: 10px;
        }

        svg {
            height: 24px;
            width: auto;
        }

        #menu-links svg, #cloned-menu-links svg {
            display: inline-block;
        }
        
        #cloned-menu-links {
            line-height: 44px;
        }

        /* ========================================== */

        /*
         *
         * Main Content
         *
         */

        .promo-image-desktop {
            max-width: 780px;
            margin-left: auto;
            margin-right: auto;
        }

        .main-text {
            text-align: center;
            font-weight: bolder;
            font-size: 24px;
        }

        .main-text-title {
            font-size: 50px;
            margin-bottom: 15px;
        }

        /* ========================================== */

    </style>
</head>

<body class="secondary-bg">

    <div class="text-center secondary-bg"> 
        <nav class="inline-block px-4 py-4 secondary-bg primary-color inline-flex justify-between lg:justify-normal top-0 z-50 w-full lg:w-auto">
            <a id="home-link" href="#" class="pl-8 text-xl font-bold primary-color">
                <div id="logo-container">
                    {{ svg_logo }}
                </div>
            </a>

            <div id="menu-toggle" class="lg:hidden block">
                <button class="p-0 pt-2 pr-8 focus:outline-none focus:bg-gray-300">
                    <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>

            <div id="menu-links" class="space-x-12 lg:block hidden">
                {{ menu_links }}
            </div>
        </nav>
    </div>

    <section id="main" class="pt-28 px-6 secondary-bg primary-color text-center">
        <div class="promo-image-desktop mb-12">
            <img src="{{ image_src }}" />
        </div>

        <div class="main-text">
            <div class="main-text-title">
                {{ main_text_title }}
            </div>
            <button class="mt-8 rounded-full px-8 py-4 button-style">{{ button_text }}</button>
        </div>
    </section>

    <footer class="mt-36 py-8 secondary-bg text-center primary-color">
        © {{ copyright_year }} {{ brand }}
    </footer>

    <!-- Script -->
    <script>

        /* ========================================== */

        /*
         *
         * Navigation
         *
         */

        document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menu-toggle');
            const menuLinks = document.getElementById('menu-links');
            let clonedMenu;
    
            menuToggle.addEventListener('click', function () {
    
                if (clonedMenu) {
                    clonedMenu.classList.toggle('hidden');
                    if (! menuLinks.classList.contains('hidden')) {
                        menuLinks.classList.toggle('hidden');
                    }
                } else {
                    // Clone the menu links
                    clonedMenu = menuLinks.cloneNode(true);
                    clonedMenu.id = 'cloned-menu-links';
                    clonedMenu.classList.add('secondary-bg', 'primary-color', 'lg:hidden', 'block', 'fixed', 'top-20', 'w-full', 'p-4', 'flex', 'flex-col', 'z-50');
                    
                    // Insert cloned menu after the navbar
                    document.body.insertBefore(clonedMenu, document.body.firstChild);
    
                    if (clonedMenu.classList.contains('hidden')) {
                        clonedMenu.classList.toggle('hidden');
                    }
                }
            });
        });

        /* ========================================== */

    </script>

</html>`;