<template>
    <div :class="['text-777777', darkClass]">
        <div class="min-h-screen relative bg-light-bg dark-bg">
            <HeaderMobile class="md:hidden" />
            <Header class="hidden md:block" />
            <nuxt />
            <ModalWindow v-if="modalVisible && modalComponent">
                <template v-slot:modal>
                    <component :is="modalComponent"></component>
                </template>
            </ModalWindow>

            <div id="page-top-id"></div>

            <ThePageTop />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ThePageTop from '../components/ThePageTop.vue';
import ModalClearForm from '../components/form/ModalClearForm.vue';
import ThanksForm from '../components/form/ThanksForm.vue';
import ModalWindow from '../components/modal/ModalWindow.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        HeaderMobile,
        ModalWindow,
        ModalClearForm,
        ThePageTop,
        ThanksForm
    },
    props: {
        modalWindow: {
            type: Boolean
        }
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            modalVisible: ({ modal }) => modal.modalVisible,
            modalComponent: ({ modal }) => modal.modalComponent,
            formTitle: ({ modal }) => modal.formTitle,
            isThemeDark: ({ theme }) => theme.isThemeDark
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
