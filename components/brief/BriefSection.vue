<template>
    <div>
        <ClearForm />
        <ValidationObserver>
            <form>
                <BriefContactData />

                <BriefGeneralInfornation />

                <BriefWebSite />

                <BriefDesignMaterials />

                <BriefComplexTasks />

                <BriefFilesExamples />

                <div class="max-w-1170px w-full mx-auto text-right">
                    <button class="button-brief">Завершить и отправить</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import ClearForm from '../form/ClearForm.vue';
import BriefComplexTasks from './BriefComplexTasks.vue';
import BriefFilesExamples from './BriefFilesExamples.vue';
import BriefDesignMaterials from './BriefDesignMaterials.vue';
import BriefWebSite from './BriefWebSite.vue';
import BriefGeneralInfornation from './BriefGeneralInfornation.vue';
import BriefContactData from './BriefContactData.vue';
export default {
    components: {
        ValidationObserver,
        BriefContactData,
        BriefGeneralInfornation,
        BriefWebSite,
        BriefDesignMaterials,
        BriefFilesExamples,
        BriefComplexTasks,
        ClearForm
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
