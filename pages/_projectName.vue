<template>
    <div class="pt-80px pb-30px md:pb-70px md:pt-120px">
        <Project />

        <OtherProjects />
    </div>
</template>

<script>
import Project from '../components/project/Project.vue';
import OtherProjects from '../components/project/OtherProjects.vue';
export default {
    components: { OtherProjects, Project }
};
</script>
