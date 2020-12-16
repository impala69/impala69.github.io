<template>
    <div>
        <header>
            <div id="post-header" class="page-header">
                <div class="background-img" style="background-image: url('/img/post-page.jpg');"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="post-meta">
                                <a class="post-category cat-2" href="category.html">{{ post.category_name }}</a>
                                <span class="post-date">{{ post.date }}</span>
                            </div>
                            <h1>{{ post.title }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="section-row">
                            <div class="main-post">
                                <figure class="figure-img">
                                    <img class="img-responsive" src="/img/post-4.jpg" alt="">
                                    <figcaption>So Lorem Ipsum is bad (not necessarily)</figcaption>
                                </figure>
                                <nuxt-content :document="this.post_description" />
                            </div>
                        </div>
                        <div class="section-row">
                            <div class="post-author">
                                <div class="media">
                                    <div class="media-left">
                                        <img class="media-object" src="/img/author.png" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="media-heading">
                                            <h3>John Doe</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.</p>
                                        <ul class="author-social">
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="aside-widget">
                            <div class="section-title">
                                <h2>Catagories</h2>
                            </div>
                            <div class="category-widget">
                                <ul>
                                    <li><a href="#" class="cat-1">Web Design<span>340</span></a></li>
                                    <li><a href="#" class="cat-2">JavaScript<span>74</span></a></li>
                                    <li><a href="#" class="cat-4">JQuery<span>41</span></a></li>
                                    <li><a href="#" class="cat-3">CSS<span>35</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="aside-widget">
                            <div class="tags-widget">
                                <ul>
                                    <li><a href="#">Chrome</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">Tutorial</a></li>
                                    <li><a href="#">Backend</a></li>
                                    <li><a href="#">JQuery</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                    <li><a href="#">Website</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'blog',
        data() {
            return {
                tags: [],
                post: {},
                post_description: "",
                post_slug: this.$route.params.slug
            }
        },
        beforeMount() {
            this.get_post_by_slug()
        },
        methods: {
            async get_post_by_slug() {
                this.post = await this.$content('posts/' + this.post_slug).fetch()
                this.post_description = await this.$content(this.post.description_link).fetch()
            }
        }
    }

</script>

<style>


</style>
