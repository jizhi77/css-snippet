<template>
    <div class="loader-ball-scale">
        <div class="loader">
            <div class="loader-inner ball-scale">
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-scale {
        @keyframes ball-scale {
            0% {

                transform: scale(0);
            }

            100% {

                transform: scale(1);
                opacity: 0;
            }
        }

        .ball-scale > div {
            background-color: #fff;
            border-radius: 100%;
            margin: 2px;
            animation-fill-mode: both;
            display: inline-block;
            height: 60px;
            width: 60px;
            -webkit-animation: ball-scale 1s 0s ease-in-out infinite;
            animation: ball-scale 1s 0s ease-in-out infinite;
        }

    }
</style>
