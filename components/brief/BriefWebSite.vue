<template>
    <div>
        <BriefTitle id="brief-title-website" brief-title="ВЕБ-САЙТ" />
        <BriefBlock>
            <CustomInput
                input-title="Предполагаемый тип сайта"
                input-title-span="*"
                :v-model-variable="'estimatedSites'"
                :checkbox-list="estimatedSites"
                :template-type="'radio'"
                :rules="'required'"
            />

            <CustomInput
                input-title="Задачи сайта"
                input-title-span="*"
                :v-model-variable="'tasksSite'"
                :checkbox-list="tasksSite"
                :template-type="'checkbox'"
                :rules="'required'"
            />

            <CustomInput
                class="w-full"
                input-title="Предпологаемое название сайта"
                input-title-span="*"
                :v-model-variable="'estimatedSiteName'"
                :rules="'required'"
            />

            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Предполагаемые пункты меню"
                input-title-span="*"
                input-title-clarify="Через запятую. Пример: О нас, Контакты и т.д."
                :v-model-variable="'estimatedMenu'"
                :rules="'required'"
            />

            <CustomInput
                class="w-full"
                template-type="textarea"
                input-title="Основные требования и пожеланию по функционалу сайта"
                input-title-span="*"
                input-title-clarify="Укажите все, что, с Вашей точки зрения, может уточнить задачу по разработке сайта."
                :v-model-variable="'mainRequirements'"
                :rules="'required'"
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
