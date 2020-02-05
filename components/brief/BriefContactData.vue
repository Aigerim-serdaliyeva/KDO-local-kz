<template>
    <div>
        <BriefTitle brief-title="КОНТАКТНЫЕ ДАННЫЕ" />
        <BriefBlock>
            <CustomInput
                class="w-9/20"
                input-title="ФИО"
                input-title-span="*"
                :v-model-variable="'fullName'"
                :rules="'required'"
            />
            <CustomInput
                class="w-9/20"
                input-title="Эл. почта"
                input-title-span="*"
                input-type="email"
                :v-model-variable="'email'"
                :rules="'required|email'"
            />
            <CustomInput
                :v-mask="'8(###)-###-##-##'"
                class="w-9/20"
                input-title="Телефон"
                input-title-span="*"
                input-type="tel"
                :v-model-variable="'phone'"
                :rules="'required|numeric|min:11'"
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
