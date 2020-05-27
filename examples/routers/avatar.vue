<template>
    <div class="demo-avatar">
        <Avatar :style="{background: color}">{{ user }}</Avatar>
        <Button size="small" @click="handleChange">Change</Button>
        <div>
            <div class="demo-avatar">
                <Avatar icon="people" size="large" />
                <Avatar icon="people" />
                <Avatar icon="people" size="small" />
            </div>
            <div class="demo-avatar">
                <Avatar shape="square" icon="people" size="large" />
                <Avatar shape="square" icon="people" />
                <Avatar shape="square" icon="people" size="small" />
            </div>
        </div>
        <div class="demo-avatar">
            <Avatar icon="people" />
            <Avatar>U</Avatar>
            <Avatar>USER</Avatar>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
            <Avatar style="background-color: #87d068" icon="people" />
        </div>
        <div class="demo-avatar-badge">
            <Badge :count="1">
                <Avatar shape="square" icon="people" />
            </Badge>
            <Badge dot>
                <Avatar shape="square" icon="people" />
            </Badge>
        </div>
        <br><br><br>
        <Avatar custom-icon="ivu-icon-people" />

        <Avatar :src="src" size="large" @on-error="handleError" />
        <Divider></Divider>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="64" shape="square" />
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="64" shape="circle" />
        <Avatar icon="people" size="64" shape="circle" />
        <Avatar size="42">U</Avatar>
    </div>
</template>
<script>
    const UserList = ['Bách', 'An', 'Dương', 'Hoàng'];
    const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    export default {
        data () {
            return {
                user: UserList[0],
                color: ColorList[0],
                src: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj41/avatar'
            }
        },
        methods: {
            handleChange () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            },
            handleError () {
                this.src = 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar';
            }
        }
    }
</script>
