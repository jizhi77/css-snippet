<template>
    <div class="loader-sk-wave">
        <div class="sk-wave">
            <div class="sk-rect sk-rect1"></div>
            <div class="sk-rect sk-rect2"></div>
            <div class="sk-rect sk-rect3"></div>
            <div class="sk-rect sk-rect4"></div>
            <div class="sk-rect sk-rect5"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-sk-wave {
        .sk-wave {
            margin: 40px auto;
            width: 50px;
            height: 40px;
            text-align: center;
            font-size: 10px;
        }

        .sk-wave .sk-rect {
            background-color: #ffffff;
            height: 100%;
            width: 6px;
            display: inline-block;
            -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
            animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
        }

        .sk-wave .sk-rect1 {

            animation-delay: -1.2s;
        }

        .sk-wave .sk-rect2 {

            animation-delay: -1.1s;
        }

        .sk-wave .sk-rect3 {
            animation-delay: -1s;
        }

        .sk-wave .sk-rect4 {
            animation-delay: -0.9s;
        }

        .sk-wave .sk-rect5 {
            animation-delay: -0.8s;
        }

        @keyframes sk-waveStretchDelay {
            0%,
            40%,
            100% {

                transform: scaleY(0.4);
            }

            20% {

                transform: scaleY(1);
            }
        }
    }
</style>
