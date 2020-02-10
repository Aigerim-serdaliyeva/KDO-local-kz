<template>
    <div>
        <Blogs blogs-title="Новое">
            <div v-for="blog in blogs" :key="blog.route" class="mb-20px">
                <h3 class="dark-color blog-title">
                    {{ blog.title }}
                </h3>
                <img src="../../assets/img/blog/blog-1.jpg" class="mb-20px" />
                <div class="blog-block">
                    <p
                        class="dark-color text-justify mb-10px overflow-hidden max-h-80px"
                    >
                        {{ blog.text }}
                    </p>
                    <div class="dark-color flex items-center justify-between">
                        <a
                            class="cursor-pointer text-blue-back"
                            @click.prevent="goTo(blog)"
                            >Читать дальше...</a
                        >
                        <div>12 января, 2020 · 30 просмотров</div>
                    </div>
                </div>
            </div>
        </Blogs>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Blogs from './Blogs.vue';
export default {
    components: { Blogs },
    data() {
        return {
            blogs: require('../../assets/json/blogs.json')
        };
    },
    methods: {
        goTo(blog) {
            this.$router.push('/blog/' + blog.route);
            this.showBlog();
        },
        ...mapMutations({
            showBlog: 'blog/showBlog'
        })
    }
};
</script>
