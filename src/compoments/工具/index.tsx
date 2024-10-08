import { Space } from 'tdesign-react'
import 工具模板 from '../工具模板/index'
import './index.css'

export const CPU工具 = () => {
    //  console.log(window.location.href)
    const 工具信息 = [
        {
            图片地址: "/工具/处理器工具/CoreTemp/1.ico",
            程序名称: 'Core Temp',
            程序目录: 'resources/工具/处理器工具/CoreTemp/Core Temp x64.exe'
        },
        {
            图片地址: "/工具/处理器工具/LinX/1.ico",
            程序名称: 'LinX',
            程序目录: 'resources/工具/处理器工具/LinX/LinX.exe'
        },
        {
            图片地址: "工具/处理器工具/Prime95/1.ico",
            程序名称: 'prime95',
            程序目录: 'resources/工具/处理器工具/Prime95/prime95.exe'
        },
        {
            图片地址: "/工具/处理器工具/superpi/1.ico",
            程序名称: 'Superpi',
            程序目录: 'resources/工具/处理器工具/superpi/Superpi.exe'
        },
        {
            图片地址: "/工具/处理器工具/ThrottleStop/1.png",
            程序名称: 'ThrottleStop',
            程序目录: 'resources/工具/处理器工具/ThrottleStop/ThrottleStop.exe'
        },
        {
            图片地址: "/工具/处理器工具/wPrime/1.png",
            程序名称: 'wPrime',
            程序目录: 'resources/工具/处理器工具/wPrime/wPrime.exe'
        },
        {
            图片地址: "/工具/处理器工具/XIANGQI/1.png",
            程序名称: 'XIANGQI',
            程序目录: 'resources/工具/处理器工具/XIANGQI/xiangqi.exe'
        }
    ]

    return (
        <Space className='工具列表' direction='horizontal' breakLine>
            {工具信息.map((item) => {
                return <工具模板
                    图片地址={item.图片地址}
                    程序名称={item.程序名称}
                    程序目录={item.程序目录}
                ></工具模板>

            })}
        </Space>

    )

}

