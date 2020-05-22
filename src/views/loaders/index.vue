<template>
    <div class="view-loaders-index-wrap">
        <van-grid :column-num="2" square clickable :border="false">
            <van-grid-item>
                <ball-beat/>
            </van-grid-item>
            <van-grid-item>
                <ball-clip-rotate/>
            </van-grid-item>
            <van-grid-item>
                <ball-clip-rotate-multiple/>
            </van-grid-item>
            <van-grid-item>
                <ball-clip-rotate-pulse/>
            </van-grid-item>
            <van-grid-item>
                <ball-grid-beat/>
            </van-grid-item>
            <van-grid-item>
                <ball-grid-pulse/>
            </van-grid-item>
            <van-grid-item>
                <ball-pulse/>
            </van-grid-item>
            <van-grid-item>
                <ball-pulse-rise/>
            </van-grid-item>
            <van-grid-item>
                <ball-pulse-sync/>
            </van-grid-item>
            <van-grid-item>
                <ball-rotate/>
            </van-grid-item>
            <van-grid-item>
                <ball-scale/>
            </van-grid-item>
            <van-grid-item>
                <ball-scale-multiple/>
            </van-grid-item>
            <van-grid-item>
                <ball-scale-ripple/>
            </van-grid-item>
            <van-grid-item>
                <ball-scale-ripple-multiple/>
            </van-grid-item>
            <van-grid-item>
                <ball-spin-fade/>
            </van-grid-item>
            <van-grid-item>
                <ball-triangle-path/>
            </van-grid-item>
            <van-grid-item>
                <ball-zig-zag/>
            </van-grid-item>
            <van-grid-item>
                <ball-zig-zag-deflect/>
            </van-grid-item>
            <van-grid-item>
                <cube-transition/>
            </van-grid-item>
            <van-grid-item>
                <line-scale/>
            </van-grid-item>
            <van-grid-item>
                <line-scale-fade/>
            </van-grid-item>
            <van-grid-item>
                <line-scale-party/>
            </van-grid-item>
            <van-grid-item>
                <line-scale-pulse-out/>
            </van-grid-item>
            <van-grid-item>
                <line-scale-pulse-out-rapid/>
            </van-grid-item>
            <van-grid-item>
                <pacman/>
            </van-grid-item>
            <van-grid-item>
                <sk-circle/>
            </van-grid-item>
            <van-grid-item>
                <sk-cube-grid/>
            </van-grid-item>
            <van-grid-item>
                <sk-double-bounce/>
            </van-grid-item>
            <van-grid-item>
                <sk-folding-cube/>
            </van-grid-item>
            <van-grid-item>
                <sk-rotating-plane/>
            </van-grid-item>
            <van-grid-item>
                <sk-three-bounce/>
            </van-grid-item>
            <van-grid-item>
                <sk-wandering-cubes/>
            </van-grid-item>
            <van-grid-item>
                <sk-wave/>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import {Grid, GridItem} from 'vant'
    import BallBeat from './components/ball-beat'
    import BallClipRotate from './components/ball-clip-rotate'
    import BallClipRotateMultiple from './components/ball-clip-rotate-multiple'
    import BallClipRotatePulse from './components/ball-clip-rotate-pulse'
    import BallGridBeat from './components/ball-grid-beat'
    import BallGridPulse from './components/ball-grid-pulse'
    import BallPulse from './components/ball-pulse'
    import BallPulseRise from './components/ball-pulse-rise'
    import BallPulseSync from './components/ball-pulse-sync'
    import BallRotate from './components/ball-rotate'
    import BallScale from './components/ball-scale'
    import BallScaleMultiple from './components/ball-scale-multiple'
    import BallScaleRipple from './components/ball-scale-ripple'
    import BallScaleRippleMultiple from './components/ball-scale-ripple-multiple'
    import BallSpinFade from './components/ball-spin-fade'
    import BallTrianglePath from './components/ball-triangle-path'
    import BallZigZag from './components/ball-zig-zag'
    import BallZigZagDeflect from './components/ball-zig-zag-deflect'
    import CubeTransition from './components/cube-transition'
    import LineScale from './components/line-scale'
    import LineScaleFade from './components/line-scale-fade'
    import LineScaleParty from './components/line-scale-party'
    import LineScalePulseOut from './components/line-scale-pulse-out'
    import LineScalePulseOutRapid from './components/line-scale-pulse-out-rapid'
    import Pacman from './components/pacman'
    import SkCircle from './components/sk-circle'
    import SkCubeGrid from './components/sk-cube-grid'
    import SkDoubleBounce from './components/sk-double-bounce'
    import SkFoldingCube from './components/sk-folding-cube'
    import SkRotatingPlane from './components/sk-rotating-plane'
    import SkThreeBounce from './components/sk-three-bounce'
    import SkWanderingCubes from './components/sk-wandering-cubes'
    import SkWave from './components/sk-wave'

    export default {
        components: {
            [Grid.name]: Grid,
            [GridItem.name]: GridItem,
            BallBeat,
            BallClipRotate,
            BallClipRotateMultiple,
            BallClipRotatePulse,
            BallGridBeat,
            BallGridPulse,
            BallPulse,
            BallPulseRise,
            BallPulseSync,
            BallRotate,
            BallScale,
            BallScaleMultiple,
            BallScaleRipple,
            BallScaleRippleMultiple,
            BallSpinFade,
            BallTrianglePath,
            BallZigZag,
            BallZigZagDeflect,
            CubeTransition,
            LineScale,
            LineScaleFade,
            LineScaleParty,
            LineScalePulseOut,
            LineScalePulseOutRapid,
            Pacman,
            SkCircle,
            SkCubeGrid,
            SkDoubleBounce,
            SkFoldingCube,
            SkRotatingPlane,
            SkThreeBounce,
            SkWanderingCubes,
            SkWave
        },
    }
</script>


<style lang="less">
    .view-loaders-index-wrap {
        min-height: 100vh;
        background-color: #f56151;

        /deep/ .van-grid-item__content {
            background-color: #f56151;
        }
    }
</style>
