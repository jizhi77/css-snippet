<template>
    <div class="loader-line-scale-party">
        <div class="loader">
            <div class="loader-inner line-scale-party">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .loader-line-scale-party {
        @keyframes line-scale-party {
            0% {

                transform: scale(1);
            }

            50% {

                transform: scale(0.5);
            }

            100% {

                transform: scale(1);
            }
        }

        .line-scale-party > div:nth-child(1) {

            animation-delay: 0.77s;

            animation-duration: 1.26s;
        }

        .line-scale-party > div:nth-child(2) {

            animation-delay: 0.29s;

            animation-duration: 0.43s;
        }

        .line-scale-party > div:nth-child(3) {

            animation-delay: 0.28s;

            animation-duration: 1.01s;
        }

        .line-scale-party > div:nth-child(4) {

            animation-delay: 0.74s;

            animation-duration: 0.73s;
        }

        .line-scale-party > div {
            background-color: #fff;
            width: 4px;
            height: 35px;
            border-radius: 2px;
            margin: 2px;

            animation-fill-mode: both;
            display: inline-block;

            animation-name: line-scale-party;

            animation-iteration-count: infinite;

            animation-delay: 0;
        }
    }
</style>
