<template>
    <div>
        <div
            v-for="(solution, index) in solutionsProject"
            :key="`task-${index}`"
            class="mr-15px mb-15px"
        >
            <input
                v-model="solution.checked"
                type="checkbox"
                name="selected"
                :value="solution.title"
                class="label-input"
            />
            <label class="label">
                {{ solution.title }}
            </label>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({})
    }
};
</script>
