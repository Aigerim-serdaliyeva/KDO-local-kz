<template>
    <div class="flex flex-wrap">
        <div
            v-for="(project, index) in projects"
            :key="`project-${index}`"
            class="cursor-pointer mx-auto mb-25px sm:px-5px md:mx-0 sm:w-6/12 md:w-3/12 lg:w-20"
            :class="{ 'w-full md:w-6/12 lg:w-40': project.bigImg }"
            @click.prevent="goTo(project)"
        >
            <img
                :src="require(`@/assets/img/project/project-${index + 1}.jpg`)"
            />
            <div
                class="border-b border-solid border-#CAE0EF py-18px px-25px sm:px-5px"
            >
                <h3
                    class="dark-color text-#5D5D5D uppercase font-extrabold text-16px md:text-15px  3xl:text-18px"
                >
                    {{ project.title }}
                </h3>
                <p
                    class="dark-color font-normal font-light text-14px text-black"
                >
                    {{ project.text }}
                </p>
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
