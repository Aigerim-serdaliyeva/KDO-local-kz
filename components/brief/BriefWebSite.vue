<template>
    <div>
        <BriefTitle brief-title="ВЕБ-САЙТ" />
        <BriefBlock>
            <CustomInput
                input-title="Предполагаемый тип сайта"
                input-title-span="*"
                :v-model-variable="'estimatedSites'"
                :checkbox-list="estimatedSites"
                :template-type="'radio'"
            />

            <CustomInput
                input-title="Задачи сайта"
                input-title-span="*"
                :v-model-variable="'tasksSite'"
                :checkbox-list="tasksSite"
                :template-type="'checkbox'"
            />

            <CustomInput
                class="w-full"
                input-title="Предпологаемое название сайта"
                input-title-span="*"
                :v-model-variable="'estimatedSiteName'"
            />
            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Предполагаемые пункты меню"
                input-title-span="*"
                input-title-larify="Через запятую. Пример: О нас, Контакты и т.д."
                :v-model-variable="'estimatedMenu'"
            />
            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Основные требования и пожеланию по функционалу сайта"
                input-title-span="*"
                input-title-larify="Укажите все, что, с Вашей точки зрения, может уточнить задачу по разработке сайта."
                :v-model-variable="'mainRequirements'"
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
            estimatedSites: require('../../assets/json/estimated-site.json'),
            tasksSite: require('../../assets/json/tasks-site.json')
        };
    }
};
</script>
