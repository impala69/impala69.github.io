<template>
    <div>
        <b-navbar class="main-navbar" toggleable="md">
            <b-container>
                <b-navbar-brand href="#">Iman Shafiei</b-navbar-brand>

                <b-navbar-toggle target="navbar-toggle-collapse" />

                <b-collapse id="navbar-toggle-collapse" is-nav>
                    <b-navbar-nav class="ml-auto nav-menu nav navbar-nav">
                        <b-nav-item v-for="category in categories" :key="category.slug"
                            :class="[category.border_color_class]" href="#">
                            {{ category.name }}
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
        <Nuxt />
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index-2.html" class="logo"><img src="/img/logo.png" alt=""></a>
                            </div>
                            <div class="footer-copyright">
                                <span>&copy; </span>
                                Copyright &copy; All rights reserved | This template is made with <i
                                    class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com/"
                                    target="_blank">Colorlib</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-widget">
                                    <h3 class="footer-title">About Us</h3>
                                    <ul class="footer-links">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="#">Join Us</a></li>
                                        <li><a href="contact.html">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-widget">
                                    <h3 class="footer-title">Catagories</h3>
                                    <ul class="footer-links">
                                        <li><a href="category.html">Web Design</a></li>
                                        <li><a href="category.html">JavaScript</a></li>
                                        <li><a href="category.html">Css</a></li>
                                        <li><a href="category.html">Jquery</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                categories: []
            }
        },
        beforeMount() {
            this.get_categories()
        },
        methods: {
            async get_categories() {
                this.categories = await this.$content('categories').sortBy('name').fetch()
            }
        }
    }

</script>
<style>
    .main-navbar {
        padding: 0;
        border-bottom: 1px solid #F4f4f9;
    }

</style>
