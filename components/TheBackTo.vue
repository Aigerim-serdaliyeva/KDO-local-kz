<template>
    <nuxt-link
        :to="to"
        class="cursor-pointer dark-color flex items-center underline text-14px md:text-16px 2xl:text-18px"
    >
        <img src="../assets/img/arrow-left.png" class="mr-5px dark-img-none" />
        <img
            src="../assets/img/arrow-left-white.png"
            class="mr-5px dark-img hidden"
        />
        {{ backTo }}
    </nuxt-link>
</template>

<script>
export default {
    props: {
        backTo: {
            type: String,
            default: ''
        },
        to: {
            type: String,
            default: '/'
        }
    }
    // class="dark-color center-absolute flex items-center underline block mt-15px mb-10px text-14px lg:my-0 lg:text-16px lg:absolute"
};
</script>
