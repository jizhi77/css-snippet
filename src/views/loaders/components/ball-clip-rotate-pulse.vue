<template>
    <div class="loader-ball-clip-rotate-pulse">
        <div class="loader">
            <div class="loader-inner ball-clip-rotate-pulse">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-clip-rotate-pulse {
        .ball-clip-rotate-pulse {
            position: relative;
            -ms-transform: translateY(-15px);
            transform: translateY(-15px);
        }

        .ball-clip-rotate-pulse > div {
            animation-fill-mode: both;
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 100%;
        }

        .ball-clip-rotate-pulse > div:first-child {
            background: #fff;
            height: 16px;
            width: 16px;
            top: 9px;
            left: 9px;
            animation: scale 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
        }

        .ball-clip-rotate-pulse > div:last-child {
            position: absolute;
            border: 2px solid #fff;
            width: 30px;
            height: 30px;
            background: transparent;
            border-color: #fff transparent #fff transparent;
            animation: rotate 1s 0s cubic-bezier(.09, .57, .49, .9) infinite;
            animation-duration: 1s;
        }

        @keyframes rotate {
            0% {
                -webkit-transform: rotate(0deg) scale(1);
                transform: rotate(0deg) scale(1);
            }

            50% {
                -webkit-transform: rotate(180deg) scale(0.6);
                transform: rotate(180deg) scale(0.6);
            }

            100% {
                -webkit-transform: rotate(360deg) scale(1);
                transform: rotate(360deg) scale(1);
            }
        }


        @keyframes scale {
            30% {

                transform: scale(0.3);
            }

            100% {

                transform: scale(1);
            }
        }
    }
</style>
