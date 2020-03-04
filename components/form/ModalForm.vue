<template>
    <div
        class="bg-blue-back shadow text-white text-center w-full mx-auto max-w-785px p-40px"
    >
        <slot name="img"></slot>
        <h3 class="mb-10px text-24px font-bold">
            {{ title }}
        </h3>
        <p class="font-normal mb-20px text-16px">
            {{ text }}
        </p>
        <p class="text-12px text-white-colorful mb-15px -mt-10px">
            {{ textMin }}
        </p>
        <div class="flex justify-center w-8/12 mx-auto">
            <slot name="btn"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        textMin: {
            type: String,
            default: ''
        }
    }
};
</script>
