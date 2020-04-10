<template>
    <div class="loader-ball-scale-ripple">
        <div class="loader">
            <div class="loader-inner ball-scale-ripple">
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-scale-ripple {
        @keyframes ball-scale-ripple {
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

        .ball-scale-ripple > div {

            animation-fill-mode: both;
            height: 50px;
            width: 50px;
            border-radius: 100%;
            border: 2px solid #fff;
            -webkit-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8);
            animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8);
        }
    }
</style>
