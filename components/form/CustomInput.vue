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
        </ValidationProvider>
        <ValidationProvider v-if="templateType === 'textarea'" :rules="rules">
            <textarea
                v-model="message"
                class="input"
                v-bind="textareaOtherProps"
                rows="4"
            ></textarea>
        </ValidationProvider>
        <ValidationProvider
            v-if="templateType === 'checkbox' || 'radio'"
            :rules="rules"
        >
            <div class="flex flex-wrap">
                <div
                    v-for="(item, index) in checkboxList"
                    :key="`task-${index}`"
                    :class="[divCheckbox]"
                >
                    <input
                        :id="item.id"
                        v-model="message"
                        :type="templateType"
                        :name="item.title"
                        :value="item.title"
                        class="hidden custom-checkbox"
                    />
                    <label
                        :for="item.id"
                        :class="[' custom-label', checkboxClass]"
                    >
                        <div class="checkbox"></div>
                        {{ item.title }}
                    </label>
                </div>
            </div>
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
        isCheckboxBorder: {
            type: Boolean,
            default: true
        },
        isBlockdivCheckbox: {
            type: Boolean,
            default: false
        },
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
        },
        checkboxList: {
            type: Array,
            default: () => []
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
        },
        checkboxClass() {
            return this.isCheckboxBorder ? 'label-border' : 'label';
        },
        divCheckbox() {
            return this.isBlockdivCheckbox
                ? 'checkbox-block'
                : 'checkbox-inline-block';
        }
    },
    methods: {
        ...mapActions({
            setVal: 'v-model/setVal'
        })
    }
};
</script>

<style lang="scss">
.custom-checkbox:checked + .label-border {
    box-shadow: inset 0px 0px 7.6px rgba(0, 0, 0, 0.25);
    .checkbox {
        &::after {
            opacity: 1;
        }
    }
}

.custom-checkbox:checked + .label {
    .checkbox {
        &::after {
            opacity: 1;
        }
    }
}

.checkbox::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 13px;
    background-image: url('../../assets/img/checked.png');
    top: 1px;
    left: -1px;
    opacity: 0;
}
</style>
