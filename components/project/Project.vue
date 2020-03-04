<template>
    <div>
        <div class="max-w-1280px mx-auto px-15px relative xl:px-0">
            <BackTo
                back-to="Вернуться к проектам"
                class="lg:absolute center-absolute"
            />
            <h2
                class="dark-color font-bold uppercase text-center leading-tight mb-10px text-36px lg:mb-20px lg:text-48px"
            >
                {{ getInfo.title }}
            </h2>
        </div>
        <div
            class="max-w-1280px mx-auto border-b border-t border-solid border-#E4E4E4 px-30px py-20px mb-40px"
        >
            <div class="border-b border-solid border-#E4E4E4 mb-20px">
                <img
                    src="../../assets/img/project/project-1.jpg"
                    class="mx-auto mb-20px"
                />
            </div>
            <p class="dark-color text-16px xl:text-18px">
                {{ getInfo.text }}
            </p>
        </div>
    </div>
</template>

<script>
import BackTo from '../BackTo.vue';
export default {
    components: { BackTo },
    data() {
        return {
            projects: require('@/assets/json/projects.json'),
            projectsInfo: require('@/assets/json/projects-info.json')
        };
    },
    computed: {
        getInfo() {
            const { path } = this.$router.currentRoute;
            const cleanedPath = path.split('/').join('');
            return this.projectsInfo[cleanedPath];
        }
    }
};
</script>
