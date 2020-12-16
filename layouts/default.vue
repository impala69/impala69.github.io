<template>
    <div class="page-container full-width-container theme-style-dark">
        <header id="site_header" class="header">
            <div class="header-content clearfix">

                <div class="text-logo">
                    <a href="index.html">
                        <div class="logo-symbol">A</div>
                        <div class="logo-text">Alex <span>Smith</span></div>
                    </a>
                </div>

                <div class="site-nav mobile-menu-hide">
                    <ul id="menu-classic-menu" class="leven-classic-menu site-main-menu">
                        <li id="menu-item-174"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174"><a
                                href="resume/index.html" data-hover="1">Resume</a></li>
                        <li id="menu-item-174"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174"><a
                                href="resume/index.html" data-hover="1">Portfolio</a></li>
                        <li id="menu-item-174"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174"><a
                                href="resume/index.html" data-hover="1">Blog</a></li>
                    </ul>
                </div>

                <a class="menu-toggle mobile-visible">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </header>
        <Nuxt />
        <footer class="site-footer clearfix">
            <div class="footer-social">
                <ul class="footer-social-links">
                    <li>
                        <a href="#" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Facebook</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Instagram</a>
                    </li>
                </ul>
            </div>

            <div class="footer-copyrights">
                <p>© 2020 All rights reserved. LMPixels.</p>
            </div>
        </footer>
    </div>
</template>

<style>
    html {
        font-family:
            'Source Sans Pro',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Arial,
            sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
    }

    .button--green {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #3b8070;
        color: #3b8070;
        text-decoration: none;
        padding: 10px 30px;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--grey {
        display: inline-block;
        border-radius: 4px;
        border: 1px solid #35495e;
        color: #35495e;
        text-decoration: none;
        padding: 10px 30px;
        margin-left: 15px;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }

</style>
