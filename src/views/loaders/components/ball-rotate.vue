<template>
    <div class="loader-ball-rorate">
        <div class="loader">
            <div class="loader-inner ball-rotate">
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-rorate {

        .ball-rotate {
            position: relative;
        }

        .ball-rotate > div {
            background-color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            margin: 2px;

            animation-fill-mode: both;
            position: relative;
        }

        .ball-rotate > div:first-child {
            -webkit-animation: rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;
            animation: rotate 1s 0s cubic-bezier(.7, -.13, .22, .86) infinite;
        }

        .ball-rotate > div:before,
        .ball-rotate > div:after {
            background-color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            margin: 2px;
            content: "";
            position: absolute;
            opacity: 0.8;
        }

        .ball-rotate > div:before {
            top: 0px;
            left: -28px;
        }

        .ball-rotate > div:after {
            top: 0px;
            left: 25px;
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
    }
</style>
