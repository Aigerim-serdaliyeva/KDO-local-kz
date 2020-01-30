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
    components: { BriefHeader, BriefSection }
};
</script>
