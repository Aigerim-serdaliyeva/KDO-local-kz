<template>
    <div class="pt-70px md:pt-0">
        <div
            class="cursor-pointer dark-color flex items-center underline text-14px md:text-16px 2xl:text-18px"
            @click="goBackBlogs()"
        >
            <img
                src="../../assets/img/arrow-left.png"
                class="mr-5px dark-img-none"
            />
            <img
                src="../../assets/img/arrow-left-white.png"
                class="mr-5px dark-img hidden"
            />
            Вернуться к статьям
        </div>
        <Blogs>
            <div
                class="border-t border-solid border-#E4E4E4 py-15px md:border-none md:py-0"
            >
                <h3 class="dark-color blog-title">{{ getInfo.title }}</h3>
                <img src="../../assets/img/blog/blog-1.jpg" class="mb-20px" />
                <div
                    v-for="text in getInfo.text"
                    :key="text"
                    class="dark-color blog-block text-justify mb-20px"
                >
                    {{ text }}
                </div>
                <div
                    class="dark-color text-right text-13px md:text-16px 2xl:text-18px md:mb-20px"
                >
                    12 января, 2020 · 30 просмотров
                </div>
            </div>
        </Blogs>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Blogs from '../blog/Blogs';
export default {
    components: { Blogs },
    data() {
        return {
            blogs: require('@/assets/json/blogs.json'),
            blogsInfo: require('@/assets/json/blogs-info.json')
        };
    },
    computed: {
        getInfo() {
            const { path } = this.$router.currentRoute;
            const cleanedPath = path.split('/blog/').join('');
            return this.blogsInfo[cleanedPath];
        }
    },
    methods: {
        goBackBlogs() {
            this.$router.push('/blog');
            this.hideBlog();
        },
        ...mapMutations({
            hideBlog: 'blog/hideBlog'
        })
    }
};
</script>
