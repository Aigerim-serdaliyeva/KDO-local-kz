export const state = () => ({
    modalVisible: false,
    modalComponent: null
});

export const mutations = {
    showModal(state) {
        state.modalVisible = true;
        // state.modalComponent =
    },
    hideModal(state) {
        state.modalVisible = false;
    }
};
