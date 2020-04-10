<template>
    <div class="loader-ball-scale-ripple-multiple">
        <div class="loader">
            <div class="loader-inner ball-scale-ripple-multiple">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-scale-ripple-multiple {
        @keyframes ball-scale-ripple-multiple {
            0% {

                transform: scale(0.1);
                opacity: 1;
            }

            70% {

                transform: scale(1);
                opacity: 0.7;
            }

            100% {
                opacity: 0.0;
            }
        }

        .ball-scale-ripple-multiple {
            position: relative;

            -ms-transform: translateY(-25px);
            transform: translateY(-25px);
        }

        .ball-scale-ripple-multiple > div:nth-child(0) {

            animation-delay: -0.2s;
        }

        .ball-scale-ripple-multiple > div:nth-child(1) {

            animation-delay: 0s;
        }

        .ball-scale-ripple-multiple > div:nth-child(2) {

            animation-delay: 0.2s;
        }

        .ball-scale-ripple-multiple > div:nth-child(3) {

            animation-delay: 0.4s;
        }

        .ball-scale-ripple-multiple > div {

            animation-fill-mode: both;
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            border-radius: 100%;
            border: 2px solid #fff;
            -webkit-animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21, .53, .56, .8);
            animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(.21, .53, .56, .8);
        }
    }
</style>
