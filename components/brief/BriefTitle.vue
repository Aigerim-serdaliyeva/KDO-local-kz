<template>
    <div class="container">
        <h2
            class="brief__title relative text-center font-extrabold text-36px uppercase"
        >
            <span class="px-15px">{{ briefTitle }}</span>
            <div
                class="brief__title__before absolute w-full mx-auto max-w-1250px border border-solid border-gray-colorful"
            ></div>
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        briefTitle: {
            type: String
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.brief__title {
    color: #cae0ef;
    z-index: 0;
    span {
        background: #fff;
        z-index: 1;
    }
    &__before {
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        z-index: -1;
    }
}
</style>
