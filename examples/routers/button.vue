<template>
    <div>
        <Divider>vue-router 3.1 bug</Divider>
        <Button to="/button">跳转到 Button（当前路径）</Button>
        <Button to="/button" replace>跳转到 Button（当前路径, replace）</Button>
        <Divider></Divider>
        <Button icon="github" size="small" shape="circle"></Button>
        <Button icon="github" shape="circle"></Button>
        <Button icon="github" size="large" shape="circle"></Button>

        <Button icon="github" size="small"></Button>
        <Button size="small">EN</Button>

        <Button icon="github"></Button>
        <Button>EN</Button>

        <Button icon="github" size="large"></Button>
        <Button size="large">EN</Button>

        <ButtonGroup size="small">
            <Button icon="github"></Button>
            <Button icon="twitter"></Button>
            <Button>
                EN
            </Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button icon="github"></Button>
            <Button icon="twitter"></Button>
            <Button>
                ENs
            </Button>
        </ButtonGroup>

        <ButtonGroup size="large">
            <Button icon="github"></Button>
            <Button icon="twitter"></Button>
            <Button >
                EN
            </Button>
        </ButtonGroup>
        <br><br><br>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <Button type="text">Text</Button>
        <br><br><br>
        <Button type="default" disabled>Default</Button>
        <Button type="primary" disabled>Primary</Button>
        <Button type="dashed" disabled>Dashed</Button>
        <Button type="info" disabled>Info</Button>
        <Button type="success" disabled>Success</Button>
        <Button type="warning" disabled>Warning</Button>
        <Button type="error" disabled>Error</Button>
        <Button type="text" disabled>Text</Button>
        <br><br><br>
        <div style="padding: 20px;background: rgb(190, 200, 200)">
            <Button type="default" ghost>Default</Button>
            <Button type="primary" ghost>Primary</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="info" ghost>Info</Button>
            <Button type="success" ghost>Success</Button>
            <Button type="warning" ghost>Warning</Button>
            <Button type="error" ghost>Error</Button>
            <Button type="text" ghost>Text</Button>
            <br><br><br>
            <Button type="default" ghost disabled>Default</Button>
            <Button type="primary" ghost disabled>Primary</Button>
            <Button type="dashed" ghost disabled>Dashed</Button>
            <Button type="info" ghost disabled>Info</Button>
            <Button type="success" ghost disabled>Success</Button>
            <Button type="warning" ghost disabled>Warning</Button>
            <Button type="error" ghost disabled>Error</Button>
            <Button type="text" ghost disabled>Text</Button>
        </div>
        <Divider></Divider>
        <Button type="primary">Primary</Button>
        <Button type="primary" to="/">Primary with router</Button>
        <Button type="primary" size="small">Primary small</Button>
        <Button type="primary" to="/" size="small">Primary small with router</Button>
        <Button type="primary" size="large">Primary large</Button>
        <Button type="primary" to="/" size="large">Primary large with router</Button>
        <Button type="primary" size="large" shape="circle">Primary large circle</Button>
        <Button type="primary" to="/" size="large" shape="circle">Primary large circle with router</Button>
        <br><br><br>
        <Button type="primary" icon="info-outline" size="small">Search</Button>
        <Button type="primary" icon="info-outline" size="default">Search</Button>
        <Button type="primary" icon="info-outline" size="large">Search</Button>
        <br><br><br>
        <Button @click="hc">Open Menu2</Button>
        <Button to="/menu" @click="hc">Open Menu2</Button>
        <Button to="/menu" replace>Open Menu Replace</Button>
        <Button to="//iviewui.com" target="_blank">Open iView</Button>
        <hr>
        <Button @click="hc">Button Click</Button>
        <Button to="/menu" @click="hc">Button Click Router</Button>
        <hr>
        <Icon custom="i-icon i-icon-search" />
        <Icon custom="i-icon i-icon-video" size="24" color="#ff6600" />
        <Icon custom="i-icon i-icon-time" />
        <Icon type="heart" />
        <Button icon="heart">Default</Button>
        <Button custom-icon="i-icon i-icon-search">Default</Button>
        <Button icon="github" shape="circle"></Button>
        <Button custom-icon="i-icon i-icon-video" shape="circle"></Button>
        <hr>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="default">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br><br>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <br><br>
        <Button type="primary" shape="circle" icon="search"></Button>
        <Button type="primary" icon="search">Search</Button>
        <Button type="primary" shape="circle" icon="search">Search</Button>
        <Button type="primary" shape="circle">Circle</Button>
        <br><br>
        <Button type="default" shape="circle" icon="search"></Button>
        <Button type="default" icon="search">Search</Button>
        <Button type="default" shape="circle" icon="search">Search</Button>
        <Button type="default" shape="circle">Circle</Button>
        <br><br>
        <Button>Default</Button>
        <Button disabled>Default(Disabled)</Button>
        <br>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(Disabled)</Button>
        <br>
        <Button type="default">Ghost</Button>
        <Button type="default" disabled>Ghost(Disabled)</Button>
        <br>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(Disabled)</Button>
        <br>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text(Disabled)</Button>
        <br><br>

        <br><br>
        <h4>Button group</h4>
        <br><br>
        <Button-group>
            <Button>button 1</Button>
            <Button type="primary">button 2</Button>
        </Button-group>
        <Button-group>
            <Button disabled>button 1</Button>
            <Button disabled>button 2</Button>
            <Button disabled>button 3</Button>
        </Button-group>
        <Button-group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="default">M</Button>
            <Button type="dashed">R</Button>
        </Button-group>
        <br><br>
        <h4>Button group with text & icon</h4>
        <br><br>
        <Button-group>
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                Left
            </Button>
            <Button type="primary">
                Right
                <Icon type="chevron-right"></Icon>
            </Button>
        </Button-group>
        <Button-group>
            <Button type="primary" icon="skip-back-outline"></Button>
            <Button type="primary" icon="skip-forward-outline"></Button>
        </Button-group>
        <Button-group>
            <Button type="default" icon="bluetooth"></Button>
            <Button type="default" icon="sun-outline"></Button>
            <Button type="default" icon="crop"></Button>
            <Button type="default" icon="cloud-download-outline"></Button>
        </Button-group>
        <br><br>
        <h4>Button group circle</h4>
        <br><br>
        <Button-group shape="circle">
            <Button type="primary">
                <Icon type="chevron-left"></Icon>
                Left
            </Button>
            <Button type="primary">
                Right
                <Icon type="chevron-right"></Icon>
            </Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="primary" icon="skip-back-outline"></Button>
            <Button type="primary" icon="skip-forward-outline"></Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="default" icon="bluetooth"></Button>
            <Button type="default" icon="sun-outline"></Button>
            <Button type="default" icon="crop"></Button>
            <Button type="default" icon="cloud-download-outline"></Button>
        </Button-group>
        <br><br>
        <h4>Button size</h4>
        <br><br>
        <Button-group size="large">
            <Button type="default">Large</Button>
            <Button type="default">Large</Button>
        </Button-group>
        <Button-group>
            <Button type="default">Default</Button>
            <Button type="default">Default</Button>
        </Button-group>
        <Button-group size="small">
            <Button type="default">Small</Button>
            <Button type="default">Small</Button>
        </Button-group>
        <br><br>
        <Button-group size="large" shape="circle">
            <Button type="default">Large</Button>
            <Button type="default">Large</Button>
        </Button-group>
        <Button-group shape="circle">
            <Button type="default">Default</Button>
            <Button type="default">Default</Button>
        </Button-group>
        <Button-group size="small" shape="circle">
            <Button type="default">Small</Button>
            <Button type="default">Small</Button>
        </Button-group>

        <br><br>
        <Button to="/icon">Open New Window</Button>
        <br><br><br>
        <ButtonGroup vertical size="small">
            <Button icon="facebook"></Button>
            <Button icon="twitter"></Button>
            <Button icon="linkedin"></Button>
            <Button icon="behance"></Button>
        </ButtonGroup>
        <ButtonGroup vertical>
            <Button icon="facebook"></Button>
            <Button icon="twitter"></Button>
            <Button icon="linkedin"></Button>
            <Button icon="behance"></Button>
        </ButtonGroup>
        <ButtonGroup vertical size="large">
            <Button icon="facebook"></Button>
            <Button icon="twitter"></Button>
            <Button icon="linkedin"></Button>
            <Button icon="behance"></Button>
        </ButtonGroup>
        <br><br>
        <Button>
            <Icon type="alert-circle" />
            Button with left-right icon
            <Icon type="alert-circle" />
        </Button>
        <Button>
            Button with right icon
            <Icon type="smiling-face-outline" />
        </Button>
        <Button>
            <Icon type="alert-circle" />
            Button with left icon
        </Button>
        <Button icon="alert-circle">
            Button with left-right icon by button attribute
        </Button>
        <Divider></Divider>
        <div>
            <RadioGroup v-model="buttonSize" type="button">
                <Radio label="large">Large</Radio>
                <Radio label="default">Default</Radio>
                <Radio label="small">small</Radio>
            </RadioGroup>
            <br><br>
            <Button :size="buttonSize" type="primary">Primary</Button>
            <Button :size="buttonSize" type="default">Default</Button>
            <Button :size="buttonSize" type="dashed">Dashed</Button>
            <Button :size="buttonSize" type="text">Text</Button>
            <br><br>
            <Button :size="buttonSize" icon="droplet-off-outline" type="primary" shape="circle"></Button>
            <Button :size="buttonSize" icon="droplet-off-outline" type="primary">Droplets</Button>
            <br><br>
            <ButtonGroup :size="buttonSize">
                <Button :size="buttonSize" type="primary">
                    <Icon type="arrow-back" />
                    Backward
                </Button>
                <Button :size="buttonSize" type="primary">
                    Forward
                    <Icon type="arrow-forward" />
                </Button>
            </ButtonGroup>
            <br><br>
            <Button :size="buttonSize" icon="droplet-off-outline"
                    long
                    :loading="true" type="primary">Droplets</Button>
        </div>
        <Divider></Divider>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                buttonSize: 'large'
            };
        },
        methods: {
            hc (data) {
                console.log(data);
            }
        }
    };
</script>
