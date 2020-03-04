<template>
    <div>
        <Blogs blogs-title="Важные новости">
            <div
                v-for="blog in blogsImportant"
                :key="blog.route"
                class="cursor-pointer mb-20px md:mb-0"
                @click="goTo(blog)"
            >
                <div class="md:flex items-start mb-10px">
                    <h3 class="dark-color blog-title md:hidden">
                        {{ blog.title }}
                    </h3>
                    <img
                        src="../../assets/img/blog/blog-1.jpg"
                        class="bg-center mb-20px md:m-0 md:w-3/12 md:h-80px "
                    />
                    <div
                        class="dark-color blog-block md:w-9/12 md:border-none md:py-0"
                    >
                        <p
                            class="dark-color text-justify text-13px overflow-hidden max-h-80px mb-10px md:mb-0 md:pl-10px"
                        >
                            {{ blog.text }}
                        </p>
                        <div
                            class="flex items-center justify-between md:hidden"
                        >
                            <a
                                class="cursor-pointer text-blue-back"
                                @click.prevent="goTo(blog)"
                                >Читать дальше...</a
                            >
                            <div>12 января, 2020 · 30 просмотров</div>
                        </div>
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
    computed: {
        blogsImportant() {
            return this.blogs.filter((blog) => blog.important);
        }
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
