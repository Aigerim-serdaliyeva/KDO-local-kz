<template>
    <div
        class="page-top hidden cursor-pointer fixed -bottom-20px -right-20px lg:bottom-20px lg:right-0 opacity-50"
    >
        <div @click="pageTop()">
            <svg
                width="130"
                height="151"
                viewBox="0 0 130 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d)">
                    <path
                        d="M40 36H90V81.1754C90 94.9826 78.8071 106.175 65 106.175C51.1929 106.175 40 94.9826 40 81.1754V36Z"
                        fill="#4D97C8"
                    />
                </g>
                <path
                    d="M56.5252 81C55.805 81 55.321 80.2617 55.6081 79.6013L64.0829 60.1093C64.4315 59.3076 65.5685 59.3076 65.9171 60.1093L74.3919 79.6013C74.679 80.2617 74.195 81 73.4748 81H56.5252Z"
                    fill="white"
                />
                <defs>
                    <filter
                        id="filter0_d"
                        x="0"
                        y="0"
                        width="130"
                        height="150.175"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="20" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.670833 0 0 0 0 0.670833 0 0 0 0 0.670833 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        pageTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
</script>

<style lang="scss" scoped>
.page-top {
    transition: all 0.5s ease;
    &.active {
        display: block;
    }
    &:hover {
        opacity: 1;
    }
}
</style>
