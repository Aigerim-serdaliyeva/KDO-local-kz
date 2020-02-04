<template>
    <div>
        <BriefTitle brief-title="Общая информация" />
        <BriefBlock>
            <CustomInput
                class="w-9/20"
                input-title="Название компании"
                input-title-span="*"
                :v-model-variable="'companyName'"
                :rules="'required'"
            />
            <CustomInput
                class="w-9/20"
                input-title="Сфера деятельности"
                input-title-span="*"
                :v-model-variable="'companySphere'"
                :rules="'required'"
            />
            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Дополнительная информация о компании"
                :v-model-variable="'companyData'"
            />
            <CustomInput
                class="w-9/20"
                input-title="Существующий сайт"
                input-title-bracket="(если имеется)"
                :v-model-variable="'existingSite'"
            />
            <div class="w-full"></div>
            <CustomInput
                class="w-9/20"
                template-type="textarea"
                input-title="Основные группы продукции и/или услуг"
                input-title-span="*"
                :v-model-variable="'companyMainGroup'"
                :rules="'required'"
            />
            <CustomInput
                class="w-9/20"
                template-type="textarea"
                input-title="Каково основное достоинство продукта/услуги?"
                input-title-span="*"
                :v-model-variable="'companyMainVirtue'"
            />
        </BriefBlock>
    </div>
</template>

<script>
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefTitle from './BriefTitle.vue';
export default {
    components: { BriefTitle, BriefBlock, CustomInput }
};
</script>
