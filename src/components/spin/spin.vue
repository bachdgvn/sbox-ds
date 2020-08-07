<template>
    <transition name="fade">
        <div :class="classes" v-if="fullscreenVisible">
            <div :class="mainClasses">
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                    </svg>
                </div>
                <div :class="textClasses"><slot></slot></div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { oneOf } from '../../utils/assist';
    import ScrollbarMixins from '../modal/mixins-scrollbar';

    const prefixCls = 'ivu-spin';

    export default {
        name: 'Spin',
        mixins: [ ScrollbarMixins ],
        props: {
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            color: {
                validator (value) {
                    return oneOf(value, ['primary', 'white', 'default']);
                },
                default () {
                    return 'default';
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['in-button', 'alone']);
                },
                default () {
                    return 'alone';
                }
            },
            fix: {
                type: Boolean,
                default: false
            },
            fullscreen: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showText: false,
                // used for $Spin
                visible: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.color}`]: !!this.color,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-fix`]: this.fix,
                        [`${prefixCls}-show-text`]: this.showText,
                        [`${prefixCls}-fullscreen`]: this.fullscreen
                    }
                ];
            },
            mainClasses () {
                return `${prefixCls}-main`;
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            fullscreenVisible () {
                if (this.fullscreen) {
                    return this.visible;
                } else {
                    return true;
                }
            }
        },
        watch: {
            visible (val) {
                if (val) {
                    this.addScrollEffect();
                } else {
                    this.removeScrollEffect();
                }
            }
        },
        mounted () {
            this.showText = this.$slots.default !== undefined;
        }
    };
</script>
