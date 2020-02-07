<template>
    <div>
        <div class="max-w-1280px mx-auto px-15px relative xl:px-0">
            <nuxt-link
                to="/"
                class="dark-color center-absolute flex items-center underline block mt-15px mb-10px text-14px lg:my-0 lg:text-16px lg:absolute"
            >
                <img
                    src="../../assets/img/arrow-left.png"
                    class="mr-5px dark-img-none"
                />
                <img
                    src="../../assets/img/arrow-left-white.png"
                    class="mr-5px dark-img hidden"
                />
                Вернуться к проектам
            </nuxt-link>
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
export default {
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
