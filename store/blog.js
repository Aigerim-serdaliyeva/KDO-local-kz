export const state = () => ({
    isBlog: false,
    blogsComponent: null
});

export const mutations = {
    showBlog(state) {
        state.isBlog = true;
    },
    hideBlog(state) {
        state.isBlog = false;
    },
    showBlogsComponent(state, blogsComponent) {
        state.blogsComponent = blogsComponent;
    }
};
