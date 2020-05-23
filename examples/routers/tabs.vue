<template>
    <div style="height: 5000px">
        <Tabs>
            <TabPane :label="label" name="name1"></TabPane>
            <TabPane v-for="tab in tabs" :key="tab" :label="'Tab' + tab" icon="facebook">Tab content {{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">Button</Button>
        </Tabs>

        <Divider></Divider>

        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="'Tab' + tab" icon="github">Tab content {{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">Button</Button>
        </Tabs>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 100,
                label: (h) => {
                    return h('div', [
                        h('span', 'Rendered Tab'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ]);
                }
            };
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    };
</script>
