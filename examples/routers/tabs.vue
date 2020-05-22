<template>
    <div style="height: 5000px">
        <Tabs>
            <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab" icon="facebook">Tab {{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">Button</Button>
        </Tabs>

        <Divider></Divider>

        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab" icon="github">Tab {{ tab }}</TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">Button</Button>
        </Tabs>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 100
            };
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    };
</script>
