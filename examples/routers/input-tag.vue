<template>
    <div>
        <Divider>
            Input Tag has size = default
        </Divider>

        <InputTag v-model="value"
                  @input="handleInput"
                  placeholder="Enter something..."
                  style="width: 300px"></InputTag>

        <Divider>
            Input Tag has size = large
        </Divider>

        <InputTag v-model="value"
                  size="large"
                  placeholder="Enter something..."
                  style="width: 300px"></InputTag>

        <Divider>
            Input Tag has size = small
        </Divider>

        <InputTag v-model="value"
                  size="small"
                  placeholder="Enter something..."
                  style="width: 300px"></InputTag>

        <Divider>
            Input Tag has limit tags = 6
        </Divider>

        <InputTag v-model="value"
                  :limit="6"
                  placeholder="Enter something..."
                  style="width: 300px"></InputTag>

        <Divider>
            Input Tag has input max length = 5
        </Divider>

        <InputTag v-model="value"
                  :inputMaxlength="5"
                  placeholder="Enter something..."
                  style="width: 300px"></InputTag>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: [ 'London', 'Paris', 'Canberra', 'Sydney', 'Ottawa' ],
            };
        },
        methods: {
            handleInput (val) {
                console.log(val);
            }
        }
    };
</script>
