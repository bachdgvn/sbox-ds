<style lang="less">
    @import "./styles/app.less";
</style>
<template>
    <div class="layout">
        <Layout>
            <Header class="layout-header">
                <div class="layout-logo">Sbox DS</div>
            </Header>
            <Layout>
                <Sider hide-trigger>
                    <Menu>
                        <MenuGroup title="Basic">
                            <MenuItem name="color" to="/color">
                                Color
                            </MenuItem>
                            <MenuItem name="font" to="/font">
                                Font
                            </MenuItem>
                            <MenuItem name="icon" to="/icon">
                                Icon
                            </MenuItem>
                            <MenuItem name="button" to="/button">
                                Button
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Layout">
                            <MenuItem name="grid" to="/grid">
                                Grid
                            </MenuItem>
                            <MenuItem name="layout" to="/layout">
                                Layout
                            </MenuItem>
                            <MenuItem name="list" to="/list">
                                List
                            </MenuItem>
                            <MenuItem name="card" to="/card">
                                Card
                            </MenuItem>
                            <MenuItem name="collapse" to="/collapse">
                                Collapse
                            </MenuItem>
                            <MenuItem name="split" to="/split">
                                Split
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Navigation">
                            <MenuItem name="menu" to="/menu">
                                Menu
                            </MenuItem>
                            <MenuItem name="tabs" to="/tabs">
                                Tabs
                            </MenuItem>
                            <MenuItem name="dropdown" to="/dropdown">
                                Dropdown
                            </MenuItem>
                            <MenuItem name="page" to="/page">
                                Page
                            </MenuItem>
                            <MenuItem name="breadscrumb" to="/breadscrumb">
                                Breadscrumb
                            </MenuItem>
                            <MenuItem name="badge" to="/badge">
                                Badge
                            </MenuItem>
                            <MenuItem name="anchor" to="/anchor">
                                Anchor
                            </MenuItem>
                            <MenuItem name="steps" to="/steps">
                                Steps
                            </MenuItem>
                            <MenuItem name="loadingbar" to="/loading-bar">
                                LoadingBar
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Form">
                            <MenuItem name="form" to="/form">
                                Form
                            </MenuItem>
                            <MenuItem name="input" to="/input">
                                Input
                            </MenuItem>
                            <MenuItem name="inputnumber" to="/input-number">
                                InputNumber
                            </MenuItem>
                            <MenuItem name="radio" to="/radio">
                                Radio
                            </MenuItem>
                            <MenuItem name="checkbox" to="/checkbox">
                                Checkbox
                            </MenuItem>
                            <MenuItem name="switch" to="/switch">
                                Switch
                            </MenuItem>
                            <MenuItem name="table" to="/table">
                                Table
                            </MenuItem>
                            <MenuItem name="select" to="/select">
                                Select
                            </MenuItem>
                            <MenuItem name="autocomplete" to="/autocomplete">
                                Autocomplete
                            </MenuItem>
                            <MenuItem name="rate" to="/rate">
                                Rate
                            </MenuItem>
                            <MenuItem name="slider" to="/slider">
                                Slider
                            </MenuItem>
                            <MenuItem name="datepicker" to="/datepicker">
                                DatePicker
                            </MenuItem>
                            <MenuItem name="timepicker" to="/timepicker">
                                TimePicker
                            </MenuItem>
                            <MenuItem name="time" to="/time">
                                Time
                            </MenuItem>
                            <MenuItem name="cascader" to="/cascader">
                                Cascader
                            </MenuItem>
                            <MenuItem name="transfer" to="/transfer">
                                Transfer
                            </MenuItem>
                            <MenuItem name="upload" to="/upload">
                                Upload
                            </MenuItem>
                            <MenuItem name="colorpicker" to="/colorpicker">
                                ColorPicker
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="View">
                            <MenuItem name="alert" to="/alert">
                                Alert
                            </MenuItem>
                            <MenuItem name="message" to="/message">
                                Message
                            </MenuItem>
                            <MenuItem name="notice" to="/notice">
                                Notice
                            </MenuItem>
                            <MenuItem name="modal" to="/modal">
                                Modal
                            </MenuItem>
                            <MenuItem name="drawer" to="/drawer">
                                Drawer
                            </MenuItem>
                            <MenuItem name="tree" to="/tree">
                                Tree
                            </MenuItem>
                            <MenuItem name="tooltip" to="/tooltip">
                                Tooltip
                            </MenuItem>
                            <MenuItem name="poptip" to="/poptip">
                                Poptip
                            </MenuItem>
                            <MenuItem name="progress" to="/progress">
                                Progress
                            </MenuItem>
                            <MenuItem name="avatar" to="/avatar">
                                Avatar
                            </MenuItem>
                            <MenuItem name="tag" to="/tag">
                                Tag
                            </MenuItem>
                            <MenuItem name="carousel" to="/carousel">
                                Carousel
                            </MenuItem>
                            <MenuItem name="timeline" to="/timeline">
                                Timeline
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Chart">
                            <MenuItem name="circle" to="/circle">
                                Circle
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Other">
                            <MenuItem name="affix" to="/affix">
                                Affix
                            </MenuItem>
                            <MenuItem name="backtop" to="/backtop">
                                BackTop
                            </MenuItem>
                            <MenuItem name="spin" to="/spin">
                                Spin
                            </MenuItem>
                            <MenuItem name="scroll" to="/breadscrumb">
                                Scroll
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {
            };
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    };
</script>
