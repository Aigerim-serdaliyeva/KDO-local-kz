<template>
    <div>
        <BriefTitle brief-title="комплексные задачи" />
        <BriefBlock>
            <CustomInput
                input-title="Дополнительные решения для проекта"
                input-title-span="*"
                :v-model-variable="'additionalSolutions'"
                :checkbox-list="additionalSolutions"
                :template-type="'checkbox'"
            />
        </BriefBlock>
    </div>
</template>

<script>
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefTitle from './BriefTitle.vue';
export default {
    components: { BriefTitle, BriefBlock, CustomInput },
    data() {
        return {
            additionalSolutions: require('../../assets/json/additional-solutions.json')
        };
    }
};
</script>
