<template>
    <div class="loader-cube-transition">
        <div class="loader">
            <div class="loader-inner cube-transition">
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-cube-transition {
        @keyframes cube-transition {
            25% {
                transform: translateX(50px) scale(0.5) rotate(-90deg);
            }

            50% {
                transform: translate(50px, 50px) rotate(-180deg);
            }

            75% {
                transform: translateY(50px) scale(0.5) rotate(-270deg);
            }

            100% {

                transform: rotate(-360deg);
            }
        }

        .cube-transition {
            position: relative;
            transform: translate(-25px, -25px);
        }

        .cube-transition > div {
            animation-fill-mode: both;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            animation: cube-transition 1.6s 0s infinite ease-in-out;
        }

        .cube-transition > div:last-child {
            animation-delay: -0.8s;
        }
    }
</style>
