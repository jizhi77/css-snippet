<template>
    <div class="loader-line-scale-pulse-out-rapid">
        <div class="loader">
            <div class="loader-inner line-scale-pulse-out-rapid">
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
    .loader-line-scale-pulse-out-rapid {
        @keyframes line-scale-pulse-out-rapid {
            0% {

                transform: scaley(1);
            }

            80% {

                transform: scaley(0.3);
            }

            90% {

                transform: scaley(1);
            }
        }

        .line-scale-pulse-out-rapid > div {
            background-color: #fff;
            width: 4px;
            height: 35px;
            border-radius: 2px;
            margin: 2px;

            animation-fill-mode: both;
            display: inline-block;
            -webkit-animation: line-scale-pulse-out-rapid 0.9s 0s infinite cubic-bezier(.11, .49, .38, .78);
            animation: line-scale-pulse-out-rapid 0.9s 0s infinite cubic-bezier(.11, .49, .38, .78);
        }

        .line-scale-pulse-out-rapid > div:nth-child(2),
        .line-scale-pulse-out-rapid > div:nth-child(4) {
            -webkit-animation-delay: 0.25s !important;
            animation-delay: 0.25s !important;
        }

        .line-scale-pulse-out-rapid > div:nth-child(1),
        .line-scale-pulse-out-rapid > div:nth-child(5) {
            -webkit-animation-delay: 0.5s !important;
            animation-delay: 0.5s !important;
        }
    }
</style>
