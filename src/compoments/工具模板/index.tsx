import { Image, Space } from 'tdesign-react';

import { invoke } from '@tauri-apps/api/core'
const 工具模板 = (props: any) => {

    const 点击打开外部程序 = () => {
        invoke('打开外部程序', { 程序目录: props.程序目录 })
    }
    return (
        <Space direction="vertical" align="center">
            <Image
                onClick={点击打开外部程序}
                src={props.图片地址}
                style={{ width: 40, height: 40 }}
                fit="cover"
                shape="circle"
                key={props.程序名称}
            />
            {props.程序名称}
        </Space>
    )
}

export default 工具模板