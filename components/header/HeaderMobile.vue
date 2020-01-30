<template>
    <div>
        <div class="container header bg-header-back  fixed z-50">
            <div class="py-5px">
                <nuxt-link
                    to="/"
                    class="text-center mx-auto block py-5px w-40px"
                >
                    <img src="@/assets/img/logo.svg" class="mx-auto" />
                </nuxt-link>
                <div class="absolute top-22px right-17px" @click="toggleMenu()">
                    <div class="burger" :class="{ checked: isChecked }">
                        <div class="burger__inner burger__inner--1"></div>
                        <div class="burger__inner burger__inner--2"></div>
                        <div class="burger__inner burger__inner--3"></div>
                    </div>
                </div>
            </div>
            <div class="header__bottom__border"></div>
        </div>

        <div
            class="header-mobile z-20 w-full h-auto fixed flex flex-col bg-center pt-70px"
            :class="{ active: mobileMenuState }"
        >
            <MainMenu @onSelectItem="closeMenu" />
            <HeaderButton />
        </div>
    </div>
</template>

<script>
import HeaderButton from './HeaderButton.vue';
import MainMenu from './MainMenu.vue';

export default {
    components: { MainMenu, HeaderButton },
    data() {
        return {
            mobileMenuState: false,
            isChecked: false
        };
    },
    methods: {
        toggleMenu() {
            this.mobileMenuState = !this.mobileMenuState;
            this.isChecked = !this.isChecked;
        },
        closeMenu() {
            this.mobileMenuState = false;
            this.isChecked = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.header-mobile {
    background-color: #fff;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
    transform: translateY(-100%);
    transition: 0.4s all ease-in-out;
    &.active {
        transform: translateY(0);
    }
}
.header {
}

.burger {
    width: 25px;
    height: 25px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;
    &__inner {
        position: absolute;
        width: 25px;
        height: 3px;
        background: #4d97c8;
        border-radius: 6px;
        margin-bottom: 3px;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
        &--2 {
            top: 6px;
        }
        &--3 {
            top: 12px;
        }
    }
    &.checked {
        .burger__inner {
            &--1 {
                top: 6px;
                transform: rotate(135deg);
            }
            &--2 {
                opacity: 0;
            }
            &--3 {
                top: 6px;
                transform: rotate(-135deg);
            }
        }
    }
}
</style>
