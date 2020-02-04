<template>
    <div>
        <BriefTitle brief-title="Файлы и примеры" />
        <BriefBlock>
            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Примеры удачных сайтов, цветов, расположения элементов (не менее 2-х)"
                input-title-span="*"
                :v-model-variable="'exampleSite'"
                :rules="'required'"
            />

            <ToAttach />

            <CustomInput
                input-title="Дальнейшее развитие и дополнительные услуги"
                :v-model-variable="'additionalServices'"
                :checkbox-list="additionalServices"
                :template-type="'checkbox'"
            />

            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Ваши пожелания"
                :v-model-variable="'yourWishes'"
            />
        </BriefBlock>
    </div>
</template>

<script>
import ToAttach from '../form/ToAttach.vue';
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefTitle from './BriefTitle.vue';
export default {
    components: { BriefTitle, BriefBlock, CustomInput, ToAttach },
    data() {
        return {
            additionalServices: require('../../assets/json/additional-services.json')
        };
    }
};
</script>
