export const state = () => ({
    modalVisible: false,
    modalComponent: null
});

export const mutations = {
    showModal(state, modalComponent) {
        state.modalVisible = true;
        state.modalComponent = modalComponent;
    },
    hideModal(state) {
        state.modalVisible = false;
    }
};
