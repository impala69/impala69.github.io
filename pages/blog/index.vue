<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div v-for="post in posts.slice(0,2)" :key="post.slug" class="col-md-6">
                        <div class="post post-thumb">
                            <b-link class="post-img" :to="{name: 'blog-post-slug', params: {slug: post.slug}}">
                                <img :src="post.image" :alt="post.slug">
                            </b-link>
                            <div class="post-body">
                                <div class="post-meta">
                                    <b-link class="post-category cat-2" href="category.html">{{ post.category_name }}
                                    </b-link>
                                    <span class="post-date">{{ post.date }}</span>
                                </div>
                                <h3 class="post-title">
                                    <b-link :to="{name: 'blog-post-slug', params: {slug: post.slug}}">{{ post.title }}
                                    </b-link>
                                </h3>
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
                            <div v-for="post in posts" :key="post.slug" class="col-md-12">
                                <div class="post post-row">
                                    <a class="post-img" href="blog-post.html"><img :src="post.image" alt=""></a>
                                    <div class="post-body">
                                        <div class="post-meta">
                                            <a class="post-category cat-2"
                                                href="category.html">{{ post.category_name }}</a>
                                            <span class="post-date">{{ post.date }}</span>
                                        </div>
                                        <h3 class="post-title"><a href="blog-post.html">{{ post.title }}</a></h3>
                                        <p>{{ post.short_description }}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-12">
                                <div class="section-row">
                                    <button class="primary-button center-block">Load More</button>
                                </div>
                            </div> -->
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
                tags: [],
                posts: []
            }
        },
        beforeMount() {
            this.get_tags()
            this.get_posts()
        },
        methods: {
            async get_tags() {
                this.tags = await this.$content('tags').sortBy('name').fetch()
            },
            async get_posts() {
                this.posts = await this.$content('posts').fetch()
            }
        }
    }

</script>

<style>


</style>
