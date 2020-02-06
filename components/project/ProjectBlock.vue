<template>
    <div class="flex flex-wrap justify-between">
        <div
            v-for="(project, index) in projects"
            :key="`project-${index}`"
            class="cursor-pointer mb-25px w-20 px-5px"
            @click.prevent="goTo(project)"
        >
            <img :src="require(`@/assets/img/project/project-1.jpg`)" />
            <div class="border-b border-solid border-#CAE0EF py-18px px-5px">
                <h3
                    class="dark-color text-#5D5D5D uppercase font-extrabold text-18px"
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
            this.$router.push('/' + project.router);
        }
    }
};
</script>
