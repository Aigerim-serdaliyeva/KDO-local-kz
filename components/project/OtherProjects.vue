<template>
    <div>
        <div class="container">
            <h3
                class="dark-color max-w-1200px mx-auto font-bold uppercase mb-10px text-18px lg:text-24px lg:mb-20px px-15px xl:px-0"
            >
                Другие проекты
            </h3>
        </div>
        <div class="dark-header bg-#F9FBFD">
            <div class="container">
                <div
                    class="max-w-1280px mx-auto flex flex-wrap border-b border-t border-solid border-#E4E4E4 pt-18px pb-8px 2xl:px-30px"
                >
                    <div
                        v-for="(project, index) in projects"
                        :key="`project-${index}`"
                        class="cursor-pointer mb-10px w-4/12 sm:w-2/12 lg:w-12.5 px-10px"
                        @click="goTo(project)"
                    >
                        <img
                            :src="require(`@/assets/img/project/project-1.jpg`)"
                        />
                        <h3
                            class="dark-color text-center leading-none text-#5D5D5D uppercase font-extrabold text-12px md:text-13px mt-10px"
                        >
                            {{ project.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: require('@/assets/json/projects.json')
        };
    },
    methods: {
        goTo(project) {
            this.$router.push('/' + project.route);
        }
    }
};
</script>
