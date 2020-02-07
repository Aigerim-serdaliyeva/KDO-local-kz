<template>
    <div class="mb-20px">
        <p class="dark-color hidden md:block font-normal mb-15px text-18px">
            {{ blogsTitle }}
        </p>
        <div
            class="md:border-t md:border-b md:border-solid md:border-#E4E4E4 pt-15px pb-5px"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        blogsTitle: {
            type: String
        }
    }
};
</script>
