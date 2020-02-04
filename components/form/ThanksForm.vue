<template>
    <div class="z-50">
        <ModalForm
            title="Благодарим за сотруднечество!"
            text="Ваша заявка принята, как только мы рассмотрим её, мы обязательно свяжемся с вами!"
            text-min="Вашу копию мы отправили на Ваш электронный адрес :)"
        >
            <template v-slot:img>
                <img
                    src="../../assets/img/thanks.png"
                    class="mb-15px mx-auto"
                />
            </template>
            <template v-slot:btn>
                <button class="button-clear" @click="hideModal">ОК</button>
            </template>
        </ModalForm>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ModalForm from './ModalForm.vue';
export default {
    components: { ModalForm },
    methods: {
        ...mapMutations({
            hideModal: 'modal/hideModal'
        })
    }
};
</script>
