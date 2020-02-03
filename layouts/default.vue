<template>
    <div class="relative text-777777">
        <HeaderMobile class="sm:hidden" />
        <Header class="hidden sm:block" />
        <nuxt />
        <ModalWindow v-if="modalVisible">
            <template v-slot:modal>
                <ModalClearForm />
            </template>
        </ModalWindow>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ModalClearForm from '../components/form/ModalClearForm.vue';
import ModalWindow from '../components/modal/ModalWindow.vue';
import HeaderMobile from '../components/header/HeaderMobile.vue';
import Header from '../components/header/Header.vue';
export default {
    components: {
        Header,
        HeaderMobile,
        ModalWindow,
        ModalClearForm
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            modalVisible: ({ modal }) => modal.modalVisible,
            formTitle: ({ modal }) => modal.formTitle
        })
    }
};
</script>
