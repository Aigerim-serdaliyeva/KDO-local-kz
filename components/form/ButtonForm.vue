<template>
    <div class="max-w-1170px w-full mx-auto text-right">
        <button type="submit" class="button-brief" @click="showModal">
            Завершить и отправить
        </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    methods: {
        ...mapMutations({
            showModal: 'modal/showModal'
        })
    }
};
</script>
