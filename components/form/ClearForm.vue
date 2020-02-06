<template>
    <div
        class="clear-form hidden fixed cursor-pointer"
        @click="showModal('ModalClearForm')"
    >
        <svg
            width="37"
            height="50"
            viewBox="0 0 37 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mx-auto"
        >
            <path
                d="M4.62686 15.8069H16.1898V4.51484H32.3767V45.1641H4.62686V15.8069ZM11.5637 5.45141V11.2888H5.57276L11.5637 5.45141ZM0 49.6791H37V0H10.6144L0 10.3555V49.6791Z"
                fill="#CAE0EF"
            />
            <path
                d="M23.1874 22.6791L18.9888 26.5794L14.7931 22.6791L12 25.2798L16.1981 29.1775L12 33.0778L14.7931 35.6791L18.9888 31.7788L23.1874 35.6791L26 33.0778L21.7824 29.1775L26 25.2798L23.1874 22.6791Z"
                fill="#CAE0EF"
                class="path-x"
            />
        </svg>
        <div class="dark-color text-gray-text text-14px 2xl:text-16px mt-10px">
            Очистить форму
        </div>
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

<style lang="scss" scoped>
.clear-form {
    top: 50%;
    left: calc(50% - 755px);
    transform: translateY(-50%);
    transition: all 0.5s ease;

    &.active {
        display: block;
    }

    &:hover {
        opacity: 1;
        .path-x {
            fill: #ff3f3f;
        }
    }
}

@media screen and (max-width: 1490px) {
    .clear-form {
        left: calc(50% - 670px);
    }
}

@media screen and (max-width: 1360px) {
    .clear-form {
        left: calc(50% - 600px);
    }
}
</style>
