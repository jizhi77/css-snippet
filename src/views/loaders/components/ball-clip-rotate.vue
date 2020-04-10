<template>
    <div class="loader-ball-clip-rotate">
        <div class="loader">
            <div class="loader-inner ball-clip-rotate">
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-clip-rotate {
        .ball-clip-rotate > div {
            border-radius: 100%;
            margin: 2px;
            animation-fill-mode: both;
            border: 2px solid #fff;
            border-bottom-color: transparent;
            height: 25px;
            width: 25px;
            background: transparent !important;
            display: inline-block;
            animation: rotate 0.75s 0s linear infinite;
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
