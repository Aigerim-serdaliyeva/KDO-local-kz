<template>
    <div class="pt-50px md:pt-170px md:pb-100px">
        <div class="max-w-1150px mx-auto">
            <ContactMap />
            <div
                class="md:flex text-center p-30px border-b border-solid border-#CAE0EF dark-color md:text-left"
            >
                <div class="w-4/12 hidden md:block">
                    <nuxt-link to="/">
                        <img
                            src="../../assets/img/logo-gray.svg"
                            class="dark-img-none"
                        />
                        <img
                            src="../../assets/img/logo-white.svg"
                            class="dark-img hidden"
                        />
                    </nuxt-link>
                </div>
                <div class=" md:w-4/12">
                    <div class="mb-15px text-14px md:mb-20px">
                        <span class="font-bold">Адрес:</span>
                        Варламова 33 ЖК “Жагалау”
                    </div>
                    <div class="mb-15px text-14px">
                        <span class="font-bold">Мобильный:</span>
                        <a id="phone_number" href="tel:+77012570030">
                            +7 701 257 00 30</a
                        >
                    </div>
                </div>
                <div class=" md:w-4/12">
                    <div class="text-14px md:mb-20px">
                        <span class="font-bold">Email:</span>
                        <a href="info@kazdevops.kz">info@kazdevops.kz</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactMap from '../../components/contact/ContactMap.vue';
export default {
    components: { ContactMap }
};
</script>
