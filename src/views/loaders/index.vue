<template>
    <div class="view-loaders-index-wrap">
        <div class="demo-home">
            <h1 class="demo-home__title">
                <span>Loader Demo</span>
                <div class="cp-spinner cp-skeleton"></div>
            </h1>
            <h2 class="demo-home__desc">
                一些常见、常用的 Loader 样式
            </h2>
            <div class="demo-home-nav">
                <div class="demo-home-nav__title">Loader</div>
                <div class="demo-home-nav__group">
                    <router-link to="/loader/ball-beat" class="demo-home-nav__block">
                        ball-beat
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-clip-rotate" class="demo-home-nav__block">
                        ball-clip-rotate
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-clip-rotate-multiple" class="demo-home-nav__block">
                        ball-clip-rotate-multiple
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-clip-rotate-pulse" class="demo-home-nav__block">
                        ball-clip-rotate-pulse
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-grid-beat" class="demo-home-nav__block">
                        ball-grid-beat
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-grid-pulse" class="demo-home-nav__block">
                        ball-grid-pulse
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-pulse" class="demo-home-nav__block">
                        ball-pulse
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-rotate" class="demo-home-nav__block">
                        ball-rotate
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-pulse-rise" class="demo-home-nav__block">
                        ball-pulse-rise
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-pulse-sync" class="demo-home-nav__block">
                        ball-clip-rotate-sync
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-scale" class="demo-home-nav__block">
                        ball-scale
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-scale-multiple" class="demo-home-nav__block">
                        ball-scale-multiple
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-scale-ripple" class="demo-home-nav__block">
                        ball-scale-ripple
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-scale-ripple-multiple" class="demo-home-nav__block">
                        ball-scale-ripple-multiple
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-spin-fade-loader" class="demo-home-nav__block">
                        ball-spin-fade-loader
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-triangle-path" class="demo-home-nav__block">
                        ball-triangle-path
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-zig-zag" class="demo-home-nav__block">
                        ball-zig-zag
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/ball-zig-zag-deflect" class="demo-home-nav__block">
                        ball-zig-zag-deflect
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/cube-transition" class="demo-home-nav__block">
                        cube-transition
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/line-scale" class="demo-home-nav__block">
                        line-scale
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/line-scale-fade-loader" class="demo-home-nav__block">
                        line-scale-fade-loader
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/line-scale-party" class="demo-home-nav__block">
                        line-scale-party
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/line-scale-pulse-out" class="demo-home-nav__block">
                        line-scale-pulse-out
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/line-scale-pulse-out-rapid" class="demo-home-nav__block">
                        line-scale-pulse-out-rapid
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/pacman" class="demo-home-nav__block">
                        pacman
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-circle" class="demo-home-nav__block">
                        sk-circle
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-cube-grid" class="demo-home-nav__block">
                        sk-cube-grid
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-double-bounce" class="demo-home-nav__block">
                        sk-double-bounce
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-three-bounce" class="demo-home-nav__block">
                        sk-three-bounce
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-folding-cube" class="demo-home-nav__block">
                        sk-folding-cube
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-rotating-plane" class="demo-home-nav__block">
                        sk-rotating-plane
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-wandering-cubes" class="demo-home-nav__block">
                        sk-wandering-cubes
                        <svg viewBox="0 0 1024 1024" class="demo-home-nav__icon">
                            <path fill="#B6C3D2"
                                  d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"></path>
                            <path fill="#B6C3D2"
                                  d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"></path>
                        </svg>
                    </router-link>
                    <router-link to="/loader/sk-wave" class="demo-home-nav__block">
                        sk-wave
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
        components: {}
    }
</script>


<style lang="less">
    .view-loaders-index-wrap {
        .cp-spinner, .cp-skeleton:before, .cp-skeleton:after {
            width: 20px;
            height: 20px;
        }

        .demo-home {
            box-sizing: border-box;
            width: 100%;
            min-height: 100vh;
            padding: 20px 20px 20px;
            background: #fff;
        }

        .demo-home__title, .demo-home__desc {
            padding-left: 16px;
            font-weight: normal;
            line-height: 1;
            -webkit-user-select: none;
            user-select: none;
            display: flex;
            justify-content: space-between;
        }

        .demo-home__title {
            margin: 0 0 16px;
            font-size: 32px;
        }

        .home__title span {
            display: inline-block;
            vertical-align: middle;
        }

        .demo-home__title img {
            width: 32px;
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
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            margin: 0 0 12px;
            padding-left: 20px;
            color: #323233;
            font-weight: 500;
            font-size: 14px;
            line-height: 40px;
            background: #f7f8fa;
            border-radius: 99px;
            -webkit-transition: background 0.3s;
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

        a {
            text-decoration: none;
        }
    }
</style>
