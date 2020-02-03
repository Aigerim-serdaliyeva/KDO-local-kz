<template>
    <div>
        <BriefTitle brief-title="КОНТАКТНЫЕ ДАННЫЕ" />
        <BriefBlock>
            <CustomInput
                class="w-9/20"
                input-title="ФИО"
                input-title-span="*"
                :v-model-variable="'fullName'"
            />
            <CustomInput
                class="w-9/20"
                :rules="'required|email'"
                input-title="Эл. почта"
                input-title-span="*"
                input-type="email"
                :v-model-variable="'email'"
            />
            <CustomInput
                class="w-9/20"
                input-title="Телефон"
                input-title-span="*"
                input-type="tel"
                :v-model-variable="'phone'"
            />
            <CustomInput
                class="w-9/20"
                input-title="Skype"
                :v-model-variable="'skype'"
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
