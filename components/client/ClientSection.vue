<template>
    <div class="container section">
        <div class="flex flex-wrap justify-center mx-auto max-w-1180px">
            <div
                v-for="(client, index) in clients"
                :key="`client-${index}`"
                class="bg-client-back flex items-center justify-center w-full max-w-230px mb-10px h-165px sm:max-w-273px sm:h-195px sm:mx-10px sm:mb-20px"
            >
                <a :href="client.href" target="_blank">
                    <img
                        :src="
                            require(`@/assets/img/clients/client-${index +
                                1}.png`)
                        "
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clients: require('@/assets/json/clients.json')
        };
    }
};
</script>
