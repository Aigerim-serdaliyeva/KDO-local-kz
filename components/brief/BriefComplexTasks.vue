<template>
    <div>
        <BriefBlockTitle brief-block-title="комплексные задачи" />
        <BriefBlock>
            <CustomInput
                input-title="Дополнительные решения для проекта"
                input-title-span="*"
                :v-model-variable="'additionalSolutions'"
                :checkbox-list="additionalSolutions"
                :template-type="'checkbox'"
                :rules="'required'"
            />
        </BriefBlock>
    </div>
</template>

<script>
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefBlockTitle from './BriefBlockTitle.vue';
export default {
    components: { BriefBlockTitle, BriefBlock, CustomInput },
    data() {
        return {
            additionalSolutions: require('../../assets/json/additional-solutions.json')
        };
    }
};
</script>
