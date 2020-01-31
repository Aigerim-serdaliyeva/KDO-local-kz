<template>
    <ValidationProvider :rules="rules">
        <input />
    </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
    components: { ValidationProvider },
    data() {
        return {
            attachments: []
        };
    },
    methods: {
        attachFiles(e) {
            const selectedFiles = e.target.files;
            if (!selectedFiles.length) {
                return false;
            }
            for (let i = 0; i < selectedFiles.length; i++) {
                this.attachments.push(selectedFiles[i]);
            }
            this.$emit('update:vModel', this.attachments);
        },
        deleteFiles(index) {
            this.attachments.splice(index, 1);
        }
    }
};
</script>
