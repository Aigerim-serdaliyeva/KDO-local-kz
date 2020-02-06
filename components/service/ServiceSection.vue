<template>
    <div class="container section">
        <div class="flex flex-wrap max-w-1200px mx-auto">
            <div
                v-for="(service, index) in services"
                :key="`service-${index}`"
                class="text-center text-#5D5D5D dark-color mb-50px lg:mb-80px md:px-30px md:w-6/12 xl:w-4/12"
            >
                <img
                    :src="
                        require(`@/assets/img/service/service-${index + 1}.png`)
                    "
                    class="mx-auto mb-20px"
                />
                <h2 class="font-bold mb-14px text-18px">{{ service.title }}</h2>
                <p class="font-light text-14px">{{ service.text }}</p>
            </div>
        </div>
        <nuxt-link to="/brief" class="button-round">Заказать услугу</nuxt-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: require('@/assets/json/service.json')
        };
    }
};
</script>

<style lang="scss" scoped></style>
