<template>
    <div class="loader-ball-zig-zag-deflect">
        <div class="loader">
            <div class="loader-inner ball-zig-zag-deflect">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-zig-zag-deflect {
        .ball-zig-zag-deflect {
            position: relative;
            transform: translate(-15px, -15px);
        }

        .ball-zig-zag-deflect > div {
            background-color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            animation-fill-mode: both;
            position: absolute;
            margin: 2px 2px 2px 15px;
            top: 30px;
            left: 30px;
        }

        .ball-zig-zag-deflect > div:first-child {
            -webkit-animation: ball-zig-deflect 1.5s 0s infinite linear;
            animation: ball-zig-deflect 1.5s 0s infinite linear;
        }

        .ball-zig-zag-deflect > div:last-child {
            -webkit-animation: ball-zag-deflect 1.5s 0s infinite linear;
            animation: ball-zag-deflect 1.5s 0s infinite linear;
        }


        @keyframes ball-zag-deflect {
            17% {
                -webkit-transform: translate(15px, 30px);
                transform: translate(15px, 30px);
            }

            34% {
                -webkit-transform: translate(-15px, 30px);
                transform: translate(-15px, 30px);
            }

            50% {
                -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
            }

            67% {
                -webkit-transform: translate(-15px, 30px);
                transform: translate(-15px, 30px);
            }

            84% {
                -webkit-transform: translate(15px, 30px);
                transform: translate(15px, 30px);
            }

            100% {
                -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
            }
        }
    }
</style>
