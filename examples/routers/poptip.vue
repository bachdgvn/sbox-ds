<template>
    <div>
        <Poptip trigger="hover" title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <Poptip title="Title" content="content">
            <Button>Click</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Button>Focus</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Input placeholder="Input focus" />
        </Poptip>

        <Divider></Divider>

        <Poptip
            confirm
            title="Are you sure you want to delete this item?"
            @on-ok="ok"
            @on-cancel="cancel">
            <Button>Delete</Button>
        </Poptip>
        <Poptip
            confirm
            title="Are you sure delete this task?"
            @on-ok="ok"
            @on-cancel="cancel"
            ok-text="yes"
            cancel-text="no">
            <Button>Internationalization</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('You click ok');
            },
            cancel () {
                this.$Message.info('You click cancel');
            }
        }
    };
</script>
