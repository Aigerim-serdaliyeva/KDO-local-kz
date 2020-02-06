<template>
    <div class="pt-120px pb-70px">
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
