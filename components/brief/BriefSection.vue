<template>
    <div>
        <ClearForm />
        <ValidationObserver ref="form">
            <form @submit.prevent="handleSubmit()">
                <BriefTitle />

                <BriefContactData />

                <BriefCommonInfornation />

                <BriefWebSite />

                <BriefDesignMaterials />

                <BriefComplexTasks />

                <BriefFilesExamples />

                <div
                    class="w-full mx-auto text-right max-w-960px 2xl:max-w-1000px 3xl:max-w-1170px"
                >
                    <button type="submit" class="button-brief dark-color">
                        Завершить и отправить
                    </button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import { mapMutations } from 'vuex';
import ClearForm from '../form/ClearForm.vue';
import BriefTitle from './BriefTitle.vue';
import BriefComplexTasks from './BriefComplexTasks.vue';
import BriefFilesExamples from './BriefFilesExamples.vue';
import BriefDesignMaterials from './BriefDesignMaterials.vue';
import BriefWebSite from './BriefWebSite.vue';
import BriefCommonInfornation from './BriefCommonInfornation.vue';
import BriefContactData from './BriefContactData.vue';
export default {
    components: {
        ValidationObserver,
        BriefContactData,
        BriefCommonInfornation,
        BriefWebSite,
        BriefDesignMaterials,
        BriefFilesExamples,
        BriefComplexTasks,
        ClearForm,
        BriefTitle
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate().then((success) => {
                if (!success) {
                    return;
                }

                this.showModal('ThanksForm');
                // alert('Form has been submitted!');

                // Wait until the models are updated in the UI
                this.$nextTick(() => {
                    this.$refs.form.reset();
                });
            });
        },
        ...mapMutations({
            showModal: 'modal/showModal'
        })
    }
};
</script>

<style lang="scss" scoped>
.label {
    &.active,
    &:hover {
        box-shadow: inset 0px 0px 7.6px rgba(0, 0, 0, 0.25);
    }
}
</style>
