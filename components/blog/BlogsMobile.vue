<template>
    <div class="pt-60px flex">
        <div
            class="dark-blog-menu blog-menu"
            @click="showBlogsComponent('BlogsNew')"
        >
            Новое
        </div>
        <div
            class="dark-blog-menu blog-menu"
            @click="showBlogsComponent('BlogsPopular')"
        >
            Популярное
        </div>
        <div
            class="dark-blog-menu blog-menu"
            @click="showBlogsComponent('BlogsImportant')"
        >
            Важные
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
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
