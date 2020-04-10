<template>
    <div class="loader-sk-rotating-plane">
        <div class="sk-rotating-plane"></div>
    </div>
</template>

<style lang="less" scoped>
    .loader-sk-rotating-plane {
        .sk-rotating-plane {
            width: 40px;
            height: 40px;
            background-color: #ffffff;
            margin: 40px auto;
            -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;
            animation: sk-rotatePlane 1.2s infinite ease-in-out;
        }

        @keyframes sk-rotatePlane {
            0% {
                -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
                transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            }

            50% {
                -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
                transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            }

            100% {
                -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
                transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            }
        }
    }
</style>
