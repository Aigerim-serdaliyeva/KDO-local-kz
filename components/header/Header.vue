<template>
    <div class="header dark-header bg-#F9FBFD z-10 w-full py-5px sm:py-0 fixed">
        <div class="container">
            <div class="mx-auto flex items-center sm:justify-between">
                <nuxt-link to="/">
                    <img src="@/assets/img/logo.svg" class="dark-img-none" />
                    <img
                        src="@/assets/img/logo-dark.svg"
                        class="dark-img hidden"
                    />
                </nuxt-link>
                <MainMenu class="hidden md:block ml-145px" />
                <div class="flex-grow"></div>
                <HeaderButton />
            </div>
        </div>
        <div class="px-15px">
            <div class="header__bottom__border"></div>
        </div>
    </div>
</template>

<script>
import HeaderButton from './HeaderButton.vue';
import MainMenu from './MainMenu.vue';
export default {
    components: { MainMenu, HeaderButton }
};
</script>

<style lang="scss">
.header {
    &__bottom__border {
        border: 2px solid rgba(70, 169, 201, 0.2);
        max-width: 1890px;
        width: 100%;
    }
}
</style>
