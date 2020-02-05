<template>
    <div class="z-50">
        <ModalForm
            title="Вы уверенны, что хотите очистить форму?"
            text="Все поля формы будут очищенны, без возможности восстановления."
        >
            <template v-slot:img>
                <img
                    src="../../assets/img/clear-form.png"
                    class="mb-15px mx-auto"
                />
            </template>
            <template v-slot:btn>
                <button class="button-clear mr-50px" @click="clearForm">
                    Очистить
                </button>
                <button class="button-clear" @click="hideModal">Отмена</button>
            </template>
        </ModalForm>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import ModalForm from './ModalForm.vue';
export default {
    components: { ModalForm },
    methods: {
        ...mapMutations({
            hideModal: 'modal/hideModal'
        }),
        ...mapActions({
            clearAllValues: 'v-model/clearAllValues'
        }),
        clearForm() {
            this.clearAllValues();
            this.hideModal();
        }
    }
};
</script>
