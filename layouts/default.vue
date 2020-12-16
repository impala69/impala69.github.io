<template>
    <div class="page-container full-width-container theme-style-dark">
        <b-navbar class="default-navbar" toggleable="md" type="dark">
            <b-navbar-brand class="d-flex" :to="{name: ''}">
                <div class="logo-symbol">I</div>
                <div class="logo-text">Iman <span>Shafiei</span></div>
            </b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse" />

            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{name: 'resume'}">
                        Resume
                    </b-nav-item>
                    <b-nav-item :to="{name: 'portfolio'}">
                        Portfolio
                    </b-nav-item>
                    <b-nav-item :to="{name: 'blog'}">
                        Blog
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
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
    .default-navbar .nav-link {
        color: #bfbfbf !important;
    }

    .default-navbar .nav-item {
        margin-left: 1.5rem;
    }

    .ml-auto {
        margin-left: auto;
    }

</style>
