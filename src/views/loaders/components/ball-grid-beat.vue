<template>
    <div class="loader-ball-grid-beat">
        <div class="loader">
            <div class="loader-inner ball-grid-beat">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
.loader-ball-grid-beat {
  .ball-grid-beat {
    width: 57px;
  }

  .ball-grid-beat > div:nth-child(1) {
    animation-delay: 0.36s;

    animation-duration: 0.96s;
  }

  .ball-grid-beat > div:nth-child(2) {
    animation-delay: 0.4s;

    animation-duration: 0.93s;
  }

  .ball-grid-beat > div:nth-child(3) {
    animation-delay: 0.68s;

    animation-duration: 1.19s;
  }

  .ball-grid-beat > div:nth-child(4) {
    animation-delay: 0.41s;

    animation-duration: 1.13s;
  }

  .ball-grid-beat > div:nth-child(5) {
    animation-delay: 0.71s;

    animation-duration: 1.34s;
  }

  .ball-grid-beat > div:nth-child(6) {
    animation-delay: -0.15s;

    animation-duration: 0.94s;
  }

  .ball-grid-beat > div:nth-child(7) {
    animation-delay: -0.12s;

    animation-duration: 1.2s;
  }

  .ball-grid-beat > div:nth-child(8) {
    animation-delay: 0.01s;

    animation-duration: 0.82s;
  }

  .ball-grid-beat > div:nth-child(9) {
    animation-delay: 0.32s;

    animation-duration: 1.19s;
  }

  .ball-grid-beat > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;

    animation-fill-mode: both;
    display: inline-block;
    float: left;

    animation-name: ball-grid-beat;

    animation-iteration-count: infinite;

    animation-delay: 0;
  }
  @keyframes ball-grid-beat {
    50% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
