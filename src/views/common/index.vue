<template>
    <div class="view-common-index-wrap">
        <div class="heart">
            <div class="zuo"></div>
            <div class="you"></div>
        </div>
    </div>
</template>

<style lang="less">
    .view-common-index-wrap {
        .heart {
            position: relative;

            .zuo {
                width: 50px;
                height: 75px;
                position: absolute;
                background: red;
                display: inline-block;
                transform: rotate(-45deg);
                left: 25px;
                border-radius: 25px 25px 0 0;
            }

            .you {
                width: 50px;
                height: 75px;
                position: absolute;
                display: inline-block;
                transform: rotate(45deg);
                background: red;
                left: 43px;
                border-radius: 25px 25px 0 0;
            }
        }
    }
</style>
