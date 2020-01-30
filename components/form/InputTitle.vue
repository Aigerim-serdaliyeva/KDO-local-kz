<template>
    <div class="input-title">
        {{ inputTitle }}<span class="text-color-red">{{ inputTitleSpan }}</span>
        <span class="font-light">{{ inputTitleBracket }}</span>
        <span class="text-14px italic font-normal ml-15px">
            {{ inputTitleLarify }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
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
    }
};
</script>
