<template>
    <div class="loader-line-scale-pulse-out">
        <div class="loader">
            <div class="loader-inner line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-line-scale-pulse-out {
        @keyframes line-scale-pulse-out {
            0% {

                transform: scaley(1);
            }

            50% {

                transform: scaley(0.4);
            }

            100% {

                transform: scaley(1);
            }
        }

        .line-scale-pulse-out > div {
            background-color: #fff;
            width: 4px;
            height: 35px;
            border-radius: 2px;
            margin: 2px;

            animation-fill-mode: both;
            display: inline-block;
            -webkit-animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
            animation: line-scale-pulse-out 0.9s 0s infinite cubic-bezier(.85, .25, .37, .85);
        }

        .line-scale-pulse-out > div:nth-child(2),
        .line-scale-pulse-out > div:nth-child(4) {
            -webkit-animation-delay: 0.2s !important;
            animation-delay: 0.2s !important;
        }

        .line-scale-pulse-out > div:nth-child(1),
        .line-scale-pulse-out > div:nth-child(5) {
            -webkit-animation-delay: 0.4s !important;
            animation-delay: 0.4s !important;
        }

    }
</style>
