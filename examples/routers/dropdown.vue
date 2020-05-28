<template>
    <div>
        <Dropdown trigger="click" transfer @on-click="aaaa(111)">
            <Button  size="small" type="primary">
                Dropdown
                <Icon type="md-arrow-dropdown" />
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
                <DropdownItem>DropdownItem</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Cascader :data="data" v-model="value1" transfer style="width: 200px"></Cascader>
        <Select v-model="model1" multiple transfer style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Poptip trigger="click" transfer title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <ColorPicker v-model="color1" transfer />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                updatedate:null,
                color1: '#19be6b',
                value1: [],
                data: [{
                    value: 'Hà Nội',
                    label: 'Hà Nội',
                    children: [
                        {
                            value: 'BaDinh',
                            label: 'Ba Đình'
                        },
                        {
                            value: 'DongDa',
                            label: 'Đống Đa'
                        },
                        {
                            value: 'CauGiay',
                            label: 'Cầu Giấy'
                        }
                    ]
                }, {
                    value: 'HCM',
                    label: 'Hồ Chí Minh',
                    children: [
                        {
                            value: 'Quan1',
                            label: 'Quận 1',
                            children: [
                                {
                                    value: 'Phuong12',
                                    label: 'Phường 12',
                                }
                            ]
                        },
                        {
                            value: 'QuanBinhTan',
                            label: 'Quận Bình Tân',
                            children: [
                                {
                                    value: 'PhuongBinhThanhA',
                                    label: 'Phường Bình Thạnh A',
                                },
                                {
                                    value: 'PhuongBinhThanhB',
                                    label: 'Phường Bình Thạnh B',
                                }
                            ]
                        }
                    ],
                }],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: []
            }
        },
        methods: {
            aaaa(){
                this.$Message.info("aaaaa");
            }
        },
        mounted () {

        }
    }
</script>
