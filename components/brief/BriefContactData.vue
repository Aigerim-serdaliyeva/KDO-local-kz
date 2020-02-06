<template>
    <div>
        <BriefBlockTitle brief-block-title="КОНТАКТНЫЕ ДАННЫЕ" />
        <BriefBlock>
            <CustomInput
                class="w-48 3xl:w-9/20"
                input-title="ФИО"
                input-title-span="*"
                :v-model-variable="'fullName'"
                :rules="'required'"
            />
            <CustomInput
                class="w-48 3xl:w-9/20"
                input-title="Эл. почта"
                input-title-span="*"
                input-type="email"
                :v-model-variable="'email'"
                :rules="'required|email'"
            />
            <CustomInput
                class="w-48 3xl:w-9/20"
                input-title="Телефон"
                input-title-span="*"
                input-type="tel"
                :v-model-variable="'phone'"
                :rules="'required|numeric|min:11|max:11'"
            />
            <CustomInput
                class="w-48 3xl:w-9/20"
                input-title="Skype"
                :v-model-variable="'skype'"
            />
        </BriefBlock>
    </div>
</template>

<script>
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefBlockTitle from './BriefBlockTitle.vue';
export default {
    components: { BriefBlockTitle, BriefBlock, CustomInput }
};
</script>
