import { Fragment, useState } from 'react';
import { Menu } from 'tdesign-react';

import type { MenuValue } from 'tdesign-react';
import './index.css'

// import 工具模板 from '../工具模板/index'
import 硬件信息 from '../硬件信息/index'
import {CPU工具,内存工具,显卡工具,硬盘工具,屏幕工具,综合检测,外设工具,烤鸡工具,其他工具} from '../工具/index'

const { MenuItem } = Menu;


const SingleSide = () => {
    const [active, setActive] = useState<MenuValue>('0');
    // 获取插槽内容
    const 菜单数据 = [
        {
            序号: 0,
            菜单项: '硬件信息',
        },
        {
            序号: 1,
            菜单项: 'CPU工具',
        },
        {
            序号:2,
            菜单项: '内存工具',
        },
        {
            序号: 3,
            菜单项: '显卡工具'
        },
        {
            序号: 4,
            菜单项: '硬盘工具'
        },
        {
            序号: 5,
            菜单项: '屏幕工具'
        },
        {
            序号: 6,
            菜单项: '综合检测'
        },
        {
            序号: 7,
            菜单项: '外设工具'
        },
        {
            序号: 8,
            菜单项: '烤鸡工具'
        },
        {
            序号: 9,
            菜单项: '其他工具'
        },
        {
            序号: 10,
            菜单项: '选项设置'
        }
    ]

    // 遍历菜单数组
    const 遍历菜单数据 = 菜单数据.map(菜单项 =>
        <MenuItem value={菜单项.序号} key={菜单项.序号}>
            <p>{菜单项.菜单项}</p>
        </MenuItem>
    )


    const 遍历组件数据 = () => {
        switch (active) {
            case 0:
                return <硬件信息></硬件信息>
            case 1:
                return <CPU工具></CPU工具>
            case 2:
                return <内存工具></内存工具>
            case 3:
                return <显卡工具></显卡工具>
            case 4:
                return <硬盘工具></硬盘工具>
            case 5:
                return <屏幕工具></屏幕工具>
            case 6:
                return <综合检测></综合检测>
            case 7:
                return <外设工具></外设工具>
            case 8:
                return <烤鸡工具></烤鸡工具>
            case 9:
                return <其他工具></其他工具>
            case 10:
                return <p>选项设置</p>
          
            default:
                return <硬件信息></硬件信息>
        }

    }
    // console.log(active)
    return (
        <div className='侧边导航'>
            <Fragment>
                <Menu
                    value={active}
                    onChange={(v) => setActive(v)}
                    style={{ marginRight: 20 }}
                >
                    {遍历菜单数据}
                </Menu>
                {遍历组件数据()}
            </Fragment>
        </div>

    );
}

export default SingleSide;
