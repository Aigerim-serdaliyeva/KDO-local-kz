<template>
    <div>
        <h3
            class="dark-color max-w-1200px mx-auto font-bold uppercase text-24px mb-20px"
        >
            Другие проекты
        </h3>
        <div class="dark-header bg-#F9FBFD">
            <div class="container">
                <div
                    class="max-w-1280px mx-auto flex flex-wrap border-b border-t border-solid border-#E4E4E4 pt-18px pb-8px px-30px"
                >
                    <div
                        v-for="(project, index) in projects"
                        :key="`project-${index}`"
                        class="cursor-pointer mb-10px w-12.5 px-10px"
                    >
                        <img
                            :src="require(`@/assets/img/project/project-1.jpg`)"
                        />
                        <h3
                            class="dark-color text-center leading-none text-#5D5D5D uppercase font-extrabold text-13px mt-10px"
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
    }
};
</script>
