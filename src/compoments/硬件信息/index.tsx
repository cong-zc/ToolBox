import { Card, Descriptions } from 'tdesign-react';

import './index.css'


const 首页 = () => {

    const 卡片信息 = [
        {
            标题: '电脑型号',
            内容: ''
        },
        {
            标题: '系统信息',
            内容: ''
        },
        {
            标题: '运行时间',
            内容: ''
        },
    ]

    const 其他信息 = [
        {
            label: '处理器',
            content: 
            <div>
                cpu
            </div>,
        },
        {
            label: '主板',
            content: '139****0609',
        },
        {
            label: '内存',
            content: 'China Tencent Headquarters',
        },
        {
            label: '显卡',
            content: 'Shenzhen Penguin Island D1 4A Mail Center',
        },
        {
            label: '显示器',
            content: `Shenzhen\n Penguin Island \nD1 4A Mail Center`,
        },
        {
            label: '硬盘',
            content: `Shenzhen Penguin Island D1 4A Mail Center`,
        },
        {
            label: '声卡',
            content: 'Shenzhen Penguin Island D1 4A Mail Center',
        },
        {
            label: '网卡',
            content: 'wangl',
        }
    ]

    return (
        <div className='硬件信息'>
            <div className='主要信息'>
                {卡片信息.map((item) => {
                    return (<Card
                        key={item.标题}
                        title={item.标题}
                        bordered
                        headerBordered
                        style={{ width: '280px' }}
                    >
                        {item.内容}
                    </Card>)
                })}
            </div>
            <div className='其他信息'>
                <Descriptions
                    items={其他信息}
                    title="其他信息"
                    bordered layout='vertical'
                    itemLayout='horizontal'
                />
            </div>

        </div>

    )
}

export default 首页