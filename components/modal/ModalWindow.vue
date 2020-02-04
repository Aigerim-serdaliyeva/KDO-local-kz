<template>
    <div class="app-modal fixed inset-0 z-20">
        <div class="app-modal__overlay fixed inset-0"></div>
        <div v-if="modalVisible" class="app-modal__content">
            <div
                class="app-modal__innerContent w-screen h-screen z-40 flex flex-col items-center justify-center"
            >
                <slot name="modal"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            modalVisible: ({ modal }) => modal.modalVisible
        })
    }
};
</script>

<style lang="scss" scoped>
.app-modal {
    &__overlay {
        background: rgba(#222, 0.6);
    }
}
</style>
