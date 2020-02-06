<template>
    <ul class="md:flex md:justify-between w-full max-w-470px">
        <li class="text-center" @click="select">
            <nuxt-link
                to="/blog"
                class="dark-menu-link main-menu-link"
                active-class="active"
                >Блог</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/services"
                class="dark-menu-link main-menu-link"
                active-class="active"
                >Услуги</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/client"
                class="dark-menu-link main-menu-link"
                active-class="active"
                >Клиенты</nuxt-link
            >
        </li>
        <li class="text-center" @click="select">
            <nuxt-link
                to="/contacts"
                class="dark-menu-link main-menu-link"
                active-class="active"
                >Контакты</nuxt-link
            >
        </li>
    </ul>
</template>

<script>
export default {
    methods: {
        select() {
            this.$emit('onSelectItem');
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    .main-menu-link {
        border-bottom: 3px solid transparent;
        &.active,
        &:hover {
            border-bottom: 3px solid #4d97c8 !important;
        }
    }
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 768px) {
    ul {
        .main-menu-link {
            border: none !important;
            &.active,
            &:hover {
                border: none !important;
                background: #f9fbfd;
            }
        }

        .dark-menu-link {
            border: none !important;
            &.active,
            &:hover {
                border: none !important;
                background: rgba(255, 255, 255, 0.1);
            }
        }
    }
}
</style>
