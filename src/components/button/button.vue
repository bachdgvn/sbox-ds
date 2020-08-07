<template>
    <component :is="tagName" :class="classes" :disabled="itemDisabled" @click="handleClickLink" v-bind="tagProps">
        <Spin v-if="loading"
              type="in-button"
              :size="spinSize"
              :color="spinLoadingColor"></Spin>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </component>
</template>
<script>
    import Icon from '../icon';
    import Spin from '../spin';
    import { oneOf } from '../../utils/assist';
    import mixinsLink from '../../mixins/link';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-btn';

    export default {
        name: 'Button',
        mixins: [ mixinsLink, mixinsForm ],
        components: { Icon, Spin },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
                },
                default: 'default'
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: {
                type: String,
                default: ''
            },
            customIcon: {
                type: String,
                default: ''
            },
            long: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            showSlot () {
                return !!this.$slots.default;
            },
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-long`]: this.long,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-${this.size}`]: this.size !== 'default',
                        [`${prefixCls}-loading`]: this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
                        [`${prefixCls}-ghost`]: this.ghost
                    }
                ];
            },
            spinSize() {
                return this.size;
            },
            spinLoadingColor() {
                const spinSupportedColors = {
                    'white': ['primary', 'success', 'error', 'warning', 'info'],
                    'primary': ['default', 'dashed'],
                    'default': ['text'],
                };
                let color = 'default';
                Object.keys(spinSupportedColors).forEach(key => {
                    if (spinSupportedColors[key].includes(this.type)) {
                        color = key;
                    }
                });
                return color;
            },
            // Point out if it should render as <a> tag
            isHrefPattern() {
                const {to} = this;
                return !!to;
            },
            tagName() {
                const {isHrefPattern} = this;
                return isHrefPattern ? 'a' : 'button';
            },
            tagProps() {
                const {isHrefPattern} = this;
                if(isHrefPattern) {
                    const {linkUrl,target}=this;
                    return {href: linkUrl, target};
                } else {
                    const {htmlType} = this;
                    return {type: htmlType};
                }
            }
        },
        methods: {
            // Ctrl or CMD and click, open in new window when use `to`
            handleClickLink (event) {
                this.$emit('click', event);
                const openInNewWindow = event.ctrlKey || event.metaKey;

                this.handleCheckClick(event, openInNewWindow);
            }
        }
    };
</script>
