<template>
    <div class="relative text-777777">
        <HeaderMobile class="sm:hidden" />
        <Header class="hidden sm:block" />
        <nuxt />
        <ModalWindow v-if="modalVisible">
            <template v-slot:modal>
                <!-- <ModalClearForm v-if="modalWindow === clearForm" /> -->
                <ModalClearForm />
                <!-- <ThanksForm v-if="modalWindow === thanksForm" /> -->
            </template>
        </ModalWindow>

        <div id="page-top-id"></div>

        <PageTop />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import PageTop from '../components/PageTop.vue';
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
        PageTop,
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
            formTitle: ({ modal }) => modal.formTitle
        })
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
