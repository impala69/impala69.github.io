<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="post post-thumb">
                            <a class="post-img" href="blog-post.html"><img src="/img/post-1.jpg" alt=""></a>
                            <div class="post-body">
                                <div class="post-meta">
                                    <a class="post-category cat-2" href="category.html">JavaScript</a>
                                    <span class="post-date">March 27, 2018</span>
                                </div>
                                <h3 class="post-title"><a href="blog-post.html">Chrome Extension Protects Against
                                        JavaScript-Based CPU Side-Channel Attacks</a></h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="post post-thumb">
                            <a class="post-img" href="blog-post.html"><img src="/img/post-2.jpg" alt=""></a>
                            <div class="post-body">
                                <div class="post-meta">
                                    <a class="post-category cat-3" href="category.html">Jquery</a>
                                    <span class="post-date">March 27, 2018</span>
                                </div>
                                <h3 class="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use
                                        JQuery?</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h2>Most Read</h2>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="post post-row">
                                    <a class="post-img" href="blog-post.html"><img src="/img/post-4.jpg" alt=""></a>
                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class="post-category cat-2" href="category.html">JavaScript</a>
                                            <span class="post-date">March 27, 2018</span>
                                        </div>
                                        <h3 class="post-title"><a href="blog-post.html">Chrome Extension Protects
                                                Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam...</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="post post-row">
                                    <a class="post-img" href="blog-post.html"><img src="/img/post-6.jpg" alt=""></a>
                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class="post-category cat-2" href="category.html">JavaScript</a>
                                            <span class="post-date">March 27, 2018</span>
                                        </div>
                                        <h3 class="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid
                                                On The Backend Development Block!</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam...</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="post post-row">
                                    <a class="post-img" href="blog-post.html"><img src="/img/post-1.jpg" alt=""></a>
                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class="post-category cat-4" href="category.html">Css</a>
                                            <span class="post-date">March 27, 2018</span>
                                        </div>
                                        <h3 class="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam...</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="post post-row">
                                    <a class="post-img" href="blog-post.html"><img src="/img/post-2.jpg" alt=""></a>
                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class="post-category cat-3" href="category.html">Jquery</a>
                                            <span class="post-date">March 27, 2018</span>
                                        </div>
                                        <h3 class="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use
                                                JQuery?</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam...</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="section-row">
                                    <button class="primary-button center-block">Load More</button>
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
                                    <li v-for="tag in tags" :key="tag.key"><a href="#">{{ tag.name }}</a></li>
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
                tags: []
            }
        },
        beforeMount() {
            this.get_tags()
        },
        methods: {
            async get_tags() {
                this.tags = await this.$content('tags').sortBy('name').fetch()
            }
        }
    }

</script>

<style>


</style>
