<template>
    <div class="loader-ball-pulse">
        <div class="loader">
            <div class="loader-inner ball-pulse">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-pulse {
        .ball-pulse > div {
            background-color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            margin: 2px;
            animation-fill-mode: both;
            display: inline-block;
        }

        .ball-pulse > div:nth-child(0) {
            animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .ball-pulse > div:nth-child(1) {
            animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .ball-pulse > div:nth-child(2) {
            animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .ball-pulse > div:nth-child(3) {
            animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        @keyframes scale {
            0% {
                transform: scale(1);
                opacity: 1;
            }

            45% {
                transform: scale(0.1);
                opacity: 0.7;
            }

            80% {
                transform: scale(1);
                opacity: 1;
            }
        }


    }
</style>
