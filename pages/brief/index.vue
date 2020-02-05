<template>
    <div class="section">
        <BriefHeader />
        <BriefSection />
    </div>
</template>

<script>
import BriefSection from '../../components/brief/BriefSection.vue';
import BriefHeader from '../../components/brief/BriefHeader.vue';
export default {
    components: { BriefHeader, BriefSection },
    mounted() {
        const scene = this.$scrollmagic
            .scene({
                offset: 0,
                triggerElement: '#brief-header',
                triggerHook: 'onLeave'
            })
            .setClassToggle('.clear-form', 'active');

        this.$scrollmagic.addScene(scene);
    },
    destroyed() {
        this.$scrollmagic.destroy();
    }
};
</script>
