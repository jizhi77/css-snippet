<template>
    <div class="loader-ball-scale-multiple">
        <div class="loader">
            <div class="loader-inner ball-scale-multiple">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-scale-multiple {
        @keyframes ball-scale-multiple {
            0% {

                transform: scale(0);
                opacity: 0;
            }

            5% {
                opacity: 1;
            }

            100% {

                transform: scale(1);
                opacity: 0;
            }
        }

        .ball-scale-multiple {
            position: relative;

            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }

        .ball-scale-multiple > div:nth-child(2) {

            animation-delay: 0.2s;
        }

        .ball-scale-multiple > div:nth-child(3) {

            animation-delay: 0.4s;
        }

        .ball-scale-multiple > div {
            background-color: #fff;
            border-radius: 100%;
            animation-fill-mode: both;
            position: absolute;
            left: 0px;
            top: 0px;
            opacity: 0;
            margin: 0;
            width: 60px;
            height: 60px;
            -webkit-animation: ball-scale-multiple 1s 0s linear infinite;
            animation: ball-scale-multiple 1s 0s linear infinite;
        }
    }
</style>
