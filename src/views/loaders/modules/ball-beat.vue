<template>
    <div class="loader-ball-beat">
        <div class="loader">
            <div class="loader-inner ball-beat">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    body {
        background-color: #f56151;
    }
    @keyframes ball-beat {
        50% {
            opacity: 0.2;

            transform: scale(0.75);
        }

        100% {
            opacity: 1;

            transform: scale(1);
        }
    }

    .ball-beat > div {
        background-color: #fff;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        margin: 2px;

        animation-fill-mode: both;
        display: inline-block;
        -webkit-animation: ball-beat 0.7s 0s infinite linear;
        animation: ball-beat 0.7s 0s infinite linear;
    }

    .ball-beat > div:nth-child(2n-1) {
        -webkit-animation-delay: 0.35s !important;
        animation-delay: 0.35s !important;
    }

</style>
