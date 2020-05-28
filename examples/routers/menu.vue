<template>
    <div>
        <div class="">
            <p>Change theme</p>
            <RadioGroup v-model="theme1">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
            </RadioGroup>
        </div>

        <Divider></Divider>
        <Row>
            <Col span="24">
                <Menu mode="horizontal" :theme="theme1" active-name="1">
                    <MenuItem name="1">
                        <Icon type="bluetooth-outline" />
                        MenuItem
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="people-outline" />
                        MenuItem
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="github-outline" />
                            Submenu with template
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="facebook" />
                        MenuItem
                    </MenuItem>
                </Menu>
            </Col>
        </Row>

        <Divider></Divider>

        <Row>
            <Col span="8">
                <Menu :theme="theme1">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="8">
                <Menu :theme="theme1" active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="8">
                <Menu :theme="theme1" :open-names="['1']" accordion>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
        <Divider/>
        <Row>
            <Col span="8">
                <Menu :theme="theme1">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="8">
                <Menu :theme="theme1" active-name="1-2" :open-names="['1']">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="8">
                <Menu :theme="theme1" :open-names="['1']" accordion>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="book" />
                            Submenu
                        </template>
                        <MenuItem name="1-1">MenuItem</MenuItem>
                        <MenuItem name="1-2">MenuItem</MenuItem>
                        <MenuItem name="1-3">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="people" />
                            Submenu
                        </template>
                        <MenuItem name="2-1">MenuItem</MenuItem>
                        <MenuItem name="2-2">MenuItem</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="archive" />
                            Submenu
                        </template>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-1">MenuItem</MenuItem>
                            <MenuItem name="3-2">MenuItem</MenuItem>
                            <MenuItem name="3-3">MenuItem</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="MenuGroup">
                            <MenuItem name="3-4">MenuItem</MenuItem>
                            <MenuItem name="3-5">MenuItem</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            };
        },
        methods: {
            hs (n) {
                console.log(n);
            }
        }
    };
</script>
