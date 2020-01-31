<template>
    <div>
        <ValidationObserver>
            <form>
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

                <BriefTitle brief-title="Общая информация" />
                <BriefBlock>
                    <CustomInput
                        class="w-9/20"
                        input-title="Название компании"
                        input-title-span="*"
                        :v-model-variable="'companyName'"
                    />
                    <CustomInput
                        class="w-9/20"
                        input-title="Сфера деятельности"
                        input-title-span="*"
                        :v-model-variable="'companySphere'"
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
                    />
                    <CustomInput
                        class="w-9/20"
                        template-type="textarea"
                        input-title="Каково основное достоинство продукта/услуги?"
                        input-title-span="*"
                        :v-model-variable="'companyMainVirtue'"
                    />
                </BriefBlock>

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

                <BriefTitle brief-title="комплексные задачи" />
                <BriefBlock>
                    <InputTitle
                        input-title="Дополнительные решения для проекта"
                        input-title-span="*"
                    />
                    <CustomInput
                        :v-model-variable="'additionalSolutions'"
                        :checkbox-list="additionalSolutions"
                        :template-type="'checkbox'"
                    />
                </BriefBlock>

                <BriefTitle brief-title="Файлы и примеры" />
                <BriefBlock>
                    <CustomInput
                        class="w-full"
                        template-type="textarea"
                        input-title="Примеры удачных сайтов, цветов, расположения элементов (не менее 2-х)"
                        input-title-span="*"
                        :v-model-variable="'exampleSite'"
                    />

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

                <div class="max-w-1170px w-full mx-auto text-right">
                    <button class="button-brief">Завершить и отправить</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import InputTitle from '../form/InputTitle.vue';
import CustomInput from '../form/CustomInput.vue';
import BriefBlock from './BriefBlock.vue';
import BriefTitle from './BriefTitle.vue';
export default {
    components: {
        ValidationObserver,
        ValidationProvider,
        BriefTitle,
        BriefBlock,
        CustomInput,
        InputTitle
    },
    data() {
        return {
            additionalSolutions: require('../../assets/json/additional-solutions.json'),
            estimatedSites: require('../../assets/json/estimated-site.json'),
            tasksSite: require('../../assets/json/tasks-site.json'),
            designMaterials: require('../../assets/json/design-materials.json'),
            additionalServices: require('../../assets/json/additional-services.json'),
            siteAppearance: require('../../assets/json/site-appearance.json'),
            designStage: require('../../assets/json/design-stage.json'),
            brandStyle: require('../../assets/json/brand-style.json')
        };
    }
};
</script>

<style lang="scss" scoped>
.label {
    &.active,
    &:hover {
        box-shadow: inset 0px 0px 7.6px rgba(0, 0, 0, 0.25);
    }
}
</style>
