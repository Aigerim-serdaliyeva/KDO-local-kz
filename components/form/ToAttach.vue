<template>
    <ValidationProvider>
        <div class="mb-25px">
            <h2 class="input-title dark-color">
                Файлы
                <span
                    class="italic font-normal text-gray-text text-14px ml-15px dark-color"
                    >Конкретные графические изображения, брэндбук (просьба
                    заранее проверять актуальность прекрепляемого
                    материала).</span
                >
            </h2>

            <input
                id="attachment-files"
                ref="itemFile"
                type="file"
                multiple
                class="hidden invisible"
                @change="attachFiles($event)"
            />

            <div class="flex flex-wrap w-6/12">
                <article
                    v-for="(item, index) in attachments"
                    :key="`attachments-${index}`"
                    class="mb-15px mr-15px"
                >
                    <div class="flex items-center dark-color">
                        <img src="../../assets/img/attached-file.svg" />
                        <p class="mx-5px">{{ item.name }}</p>
                        <img
                            class="cursor-pointer"
                            src="../../assets/img/file-delete.svg"
                            @click="deleteFiles(index)"
                        />
                    </div>
                </article>
            </div>

            <label for="attachment-files" class="attach dark-color"
                >Прикрепить
                <img
                    src="../../assets/img/attach-file.svg"
                    class="ml-10px inline dark-img-none"
                />
                <img
                    src="../../assets/img/attach-file-white.svg"
                    class="ml-10px inline dark-img hidden"
                />
            </label>
        </div>
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
