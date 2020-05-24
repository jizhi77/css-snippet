<template>
    <div class="page-home-wrap">
        <div class="demo-home">
            <h1 class="demo-home__title">
                <span>CSS Snippet</span>
                <div class="cp-spinner cp-skeleton"></div>
            </h1>
            <h2 class="demo-home__desc">常见场景的 CSS 代码片段</h2>
			<div class="demo-home-nav">
				<div class="demo-home-nav__title">加载状态</div>
				<div class="demo-home-nav__group">
					<router-link to="/loader" class="demo-home-nav__block">
						Loaders
						<svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
							<path fill="#B6C3D2"
								  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
							<path fill="#B6C3D2"
								  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
						</svg>
					</router-link>
				</div>
			</div>
			<div class="demo-home-nav">
				<div class="demo-home-nav__title">常见操作</div>
				<div class="demo-home-nav__group">
					<router-link to="/common" class="demo-home-nav__block">
						Common
						<svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
							<path fill="#B6C3D2"
								  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
							<path fill="#B6C3D2"
								  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
						</svg>
					</router-link>
					<router-link to="/common/shape" class="demo-home-nav__block">
						Shape
						<svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
							<path fill="#B6C3D2"
								  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
							<path fill="#B6C3D2"
								  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
						</svg>
					</router-link>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
    };
</script>

<style lang="less" scoped>
    .page-home-wrap {

        .demo-home {
            box-sizing: border-box;
            width: 100%;
            min-height: 100vh;
            padding: 20px 20px 20px;
            background: #fff;

            .demo-home__title, .demo-home__desc {
                padding-left: 16px;
                font-weight: normal;
                line-height: 1;
                user-select: none;
                display: flex;
                justify-content: space-between;
            }

            .demo-home__title {
                margin: 0 0 16px;
                font-size: 32px;

                img {
                    width: 32px;
                }
            }

            .home__title {
                span {
                    display: inline-block;
                    vertical-align: middle;
                }
            }

            .demo-home__desc {
                margin: 0 0 40px;
                color: rgba(69, 90, 100, 0.6);
                font-size: 14px;
            }

            .demo-home-nav__title {
                margin: 24px 0 8px 16px;
                color: rgba(69, 90, 100, 0.6);
                font-size: 14px;
            }


            .demo-home-nav__block {
                position: relative;
                display: flex;
                margin: 0 0 12px;
                padding-left: 20px;
                color: #323233;
                font-weight: 500;
                font-size: 14px;
                line-height: 40px;
                background: #f7f8fa;
                border-radius: 99px;
                transition: background 0.3s;
            }

            .demo-home-nav__icon {
                position: absolute;
                top: 50%;
                right: 16px;
                width: 16px;
                height: 16px;
                margin-top: -8px;
            }
        }


        a {
            text-decoration: none;
        }

        .cp-spinner, .cp-skeleton:before, .cp-skeleton:after {
            width: 20px;
            height: 20px;
        }
    }
</style>
