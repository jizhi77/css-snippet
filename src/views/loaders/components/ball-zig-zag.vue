<template>
    <div class="loader-ball-zig-zag">
        <div class="loader">
            <div class="loader-inner ball-zig-zag">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-zig-zag {
        .ball-zig-zag {
            position: relative;
            -webkit-transform: translate(-15px, -15px);
            -ms-transform: translate(-15px, -15px);
            transform: translate(-15px, -15px);
        }

        .ball-zig-zag > div {
            background-color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
            margin: 2px;

            animation-fill-mode: both;
            position: absolute;
            margin-left: 15px;
            top: 30px;
            left: 30px;
        }

        .ball-zig-zag > div:first-child {
            -webkit-animation: ball-zig 0.7s 0s infinite linear;
            animation: ball-zig 0.7s 0s infinite linear;
        }

        .ball-zig-zag > div:last-child {
            -webkit-animation: ball-zag 0.7s 0s infinite linear;
            animation: ball-zag 0.7s 0s infinite linear;
        }


        @keyframes ball-zag {
            33% {
                -webkit-transform: translate(15px, 30px);
                transform: translate(15px, 30px);
            }

            66% {
                -webkit-transform: translate(-15px, 30px);
                transform: translate(-15px, 30px);
            }

            100% {
                -webkit-transform: translate(0, 0);
                transform: translate(0, 0);
            }
        }
    }
</style>