export const 内存工具 = () => {

    const 工具信息 = [
        {
            图片地址: "工具/内存工具/memtest64/1.ico",
            程序名称: 'memtest64',
            程序目录: 'resources/工具/内存工具/memtest64/MemTest64.exe'
        },
        {
            图片地址: "工具/内存工具/Thaiphoon/1.ico",
            程序名称: 'Thaiphoon',
            程序目录: 'resources/工具/内存工具/Thaiphoon/Thaiphoon.exe'
        },
        {
            图片地址: "/工具/内存工具/tm5/1.ico",
            程序名称: 'tm5',
            程序目录: 'resources/工具/内存工具/tm5/TM5.exe'
        }
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 显卡工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'AMDGPUClockTool',
            程序目录: 'resources/工具/显卡工具/AMDGPUClockTool/AMDGPUClockTool.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'DDU',
            程序目录: 'resources/工具/显卡工具/DDU/Display Driver Uninstaller.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'dxvachecker',
            程序目录: 'resources/工具/显卡工具/dxvachecker/DXVAChecker.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'GpuTest_Windows x64',
            程序目录: 'resources/工具/显卡工具/GpuTest_Windows x64/GpuTest_GUI.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'GPUZ',
            程序目录: 'resources/工具/显卡工具/GpuTest_Windows x64/GPU-Z.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'nvidiaInspector',
            程序目录: 'resources/工具/显卡工具/nvidiaInspector/nvidiaInspector.exe'
        },
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 硬盘工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'ASSSDBenchmark',
            程序目录: 'resources/工具/硬盘工具/ASSSDBenchmark/ASSSDBenchmark.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'ATTODISKBENCHMARK',
            程序目录: 'resources/工具/硬盘工具/ATTODISKBENCHMARK/ATTO 磁盘基准测试.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'dxvachecker',
            程序目录: 'resources/工具/硬盘工具/CrystalDiskInfo/DiskInfo64S.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'GpuTest_Windows x64',
            程序目录: 'resources/工具/硬盘工具/CrystalDiskMark/DiskMark64S.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'Defraggler',
            程序目录: 'resources/工具/硬盘工具/Defraggler/Defraggler.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'DiskGenius',
            程序目录: 'resources/工具/硬盘工具/DiskGenius/DiskGenius.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'finaldata',
            程序目录: 'resources/工具/硬盘工具/finaldata/FdWizard.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'FlashMaster',
            程序目录: 'resources/工具/硬盘工具/FlashMaster/FlashMaster.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'H2testw',
            程序目录: 'resources/工具/硬盘工具/H2testw/h2testw_1.4.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'HDTune',
            程序目录: 'resources/工具/硬盘工具/HDTune/HDTune.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'LLFTOOL',
            程序目录: 'resources/工具/硬盘工具/LLFTOOL/LLFTOOL.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'MyDiskTest_v298',
            程序目录: 'resources/工具/硬盘工具/MyDiskTest_v298/MyDiskTest_v298.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'SpaceSniffer',
            程序目录: 'resources/工具/硬盘工具/SpaceSniffer/SpaceSniffer.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'SSDZ',
            程序目录: 'resources/工具/硬盘工具/SSDZ/SSDZ.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'urwtest_v18',
            程序目录: 'resources/工具/硬盘工具/urwtest_v18/urwtest_v18.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'windirstat',
            程序目录: 'resources/工具/硬盘工具/windirstat/windirstat.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: '魔方数据恢复',
            程序目录: 'resources/工具/硬盘工具/魔方数据恢复/魔方数据恢复.exe'
        },
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 屏幕工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: '色域检测',
            程序目录: 'resources/工具/显示器工具/色域检测/monitorinfo.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: '在线屏幕测试',
            程序目录: 'resources/工具/显示器工具/在线屏幕测试/在线屏幕测试.bat'
        }
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 综合检测 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'AIDA64',
            程序目录: 'resources/工具/综合检测/AIDA64/'//软件需要下载
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'hwinfo',
            程序目录: 'resources/工具/综合检测/hwinfo/HWiNFO64.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'OCCT',
            程序目录: 'resources/工具/综合检测/OCCT/OCCT.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'RWEverything',
            程序目录: 'resources/工具/综合检测/RWEverything/Rw.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'speccy',
            程序目录: 'resources/工具/综合检测/speccy/Speccy64.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: '图拉丁硬件检测',
            程序目录: 'resources/工具/综合检测/图拉丁硬件检测/图拉丁硬件检测.exe'
        }
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 外设工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'AresonMouseTest',
            程序目录: 'resources/工具/外设工具/AresonMouseTest/鼠标测试软件AresonMouseTestProgram.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'Keyboard Test Utility',
            程序目录: 'resources/工具/外设工具/Keyboard Test Utility/Keyboard Test Utility.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'MOUSERATE',
            程序目录: 'resources/工具/外设工具/MOUSERATE/MOUSERATE.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'RWEverything',
            程序目录: 'resources/工具/外设工具/鼠标单机变双击测试器/鼠标单击变双击测试器V2.0.exe'
        }
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 烤鸡工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'FurMark',
            程序目录: 'resources/工具/烤鸡工具/FurMark/FurMark.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'cpuburner',
            程序目录: 'resources/工具/烤鸡工具/cpuburner.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'gpushark',
            程序目录: 'resources/工具/烤鸡工具/gpushark.exe'
        },
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}

export const 其他工具 = () => {

    const 工具信息 = [
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'bluescreenview',
            程序目录: 'resources/工具/其他工具/bluescreenview/BlueScreenViewx64.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'DesktopOK',
            程序目录: 'resources/工具/其他工具/DesktopOK/DesktopOK.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'Dism++',
            程序目录: 'resources/工具/其他工具/Dism++x64/Dism++x64.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'Everything',
            程序目录: 'resources/工具/其他工具/Everything/Everything.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'Geek Uninstaller',
            程序目录: 'resources/工具/其他工具/Geek Uninstaller/Geek Uninstaller.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'gifcam',
            程序目录: 'resources/工具/其他工具/gifcam/GifCam.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'procexp',
            程序目录: 'resources/工具/其他工具/procexp/procexp.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'rufus',
            程序目录: 'resources/工具/其他工具/rufus/rufus.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'ventoy',
            程序目录: 'resources/工具/其他工具/ventoy/Ventoy2Disk.exe'
        },
        {
            图片地址: "https://tdesign.gtimg.com/demo/demo-image-1.png",
            程序名称: 'WinDbg',
            程序目录: 'resources/工具/其他工具/WinDbg/windbg.exe'
        }
    ]
    return <Space className='工具列表' direction='horizontal' breakLine>
        {工具信息.map((item) => {
            return <工具模板
                图片地址={item.图片地址}
                程序名称={item.程序名称}
                程序目录={item.程序目录}
            ></工具模板>
        })}
    </Space>
}