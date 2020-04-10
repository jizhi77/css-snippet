<template>
    <div class="loader-line-scale">
        <div class="loader">
            <div class="loader-inner line-scale">
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
    .loader-line-scale {
        @keyframes line-scale {
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

        .line-scale > div:nth-child(1) {
            -webkit-animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .line-scale > div:nth-child(2) {
            -webkit-animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .line-scale > div:nth-child(3) {
            -webkit-animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .line-scale > div:nth-child(4) {
            -webkit-animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .line-scale > div:nth-child(5) {
            -webkit-animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
            animation: line-scale 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
        }

        .line-scale > div {
            background-color: #fff;
            width: 4px;
            height: 35px;
            border-radius: 2px;
            margin: 2px;

            animation-fill-mode: both;
            display: inline-block;
        }
    }
</style>
