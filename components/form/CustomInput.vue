<template>
    <div class="mb-25px">
        <div class="input-title">
            {{ inputTitle
            }}<span class="text-color-red">{{ inputTitleSpan }}</span>
            <span class="font-light">{{ inputTitleBracket }}</span>
            <span class="text-14px italic font-normal ml-15px">
                {{ inputTitleLarify }}
            </span>
        </div>
        <ValidationProvider v-if="templateType === 'input'" :rules="rules">
            <input
                v-model="message"
                class="input"
                :type="inputType"
                v-bind="inputOthersProps"
            />
            <!-- {{ message }} -->
        </ValidationProvider>
        <ValidationProvider v-if="templateType === 'textarea'" :rules="rules">
            <textarea
                v-model="message"
                class="input"
                v-bind="textareaOtherProps"
                rows="4"
            ></textarea>
        </ValidationProvider>
    </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { mapActions } from 'vuex';
export default {
    components: {
        ValidationProvider
    },
    props: {
        templateType: {
            type: String,
            default: 'input'
        },
        vModelVariable: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text'
        },
        inputOthersProps: {
            type: Object,
            default: () => ({})
        },
        textareaOtherProps: {
            type: Object,
            default: () => ({})
        },
        rules: {
            type: String,
            default: 'required'
        },
        inputTitle: {
            type: String
        },
        inputTitleSpan: {
            type: String
        },
        inputTitleBracket: {
            type: String
        },
        inputTitleLarify: {
            type: String
        }
    },
    computed: {
        message: {
            get() {
                return this.$store.state['v-model'][this.vModelVariable];
                // return this.$store.state['v-model']['email'];
                // return this.$store.state.vModel.email
            },
            set(val) {
                this.setVal({ val, variable: this.vModelVariable });
            }
        }
    },
    methods: {
        ...mapActions({
            setVal: 'v-model/setVal'
        })
    }
};
</script>
