<template>
    <div class="loader-ball-clip-rotate-multiple">
        <div class="loader">
            <div class="loader-inner ball-clip-rotate-multiple">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-clip-rotate-multiple {
        .ball-clip-rotate-multiple {
            position: relative;
        }

        .ball-clip-rotate-multiple > div {
            animation-fill-mode: both;
            position: absolute;
            left: 0;
            top: 0;
            border: 2px solid #fff;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-radius: 100%;
            height: 35px;
            width: 35px;
            animation: rotate 1s 0s ease-in-out infinite;
        }

        .ball-clip-rotate-multiple > div:last-child {
            display: inline-block;
            top: 10px;
            left: 10px;
            width: 15px;
            height: 15px;
            animation-duration: 0.5s;
            border-color: #fff transparent #fff transparent;
            animation-direction: reverse;
        }


        @keyframes rotate {
            0% {

                transform: rotate(0deg);
            }

            50% {

                transform: rotate(180deg);
            }

            100% {

                transform: rotate(360deg);
            }
        }

    }
</style>
