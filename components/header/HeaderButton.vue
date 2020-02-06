<template>
    <div class="flex flex-row-reverse md:flex-row">
        <div>
            <div class="button-change bg-0A3857" @click="changeTheme(false)">
                <img src="@/assets/img/light.png" alt="" />
            </div>
            <div class="button-change bg-164D72 " @click="changeTheme(true)">
                <img src="@/assets/img/dark.png" alt="" />
            </div>
        </div>
        <button class="button">Заказать услугу</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            changeTheme: 'theme/changeTheme'
        })
    }
};
</script>
