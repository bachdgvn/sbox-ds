<template>
    <div
        :id="elementId"
        ref="inputTagWrapper"
        v-click-outside="handleBlur"
        :class="wrapClasses"
        @click="handleFocus">
        <div :class="inputTagClasses">
            <div class="ivu-tag ivu-tag-checked"
                 v-for="(tag, index) in innerTags" :key="index">
                <span class="ivu-tag-text">{{ tag }}</span>
                <i v-if="!readonly" @click.prevent.stop="remove(index)"
                   class="ivu-icon ivu-icon-close"></i>
            </div>

            <input
                type="text"
                ref="inputTag"
                v-model="newTag"
                v-if="!readonly && !isLimit"
                :placeholder="placeholder"
                :maxlength="inputMaxlength"
                @keydown.delete.stop="removeLastTag"
                @keydown="addNew"
                @focus="handleInputFocus"
                @blur="handleInputBlur"
                @compositionstart="handleInputComposition"
                @compositionupdate="handleInputComposition"
                @compositionend="handleInputComposition"
            />
            <span class="ivu-input-word-count" v-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</span>
        </div>
    </div>
</template>
<script>
    import {oneOf} from '../../utils/assist';
    import clickOutside from '../../directives/clickoutside';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    /* eslint-disable */
    const validators = {
        email: new RegExp(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
        url: new RegExp(
            /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i
        ),
        text: new RegExp(/^[a-zA-Z]+$/),
        digits: new RegExp(/^[\d() \.\:\-\+#]+$/),
        isodate: new RegExp(
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
        )
    };
    /* eslint-enable */

    const prefixCls = 'ivu-input-tag';

    export default {
        name: 'InputTag',
        mixins: [ Emitter, mixinsForm ],
        directives: { clickOutside },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
                },
                default: 'text'
            },
            value: {
                type: Array,
                default: []
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            inputMaxlength: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 1
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                default: 'off'
            },
            clearable: {
                type: Boolean,
                default: false
            },
            elementId: {
                type: String
            },
            prefix: {
                type: String,
                default: ''
            },
            suffix: {
                type: String,
                default: ''
            },
            search: {
                type: Boolean,
                default: false
            },
            enterButton: {
                type: [Boolean, String],
                default: false
            },
            // 4.0.0
            showWordLimit: {
                type: Boolean,
                default: false
            },
            validate: {
                type: String | Function | Object,
                default: ''
            },
            addTagOnKeys: {
                type: Array,
                default: function() {
                    return [
                        13, // Return
                        188, // Comma ','
                        9 // Tab
                    ];
                }
            },
            addTagOnBlur: {
                type: Boolean,
                default: false
            },
            limit: {
                type: Number,
                default: -1
            },
            allowDuplicates: {
                type: Boolean,
                default: false
            },
            beforeAdding: {
                type: Function
            },
        },
        data () {
            return {
                prefixCls: prefixCls,
                inputTagStyles: {},
                isOnComposition: false,
                newTag: '',
                innerTags: [...this.value],
                isInputActive: false
            };
        },
        computed: {
            isLimit: function() {
                return this.limit > 0 && Number(this.limit) === this.innerTags.length;
            },
            currentType () {
                return this.type;
            },
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append || (this.search && this.enterButton)) && !!this.size,
                        [`${prefixCls}-group-with-prepend`]: this.prepend,
                        [`${prefixCls}-group-with-append`]: this.append || (this.search && this.enterButton),
                        [`${prefixCls}-hide-icon`]: this.append,  // #554
                        [`${prefixCls}-with-search`]: (this.search && this.enterButton)
                    }
                ];
            },
            inputTagClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-with-prefix`]: this.showPrefix,
                        [`${prefixCls}-with-suffix`]: this.showSuffix || (this.search && this.enterButton === false),
                        'read-only': this.readonly,
                        'vue-input-tag-wrapper--active': this.isInputActive
                    }
                ];
            },
            upperLimit () {
                return this.maxlength;
            },
            textLength () {
                if (typeof this.value === 'number') {
                    return String(this.value).length;
                }

                return (this.value || '').length;
            }
        },
        methods: {
            setCurrentValue (value) {
                if (JSON.stringify(value) === JSON.stringify(this.innerTags)) return;
                this.innerTags = [...this.value];
                this.dispatch('FormItem', 'on-form-change', value);
            },
            handleInputFocus () {
                this.isInputActive = true;
            },
            handleInputBlur (e) {
                this.isInputActive = false;
                this.addNew(e);
            },
            handleInputComposition(event) {
                if (event.type === 'compositionstart') {
                    this.isOnComposition = true;
                }
                if (event.type === 'compositionend') {
                    this.isOnComposition = false;
                }
            },
            handleFocus () {
                if (this.readOnly || !this.$el.querySelector('input')) {
                    return;
                }
                this.$el.querySelector('input').focus();
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
                const vModelValue = this.innerTags;
                this.$emit('input', vModelValue);
                this.dispatch('FormItem', 'on-form-blur', this.innerTags);
            },
            handleClear () {
                const e = { target: { value: [] } };
                this.$emit('input', []);
                this.setCurrentValue([]);
                this.$emit('on-change', e);
                this.$emit('on-clear');
            },
            async addNew(e) {
                const keyShouldAddTag = e
                    ? this.addTagOnKeys.indexOf(e.keyCode) !== -1
                    : true;
                const typeIsNotBlur = e && e.type !== 'blur';
                if (
                    (!keyShouldAddTag && (typeIsNotBlur || !this.addTagOnBlur)) ||
                    this.isLimit
                ) {
                    return;
                }
                const tag = this.beforeAdding
                    ? await this.beforeAdding(this.newTag)
                    : this.newTag;
                const isValid = await this.validateIfNeeded(tag);
                if (
                    tag &&
                    isValid &&
                    (this.allowDuplicates || this.innerTags.indexOf(tag) === -1)
                ) {
                    this.innerTags.push(tag);
                    this.newTag = '';
                    this.tagChange();
                    e && e.preventDefault();
                }
            },
            validateIfNeeded(tagValue) {
                if (this.validate === '' || this.validate === undefined) {
                    return true;
                }
                if (typeof this.validate === 'function') {
                    return this.validate(tagValue);
                }
                if (
                    typeof this.validate === 'string' &&
                    Object.keys(validators).indexOf(this.validate) > -1
                ) {
                    return validators[this.validate].test(tagValue);
                }
                if (
                    typeof this.validate === 'object' &&
                    this.validate.test !== undefined
                ) {
                    return this.validate.test(tagValue);
                }
                return true;
            },
            remove(index) {
                this.innerTags.splice(index, 1);
                this.tagChange();
            },
            removeLastTag() {
                if (this.newTag) {
                    return;
                }
                this.innerTags.pop();
                this.tagChange();
            },
            tagChange() {
                this.$emit('@on-change', this.innerTags);
            },
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        },
    };
</script>
