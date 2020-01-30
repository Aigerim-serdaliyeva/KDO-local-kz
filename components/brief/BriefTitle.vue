<template>
    <h2
        class="brief__title relative text-center font-extrabold text-36px uppercase "
    >
        {{ briefTitle }}
    </h2>
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
    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 390px;
        height: 2px;
        background: #f1f1f1;
        top: 50%;
        transform: translateY(-50%);
    }
    &:before {
        left: 18%;
    }
    &:after {
        right: 18%;
    }
}
</style>
