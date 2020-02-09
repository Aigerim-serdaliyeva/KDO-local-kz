<template>
    <div :class="['text-777777', darkClass]">
        <div class="min-h-screen bg-light-bg relative dark-bg">
            <HeaderMobile class="md:hidden" />
            <Header class="hidden md:block" />
            <div>
                <BlogsMobile class="sm:hidden" />
                <component :is="blogsComponent"></component>
            </div>
            <div class="container -px-15px pt-15px md:pt-120px">
                <div class="max-w-1280px mx-auto flex flex-wrap">
                    <div class="md:w-8/12 px-7px">
                        <div v-if="isBlog">
                            <nuxt />
                        </div>

                        <BlogsNew v-else />
                    </div>
                    <div class="md:w-4/12 px-7px">
                        <BlogsPopular /> <BlogsImportant />
                    </div>
                </div>
            </div>
            <div id="page-top-id"></div>

            <PageTop />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import BlogsMobile from '../components/blog/BlogsMobile.vue';
import BlogsImportant from '../components/blog/BlogsImportant.vue';
import BlogsNew from '../components/blog/BlogsNew.vue';
import BlogsPopular from '../components/blog/BlogsPopular.vue';
import PageTop from '../components/PageTop.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        HeaderMobile,
        PageTop,
        BlogsNew,
        BlogsPopular,
        BlogsImportant,
        BlogsMobile
    },
    computed: {
        ...mapState({
            isThemeDark: ({ theme }) => theme.isThemeDark,
            isBlog: ({ blog }) => blog.isBlog,
            blogsComponent: ({ blog }) => blog.blogsComponent
        }),
        darkClass() {
            return { dark: this.isThemeDark };
        }
    },
    mounted() {
        const scene = this.$scrollmagic
            .scene({
                offset: 0,
                triggerElement: '#page-top-id'
            })
            .setClassToggle('.page-top', 'active');
        this.$scrollmagic.addScene(scene);
    },
    destroyed() {
        this.$scrollmagic.destroy();
    }
};
</script>

<style lang="scss" scoped>
#page-top-id {
    position: absolute;
    width: 100%;
    height: 1px;
    background: transparent;
    top: 900px;
}
</style>
