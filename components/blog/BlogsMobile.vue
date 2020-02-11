<template>
    <div class="pt-60px flex">
        <div
            class="w-4/12 dark-blog-menu blog-menu"
            :class="{ active: blogsComponent === 'BlogsNew' }"
            @click="showBlogsComponent('BlogsNew')"
        >
            Новое
        </div>
        <div
            class="w-4/12 dark-blog-menu blog-menu"
            :class="{ active: blogsComponent === 'BlogsPopular' }"
            @click="showBlogsComponent('BlogsPopular')"
        >
            Популярное
        </div>
        <div
            class="w-4/12 dark-blog-menu blog-menu"
            :class="{ active: blogsComponent === 'BlogsImportant' }"
            @click="showBlogsComponent('BlogsImportant')"
        >
            Важные
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState({
            blogsComponent: ({ blog }) => blog.blogsComponent
        })
    },
    methods: {
        ...mapMutations({
            showBlogsComponent: 'blog/showBlogsComponent'
        })
    }
};
</script>

<style lang="scss">
.blog-menu {
    &.active,
    &:hover {
        background: #2c78aa;
    }
}
</style>
