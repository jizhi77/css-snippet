<template>
    <div class="loader-ball-triangle-path">
        <div class="loader">
            <div class="loader-inner ball-triangle-path">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-ball-triangle-path {

        .ball-triangle-path {
            position: relative;
            -webkit-transform: translate(-25px, -25px);
            -ms-transform: translate(-25px, -25px);
            transform: translate(-25px, -25px);
        }

        .ball-triangle-path > div:nth-child(1) {

            animation-name: ball-triangle-path-1;

            animation-delay: 0;

            animation-duration: 2s;

            animation-timing-function: ease-in-out;

            animation-iteration-count: infinite;
        }

        .ball-triangle-path > div:nth-child(2) {

            animation-name: ball-triangle-path-2;

            animation-delay: 0;

            animation-duration: 2s;

            animation-timing-function: ease-in-out;

            animation-iteration-count: infinite;
        }

        .ball-triangle-path > div:nth-child(3) {

            animation-name: ball-triangle-path-3;

            animation-delay: 0;

            animation-duration: 2s;

            animation-timing-function: ease-in-out;

            animation-iteration-count: infinite;
        }

        .ball-triangle-path > div {

            animation-fill-mode: both;
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            border: 1px solid #fff;
        }

        .ball-triangle-path > div:nth-of-type(1) {
            top: 50px;
        }

        .ball-triangle-path > div:nth-of-type(2) {
            left: 25px;
        }

        .ball-triangle-path > div:nth-of-type(3) {
            top: 50px;
            left: 50px;
        }


        @keyframes ball-triangle-path-1 {
            33% {
                -webkit-transform: translate(25px, -50px);
                transform: translate(25px, -50px);
            }

            66% {
                -webkit-transform: translate(50px, 0px);
                transform: translate(50px, 0px);
            }

            100% {
                -webkit-transform: translate(0px, 0px);
                transform: translate(0px, 0px);
            }
        }


        @keyframes ball-triangle-path-2 {
            33% {
                -webkit-transform: translate(25px, 50px);
                transform: translate(25px, 50px);
            }

            66% {
                -webkit-transform: translate(-25px, 50px);
                transform: translate(-25px, 50px);
            }

            100% {
                -webkit-transform: translate(0px, 0px);
                transform: translate(0px, 0px);
            }
        }

        @keyframes ball-triangle-path-3 {
            33% {
                -webkit-transform: translate(-50px, 0px);
                transform: translate(-50px, 0px);
            }

            66% {
                -webkit-transform: translate(-25px, -50px);
                transform: translate(-25px, -50px);
            }

            100% {
                -webkit-transform: translate(0px, 0px);
                transform: translate(0px, 0px);
            }
        }
    }
</style>
