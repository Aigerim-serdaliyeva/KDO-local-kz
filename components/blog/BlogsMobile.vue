<template>
    <div class="pt-60px flex">
        <div
            class="w-4/12 dark-blog-menu blog-menu"
            @click="showBlogsComponent('BlogsNew')"
        >
            Новое
        </div>
        <div
            class="w-4/12 dark-blog-menu blog-menu"
            @click="showBlogsComponent('BlogsPopular')"
        >
            Популярное
        </div>
        <div
            class="w-4/12 dark-blog-menu blog-menu"
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

<style lang="scss" scoped>
.blog-menu {
    &.active,
    &:hover {
        background: #2c78aa !important;
    }
}

.dark-blog-menu {
    &.active,
    &:hover {
        background: #000000;
    }
}
</style>
