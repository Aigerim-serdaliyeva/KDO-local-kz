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
                    <div class="flex items-center flex-wrap mb-25px">
                        <InputTitle
                            input-title="Предполагаемый тип сайта"
                            input-title-span="*"
                        />
                        <div
                            v-for="(site, index) in estimatedSites"
                            :key="`site-${index}`"
                            class="mr-15px mb-15px"
                        >
                            <label class="label">
                                <input
                                    v-model="site.checked"
                                    type="checkbox"
                                    :name="`estimatedSite-${index + 1}`"
                                    :value="true"
                                    class="label-input"
                                />
                                {{ site.title }}
                            </label>
                        </div>
                    </div>

                    <div class="flex items-center flex-wrap mb-25px">
                        <InputTitle
                            input-title="Задачи сайта"
                            input-title-span="*"
                        />
                        <div
                            v-for="(task, index) in tasksSite"
                            :key="`task-${index}`"
                            class="mr-15px mb-15px"
                        >
                            <label class="label">
                                <input
                                    v-model="task.checked"
                                    type="checkbox"
                                    :name="`taskSite-${index + 1}`"
                                    :value="true"
                                    class="label-input"
                                />
                                {{ task.title }}
                            </label>
                        </div>
                    </div>

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
                    <div class="flex items-center flex-wrap mb-25px">
                        <InputTitle
                            input-title="Настроение и ассоциации, которые должен вызывать
                            дизайн"
                            input-title-span="*"
                        />
                        <div
                            v-for="(material, index) in designMaterials"
                            :key="`material-${index}`"
                            class="mr-15px mb-15px"
                        >
                            <label class="label">
                                <input
                                    v-model="material.checked"
                                    type="checkbox"
                                    :name="`material-${index + 1}`"
                                    :value="true"
                                    class="label-input"
                                />
                                {{ material.title }}
                            </label>
                        </div>
                    </div>

                    <CustomInput
                        class="w-full"
                        template-type="textarea"
                        input-title="Наличие / расположение блоков на главной странице (какие блоки должны быть виднее всего)"
                        :v-model-variable="'visibleMenu'"
                    />
                </BriefBlock>

                <BriefTitle brief-title="комплексные задачи" />
                <BriefBlock>
                    <InputTitle
                        input-title="Дополнительные решения для проекта"
                        input-title-span="*"
                    />
                    <div
                        v-for="(solution, index) in solutionsProject"
                        :key="`task-${index}`"
                    >
                        <label class="label">
                            <input
                                v-model="solution.checked"
                                type="checkbox"
                                name="selected"
                                :value="true"
                                class="label-input"
                            />
                            {{ solution.title }}
                        </label>
                    </div>
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

                    <div class="flex items-center flex-wrap mb-25px">
                        <InputTitle
                            input-title="Дальнейшее развитие и дополнительные услуги"
                        />
                        <div
                            v-for="(service, index) in additionalServices"
                            :key="`service-${index}`"
                            class="mr-15px mb-15px"
                        >
                            <label class="label">
                                <input
                                    v-model="service.checked"
                                    type="checkbox"
                                    :name="`material-${index + 1}`"
                                    :value="true"
                                    class="label-input"
                                />
                                {{ service.title }}
                            </label>
                        </div>
                    </div>

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
            solutionsProject: require('../../assets/json/solutions-project.json'),
            estimatedSites: require('../../assets/json/estimated-site.json'),
            tasksSite: require('../../assets/json/tasks-site.json'),
            designMaterials: require('../../assets/json/design-materials.json'),
            additionalServices: require('../../assets/json/additional-services.json')
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
