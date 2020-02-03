<template>
    <div>
        <BriefTitle brief-title="Дизайн и материалы" />
        <BriefBlock>
            <CustomInput
                input-title="Настроение и ассоциации, которые должен вызывать
                            дизайн"
                input-title-span="*"
                :v-model-variable="'designMaterials'"
                :checkbox-list="designMaterials"
                :template-type="'radio'"
            />

            <CustomInput
                input-title="Внешний вид сайта"
                input-title-span="*"
                :v-model-variable="'siteAppearance'"
                :checkbox-list="siteAppearance"
                :template-type="'checkbox'"
                :is-checkbox-border="false"
            />

            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Наличие / расположение блоков на главной странице (какие блоки должны быть виднее всего)"
                :v-model-variable="'visibleMenu'"
            />

            <div class="flex flex-wrap">
                <CustomInput
                    input-title="Дизайн"
                    :v-model-variable="'designStage'"
                    :checkbox-list="designStage"
                    :template-type="'checkbox'"
                    :is-checkbox-border="false"
                    :is-blockdiv-checkbox="true"
                    class="w-6/12"
                />

                <CustomInput
                    input-title="Фирменный стиль"
                    :v-model-variable="'brandStyle'"
                    :checkbox-list="brandStyle"
                    :template-type="'checkbox'"
                    :is-checkbox-border="false"
                    :is-blockdiv-checkbox="true"
                    class="w-6/12"
                />
            </div>
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
            designMaterials: require('../../assets/json/design-materials.json'),
            designStage: require('../../assets/json/design-stage.json'),
            siteAppearance: require('../../assets/json/site-appearance.json'),
            brandStyle: require('../../assets/json/brand-style.json')
        };
    }
};
</script>
