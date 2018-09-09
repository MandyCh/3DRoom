(function(window, undefined) {

    make.Default.devicePanel_server = {
        "f5-big-ip3600": { height: 1, description: "F5 BIG-IP LTM 3600，可将您的网络转变为灵活的应用交付基础架构" },
        "hp_3par_7400": { height: 6, description: "" },
        "hp_c7000_matrix": {
            height: 10,
            description: "BladeSystem c7000 机箱可提供模块化服务器、互连和存储组件当前和未来几年所需的电力、散热能力及 I/O 基础设施。 该机箱高 10U，可容纳 16 台服务器和/或存储刀片，以及可选的冗余网络和存储互连模块"
        },
        "hp_dl360_gen8_3par": { height: 1, description: "HP ProLiant DL360e Gen8是一款电子产品，CPU型号为XeonE5-24031.8GHz，标配CPU数量为1颗" },
        "hp_rp4440": { height: 4, description: "惠普HP 9000 rp4440-8，是一款处理器类型为PA-8900，处理器主频为800MHz/1GHz" },
        "hp_rp7420": { height: 2, description: "惠普9000rp7420-16是一款小型机，处理器主频为1.1GHz" },
        "hp_rx3600_1": { height: 2, description: "类别:机架式 结构:2U CPU类型:双处理器 支持CPU个数:2 内存大小:2GB 硬盘大小（GB）:73GB" },
        "hp_rx3600": { height: 2, description: "类别:机架式 结构:2U CPU类型:双处理器 支持CPU个数:2 内存大小:2GB 硬盘大小（GB）:73GB" },
        "hp_rx9800": {
            height: 4,
            description: "HP Integrity rx9800融合了HP Integrity Server，Blade-system server的优势，能够显著提高灵活性并大大简化复杂的基础设施"
        },
        "hp_rx9900": {
            height: 10,
            description: "HP Integrity rx9900融合了HP Integrity Server，Blade-system server的优势，能够显著提高灵活性并大大简化复杂的基础设施"
        },
        "hp_rx9900": {
            height: 10,
            description: "HP Integrity rx9900融合了HP Integrity Server，Blade-system server的优势，能够显著提高灵活性并大大简化复杂的基础设施"
        },
        "hp_san": {
            height: 1,
            description: "HP StorageWorks SAN虚拟化服务平台(SVSP)是一款基于网络的虚拟化解决方案，客户可以集中管理存储池，并在不同的服务器环境中创建惠普与非惠普存储资源虚拟卷"
        },
        "hp_tape_5300": {
            height: 3,
            description: "HP tape array 5300是一个3U的机柜系统，可安装两个全高阵列模块，四个半高模块，或者一个全高和两个半高模块。该机柜系统支持惠普阵列模块，包括Ultrium（傲群）230、Ultrium（傲群）215、DLT80、DLT vs80、DAT40和DAT24磁带驱动器，以及DVD-ROM"
        },
        "netopti2200": { height: 1, description: "" },
        "nsae6500": { height: 2, description: "SonicWALL NSA E6500是一款企业级防火墙，网络吞吐量是3072Mbps" },
        "yh_610l": {
            height: 4,
            description: "用户界面友好,带前置过滤网易于维护,支持250W ATX PFC PS/2电源,前置电源和HDD状态指示灯,抗振荡抗冲击,能在高温下稳定工作,防震设计的驱动器台可以容和3个5.25寸及1个3.5寸前端驱动器,灵活的机械设计支持PS/2单电源和冗余电源 "
        },
        "amp_category_5e_system": { height: 1, description: "" },
        "h3c_ix3000": {
            height: 4,
            description: "IX3000设备的控制器在NeoStor控制台中显示为NeoStor服务器。每台IX3000设备有两个控制器，在NeoStor控制台中对应有两个NeoStor服务器"
        },
        "ddf": { height: 3, description: "数字配线架是数字复用设备之间，数字复用设备与程控交换设备或数据业务设备等其他专业设备之间的配线连接设备" },
        "hikvision_ds-8108hs_s": { height: 2, description: "" },
        "hp_p6300": {
            height: 4,
            description: "HP EVA P6000 是一款简单易用、容量增强的存储系统，它内置虚拟化功能，可整合存储和简化 IT。 EVA P6000 还提供高性能、高可用性和可靠的数据保护"
        },
        "modem": {
            height: 4,
            description: "调制解调器(Modem,Modulator-Demodulator)是一个将数字信号调制到模拟载波信号上进行传输,并解调收到的模拟信号以得到数字信息的电子设备"
        },
        "raritan_kx2-432": { height: 1, description: "" },
        "fw1000_gm_ne": { height: 1, description: "" },
        "gzz": { height: 9, description: "" },
        "gxpxj": { height: 2, description: "" },
        "storageworks": { height: 4, description: "网络存储器" },
        "ct_Ttss2000": { height: 3, description: "" },
        "xsqjp": { height: 8, description: "" },
        "zxjmzz": { height: 1, description: "" },
        "kedong_stone_wall_2000": { height: 1, description: "" },
        "ibm_x3650_m3": { height: 2, data: [{ "width": 500, "height": 89, "style": { "vector.fill.color": "#404040" }, "id": "twaver.idc.network.panel" }, { "position": [306, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [0, 35, 0], "id": "twaver.idc.deco_02.panel" }, { "position": [482, 36, 0], "id": "twaver.idc.deco_02.panel" }, { "position": [475, 0, 0], "id": "twaver.idc.logo_ibm.panel" }, { "position": [343, 0, 0], "id": "twaver.idc.grid_01.panel" }, { "position": [351, 33, 0], "id": "twaver.idc.VGA_01.panel" }, { "position": [386, 37, 0], "id": "twaver.idc.port_03.panel" }, { "position": [396, 36, 0], "id": "twaver.idc.usb_01.panel" }, { "position": [411, 36, 0], "id": "twaver.idc.usb_01.panel" }, { "position": [406, 30, 0], "id": "twaver.idc.text_01.panel" }, { "position": [434, 37, 0], "id": "twaver.idc.text_02.panel" }, { "position": [348, 48, 0], "id": "twaver.idc.disk_02.panel" }, { "position": [348, 66, 0], "id": "twaver.idc.disk_03.panel" }, { "position": [2, 11, 0], "id": "twaver.idc.deco_01.panel" }, { "position": [288, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [270, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [252, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [234, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [216, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [198, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [180, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [162, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [144, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [126, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [108, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [90, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [72, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [54, 11, 0], "id": "twaver.idc.disk_01.panel" }, { "position": [36, 11, 0], "id": "twaver.idc.disk_01.panel" }] },
        "ibm_p750": { height: 4, data: [{ "height": 178, "id": "twaver.idc.network.panel" }, { "position": [-3, 0, 0], "id": "twaver.idc.deco_03.panel" }, { "position": [437, 0, 0], "id": "twaver.idc.deco_03.panel" }, { "position": [205, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [224, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [243, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [357, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [262, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [281, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [300, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [319, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [338, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [201, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [220, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [239, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [258, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [277, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [296, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [315, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [334, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [353, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [376, 97, 0], "id": "twaver.idc.disk_05.panel" }, { "position": [391, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "position": [12, 84, 0], "id": "twaver.idc.deco_04.panel" }, { "position": [11, 71, 0], "id": "twaver.idc.deco_08.panel" }, { "position": [230, 4, 0], "id": "twaver.idc.disk_04.panel" }, { "position": [368, 0, 0], "id": "twaver.idc.deco_07.panel" }, { "position": [207, 71, 0], "id": "twaver.idc.port_04.panel" }, { "position": [271, 71, 0], "id": "twaver.idc.disk_06.panel" }, { "position": [12, 1, 0], "id": "twaver.idc.grid_02.panel" }, { "position": [437, 127, 0], "id": "twaver.idc.deco_06.panel" }, { "position": [372, 97, 0], "id": "twaver.idc.deco_05.panel" }, { "width": 15, "height": 15, "position": [437, 67, 0], "id": "twaver.idc.logo_ibm.panel" }] },
        "hw_rh2288_v3": { height: 2, data: [{ "id": "twaver.idc.hw_rh2288_v3_front.panel" }, { "position": [27, 2, 0], "id": "twaver.idc.disk_09.panel" }, { "position": [27, 31, 0], "id": "twaver.idc.disk_09.panel" }, { "position": [27, 60, 0], "id": "twaver.idc.disk_09.panel" }, { "position": [128, 2, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [127, 31, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [127, 60, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [229, 2, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [229, 31, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [229, 60, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [331, 2, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [330, 31, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [331, 60, 0], "id": "twaver.idc.disk_08.panel" }, { "position": [8, 4, 0], "id": "twaver.idc.port_07.panel" }, { "position": [0, 43, 0], "id": "twaver.idc.deco_20.panel" }, { "position": [7, 20, 0], "id": "twaver.idc.text_01.panel" }, { "position": [8, 26, 0], "id": "twaver.idc.port_07.panel" }, { "position": [3, 62, 0], "id": "twaver.idc.logo_hw.panel" }] },
        "hw_rh2288_v3.back": { height: 2, data: [{ "id": "twaver.idc.hw_rh2288_v3_back.panel" }, { "position": [208, 77, 0], "id": "twaver.idc.port_17.panel" }, { "position": [34, 73, 0], "id": "twaver.idc.rj4504.panel" }, { "position": [65, 73, 0], "id": "twaver.idc.rj4504.panel" }, { "position": [249, 73, 0], "id": "twaver.idc.rj4504.panel" }, { "position": [232, 77, 0], "id": "twaver.idc.port_17.panel" }, { "position": [223, 80, 0], "rotation": [0, 0, 270], "id": "twaver.idc.text_01.panel" }, { "position": [274, 73, 0], "id": "twaver.idc.port_15.panel" }, { "position": [285, 85, 0], "id": "twaver.idc.deco_24.panel" }, { "position": [314, 73, 0], "id": "twaver.idc.port_16.panel" }, { "position": [325, 85, 0], "id": "twaver.idc.deco_25.panel" }, { "position": [355, 47, 0], "id": "twaver.idc.fan_01.panel" }, { "position": [355, 6, 0], "id": "twaver.idc.fan_01.panel" }, { "position": [369, 57, 0], "id": "twaver.idc.port_power.panel" }, { "position": [369, 16, 0], "id": "twaver.idc.port_power.panel" }] },
        "dell_dss2500": { height: 2, data: [{ "id": "twaver.idc.dell_dss2500.panel" }, { "position": [4, 4, 0], "id": "twaver.idc.logo_dell.panel" }, { "position": [8, 15, 0], "id": "twaver.idc.power_02.panel" }, { "position": [5, 69, 0], "id": "twaver.idc.deco_21.panel" }, { "position": [435, 69, 0], "id": "twaver.idc.deco_21.panel" }, { "position": [230, 1, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [333, 1, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [333, 60, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [230, 60, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [333, 30, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [230, 30, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [26, 1, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [26, 30, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [26, 60, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [128, 1, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [128, 30, 0], "id": "twaver.idc.disk_10.panel" }, { "position": [128, 60, 0], "id": "twaver.idc.disk_10.panel" }] },
        "dell_r630": { height: 1, data: [{ "id": "twaver.idc.dell_r630.panel" }, { "position": [29, 4, 0], "id": "twaver.idc.logo_dell_02.panel" }, { "position": [46, 4, 0], "id": "twaver.idc.ball-green2.panel" }, { "position": [56, 5, 0], "id": "twaver.idc.ball-blue.panel" }, { "position": [133, 5, 0], "id": "twaver.idc.button_01.panel" }, { "position": [26, 12, 0], "id": "twaver.idc.DVD-01.panel" }, { "position": [26, 26, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [106, 26, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [186, 20, 0], "id": "twaver.idc.VGA_02.panel" }, { "position": [196, 7, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [196, 27, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [273, 7, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [273, 27, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [351, 7, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [351, 27, 0], "id": "twaver.idc.disk_11.panel" }, { "position": [107, 7, 0], "id": "twaver.idc.disk_12.panel" }, { "position": [76, 7, 0], "rotation": [0, 0, 270], "id": "twaver.idc.text_01.panel" }, { "position": [63, 5, 0], "id": "twaver.idc.usb_02.panel" }, { "position": [84, 5, 0], "id": "twaver.idc.usb_02.panel" }, { "position": [99, 5, 0], "rotation": [0, 0, 270], "id": "twaver.idc.text_01.panel" }] },
        "dell_r730xd": { height: 2, data: [{ "id": "twaver.idc.dell_r730xd.panel" }, { "position": [5, 5, 0], "id": "twaver.idc.logo_dell_02.panel" }, { "position": [440, 20, 0], "id": "twaver.idc.VGA_03.panel" }, { "position": [5, 15, 0], "id": "twaver.idc.power_02.panel" }, { "position": [436, 6, 0], "id": "twaver.idc.usb_01.panel" }, { "position": [447, 8, 0], "rotation": [0, 0, 270], "id": "twaver.idc.text_01.panel" }, { "position": [25, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [42, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [59, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [76, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [93, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [110, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [127, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [144, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [161, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [178, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [195, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [212, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [229, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [246, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [263, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [280, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [297, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [314, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [331, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [348, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [365, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [382, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [399, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [416, 5, 0], "id": "twaver.idc.disk_13.panel" }, { "position": [23, 0, 0], "id": "twaver.idc.deco_22.panel" }, { "position": [216, 31, 0], "id": "twaver.idc.logo_dell_03.panel" }, { "position": [33, 28, 0], "id": "twaver.idc.power_03.panel" }] },
    }



    make.Default.devicePanel_network = {
        "cisco_2950": {
            height: 1,
            description: "Cisco Catalyst 2950系列智能以太网交换机是一个固定配置、可堆叠的独立设备系列，提供了线速快速以太网和千兆位以太网连接",
            data: [{ "id": "twaver.idc.cisco_2950.panel" }, {
                "position": [412, 28, 0],
                "id": "twaver.idc.port_02.panel"
            }, {
                "position": [432, 28, 0],
                "id": "twaver.idc.port_02.panel"
            }, {
                "client": { "bid": "1" },
                "position": [44, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "2" },
                "position": [58, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "3" },
                "position": [73, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "4" },
                "position": [88, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "5" },
                "position": [103, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "6" },
                "position": [118, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "7" },
                "position": [133, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "8" },
                "position": [147, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "9" },
                "position": [165, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "10" },
                "position": [180, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "11" },
                "position": [195, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "12" },
                "position": [210, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "13" },
                "position": [225, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "14" },
                "position": [240, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "15" },
                "position": [255, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "16" },
                "position": [269, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "17" },
                "position": [288, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "18" },
                "position": [303, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "19" },
                "position": [318, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "20" },
                "position": [333, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "21" },
                "position": [348, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "22" },
                "position": [363, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "23" },
                "position": [377, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "24" },
                "position": [391, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }]
        },
        "cisco_2960": {
            height: 1,
            description: "Cisco Catalyst 2960系列交换机是一系列采用以太网供电或非PoE配置，可提供桌面快速以太网和千兆以太网连接，并可为入门级企业、中间市场和分支机构网络实现高级局域网服务的固定配置独立式智能以太网设备",
            data: [{ "id": "twaver.idc.cisco_2960.panel" }, {
                "client": { "bid": "1" },
                "position": [214, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "2" },
                "position": [214, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "3" }, "position": [229, 14, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "4" },
                "position": [229, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "5" }, "position": [244, 14, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "6" },
                "position": [244, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "7" }, "position": [259, 14, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "8" },
                "position": [259, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "9" },
                "position": [274, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "10" },
                "position": [274, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "11" },
                "position": [289, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "12" },
                "position": [289, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "13" },
                "position": [309, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "14" },
                "position": [309, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "15" },
                "position": [324, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "16" },
                "position": [324, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "17" },
                "position": [339, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "18" },
                "position": [339, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "19" },
                "position": [354, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "20" },
                "position": [354, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "21" },
                "position": [369, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "22" },
                "position": [369, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "23" },
                "position": [384, 14, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "24" },
                "position": [384, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "25" },
                "position": [408, 27, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "26" },
                "position": [432, 27, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }]
        },
        "h3c_s1050t": {
            height: 1,
            description: " H3C S1050T-E是H3C公司为政府、教育、中小企业等用户量身打造的一款高性能无管理以太网交换产品，提供48个的10/100M自适应以太网端口以及2个10/100/1000M自适应以太网端口，所有端口均支持全线速无阻塞交换以及端口自动翻转功能，外形采用19英寸标准机架设计。S1050T-E以其所有端口全线速的转发、电信级的稳定性和最广泛的适用性成为高密度接入设备的最佳选择",
            data: [{ "id": "twaver.idc.h3c_s1050t.panel" }, {
                "client": { "bid": "9" },
                "position": [74, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "11" },
                "position": [90, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "13" },
                "position": [106, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "15" },
                "position": [122, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "17" },
                "position": [138, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "19" },
                "position": [154, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "21" },
                "position": [170, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "2" },
                "position": [10, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "4" },
                "position": [26, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "6" },
                "position": [42, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "8" },
                "position": [58, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "10" },
                "position": [74, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "12" },
                "position": [90, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "14" },
                "position": [106, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "16" },
                "position": [122, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "18" },
                "position": [138, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "20" },
                "position": [154, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "22" },
                "position": [170, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "24" },
                "position": [186, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, { "client": { "bid": "1" }, "position": [10, 12, 0], "id": "twaver.idc.rj4503.panel" }, {
                "client": { "bid": "3" },
                "position": [26, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, { "client": { "bid": "5" }, "position": [42, 12, 0], "id": "twaver.idc.rj4503.panel" }, {
                "client": { "bid": "7" },
                "position": [58, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "23" },
                "position": [186, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "25" },
                "position": [210, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "26" },
                "position": [210, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "27" },
                "position": [226, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "28" },
                "position": [226, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "29" },
                "position": [242, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "30" },
                "position": [242, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "31" },
                "position": [258, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "32" },
                "position": [258, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "33" },
                "position": [274, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "34" },
                "position": [274, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "35" },
                "position": [290, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "36" },
                "position": [290, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "37" },
                "position": [306, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "38" },
                "position": [306, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "39" },
                "position": [322, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "40" },
                "position": [322, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "41" },
                "position": [338, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "42" },
                "position": [338, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "43" },
                "position": [354, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "44" },
                "position": [354, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "45" },
                "position": [370, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "46" },
                "position": [370, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "47" },
                "position": [386, 12, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "48" },
                "position": [386, 24, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "49" },
                "position": [416, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "50" },
                "position": [435, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }]
        },
        "h3c_s1224": {
            height: 1,
            description: "H3C S1224是H3C公司自主开发的全千兆无管理以太网交换产品，提供了24个10/100/1000M以太网端口，所有端口均支持全线速无阻塞交换以及MDI/MDIX自适应功能，外形采用13英寸铁壳设",
            data: [{ "id": "twaver.idc.h3c_s1224.panel" }, {
                "client": { "bid": "1" },
                "position": [29, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "2" },
                "position": [29, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "3" }, "position": [49, 12, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "4" },
                "position": [49, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "5" }, "position": [69, 12, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "6" },
                "position": [69, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "7" }, "position": [88, 12, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "8" },
                "position": [88, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "9" },
                "position": [125, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "10" },
                "position": [125, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "11" },
                "position": [145, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "12" },
                "position": [145, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "13" },
                "position": [165, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "14" },
                "position": [165, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "15" },
                "position": [185, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "16" },
                "position": [185, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "17" },
                "position": [222, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "18" },
                "position": [222, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "19" },
                "position": [242, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "20" },
                "position": [242, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "21" },
                "position": [262, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "22" },
                "position": [262, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "23" },
                "position": [281, 12, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "24" },
                "position": [281, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }]
        },
        "hw_s2700": {
            height: 1,
            description: "S2700系列企业交换机(以下简称S2700)是华为公司推出的新一代绿色节能的以太智能百兆接入交换机",
            data: [{ "id": "twaver.idc.hw_s2700.panel" }, {
                "position": [33, 14, 0],
                "id": "twaver.idc.jack3.panel"
            }, { "position": [67, 14, 0], "id": "twaver.idc.switch_01.panel" }, {
                "client": { "bid": "1" },
                "position": [98, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "2" },
                "position": [98, 26, 10],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "3" },
                "position": [113, 13, 10],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "4" },
                "position": [113, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "5" },
                "position": [128, 13, 20],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "6" },
                "position": [128, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "7" },
                "position": [143, 13, 30],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "8" },
                "position": [143, 26, 20],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "9" },
                "position": [167, 13, 10],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "10" },
                "position": [167, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "11" },
                "position": [182, 13, 20],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "12" },
                "position": [182, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "13" },
                "position": [197, 13, 30],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "14" },
                "position": [197, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "15" },
                "position": [212, 13, 40],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "16" },
                "position": [212, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "17" },
                "position": [237, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "18" },
                "position": [237, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "19" },
                "position": [252, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "20" },
                "position": [252, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "21" },
                "position": [267, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "22" },
                "position": [267, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "23" },
                "position": [282, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "24" },
                "position": [282, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "29" },
                "position": [399, 25, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "27" },
                "position": [379, 13, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "28" },
                "position": [379, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "26" },
                "position": [358, 26, 0],
                "id": "twaver.idc.port_01.panel"
            }, { "client": { "bid": "25" }, "position": [340, 26, 0], "id": "twaver.idc.port_01.panel" }]
        },
        "hw_s3700": {
            height: 1,
            description: "S3700系列企业交换机是华为公司推出的新一代绿色节能的三层以太交换机",
            data: [{ "id": "twaver.idc.hw_s3700.panel" }, {
                "position": [35, 15, 0],
                "id": "twaver.idc.jack3.panel"
            }, { "position": [70, 15, 0], "id": "twaver.idc.switch_01.panel" }, {
                "client": { "bid": "1" },
                "position": [98, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "2" },
                "position": [98, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "3" }, "position": [113, 13, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "4" },
                "position": [113, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "5" }, "position": [128, 13, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "6" },
                "position": [128, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, { "client": { "bid": "7" }, "position": [143, 13, 0], "id": "twaver.idc.rj4502.panel" }, {
                "client": { "bid": "8" },
                "position": [143, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "9" },
                "position": [168, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "10" },
                "position": [168, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "11" },
                "position": [183, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "12" },
                "position": [183, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "13" },
                "position": [198, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "14" },
                "position": [198, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "15" },
                "position": [213, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "16" },
                "position": [213, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "17" },
                "position": [237, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "18" },
                "position": [237, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "19" },
                "position": [252, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "20" },
                "position": [252, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "21" },
                "position": [267, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "22" },
                "position": [267, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "23" },
                "position": [282, 13, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "24" },
                "position": [282, 26, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "30" },
                "position": [379.3911044003451, 25.61816220880069, 0],
                "rotation": [0, 0, 180],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "31" },
                "position": [399, 25, 0],
                "id": "twaver.idc.rj4502.panel"
            }, {
                "client": { "bid": "29" },
                "position": [379, 13, 0],
                "id": "twaver.idc.rj4503.panel"
            }, {
                "client": { "bid": "28" },
                "position": [358, 26, 0],
                "id": "twaver.idc.port_01.panel"
            }, {
                "client": { "bid": "27" },
                "position": [341, 26, 0],
                "id": "twaver.idc.port_01.panel"
            }, {
                "client": { "bid": "26" },
                "position": [321, 26, 0],
                "id": "twaver.idc.port_01.panel"
            }, { "client": { "bid": "25" }, "position": [304, 26, 0], "id": "twaver.idc.port_01.panel" }]
        },
        "cisco_3800": { height: 3, description: "Cisco 3800(路由器)系列让客户可以在使用并发数据、安全、话音和高级服务时获得最高的性能、可用性、密度和最大限度的增长空间" },

        "h3c_s5120_series": { height: 1, description: "交换机" },
        "h3c_sr8808": { height: 7, description: "H3C SR8808 路由器类型:核心业务路由器，集成了防火墙、安全网关、网络流量分析等功能" },
        "HW_CE8860-4C-EI": { height: 2, data: [{ "id": "twaver.idc.HW_CE8860-4C-EI.panel" }, { "position": [17.5, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [238.5, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [17.5, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [42.5, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [42.5, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [67.5, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [67.5, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [93, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [93, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [195.5, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [195.5, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [170, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [170, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [145, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [145, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [120, 26, 0], "id": "twaver.idc.port_10.panel" }, { "position": [120, 12, 0], "id": "twaver.idc.port_10.panel" }, { "position": [145.5, 67.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [145.5, 53.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [120, 67.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [120, 53.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [95, 67.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [95, 53.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [70, 67.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [70, 53.5, 0], "id": "twaver.idc.port_10.panel" }, { "position": [253.5, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [267.5, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [282.5, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [298, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [312, 12.5, 0], "id": "twaver.idc.port_11.panel" }, { "position": [238.5, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [253.5, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [267.5, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [282.5, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [298, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [312, 25, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [405, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [391, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [375.5, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [360.5, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [346.5, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [331.5, 25.5, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_11.panel" }, { "position": [405, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [391, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [375.5, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [360.5, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [346.5, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [331.5, 13, 0], "id": "twaver.idc.port_11.panel" }, { "position": [238, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [253, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [268.1, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [282.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [297.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [312.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [312.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [297.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [282.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [268.1, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [253, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [238, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [330.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [345.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [360.5, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [374.9, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [389.9, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [404.9, 54.7, 0], "id": "twaver.idc.port_12.panel" }, { "position": [404.9, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [389.9, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [374.9, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [360.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [345.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [330.5, 68.3, 0], "id": "twaver.idc.port_12.panel" }, { "position": [422.2, 26.3, 0], "id": "twaver.idc.port_10.panel" }, { "position": [421.8, 54.1, 0], "id": "twaver.idc.port_10.panel" }, { "position": [422, 12.2, 0], "id": "twaver.idc.port_10.panel" }, { "position": [421.6, 68.8, 0], "id": "twaver.idc.port_10.panel" }] },
        "HW_CE6851-48S6Q-HI": { height: 1, data: [{ "id": "twaver.idc.HW_CE6851-48S6Q-HI.panel" }, { "position": [11, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [10.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [25.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [40, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [54.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [69, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [83.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [98, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [112.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [25, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [39.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [54, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [68.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [83, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [97.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [112, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [133.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [148, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [162.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [177, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [191.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [206, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [220.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [235, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [234.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [220, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [205.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [191, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [176.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [162, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [147.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [133, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [255, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [269.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [270, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [255.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [284, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [298.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [313, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [327.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [342, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [356.5, 23, 0], "id": "twaver.idc.port_08.panel" }, { "position": [357, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [342.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [328, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [313.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [299, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [284.5, 7, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [377, 24.5, 0], "id": "twaver.idc.port_09.panel" }, { "position": [377, 7.5, 0], "id": "twaver.idc.port_09.panel" }, { "position": [403, 24.5, 0], "id": "twaver.idc.port_09.panel" }, { "position": [403, 7.5, 0], "id": "twaver.idc.port_09.panel" }, { "position": [429.5, 7.5, 0], "id": "twaver.idc.port_09.panel" }, { "position": [429.5, 24.5, 0], "id": "twaver.idc.port_09.panel" }] },
        "HW_S5720-56C-EI-48S-AC": { height: 1, data: [{ "id": "twaver.idc.HW_S5720-56C-EI-48S-AC.panel" }, { "position": [293, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [307, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [321, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [335, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [349, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [363, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [293, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [307, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [321, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [335, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [349, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [363, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [201, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [215, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [229, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [243, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [257, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [271, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [271, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [257, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [243, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [229, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [215, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [201, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [110, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [124, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [138, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [152, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [166, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [180, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [110, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [124, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [138, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [152, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [166, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [180, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [90, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [76, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [62, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [48, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [34, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [90, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [76, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [62, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [48, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [34, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [429, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [413, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [397, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [381, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [20, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [20, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [388, 5, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [441, 5, 0], "id": "twaver.idc.port_13.panel" }, { "position": [408, 15.8, 0], "id": "twaver.idc.port_14.panel" }, { "position": [419.1, 5, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [2.9, 5.8, 0], "id": "twaver.idc.logo_hw_02.panel" }] },
        "HW_S5700-52P-LI-AC": { height: 1, data: [{ "id": "twaver.idc.HW_S5700-52P-LI-AC.panel" }, { "position": [419, 5, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [382, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [398, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [414, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [430, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.port_08.panel" }, { "position": [35, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [49, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [63, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [77, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [91, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [21, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [35, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [49, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [63, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [77, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [91, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [21, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [181, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [167, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [153, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [139, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [125, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [111, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [181, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [167, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [153, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [139, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [125, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [111, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [202, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [216, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [230, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [244, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [258, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [272, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [272, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [258, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [244, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [230, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [216, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [202, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [364, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [350, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [336, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [322, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [308, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [294, 26, 0], "rotation": [0, 0, 180], "id": "twaver.idc.rj4502.panel" }, { "position": [364, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [350, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [336, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [322, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [308, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "position": [294, 10, 0], "id": "twaver.idc.rj4502.panel" }, { "width": 9, "height": 5, "position": [407, 15, 0], "id": "twaver.idc.usb_02.panel" }, { "position": [2.9, 5.8, 0], "id": "twaver.idc.logo_hw_02.panel" }] }
    }


    make.Default.cardPanel_network = {
        "HW_NE40E-X8_card1": { width: 3.8, height: 36, depth: 50, data: [{ "id": "twaver.idc.HW_NE40E-X8_card.panel" }, { "position": [13.600000000000001, 11.4, 0], "id": "twaver.idc.deco_23.panel" }, { "position": [14.5, 340.5, 0], "id": "twaver.idc.deco_23.panel" }] },
        "HW_NE40E-X8_card2": { width: 3.8, height: 36, depth: 50, data: [{ "id": "twaver.idc.HW_NE40E-X8_card.panel" }, { "position": [13.6, 11.1, 0], "id": "twaver.idc.deco_23.panel" }, { "position": [13.5, 340.7, 0], "id": "twaver.idc.deco_23.panel" }, { "position": [12.5, 208.2, 0], "rotation": [0, 0, 90], "id": "twaver.idc.rj4502.panel" }, { "position": [12.5, 265.8, 0], "rotation": [0, 0, 90], "id": "twaver.idc.rj4502.panel" }, { "position": [12.5, 281.4, 0], "rotation": [0, 0, 90], "id": "twaver.idc.rj4502.panel" }, { "position": [12.3, 178, 0], "rotation": [0, 0, 270], "id": "twaver.idc.rj4502.panel" }, { "position": [12.5, 191.3, 0], "rotation": [0, 0, 90], "id": "twaver.idc.rj4502.panel" }] }
    }
    make.Default.Block = function() {
        make.Default.Block.superClass.constructor.apply(this, arguments);
        this.setClient('length', 90);
        this.setClient('edgeIndex', -1);
        this.setClient('offset', 0.5);
        this.setClient('gap', 0);
        this.setClient('angle', 0);
        this.setClient('focus', false);
        this.setStyle('vector.outline.width', 2);
        this.setStyle('vector.outline.color', 'gray');
        this.setStyle('vector.fill.color', 'white');
        this.setSize(0, 0);
        this.setClient('fullWidth', false);
        this.setClient('horizontalFlip', false);
        this.setImage('image_block');

        // default value.
        /*if (this.isDoor()) {
         this.blockPicture = this.blockPicture || Utils.Path + 'door00_3d.png';
         this.blockWidth = this.blockWidth || 80;
         this.blockHeight = this.blockHeight || 200;
         this.blockDepth = this.blockDepth || 10;
         this.positionY = this.positionY || 0;
         this.setClient("depth",this.blockDepth);
         }
    
         if (this.isWindow()) {
         this.blockPicture = this.blockPicture || Utils.Path + 'window00_3d.png';
         this.blockWidth = this.blockWidth || 100;
         this.blockHeight = this.blockHeight || 120;
         this.blockDepth = this.blockDepth || 10;
         this.positionY = this.positionY || (this.height - this.blockHeight)/2;
         this.setClient("depth",this.blockDepth);
         }*/

        /*var transparent = this.getClient('transparent');
         var opacity = this.getClient('opacity');
         this.setStyle("m.transparent",transparent);
         this.setStyle("m.opacity",opacity);*/

        /*if (this.isCutoff()) {
         this.blockWidth = this.blockWidth || 100;
         this.blockHeight = this.blockHeight || 100;
         this.positionY = this.positionY || (this.height - this.blockHeight)/2;
         if (!this.blockPicture) {
         this.blockPicture = new mono.BasicMaterial({
         color : 'green',
         transparent : true,
         opacity : 0.5,
         });
         }
         }*/
        this.setClient("height", this.blockHeight);
        this.setClient("positionY", this.positionY);

        make.Default.objectWrapper(this, 'id', function() {

            return this.getClient('id');
        });

        make.Default.objectWrapper(this, 'objectId', function() {

            return this.getId();
        });
    }

    twaver.Util.ext('make.Default.Block', twaver.Node, {
        onPropertyChanged: function(e) {
            make.Default.Block.superClass.onPropertyChanged.call(this, e);
            if (this.getParent() && (e.property === 'C:length' ||
                    e.property === 'C:edgeIndex' ||
                    e.property === 'C:offset' ||
                    e.property === 'C:gap')) {
                this.refresh();
            }
        },
        refresh: function() {
            var parent = this.getParent(),
                edgeIndex = this.getClient('edgeIndex'),
                offset = this.getClient('offset'),
                points = parent.getPoints();
            if (points && edgeIndex >= 0 && edgeIndex < points.size()) {
                var from = points.get(edgeIndex),
                    to = points.get(edgeIndex === points.size() - 1 ? 0 : edgeIndex + 1),
                    dx = to.x - from.x,
                    dy = to.y - from.y,
                    point = { x: from.x + dx * offset, y: from.y + dy * offset },
                    angle = this.getAngle(dx, dy),
                    borderWidth = this.getStyle('vector.outline.width'),
                    gap = this.getClient('gap'),
                    halfWidth = this.getClient('length') / 2 + borderWidth / 2,
                    halfHeight = parent.getStyle('vector.outline.width') / 2 + borderWidth / 2 + gap;
                var rect = twaver.Util.getRect([
                    twaver.Util.transformPoint(point, angle, -halfWidth, -halfHeight).point,
                    twaver.Util.transformPoint(point, angle, halfWidth, -halfHeight).point,
                    twaver.Util.transformPoint(point, angle, halfWidth, halfHeight).point,
                    twaver.Util.transformPoint(point, angle, -halfWidth, halfHeight).point
                ]);
                this.setSize(rect.width, rect.height);
                this.setCenterLocation(point);
                this.setClient('angle', angle);
                this.setClient('leftPoint', twaver.Util.transformPoint(point, angle, -halfWidth, 0).point);
                this.setClient('rightPoint', twaver.Util.transformPoint(point, angle, halfWidth, 0).point);
            }
        },
        getAngle: function(dx, dy) {
            if (dx === 0) {
                if (dy === 0) {
                    return 0;
                } else if (dy > 0) {
                    return Math.PI / 2;
                } else {
                    return -Math.PI / 2;
                }
            }
            return Math.atan(dy / dx);
        },

        getEdgeIndex: function() {
            return this.getClient('edgeIndex');
        },

        isDoor: function() {
            return this instanceof make.Default.Door;
        },

        isWindow: function() {
            return this instanceof make.Default.Window;
        },

        isCutoff: function() {
            return this instanceof make.Default.Cutoff;
        },

        getBlockWidth: function() {
            return Math.abs(this.getClient('length'));
        },

        getBlockHeight: function() {
            return Math.abs(this.getClient('height'));
        },

        getBlockDepth: function() {
            return Math.abs(this.getClient('depth'));
        },

        getBlockPicture: function() {
            return this.getClient('picture');
        },

        getBlockPositionY: function() {
            return Math.abs(this.getClient('positionY'));
        }
    });

    make.Default.Door = function() {
        make.Default.Door.superClass.constructor.apply(this, arguments);
        this.setClient("positionY", 0);
        this.setClient('length', 205);
    }

    twaver.Util.ext('make.Default.Door', make.Default.Block, {});

    make.Default.Window = function() {
        make.Default.Window.superClass.constructor.apply(this, arguments);
        this.setClient("positionY", 100);
        this.setClient('length', 120);
    }

    twaver.Util.ext('make.Default.Window', make.Default.Block, {});

    make.Default.Cutoff = function() {
        make.Default.Cutoff.superClass.constructor.apply(this, arguments);
        this.setClient("positionY", 100);
    }

    twaver.Util.ext('make.Default.Cutoff', make.Default.Block, {});


    twaver.Util.registerImage("image_block", {
        rotate: '<%=getClient("angle")*180/Math.PI%>',
        diameter: function(data, network) {
            var d = 10;
            var parent = data.getParent();
            if (parent) {
                d = parent.getStyle("vector.outline.width") + data.getClient("gap") * 2;
            }
            return d;
        },
        v: [{
                shape: "rect",
                rect: function(data, network) {
                    var length = data.getClient("length");
                    if (length) {
                        length = Math.abs(length);
                    }
                    var parent = data.getParent();
                    var height = 10;
                    if (parent) {
                        height = parent.getStyle("vector.outline.width") + data.getClient("gap") * 2;
                    }
                    var d = this.diameter(data, network);
                    if (length > d) {
                        length = length - d;
                    }
                    height = height; // add 2015-01-12 by Kevin
                    return [-length / 2, -height / 2, length, height];
                },
                lineWidth: '<%=getStyle("vector.outline.width")%>',
                lineColor: '<%if(getClient("focus")){return "green"}else{return getStyle("vector.outline.color")}%>',
                fill: '<%=getStyle("vector.fill.color")%>'
            },
            {
                shape: 'line',
                x1: function(data, network) { // '<%=getClient("length")/(-2)%>',
                    if (data instanceof make.Default.Window || data instanceof make.Default.Door) {
                        var length = data.getClient("length");
                        if (length) {
                            length = Math.abs(length);
                        }
                        var d = this.diameter(data, network);
                        if (length > d) {
                            length = length - d;
                        }
                        return -length / 2;
                    } else {
                        return 0;
                    }
                },
                y1: 0,
                x2: function(data, network) { //'<%=getClient("length")/2%>',
                    if (data instanceof make.Default.Window || data instanceof make.Default.Door) {
                        var length = data.getClient("length");
                        if (length) {
                            length = Math.abs(length);
                        }
                        var d = this.diameter(data, network);
                        if (length > d) {
                            length = length - d;
                        }
                        return length / 2;
                    } else {
                        return 0;
                    }
                },
                y2: 0,
                lineWidth: '<%=getStyle("vector.outline.width")%>',
                lineColor: '<%if(getClient("focus")){return "green"}else{return getStyle("vector.outline.color")}%>',
                lineDash: function(data) {
                    if (data instanceof make.Default.Door) {
                        return [10, 2];
                    }
                }
            },
            {
                shape: 'circle',
                cx: function(data, network) { //'<%=getClient("length")/(-2)%>',
                    var length = data.getClient("length");
                    if (length) {
                        length = Math.abs(length);
                    }
                    var d = this.diameter(data, network);
                    if (length > d) {
                        length = length - d;
                    }
                    return -length / 2;
                },
                cy: 0,
                r: function(data, network) {
                    if (network == null || !network.getSelectionModel().contains(data)) {
                        return 0;
                    }
                    var parent = data.getParent();
                    var height = 10;
                    if (parent) {
                        height = parent.getStyle("vector.outline.width") + data.getClient("gap") * 2;
                    }
                    height = height; // add 2015-01-12 by Kevin
                    return height / 2;
                },
                lineWidth: 1,
                fill: 'yellow',
                stroke: 'black'
            },
            {
                shape: 'circle',
                cx: function(data, network) { //'<%=getClient("length")/2%>',
                    var length = data.getClient("length");
                    if (length) {
                        length = Math.abs(length);
                    }
                    var d = this.diameter(data, network);
                    if (length > d) {
                        length = length - d;
                    }
                    return length / 2;
                },
                cy: 0,
                r: function(data, network) {
                    if (network == null || !network.getSelectionModel().contains(data)) {
                        return 0;
                    }
                    var parent = data.getParent();
                    var height = 10;
                    if (parent) {
                        height = parent.getStyle("vector.outline.width") + data.getClient("gap") * 2;
                    }
                    height = height;
                    return height / 2;
                },
                lineWidth: 1,
                fill: 'yellow',
                stroke: 'black'
            }
        ]
    });

    var getImagePath = function(image) {
        if (!image) return null;
        if (image.indexOf('/') > 0) {
            return image;
        }
        return make.Default.path + 'model/idc/images/' + image;
    }

    make.Default.ImageShapeNode = function() {
        make.Default.ImageShapeNode.superClass.constructor.apply(this, arguments);

        this.setClient('showFloor', true); //3D 是否显示地板
        this.setClient("closed", true); //2D 和 3D 中默认是否闭合
        this.setClient('focusColor', 'green');
        this.setClient('resizeBorderWidth', 10);
        this.setClient('resizeBorderLength', 18);
        this.setClient('resizeBorderGap', 10);
        this.setClient('resizeBorderColor', 'yellow');
        this.setClient('size', {
            x: 0,
            y: 300,
            z: 10
        });
        this.setClient('fill', true);
        this.setClient('imageSrc', 'floor.png');

        this.setStyle("vector.outline.color", "#333333");
        this.setStyle("vector.outline.width", 10);
        this.setStyle("vector.fill.color", "rgba(184,211,240,0.5)");
        this.setStyle("select.style", 'none');
        this.setClient('repeat', 1000);

        this.setClient('dimLeadLength', 35);
        this.setClient('dimLineOffset', 0.7);
        this.setClient('dimLineWidth', 1);
        this.setClient('dimColor', '#F07819');
        this.setClient('dimTextGap', 5);
        this.setClient('dimTextFont', '12px Arial');
        this.setClient('dimArrowWidth', 8);
        this.setClient('dimArrowHeight', 3);

        this.setClient('coordTextColor', 'white');
        this.setClient('coordTextFont', '12px Arial');
        this.setClient('coordTextOffsetX', 0);
        this.setClient('coordTextOffsetY', 20);
        this.setClient('coordTextAlign', 'center');
        this.setClient('coordTextBaseline', 'middle');
        this.setClient('coordTextBackground', 'rgba(240,120,25,0.7)');

        this.setClient('decimalNumber', 0);
    }

    twaver.Util.ext('make.Default.ImageShapeNode', twaver.ShapeNode, {
        getCanvasUIClass: function() {
            return make.Default.ImageShapeNodeUI;
        },

        getElementUIClass: function() {
            return make.Default.ImageShapeNodeUI;
        },

        getVectorUIClass: function() {
            return make.Default.ImageShapeNodeUI;
        },

        onChildRemoved: function(child, index) {
            this.refreshChilden();
        },

        onChildAdded: function(child, index) {
            this.refreshChilden();
        },

        onPropertyChanged: function(e) {
            make.Default.ImageShapeNode.superClass.onPropertyChanged.call(this, e);
            if (e.property === 'points') {
                this.refreshChilden();
            }
        },
        checkBlockOnEdge: function(index) {
            var result = false;
            this.getChildren().forEach(function(child) {
                if (child.getClient('edgeIndex') === index) {
                    result = true;
                }
            });
            return result;
        },
        refreshChilden: function() {
            this.getChildren().forEach(function(child) {
                child.refresh && child.refresh();
            });
        },

        isPointOnPoints: function(point) {
            var points = this.getPoints();
            for (var i = 0; i < points.size(); i++) {
                if (_twaver.math.getDistance(point, points.get(i)) <= 10) {
                    return true;
                }
            }
            return false;
        },
        getPointIndex: function(point) {
            var points = this.getPoints();
            if (points.size() < 2) {
                return -1;
            }
            for (var i = 0; i < points.size(); i++) {
                if (_twaver.math.getDistance(point, points.get(i)) <= 10) {
                    return -1;
                }
            }
            var p1 = points.get(0),
                p2;
            for (var i = 1; i < points.size(); i++) {
                p2 = points.get(i);
                if (this.isPointOnLine(point, p1, p2, 10)) {
                    return i - 1;
                }
                p1 = p2;
            }
            p1 = points.get(0);
            if (this.isPointOnLine(point, p1, p2, 10)) {
                return points.size() - 1;
            }
            return -1;
        },
        isPointOnLine: function(point, point1, point2, width) {
            if (width < 0) {
                width = 0;
            }
            var distance = this.getDistanceFromPointToLine(point, point1, point2);
            return distance <= width && (point.x >= Math.min(point1.x, point2.x) - width) && (point.x <= Math.max(point1.x, point2.x) + width) && (point.y >= Math.min(point1.y, point2.y) - width) && (point.y <= Math.max(point1.y, point2.y) + width);
        },
        getDistanceFromPointToLine: function(point, point1, point2) {
            if (point1.x === point2.x) {
                return Math.abs(point.x - point1.x);
            }
            var lineK = (point2.y - point1.y) / (point2.x - point1.x);
            var lineC = (point2.x * point1.y - point1.x * point2.y) / (point2.x - point1.x);
            return Math.abs(lineK * point.x - point.y + lineC) / (Math.sqrt(lineK * lineK + 1));
        },
        setOffsetYofPoints: function(offset) {
            this.offsetY = offset;
        },
        setOffsetXofPoints: function(offset) {
            this.offsetX = offset;
        },
        getOffsetYofPoints: function() {
            return this.offsetY || 0;
        },
        getOffsetXofPoints: function() {
            return this.offsetX || 0;
        },
        setNegatedYInterval: function(negatedYInterval) {
            this.negatedYInterval = negatedYInterval;
        },
        getNegatedYInterval: function() {
            return this.negatedYInterval;
        }

    });

    make.Default.ImageShapeNodeUI = function(shapeNode, network) {
        make.Default.ImageShapeNodeUI.superClass.constructor.apply(this, arguments);
    }

    twaver.Util.ext('make.Default.ImageShapeNodeUI', twaver.vector.ShapeNodeUI, {
        drawDefaultBody: function(ctx) {
            var element = this._element;
            //      points = element._points;
            if (!element._points || element._points.size() < 1) return;
            var points = this._getZoomPoints();
            var segments = element._segments,
                borderWidth = element.getStyle('vector.outline.width'),
                borderPattern = element.getStyle('vector.outline.pattern'),
                lineWidth = element.getStyle('vector.outline.width'),
                strokeStyle = element.getStyle('vector.outline.color'),
                close = element.getClient('closed'),
                rect = twaver.Util.getRect(points),
                g = ctx;
            if (borderWidth > 0) {
                twaver.Util.grow(rect, borderWidth, borderWidth);
            }
            var selected = this._network.isSelected(this._element),
                resizeBorderWidth = this._element.getClient('resizeBorderWidth'),
                resizeBorderLength = this._element.getClient('resizeBorderLength'),
                resizeBorderGap = this._element.getClient('resizeBorderGap'),
                resizeBorderColor = this._element.getClient('resizeBorderColor'),
                pointsRect;


            if (selected) {
                pointsRect = _twaver.clone(rect);
            }
            g = this.setShadow(this, g);

            //draw shape node
            g.beginPath();
            //var image = twaver.Util.getImageAsset(getImagePath(element.getClient('imageSrc')));
            var src = getImagePath(element.getClient('imageSrc'));
            if (src) {
                var image = twaver.Util.getImageAsset(src);
                if (image) {
                    g.fillStyle = g.createPattern(image.getImage(), 'repeat');
                } else {
                    twaver.Util.registerImageByUrl(src, src, null, function() {
                        element.setClient('imageSrc-trigger', 1)
                    });
                }
            }
            g.lineWidth = lineWidth;
            g.strokeStyle = strokeStyle;
            _twaver.g.drawLinePoints(g, points, borderPattern, segments, close);
            if (src) {
                g.fill();
            }
            g.stroke();

            var index = element.getClient('focusIndex');
            if (index >= 0) {
                var from = points.get(index),
                    to = points.get(index === points.size() - 1 ? 0 : index + 1);
                g.beginPath();
                g.strokeStyle = element.getClient('focusColor');
                g.moveTo(from.x, from.y);
                g.lineTo(to.x, to.y);
                g.stroke();
            }

            if (selected) {
                g.lineWidth = resizeBorderWidth + 2;
                g.strokeStyle = 'black';
                g.beginPath();
                this._borderLines = [];
                var p1, p2, p3;
                p1 = {
                    x: pointsRect.x - resizeBorderGap,
                    y: pointsRect.y - resizeBorderGap
                };
                p2 = {
                    x: p1.x,
                    y: p1.y + resizeBorderLength
                };
                p3 = {
                    x: p1.x + resizeBorderLength,
                    y: p1.y
                };
                this._addBorderLine(g, p1, p2, p3);

                p1 = {
                    x: pointsRect.x + pointsRect.width + resizeBorderGap,
                    y: pointsRect.y - resizeBorderGap
                };
                p2 = {
                    x: p1.x - resizeBorderLength,
                    y: p1.y
                };
                p3 = {
                    x: p1.x,
                    y: p1.y + resizeBorderLength
                };
                this._addBorderLine(g, p1, p2, p3);

                p1 = {
                    x: pointsRect.x + pointsRect.width + resizeBorderGap,
                    y: pointsRect.y + pointsRect.height + resizeBorderGap
                };
                p2 = {
                    x: p1.x,
                    y: p1.y - resizeBorderLength
                };
                p3 = {
                    x: p1.x - resizeBorderLength,
                    y: p1.y
                };
                this._addBorderLine(g, p1, p2, p3);

                p1 = {
                    x: pointsRect.x - resizeBorderGap,
                    y: pointsRect.y + pointsRect.height + resizeBorderGap
                };
                p2 = {
                    x: p1.x + resizeBorderLength,
                    y: p1.y
                };
                p3 = {
                    x: p1.x,
                    y: p1.y - resizeBorderLength
                };
                this._addBorderLine(g, p1, p2, p3);
                g.stroke();

                g.beginPath();
                g.lineWidth = resizeBorderWidth;
                g.strokeStyle = resizeBorderColor;
                resizeBorderLength -= 1;
                p1 = {
                    x: pointsRect.x - resizeBorderGap,
                    y: pointsRect.y - resizeBorderGap
                };
                p2 = {
                    x: p1.x,
                    y: p1.y + resizeBorderLength
                };
                p3 = {
                    x: p1.x + resizeBorderLength,
                    y: p1.y
                };
                g.moveTo(p2.x, p2.y);
                g.lineTo(p1.x, p1.y);
                g.lineTo(p3.x, p3.y);

                p1 = {
                    x: pointsRect.x + pointsRect.width + resizeBorderGap,
                    y: pointsRect.y - resizeBorderGap
                };
                p2 = {
                    x: p1.x - resizeBorderLength,
                    y: p1.y
                };
                p3 = {
                    x: p1.x,
                    y: p1.y + resizeBorderLength
                };
                g.moveTo(p2.x, p2.y);
                g.lineTo(p1.x, p1.y);
                g.lineTo(p3.x, p3.y);

                p1 = {
                    x: pointsRect.x + pointsRect.width + resizeBorderGap,
                    y: pointsRect.y + pointsRect.height + resizeBorderGap
                };
                p2 = {
                    x: p1.x,
                    y: p1.y - resizeBorderLength
                };
                p3 = {
                    x: p1.x - resizeBorderLength,
                    y: p1.y
                };
                g.moveTo(p2.x, p2.y);
                g.lineTo(p1.x, p1.y);
                g.lineTo(p3.x, p3.y);

                p1 = {
                    x: pointsRect.x - resizeBorderGap,
                    y: pointsRect.y + pointsRect.height + resizeBorderGap
                };
                p2 = {
                    x: p1.x + resizeBorderLength,
                    y: p1.y
                };
                p3 = {
                    x: p1.x,
                    y: p1.y - resizeBorderLength
                };
                g.moveTo(p2.x, p2.y);
                g.lineTo(p1.x, p1.y);
                g.lineTo(p3.x, p3.y);
                g.stroke();
            }

            if (selected) {
                this.drawCoord(g);
                this.drawDim(g);
            }

        },

        validateBodyBounds: function() {
            make.Default.ImageShapeNodeUI.superClass.validateBodyBounds.call(this);

            //calculate body bounds here.
            var element = this._element;
            //      points = element._points,
            if (!element._points || element._points.size() < 1) return;
            var points = this._getZoomPoints();
            if (points.size() < 2) return;
            var borderWidth = element.getStyle('vector.outline.width');
            //      rect = twaver.Util.getRect(points);
            var rect = this.getPathRect('vector', true);

            if (borderWidth > 0) {
                twaver.Util.grow(rect, borderWidth, borderWidth);
            }
            var selected = this._network.isSelected(this._element),
                resizeBorderWidth = this._element.getClient('resizeBorderWidth'),
                resizeBorderGap = this._element.getClient('resizeBorderGap');
            if (selected) {
                twaver.Util.grow(rect, (resizeBorderWidth + resizeBorderGap) / this._network.getZoom() * 2 + 2, (resizeBorderWidth + resizeBorderGap) / this._network.getZoom() * 2 + 2);
            }

            this.addBodyBounds(rect);
        },

        _addBorderLine: function(g, p1, p2, p3) {
            this._borderLines.push({
                point1: p2,
                point2: p1
            });
            this._borderLines.push({
                point1: p1,
                point2: p3
            });
            g.moveTo(p2.x, p2.y);
            g.lineTo(p1.x, p1.y);
            g.lineTo(p3.x, p3.y);
        },

        isPointOnBorderLine: function(point) {
            if (!this._borderLines) {
                return null;
            }
            var resizeBorderWidth = this._element.getClient('resizeBorderWidth');
            for (var i = 0; i < this._borderLines.length; i++) {
                var line = this._borderLines[i];
                if (this._element.isPointOnLine(point, line.point1, line.point2, resizeBorderWidth)) {
                    return Math.floor(i / 2);
                }
            }
            return null;
        },

        drawDim: function(ctx) {
            var self = this;
            var g = ctx;
            var element = this._element;
            //        var points = element.getPoints();
            var points = this._getZoomPoints();
            var logical_points = element.getPoints();
            if (!points || points.size() < 2 || !this._network.isSelected(element)) {
                return;
            }

            var rect = this.getBodyRect();
            var dimLeadLength = element.getClient('dimLeadLength'),
                dimLineOffset = element.getClient('dimLineOffset'),
                dimLineWidth = element.getClient('dimLineWidth'),
                dimColor = element.getClient('dimColor'),
                dimTextGap = element.getClient('dimTextGap'),
                dimTextFont = element.getClient('dimTextFont'),
                dimArrowWidth = element.getClient('dimArrowWidth'),
                dimArrowHeight = element.getClient('dimArrowHeight');

            var bounds = {
                x: rect.x - dimLeadLength,
                y: rect.y - dimLeadLength,
                width: rect.width + dimLeadLength * 2,
                height: rect.height + dimLeadLength * 2
            };
            if (this.isClockwise()) {
                dimLeadLength = -dimLeadLength;
            }
            this.addBodyBounds(bounds);
            g = this.setShadow(this, g);

            g.strokeStyle = dimColor;
            g.lineWidth = dimLineWidth;
            g.fillStyle = dimColor;
            g.font = dimTextFont;
            g.textAlign = 'center';
            g.textBaseline = 'middle';

            function drawDimEdge(p1, p2, distance) {
                if (distance == 0) return;
                var center = _twaver.math.getCenterPoint(p1, p2);
                var angle = angle1 = _twaver.math.getAngle(p1, p2);
                if (p2.x < p1.x) {
                    angle = Math.PI + angle;
                }

                //            var distance = _twaver.math.getDistance(p1, p2);
                var text = distance.toFixed(2);
                var textWidth = g.measureText(text).width;

                var matrix = _twaver.math.createMatrix(angle, p1.x, p1.y);
                var newp1 = matrix.transform({
                    x: p1.x,
                    y: p1.y - dimLeadLength
                });
                var newc1 = matrix.transform({
                    x: p1.x,
                    y: p1.y - dimLeadLength * dimLineOffset
                });
                matrix = _twaver.math.createMatrix(angle, p2.x, p2.y);
                var newp2 = matrix.transform({
                    x: p2.x,
                    y: p2.y - dimLeadLength
                });
                var newc2 = matrix.transform({
                    x: p2.x,
                    y: p2.y - dimLeadLength * dimLineOffset
                });
                var newd1 = self.getPointBetween(newc1, newc2, (0.5 - (textWidth / 2 + dimTextGap) / distance));
                var newd2 = self.getPointBetween(newc1, newc2, (0.5 + (textWidth / 2 + dimTextGap) / distance));
                var a1 = self.getPointBetween(newc1, newc2, dimArrowWidth / distance);
                matrix = _twaver.math.createMatrix(angle, a1.x, a1.y);
                var a11 = matrix.transform({
                    x: a1.x,
                    y: a1.y - dimArrowHeight
                });
                var a12 = matrix.transform({
                    x: a1.x,
                    y: a1.y + dimArrowHeight
                });
                var a2 = self.getPointBetween(newc1, newc2, 1 - dimArrowWidth / distance);
                matrix = _twaver.math.createMatrix(angle, a2.x, a2.y);
                var a21 = matrix.transform({
                    x: a2.x,
                    y: a2.y - dimArrowHeight
                });
                var a22 = matrix.transform({
                    x: a2.x,
                    y: a2.y + dimArrowHeight
                });

                g.beginPath();
                g.moveTo(p1.x, p1.y);
                g.lineTo(newp1.x, newp1.y);
                g.moveTo(p2.x, p2.y);
                g.lineTo(newp2.x, newp2.y);

                g.moveTo(newc1.x, newc1.y);
                g.lineTo(newd1.x, newd1.y);
                g.moveTo(newd2.x, newd2.y);
                g.lineTo(newc2.x, newc2.y);

                g.moveTo(newc1.x, newc1.y);
                g.lineTo(a11.x, a11.y);
                g.moveTo(newc1.x, newc1.y);
                g.lineTo(a12.x, a12.y);
                g.moveTo(newc2.x, newc2.y);
                g.lineTo(a21.x, a21.y);
                g.moveTo(newc2.x, newc2.y);
                g.lineTo(a22.x, a22.y);
                g.stroke();

                g.save();
                center = {
                    x: (newc1.x + newc2.x) / 2,
                    y: (newc1.y + newc2.y) / 2
                };
                g.translate(center.x, center.y);
                g.rotate(angle1);
                g.translate(-center.x, -center.y);
                g.fillText(text, center.x, center.y);
                g.restore();
            }

            var p1 = points.get(0);
            var logical_p1 = logical_points.get(0);
            for (var i = 1, n = points.size(); i < n; i++) {
                var p2 = points.get(i);
                var logical_p2 = logical_points.get(i);
                var distance = _twaver.math.getDistance(logical_p1, logical_p2);
                logical_p1 = logical_p2;
                drawDimEdge(p1, p2, distance);
                p1 = p2;
            }
            if (n > 2) {
                var distance = _twaver.math.getDistance(logical_p1, logical_points.get(0));
                drawDimEdge(p1, points.get(0), distance);
            }

        },

        getPointBetween: function(p1, p2, ratio) {
            return {
                x: p1.x + (p2.x - p1.x) * ratio,
                y: p1.y + (p2.y - p1.y) * ratio
            };
        },
        // http://stackoverflow.com/questions/1165647/how-to-determine-if-a-list-of-polygon-points-are-in-clockwise-order
        isClockwise: function(points) {
            var element = this._element;
            var points = element.getPoints();
            if (!points || points.size() < 2) {
                return true;
            }
            var sum = 0,
                l = points.size();
            for (var i = 0; i < l; i++) {
                var p1 = points.get(i);
                var p2 = points.get((i + 1 === l ? 0 : (i + 1)));
                sum += (p2.x - p1.x) * (p2.y + p1.y);
            }
            return sum > 0;
        },

        drawCoord: function(ctx) {
            var g = ctx;
            var self = this;
            var element = this._element;
            //        var points = element.getPoints();
            var points = this._getZoomPoints();
            var logicalPoints = element.getPoints();
            if (!points) {
                return;
            }
            if (!logicalPoints) {
                return;
            }
            var rect = this.getBodyRect();

            var coordTextColor = element.getClient('coordTextColor'),
                coordTextFont = element.getClient('coordTextFont'),
                coordTextOffsetX = element.getClient('coordTextOffsetX'),
                coordTextOffsetY = element.getClient('coordTextOffsetY'),
                coordTextAlign = element.getClient('coordTextAlign'),
                coordTextBaseline = element.getClient('coordTextBaseline'),
                coordTextBackground = element.getClient('coordTextBackground'),
                decimalNumber = element.getClient('decimalNumber');

            //expend bounds to enough area to hold all text.
            var bounds = {
                x: rect.x - 100,
                y: rect.y - 50,
                width: rect.width + 200,
                height: rect.height + 100
            };
            this.addBodyBounds(bounds);
            g = this.setShadow(this, g);

            g.save();
            g.font = coordTextFont;
            for (var i = 0, n = points.size(); i < n; i++) {
                var p = points.get(i);
                var logical_p = logicalPoints.get(i);
                var text = '(' + (p.x + element.getOffsetXofPoints()).toFixed(decimalNumber) + ', ' + (p.y * (element.getNegatedYInterval() ? -1 : 1) + element.getOffsetYofPoints()).toFixed(decimalNumber) + ')';
                if (logical_p) {
                    text = '(' + (logical_p.x + element.getOffsetXofPoints()).toFixed(decimalNumber) + ', ' + (logical_p.y * (element.getNegatedYInterval() ? -1 : 1) + element.getOffsetYofPoints()).toFixed(decimalNumber) + ')';
                }
                var size = _twaver.g.getTextSize(g.font, text);
                g.fillStyle = coordTextBackground;
                g.fillRect(p.x - size.width / 2 + coordTextOffsetX, p.y - size.height / 2 + coordTextOffsetY, size.width, size.height);
                g.fillStyle = coordTextColor;
                g.textAlign = coordTextAlign;
                g.textBaseline = coordTextBaseline
                g.fillText(text, p.x, p.y + coordTextOffsetY); //p.x + coordTextOffsetX
            }
            g.restore();
        }
    });

    make.Default.WallShapeNode = function() {
        make.Default.WallShapeNode.superClass.constructor.apply(this, arguments);
    }

    twaver.Util.ext(make.Default.WallShapeNode, make.Default.ImageShapeNode, {});

    make.Default.InnerWallShapeNode = function() {
        make.Default.InnerWallShapeNode.superClass.constructor.apply(this, arguments);
        //设置image为空，解决大套小无法选中问题
        this.setClient('imageSrc', null);
        this.setStyle("vector.outline.color", "#333333");
        this.setStyle("vector.outline.width", 5);
        this.setClient("closed", false);
        this.setClient('showFloor', false);
        this.setClient('focusColor', 'green');
        this.setClient('resizeBorderWidth', 10);
        this.setClient('resizeBorderLength', 25);
        this.setClient('resizeBorderGap', 10);
        this.setClient('resizeBorderColor', 'yellow');
        this.setClient('size', { x: 0, y: 230, z: 4 });
        this.setClient('repeat', { row: 1, column: 1 });
    }

    twaver.Util.ext(make.Default.InnerWallShapeNode, make.Default.WallShapeNode, {});

    make.Default.FloorShapeNode = function() {
        make.Default.FloorShapeNode.superClass.constructor.apply(this, arguments);

        this.setClient('imageSrc', 'floor.png');
        this.setStyle("vector.outline.color", "#FFFFFF");
        this.setStyle("vector.outline.width", 0);
        this.setClient("closed", true);
        this.setClient('focusColor', 'blue');
        this.setClient('repeat', 100);
        this.setClient('size', { x: 0, y: 0, z: 0.1 });
    }

    twaver.Util.ext('make.Default.FloorShapeNode', make.Default.ImageShapeNode, {});

    make.Default.LineWidthShapeNode = function() {
        make.Default.LineWidthShapeNode.superClass.constructor.apply(this, arguments);
        this.setStyle("vector.outline.color", "#B45F04");
        this.setStyle("vector.outline.width", 5);
        this.setStyle("vector.fill.color", "rgba(184,211,240,0)");
        this.setClient("closed", false);
        this.setClient('size', { x: 0, y: 0, z: 0.1 });
        this.setClient('transparent', false);
        this.setClient('opacity', 1);
        this.setClient('fill', false);
    }

    twaver.Util.ext(make.Default.LineWidthShapeNode, make.Default.ImageShapeNode, {

    });
    /**
     * modelDefaultParameters 格式说明
     {
        id: {
            name: 'name', //属性名称
            value: 'value', //属性值
            valueType: 'string',//属性值类型  //PROPERTY_VALUE_TYPE: 'string', // 'string', 'boolean', 'color', 'int', 'number'
            propertyType: 'client', //属性类型 //PROPERTY_PROPERTY_TYPE: 'accessor', // 'field', 'accessor', 'style', 'client'
            editable:true, //是否可以编辑
            category:'Detail' //属性类别
        }
    }
     */

    var getIdcIconPath = function(icon) {
        if (icon.indexOf('/') > 0) {
            return icon;
        }
        return make.Default.path + 'model/idc/icons/' + icon;
    }

    var getIdcImagePath = function(image) {
        if (image.indexOf('/') > 0) {
            return image;
        }
        return make.Default.path + 'model/idc/images/' + image;
    }

    var getIdcSVGPath = function(image) {
        if (image.indexOf('/') > 0) {
            return image;
        }
        if (image.length > 4 && image.lastIndexOf('.svg') == image.length - 4) {
            return make.Default.path + 'model/idc/svg/' + image;
        } else {
            return make.Default.path + 'model/idc/svg/' + image + '.svg';
        }
    }

    var idcLayer = {
        'wall': 100,
        'area': 200,
        'innerWall': 300,
        'wallChild': 400,
        'innerWallChild': 500,
        'channel': 600,
        'rack': 700,
        'default': 800
    }

    var getModelParameters = function(name, description, icon, category, categoryNumber, order, modelParams, type, layer) {
        return {
            name: name || "外墙",
            description: description || "外墙说明",
            icon: getIdcIconPath(icon || 'column.png'),
            category: category || '默认模型',
            categoryNumber: categoryNumber || 10,
            order: order || 10,
            type: type || 'twaver.Node',
            layer: layer || idcLayer.default,
            modelDefaultParameters: modelParams || {},
        }
    }

    var get2dBasicParameters = function(arg, resizeable) {
        arg = arg || {};
        var result = {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            width: {
                name: "宽度",
                value: arg.width,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            height: {
                name: "厚度",
                value: arg.depth,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                hidden: false,
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Z轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
        }
        if (resizeable === false) {
            result.width.editable = false;
            result.height.editable = false;
        }
        return result;
    }

    var getRegister = function(width, depth, color) {
        return function(json) {
            var modelJson = {
                width: width,
                depth: depth,
                client: {
                    type: 'model'
                }
            }
            if (color) modelJson.color = color;
            make.Default.copyProperties(json, modelJson);
            var model = make.Default.createNode(modelJson);
            return model;
        }
    }

    var get2dRackParameters = function(arg) {
        arg = arg || {};
        return {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            width: {
                name: "宽度",
                value: arg.width,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            height: {
                name: "厚度",
                value: arg.depth,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                hidden: false,
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Z轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            position: {
                name: "位置",
                value: [0, 0, 0],
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
        }
    }

    var get2dWaterCableParameters = function(args) {
        args = args || {};
        return {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Z轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            position: {
                name: "位置",
                value: [0, 0, 0],
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            color: {
                name: "颜色",
                value: '#B45F04',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            "vector.outline.color": {
                name: "颜色",
                value: '#B45F04',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE,
                exportable: false,
            },
        }
    }

    var get2dObjParameters = function(arg) {
        arg = arg || {};
        return {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Z轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            position: {
                name: "位置",
                value: [0, 200, 0],
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            "positionY": {
                name: "离地高度",
                value: 200,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
                exportable: false,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
        }
    }


    make.Default.register('twaver.idc.wall.top', function(json) {
        var wallJson = {
            objType: 'wall',
            client: {
                'data': json.data,
                'type': 'wall',
            }
        }
        make.Default.copyProperties(json, wallJson);
        var wall = make.Default.create2dShapeNode(wallJson);
        var children = json.children;
        if (children) {
            children.forEach(function(child) {
                var childNode = make.Default.load(child);
                childNode.setParent(wall);
            });
        }
        return wall;
    }, getModelParameters("外墙", "外墙说明", 'wall.png', '2d房间模型', 10, 10, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'wall', idcLayer.wall));

    make.Default.register('twaver.idc.wall1.top', function(json) {
        var wall = {
            id: 'twaver.idc.wall.top',
        }
        var wallData = {
            data: [
                [-2000, -2000],
                [2000, -2000],
                [2000, 2000],
                [-2000, 2000]
            ],
        }
        make.Default.copyProperties(json, wall);
        make.Default.copyProperties(wallData, wall);
        return make.Default.load(wall);
    }, getModelParameters("外墙1", "外墙说明", 'wall1.png', '2d房间模型', 10, 20, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'wall1', idcLayer.wall));

    make.Default.register('twaver.idc.wall2.top', function(json) {
        var wall = {
            id: 'twaver.idc.wall.top',
        }
        var wallData = {
            data: [
                [-2500, -2500],
                [0, -2500],
                [0, 0],
                [2500, 0],
                [2500, 2500],
                [-2500, 2500]
            ],
        }
        make.Default.copyProperties(json, wall);
        make.Default.copyProperties(wallData, wall);
        return make.Default.load(wall);
    }, getModelParameters("外墙2", "外墙说明", 'wall2.png', '2d房间模型', 10, 20, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'wall2', idcLayer.wall));

    make.Default.register('twaver.idc.wall3.top', function(json) {
        var wall = {
            id: 'twaver.idc.wall.top',
        }
        var wallData = {
            data: [
                [-2500, -500],
                [-1300, -500],
                [-1300, -2500],
                [1300, -2500],
                [1300, -500],
                [2500, -500],
                [2500, 2500],
                [-2500, 2500]
            ],
        }
        make.Default.copyProperties(json, wall);
        make.Default.copyProperties(wallData, wall);
        return make.Default.load(wall);
    }, getModelParameters("外墙3", "外墙说明", 'wall3.png', '2d房间模型', 10, 20, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'wall3', idcLayer.wall));

    make.Default.register('twaver.idc.wall4.top', function(json) {
        var wall = {
            id: 'twaver.idc.wall.top',
        }
        var wallData = {
            data: [
                [-2500, -500],
                [-1500, -500],
                [-1000, -2500],
                [1000, -2500],
                [1500, -500],
                [2500, -500],
                [2500, 2500],
                [-2500, 2500]
            ],
        }
        make.Default.copyProperties(json, wall);
        make.Default.copyProperties(wallData, wall);
        return make.Default.load(wall);
    }, getModelParameters("外墙4", "外墙说明", 'wall4.png', '2d房间模型', 10, 20, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'wall4', idcLayer.wall));

    make.Default.register('twaver.idc.innerWall.top', function(json) {
        var wallJson = {
            objType: 'innerWall',
            client: {
                'data': json.data,
                'type': 'innerWall',
            },
        };
        make.Default.copyProperties(json, wallJson);
        var innerWall = make.Default.create2dShapeNode(wallJson);
        var children = json.children;
        if (children) {
            children.forEach(function(child) {
                var childNode = make.Default.load(child);
                childNode.setParent(innerWall);
            });
        }
        return innerWall;
    }, getModelParameters("内墙", "内墙说明", 'innerWall.png', '2d房间模型', 10, 20, {}, 'innerWall', idcLayer.innerWall));

    make.Default.copy('twaver.idc.glassWall.top', 'twaver.idc.innerWall.top', {}, {
        name: '玻璃内墙1',
        icon: getIdcIconPath('glasswall.png')
    })
    make.Default.copy('twaver.idc.glassWall2.top', 'twaver.idc.innerWall.top', {}, {
        name: "玻璃内墙2",
        icon: getIdcIconPath('glasswall2.png')
    })

    make.Default.register('twaver.idc.floor.top', function(json) {
        var floorJson = {
            objType: 'floor',
            client: {
                'data': json.data,
                'type': 'floor',
            },
        };
        make.Default.copyProperties(json, floorJson);
        var floor = make.Default.create2dShapeNode(floorJson);
        return floor;
    }, getModelParameters("楼层", "楼层说明", 'floor.png', '2d房间模型', 10, 20, {}, 'floor', idcLayer.wallChild));

    var getArea2DParameters = function() {
        var result = {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            width: {
                name: "宽度",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                editable: false,
            },
            height: {
                name: "厚度",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                editable: false,
            },
            label: {
                name: "标签",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
            },
            "label.xoffset": {
                name: "标签位置X",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE,
            },
            "label.yoffset": {
                name: "标签位置Z",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE,
            },
            "label.color": {
                name: "标签颜色",
                value: 'red',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE,
            },
            "label.font": {
                name: "标签字体",
                value: 'bold 36px 微软雅黑,sans-serif',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE,
            },
            opacity: {
                name: "透明度",
                value: 0.05,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
            }
        }
        return result;
    }
    make.Default.register('twaver.idc.area.top', function(json) {
        var areaJson = {
            objType: 'floor',
            client: {
                'data': json.data,
                'type': 'area',
            },
            style: {
                "shapenode.closed": true,
                "vector.outline.color": "#B45F04",
                "vector.outline.width": 4,
                "label.position": 'center',
            }
        }
        make.Default.copyProperties(json, areaJson);
        areaJson.data = areaJson.data || [];
        areaJson.position = areaJson.position || [0, 0, 0];
        var area = new twaver.ShapeNode(json.objectId);
        var children = json.children;
        if (children) {
            children.forEach(function(child) {
                var childNode = make.Default.load(child);
                childNode.setParent(area);
            });
        }
        var pathObject = make.Default.create2dShapePath(areaJson.data, areaJson.position);
        area.setSegments(pathObject.segments);
        area.setPoints(pathObject.points);
        make.Default.setObject2dCSProps(area, areaJson);
        return area;
    }, getModelParameters("机房", "机房说明", 'area.png', '2d房间模型', 10, 10, getArea2DParameters(), 'area', idcLayer.area));

    make.Default.register('twaver.idc.door.top', function(json) {
        var doorJson = {
            client: {
                type: 'door',
                bid: json.bid,
            }
        };
        make.Default.copyProperties(json, doorJson);
        var door = make.Default.createBlockObject(doorJson, 'door');
        return door;
    }, getModelParameters("门", "门说明", 'door.png', '2d房间模型', 10, 30, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'door', idcLayer.wallChild));

    make.Default.copy('twaver.idc.door1.top', 'twaver.idc.door.top', {}, { icon: getIdcIconPath('door1.png') });
    make.Default.copy('twaver.idc.door3.top', 'twaver.idc.door.top', {}, { icon: getIdcIconPath('door1.png') });
    make.Default.copy('twaver.idc.door4.top', 'twaver.idc.door.top', {}, { icon: getIdcIconPath('door1.png') });

    make.Default.register('twaver.idc.window.top', function(json) {
        var windowJson = {
            client: {
                type: 'window',
                bid: json.bid,
            }
        };
        make.Default.copyProperties(json, windowJson);
        var window = make.Default.createBlockObject(windowJson, 'window');
        return window;
    }, getModelParameters("窗户", "窗户说明", 'window.png', '2d房间模型', 10, 40, {
        'bid': {
            name: "业务ID",
            value: undefined,
            type: make.Default.PARAMETER_TYPE_STRING,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
        },
    }, 'window', idcLayer.wallChild));


    make.Default.register('twaver.idc.column.top', function(json) {
        var colJson = {
            client: {
                type: 'column',
                bid: json.bid,
            },
            style: {
                'vector.fill.color': '#BDBCBC',
            }
        };
        make.Default.copyProperties(json, colJson);
        var column = make.Default.createNode(colJson);
        return column;
    }, getModelParameters("柱子", "柱子说明", 'column.png', '2d部件模型', 10, 40, {}, 'column', idcLayer.wallChild));

    make.Default.register('twaver.idc.rack.top', function(json) {
        json.client = json.client || {};
        var rackJson = {
            image: json.image || getIdcSVGPath('racktop'),
            width: json.width,
            depth: json.depth,
            client: {
                type: json.client.type || 'rack'
            }
        }
        make.Default.copyProperties(json, rackJson);
        var rack = make.Default.createNode(rackJson);
        return rack;
    }, getModelParameters("42U机柜", "机柜说明", 'rack.png', '2d机柜模型', 20, 10 + (47 - 42) * 10, get2dRackParameters({
        width: 60,
        depth: 80,
        height: make.Default.getRackHeight(47)
    }), 'rack', idcLayer.rack));

    var registerRack2d = function(size) {
        make.Default.register('twaver.idc.rack' + size + '.top', function(json) {
            json.id = 'twaver.idc.rack.top';
            return make.Default.load(json);
        }, getModelParameters(size + "U机柜", "机柜说明", 'rack.png', '2d机柜模型', 20, 10 + (size - 42) * 10, get2dRackParameters({
            width: 60,
            depth: 80,
            height: make.Default.getRackHeight(size)
        }), 'rack', idcLayer.rack));
    }

    for (var i = 42; i <= 47; i++) {
        registerRack2d(i);
    }


    make.Default.register('twaver.idc.headerRack.top', function(json) {
        json.id = 'twaver.idc.rack.top';
        json.image = json.image || getIdcSVGPath('headerracktop');
        json.client = json.client || {};
        json.client.type = 'header_rack';
        return make.Default.load(json);
    }, getModelParameters("列头柜", "列头柜说明", 'headerRack.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 60,
        depth: 80,
        height: 200
    }), 'header_rack', idcLayer.rack));

    var getAisle2DParameters = function() {
        return {
            bid: {
                name: "BID",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            'x': {
                name: "X轴位置",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            'y': {
                name: "Z轴位置",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            'rackWidth': {
                name: "机柜宽度",
                value: 60,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackDepth': {
                name: "机柜深度",
                value: 80,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackHeight': {
                name: "机柜高度",
                value: 220,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackNumber': {
                name: "机柜数量",
                value: 20,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'aisleDepth': {
                name: "通道深度",
                value: 140,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'isSingle': {
                name: "是否为单通道",
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'side': {
                name: "单通道类型", //可选值： left 或 right
                value: 'right',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'showRack': {
                name: "显示机柜", //
                value: true,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            }
        }
    }
    var getRackByLoc = function(data, loc) {
        if (data.getClient('showRack')) {
            var id = data.getClient(loc);
            if (id) {
                return id;
            }
        }
        return '';
        //return loc;
    }

    var getAisleImage = function() {
        var vectorImage = {
            //w:'<%=getWidth()%>',
            //h:'<%=getHeight()%>',
            font: '20px arial',
            origin: { x: 0, y: 0 },
            clip: true,
            //shadow: {blur: 5, color: '#61B6D8'},
            v: [{
                shape: 'draw',
                draw: function(g, data, view) {

                    var count = data.rackNumber;
                    var isSingle = !!data.isSingle;
                    var rackWidth = data.rackWidth;
                    var rackDepth = data.rackDepth;
                    var aisleDepth = data.aisleDepth;
                    var side = data.side || 'right';

                    //双通道传入的机柜数量是两排的总数
                    var oneCount = isSingle ? count : count / 2;
                    //总宽度
                    var width = rackWidth * oneCount;
                    //总高度
                    var height = aisleDepth + rackDepth * (isSingle ? 1 : 2);

                    var textWidthMax = rackWidth - 4;

                    var channelColor = data.getClient('channel.color') || '#61B6ef';

                    var labelFont = data.getClient('channel.label.font') || '24px arial';
                    var locationFont = data.getClient('channel.location.font') || '20px arial';
                    var rackTextFont = data.getClient('channel.rackText.font') || '10px arial';

                    var labelColor = data.getClient('channel.label.color') || '#61B6ef';
                    var locationColor = data.getClient('channel.location.color') || '#61B6ef';
                    var rackTextColor = data.getClient('channel.rackText.color') || '#61B6ef';

                    var hc = 2; //机柜编号分成两行错开显示
                    var hc2 = Math.floor((hc - 1) / 2); //行数的一半
                    var hcy = 20; //每一行的高度
                    var hcoy = -10; //每一行的偏移

                    //最大的边框
                    g.drawShape({
                        shape: 'rect',
                        rect: [0, 0, width, height],
                        fill: '#f5f5f5',
                        lineWidth: 3,
                        lineColor: channelColor,
                    })
                    if (!isSingle) { //双通道
                        //绘制上排
                        for (var i = 0; i < oneCount; i++) {
                            var x = (i * rackWidth);
                            var y = 0;
                            //机柜边框
                            g.drawShape({
                                shape: 'rect',
                                rect: [x, y, rackWidth, rackDepth],
                                lineWidth: 1,
                            });
                            //机柜编号
                            g.drawShape({
                                shape: 'text',
                                text: getRackByLoc(data, '1-' + (i + 1)),
                                textAlign: 'center',
                                textBaseline: 'center',
                                font: rackTextFont,
                                fill: rackTextColor,
                                w: textWidthMax,
                                x: x + rackWidth / 2,
                                y: y + rackDepth / 2 + ((i % hc) - hc2) * hcy + hcoy,
                            });
                            //位置
                            g.drawShape({
                                shape: 'text',
                                text: '1-' + (i + 1),
                                textAlign: 'center',
                                textBaseline: 'center',
                                font: locationFont,
                                fill: locationColor,
                                x: x + rackWidth / 2,
                                y: y + rackDepth + 14,
                            });

                        }
                        g.drawShape({
                            shape: 'rect',
                            rect: [0, rackDepth, width, aisleDepth],
                            lineWidth: 1
                        });
                        //g.drawShape({
                        //    shape: 'text',
                        //    text: '<%=getClient("label")%>',
                        //    textAlign: 'center',
                        //    textBaseline: 'center',
                        //    font: labelFont,
                        //    fill: labelColor,
                        //    x: width / 2,
                        //    y: rackDepth + aisleDepth / 2
                        //});
                        //下排
                        for (i = 0; i < oneCount; i++) {
                            var x = (i * rackWidth);
                            var y = rackDepth + aisleDepth;
                            //机柜边框
                            g.drawShape({ shape: 'rect', rect: [x, y, rackWidth, rackDepth], lineWidth: 1 });
                            //机柜编号
                            g.drawShape({
                                shape: 'text',
                                text: getRackByLoc(data, '2-' + (i + 1)),
                                textAlign: 'center',
                                textBaseline: 'center',
                                font: rackTextFont,
                                fill: rackTextColor,
                                w: textWidthMax,
                                x: x + rackWidth / 2,
                                y: y + rackDepth / 2 + ((i % hc) - hc2) * hcy + hcoy,
                            });
                            //位置
                            g.drawShape({
                                shape: 'text',
                                text: '2-' + (i + 1),
                                textAlign: 'center',
                                textBaseline: 'center',
                                font: locationFont,
                                fill: locationColor,
                                x: x + rackWidth / 2,
                                y: y - 14,
                            });
                        }
                    } else { // 单通道
                        if (side == 'right') { //上排摆机柜
                            for (var i = 0; i < oneCount; i++) {
                                var x = (i * rackWidth);
                                var y = 0;
                                //机柜边框
                                g.drawShape({
                                    shape: 'rect',
                                    rect: [x, y, rackWidth, rackDepth],
                                    lineWidth: 1
                                });
                                //机柜编号
                                g.drawShape({
                                    shape: 'text',
                                    text: getRackByLoc(data, '1-' + (i + 1)),
                                    textAlign: 'center',
                                    textBaseline: 'center',
                                    font: rackTextFont,
                                    fill: rackTextColor,
                                    w: textWidthMax,
                                    x: x + rackWidth / 2,
                                    y: y + rackDepth / 2 + ((i % hc) - hc2) * hcy + hcoy
                                });
                                //位置
                                g.drawShape({
                                    shape: 'text',
                                    text: '1-' + (i + 1),
                                    textAlign: 'center',
                                    textBaseline: 'center',
                                    font: locationFont,
                                    fill: locationColor,
                                    x: x + rackWidth / 2,
                                    y: y + rackDepth + 14,
                                });

                            }
                            g.drawShape({
                                shape: 'rect',
                                rect: [0, rackDepth, width, aisleDepth],
                                lineWidth: 1
                            });
                            //g.drawShape({
                            //    shape: 'text',
                            //    text: '<%=getClient("label")%>',
                            //    textAlign: 'center',
                            //    textBaseline: 'center',
                            //    font: labelFont,
                            //    fill: labelColor,
                            //    x: width / 2,
                            //    y: rackDepth + aisleDepth / 2
                            //});
                        } else { //下排拍机柜
                            g.drawShape({
                                shape: 'rect',
                                rect: [0, 0, width, aisleDepth],
                                lineWidth: 1
                            });
                            //g.drawShape({
                            //    shape: 'text',
                            //    text: '<%=getClient("label")%>',
                            //    textAlign: 'center',
                            //    textBaseline: 'center',
                            //    font: labelFont,
                            //    fill: labelColor,
                            //    x: width / 2,
                            //    y: aisleDepth / 2
                            //});
                            for (i = 0; i < oneCount; i++) {
                                var x = (i * rackWidth);
                                var y = aisleDepth;
                                g.drawShape({ shape: 'rect', rect: [x, y, rackWidth, rackDepth], lineWidth: 1 });
                                g.drawShape({
                                    shape: 'text',
                                    text: getRackByLoc(data, '1-' + (i + 1)),
                                    textAlign: 'center',
                                    textBaseline: 'center',
                                    font: rackTextFont,
                                    fill: rackTextColor,
                                    w: textWidthMax,
                                    x: x + rackWidth / 2,
                                    y: y + rackDepth / 2 + ((i % hc) - hc2) * hcy + hcoy
                                });
                                //位置
                                g.drawShape({
                                    shape: 'text',
                                    text: '1-' + (i + 1),
                                    textAlign: 'center',
                                    textBaseline: 'center',
                                    font: locationFont,
                                    fill: locationColor,
                                    x: x + rackWidth / 2,
                                    y: y - 14,
                                });
                            }
                        }
                    }
                },
            }]
        };
        return vectorImage;
    };

    var getAisleSize = function(args) {
        var w, h;
        //单通道
        if (args.isSingle) {
            w = args.rackWidth * args.rackNumber;
            h = args.aisleDepth + args.rackDepth;
        } else {
            w = args.rackWidth * args.rackNumber / 2;
            h = args.aisleDepth + args.rackDepth * 2;
        }
        return { width: w, height: h };
    }

    make.Default.register('twaver.idc.aisle.top', function(json) {
        json.client = json.client || {};
        var size = getAisleSize(json);

        //第一次,如果传入了尺寸,说明是CAD中导入的新建机柜,根据外面的尺寸计算里面的机柜数量
        if (json.width) {
            size.width = json.width;
            json.rackNumber = parseInt(json.width / json.rackWidth);
            if (!json.isSingle) {
                json.rackNumber = json.rackNumber * 2;
            }
        }
        if (json.depth) {
            size.height = json.depth;
            if (json.isSingle) {
                json.aisleDepth = json.depth - json.rackDepth;
            } else {
                json.aisleDepth = json.depth - json.rackDepth - json.rackDepth;
            }
        }
        var data = {
            width: size.width,
            depth: size.height,
            client: {
                type: json.client.type || 'channel',
            }
        }
        make.Default.copyProperties(json, data);
        var image = getAisleImage();
        data.image = image;
        var aisle = make.Default.createNode(data);
        aisle.ready = false;
        aisle.setStyle('label.font', '30px arial');
        aisle.setStyle('label.color', '#61B6ef');

        function setterFilter(newValue, scope, field) {

            if (this.ready) {
                //等待值设置完成后,更新尺寸;
                setTimeout(function() {
                    var size = getAisleSize(scope);
                    scope.setSize(size);
                    scope.setClient(field, newValue);
                    if (scope.isSingle) {
                        if (scope.side == 'right') {
                            scope.setStyle('label.yoffset', scope.rackWidth / 2);
                        } else {
                            scope.setStyle('label.yoffset', -scope.rackWidth / 2);
                        }
                    } else {
                        scope.setStyle('label.yoffset', 0);
                    }
                }, 1)
            }
            return newValue;
        }

        make.Default.objectWrapper(aisle, 'rackWidth', null, setterFilter);
        make.Default.objectWrapper(aisle, 'rackDepth', null, setterFilter);
        make.Default.objectWrapper(aisle, 'rackHeight', null, setterFilter);
        make.Default.objectWrapper(aisle, 'rackNumber', null, setterFilter);
        make.Default.objectWrapper(aisle, 'aisleDepth', null, setterFilter);
        make.Default.objectWrapper(aisle, 'isSingle', null, setterFilter);
        make.Default.objectWrapper(aisle, 'side', null, setterFilter);
        aisle.rackWidth = json.rackWidth;
        aisle.rackDepth = json.rackDepth;
        aisle.rackHeight = json.rackHeight;
        aisle.rackNumber = json.rackNumber;
        aisle.aisleDepth = json.aisleDepth;
        aisle.isSingle = json.isSingle;
        aisle.side = json.side;
        aisle.ready = true;
        if (aisle.isSingle) {
            if (aisle.side == 'right') {
                aisle.setStyle('label.yoffset', aisle.rackWidth / 2);
            } else {
                aisle.setStyle('label.yoffset', -aisle.rackWidth / 2);
            }
        } else {
            aisle.setStyle('label.yoffset', 0);
        }
        return aisle;
    }, getModelParameters("通道", "通道说明", 'channel.png', '2d机柜模型', 20, 30, getAisle2DParameters(), 'channel', idcLayer.channel));

    make.Default.register('twaver.idc.airCondition.top', function(json) {
        json.id = 'twaver.idc.rack.top';
        json.width = 100;
        json.depth = 80;
        json.client = json.client || {};
        json.client.type = 'airCondition';
        return make.Default.load(json);
    }, getModelParameters("空调", "空调说明", 'airCondition.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 100,
        depth: 80,
        height: 200
    })));

    make.Default.copy('twaver.idc.airCondition1.top', 'twaver.idc.airCondition.top', {}, getModelParameters("空调1", "空调说明", 'airCondition1.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 188,
        depth: 75,
        height: 174
    })));
    make.Default.copy('twaver.idc.airCondition2.top', 'twaver.idc.airCondition.top', {}, getModelParameters("空调2", "空调说明", 'airCondition2.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 188,
        depth: 75,
        height: 174
    })));

    make.Default.copy('twaver.idc.airCondition4.top', 'twaver.idc.airCondition.top', {}, getModelParameters("空调2", "空调说明", 'airCondition2.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 30,
        depth: 120,
        height: 200
    })));

    make.Default.register('twaver.idc.model.top', function(json) {
        var modelJson = {
            image: json.image || getIdcSVGPath('upstop'),
            width: json.width || 80,
            depth: json.depth || 60,
            client: {
                type: 'model'
            }
        }
        make.Default.copyProperties(json, modelJson);
        var model = make.Default.createNode(modelJson);
        return model;
    });

    make.Default.register('twaver.idc.alternator.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcIconPath('alternator.png');
        var ups = make.Default.load(json);
        return ups;
    }, getModelParameters("发电机", "发电机说明", 'alternator.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 200,
        depth: 85,
        height: 107
    })));

    make.Default.register('twaver.idc.switchgear.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.width = json.width || 60;
        json.depth = json.depth || 60;
        var ups = make.Default.load(json);
        return ups;
    }, getModelParameters("开关柜", "开关柜说明", 'switchgear.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 60,
        depth: 60,
        height: 180
    })));

    make.Default.register('twaver.idc.pdc.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.width = json.width || 60;
        json.depth = json.depth || 60;
        var ups = make.Default.load(json);
        return ups;
    }, getModelParameters("配电柜", "配电柜说明", 'pdc.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 60,
        depth: 60,
        height: 180
    })));

    make.Default.register('twaver.idc.ups.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('upstop');
        json.width = json.width || 80;
        json.depth = json.depth || 60;
        var ups = make.Default.load(json);
        return ups;
    }, getModelParameters("ups", "UPS说明", 'ups.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 60,
        depth: 80,
        height: 200
    })));

    make.Default.register('twaver.idc.battery.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('batterytop');
        json.width = json.width || 150;
        json.depth = json.depth || 60;
        var battery = make.Default.load(json);
        return battery;
    }, getModelParameters("蓄电池", "蓄电池说明", 'battery.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 150,
        depth: 60,
        height: 80
    })));

    make.Default.register('twaver.idc.yangan.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('yangan');
        json.width = 33.51;
        json.depth = 33.51;
        var yangan = make.Default.load(json);
        return yangan;
    }, getModelParameters("烟感", "烟感说明", 'yangan.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.changuanqi.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('wendu');
        json.width = json.width || 5.14;
        json.depth = json.depth || 10.52;
        var changuanqi = make.Default.load(json);
        return changuanqi;
    }, getModelParameters("传感器", "传感器说明", 'wendu.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.shuangjian.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('shuangjian');
        json.width = json.width || 9.21;
        json.depth = json.depth || 15.92;
        var shuangjian = make.Default.load(json);
        return shuangjian;
    }, getModelParameters("双鉴", "双鉴说明", 'shuangjian.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.shuijin.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcSVGPath('shuijin');
        json.width = json.width || 31.98;
        json.depth = json.depth || 31.98;
        var shuijin = make.Default.load(json);
        return shuijin;
    }, getModelParameters("水浸", "水浸说明", 'shuijin.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.watercable.top', function(json) {
        var cableJson = {
            objType: 'cable',
            client: {
                'data': json.data,
                'type': 'cable',
            }
        }
        make.Default.copyProperties(json, cableJson);
        var cable = make.Default.create2dShapeNode(cableJson);
        cable.setStyle("vector.outline.color", json.color || '#B45F04');
        return cable;

    }, getModelParameters("水浸线", "水浸说明", 'cable.png', '2d环境模型', 20, 30, get2dWaterCableParameters(), 'watercable', idcLayer.innerWallChild));

    make.Default.register('twaver.idc.camera.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcIconPath('camera.png');
        json.width = 33.51;
        json.depth = 33.51;
        json.style = json.style || { 'label.font': '10px', 'label.position': 'bottom' };
        var node = make.Default.load(json);
        return node;
    }, getModelParameters("摄像头", "摄像头说明", 'camera.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.camera1.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.image = json.image || getIdcIconPath('camera1.png');
        json.width = 33.51;
        json.depth = 33.51;
        json.style = json.style || { 'label.font': '10px', 'label.position': 'bottom' };
        var node = make.Default.load(json);
        return node;
    }, getModelParameters("摄像头1", "摄像头说明", 'camera1.png', '2d环境模型', 20, 30, get2dObjParameters()));

    make.Default.register('twaver.idc.generator.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.width = json.width || 425;
        json.depth = json.depth || 233;
        var generator = make.Default.load(json);
        return generator;
    }, getModelParameters("发电机", "发电机说明", 'generator.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 425,
        depth: 233,
        height: 180
    })));

    make.Default.register('twaver.idc.fire.top', function(json) {
        json.id = 'twaver.idc.model.top';
        json.width = json.width || 23.9382;
        json.depth = json.depth || 23.9382;
        var fire = make.Default.load(json);
        return fire;
    }, getModelParameters("灭火器", "灭火器说明", 'fire.png', '2d机柜模型', 20, 30, get2dBasicParameters({
        width: 23.9382,
        depth: 23.9382,
        height: 90.116
    })));

    /******************   rackEditor begin **************************/

    var rackFrontRegister = function(size, id) {

        var id = id || 'twaver.idc.rack{}.front'.format(size);
        var name = '{}U机柜'.format(size);
        var icon = 'rack.png'.format(size);
        var image = 'rack{}U.svg'.format(size);
        var offsetX = make.Default.RACK_OFFSET_X;
        var offsetY = make.Default.RACK_OFFSET_Y;
        var width = make.Default.RACK_WIDTH;
        var height = make.Default.getRackHeight(size);
        make.Default.register(id, function(json) {
            make.Default.copyProperties({
                imageUrl: getIdcSVGPath(image),
                width: width,
                height: height,
                client: {
                    id: id,
                    host: true,
                    childrenSize: size,
                    offsetX: offsetX,
                    offsetY: offsetY,
                }
            }, json);
            return make.Default.createFollower(json);
        }, {
            name: name,
            category: '机柜',
            icon: getIdcIconPath(icon),
            offsetX: offsetX,
            offsetY: offsetY,
            host: true,
        });
    }

    //默认机柜42U
    rackFrontRegister(42, 'twaver.idc.rack.front');

    for (var i = 42; i <= 47; i++) {
        rackFrontRegister(i);
    }

    var getServerProps = function(size, json) {
        return {
            imageUrl: json.image ? getIdcImagePath(json.image) : getIdcSVGPath('u-0' + size),
            width: make.Default.getEquipmentWidth(),
            height: make.Default.getEquipmentHeight(size),
            client: {
                size: size,
                category: 'server',
            }
        }
    }

    var getServerParams = function(size, desc) {
        return {
            name: size + 'U设备',
            modelDefaultParameters: {
                bid: {
                    name: "BID",
                    value: undefined,
                    type: make.Default.PARAMETER_TYPE_STRING,
                    propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
                },
                loc: {
                    name: "位置",
                    value: 0,
                    type: make.Default.PARAMETER_TYPE_INT,
                    propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
                },
                panel: {
                    name: "面板",
                    value: 'twaver.idc.equipment.newPanel',
                    type: make.Default.PARAMETER_TYPE_STRING,
                    propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
                }
            },
            description: desc,
            category: '设备2D',
            icon: getIdcIconPath('server' + size + '.png'),
        }
    }

    var registerServer = function(size, id, desc) {
        id = id || 'twaver.idc.equipment' + size + '.front';
        make.Default.register(id, function(json) {
            var newData = {};
            make.Default.copyProperties(getServerProps(size, json), newData);
            if (json.image) {
                delete json.image;
            }
            make.Default.copyProperties(json, newData);
            return make.Default.createFollower(newData);
        }, getServerParams(size, desc));
    }

    for (var size = 1; size <= 8; size++) {
        registerServer(size);
    }

    registerServer(2, 'twaver.idc.equipment.front', '{}U的服务器设备'.format(2));

    registerServer(8, 'twaver.idc.equipment8-1.front', '{}U的服务器设备。这是一种挖空的机架'.format(8));
    /**************   rackEditor end **************************/


    /**************   deviceEditor begin ****************/

    /**
     * ai默认是72分辨率,1PT = 1/72英寸 = 1/72 * 25.4 mm = 0.3528mm  所以要处以比例系数
     * 10 换算成mm
     * 0.35277778 比例系数
     */

    var getServerBackPanelParams = function(args) {
        return {
            name: args.label,
            modelDefaultParameters: {
                width: {
                    name: "宽度",
                    value: args.relWidth || (make.Default.getEquipmentWidth()) * 10, //换算成mm
                    type: make.Default.PARAMETER_TYPE_INT,
                    propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
                },
                height: {
                    name: "高度",
                    value: args.relHeight || (make.Default.getEquipmentHeight(args.height || 1)) * 10, //换算成mm
                    type: make.Default.PARAMETER_TYPE_INT,
                    propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
                }
            },
            category: '面板背板',
            icon: getIdcIconPath(args.label + '.png'),
            host: true,
        }
    }

    var registerServerBackPanel = function(name, args) {

        var id = 'twaver.idc.' + name + '.panel';
        make.Default.register(id, function(json) {

            make.Default.copyProperties({
                imageUrl: getIdcSVGPath(name),
                client: {
                    category: 'networkDevice-panel',
                    host: true,
                    editable: true,
                    height: args.height,
                }
            }, json);
            var follower = make.Default.createFollower(json);
            return follower;
        }, getServerBackPanelParams(args));
    }

    var panelDef = {
        "hw_s2700": { label: "hw_s2700", height: 1 },
        "hw_s3700": { label: "hw_s3700", height: 1 },
        "cisco_2950": { label: "cisco_2950", height: 1 },
        "cisco_2960": { label: "cisco_2960", height: 1 },
        "h3c_s1050t": { label: "h3c_s1050t", height: 1 },
        "h3c_s1224": { label: "h3c_s1224", height: 1 },
        "hw_rh2288_v3_front": { label: "hw_rh2288_v3_front", height: 2 },
        "hw_rh2288_v3_back": { label: "hw_rh2288_v3_back", height: 2 },
        "dell_dss2500": { label: "dell_dss2500", height: 2 },
        "dell_r630": { label: "dell_r630", height: 1 },
        "dell_r730xd": { label: "dell_r730xd", height: 2 },
        "HW_CE6851-48S6Q-HI": { label: "HW_CE6851-48S6Q-HI", height: 1 },
        "HW_CE8860-4C-EI": { label: "HW_CE8860-4C-EI", height: 2 },
        "HW_S5700-52P-LI-AC": { label: "HW_S5700-52P-LI-AC", height: 1 },
        "HW_S5720-56C-EI-48S-AC": { label: "HW_S5720-56C-EI-48S-AC", height: 1 },
        "HW_NE40E-X8_card": { label: "HW_NE40E-X8_card", relWidth: 37.64, relHeight: 360.28 },
    }

    for (var name in panelDef) {
        registerServerBackPanel(name, panelDef[name]);
    }


    /**
     * 网络设备,纯色背板
     */
    make.Default.register('twaver.idc.network.panel', function(json) {

        make.Default.copyProperties({
            style: {
                'body.type': 'vector',
                'vector.shape': 'rectangle',
                'vector.fill': true,
            },
            client: {
                category: 'networkDevice-panel',
                host: true,
                resizeable: true,
                editable: true,
            }
        }, json);
        return make.Default.createFollower(json);
    }, {
        name: '设备',
        modelDefaultParameters: {
            width: {
                name: "宽度",
                value: make.Default.getEquipmentWidth() * 10, //换算成mm
                type: make.Default.PARAMETER_TYPE_INT,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            height: {
                name: "高度",
                value: make.Default.getEquipmentHeight(1) * 10, //换算成mm
                type: make.Default.PARAMETER_TYPE_INT,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            "vector.fill.color": {
                name: "背景色",
                value: '#444444',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE
            }
        },
        category: '面板背板',
        icon: getIdcIconPath('network_panel.png'),
        host: true,
    });

    /**
     * 板卡,纯色背板
     */
    make.Default.register('twaver.idc.card.panel', function(json) {

        make.Default.copyProperties({
            style: {
                'body.type': 'vector',
                'vector.shape': 'rectangle',
                'vector.fill': true,
            },
            client: {
                category: 'networkDevice-panel',
                host: true,
                resizeable: true,
                editable: true,
            }
        }, json);
        return make.Default.createFollower(json);
    }, {
        name: '设备',
        modelDefaultParameters: {
            width: {
                name: "宽度",
                value: 50,
                type: make.Default.PARAMETER_TYPE_INT,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            height: {
                name: "高度",
                value: 500,
                type: make.Default.PARAMETER_TYPE_INT,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            "vector.fill.color": {
                name: "背景色",
                value: '#444444',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_STYLE
            }
        },
        category: '面板背板',
        icon: getIdcIconPath('card_panel.png'),
        host: true,
    });


    /**
     * 服务器面板,1U到8U
     */
    var getServerPanelProps = function(size) {
        return {
            imageUrl: getIdcSVGPath(size + 'u'),
            width: make.Default.getEquipmentWidth() * 10,
            height: make.Default.getEquipmentHeight(size) * 10,
            client: {
                size: size,
                category: 'device-panel',
                host: true,
            }
        }
    }

    var getServerPanelParams = function(size) {
        return {
            name: size + 'U设备',
            category: '面板背板',
            icon: getIdcIconPath('' + size + 'u.png'),
            host: true,
        }
    }

    var registerServerPanel = function(size) {
        var id = 'twaver.idc.equipment' + size + '.panel';
        make.Default.register(id, function(json) {
            make.Default.copyProperties(getServerPanelProps(size, json.scale), json);
            json.client.id = id;
            return make.Default.createFollower(json);
        }, getServerPanelParams(size));
    }

    for (var size = 1; size <= 8; size++) {
        registerServerPanel(size);
    }

    var getServerPanelCompProps = function(name, json) {
        return {
            imageUrl: getIdcSVGPath(name),
            client: {
                category: 'device-panel-comp',
                host: false,
            }
        }
    }


    /**
     * 面板部件
     */
    var getServerPanelCompParams = function(args) {

        var modelDefaultParameters = {
            width: {
                name: "宽度",
                value: args.width,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            height: {
                name: "高度",
                value: args.height,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR
            },
            position: {
                name: "位置[x,y,z]",
                value: [0, 0, 0],
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Y轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            rotation: {
                name: "旋转[x,y,z]",
                value: [0, 0, 0],
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                hidden: true,
            },
            angle: {
                name: "Z轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            decoration: {
                name: "装饰部件",
                value: args.decoration,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
                hidden: true,
            },
        };
        if (!args.decoration) {
            modelDefaultParameters['bid'] = {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT,
                index: 0
            }
        }
        var result = {
            name: args.label,
            modelDefaultParameters: modelDefaultParameters,
            category: '面板部件',
            icon: getIdcIconPath(name + '.png'),
        }

        return result;
    }

    var registerServerPanelCompImage = function(name, args) {

        var id = 'twaver.idc.' + name + '.panel';
        make.Default.register(id, function(json) {

            make.Default.copyProperties({
                imageUrl: getIdcSVGPath(name),
                client: {
                    category: 'device-panel-comp',
                    host: false,
                }
            }, json);
            var follower = make.Default.createFollower(json);
            return follower;
        }, getServerPanelCompParams(args));
    }

    var compDef2 = {

        "DP": { label: "DP", width: 16.91, height: 6.30, decoration: true },
        "AV": { label: "AV", width: 30.04, height: 8.00, decoration: true },
        "DVI-24-1": { label: "DVI-24-1", width: 35.07, height: 7.80, decoration: true },
        "HDMI": { label: "HDMI", width: 13.91, height: 5.17, decoration: true },
        "DVI-24-5": { label: "DVI-24-5", width: 35.07, height: 7.80, decoration: true },
        "MicroHDMI": { label: "MicroHDMI", width: 5.91, height: 2.88, decoration: true },
        "VGA": { label: "VGA", width: 24.62, height: 7.94, decoration: true },
        "ball-black": { label: "ball-black", width: 5.00, height: 5.00 },
        "ball-green": { label: "ball-green", width: 5.00, height: 5.00 },
        "ball-yellow": { label: "ball-yellow", width: 5.00, height: 5.00 },
        "ball-red": { label: "ball-red", width: 5.00, height: 5.00 },
        "button-power": { label: "button-power", width: 17.92, height: 17.92 },
        "ground": { label: "ground", width: 12.00, height: 12.00 },
        "idc15": { label: "idc15", width: 39.10, height: 12.55 },
        "idc25": { label: "idc25", width: 53.10, height: 12.55 },
        "dell": { label: "dell", width: 17.92, height: 17.92 },
        "SCART": { label: "SCART", width: 23.71, height: 8.39 },
        "USB": { label: "USB", width: 12.00, height: 4.60 },
        "idc37": { label: "idc37", width: 69.50, height: 12.55 },
        "jack3": { label: "jack3", width: 26.00, height: 20.49 },
        "led": { label: "led", width: 12.35, height: 3.53 },
        "logo_HBC": { label: "logo_HBC", width: 18.00, height: 4.52 },
        "logo_cisco01": { label: "logo_cisco01", width: 13.00, height: 6.85 },
        "miniHDMI": { label: "miniHDMI", width: 10.41, height: 2.41 },
        "logo_cisco02": { label: "logo_cisco02", width: 21.00, height: 11.85 },
        "mini_USB": { label: "mini_USB", width: 6.82, height: 3.11 },
        "port38": { label: "port38", width: 33.60, height: 6.95 },
        "idc9": { label: "idc9", width: 30.80, height: 12.55 },
        "logo_HUAWEI": { label: "logo_HUAWEI", width: 25.00, height: 5.89 },
        "port_1394_4pin": { label: "port_1394_4pin", width: 6.00, height: 3.78 },
        "port_13w3": { label: "port_13w3", width: 54.59, height: 15.50 },
        "port_5din": { label: "port_5din", width: 15.00, height: 15.00 },
        "mirco_usb": { label: "mirco_usb", width: 7.18, height: 1.94 },
        "port_1394_6pin": { label: "port_1394_6pin", width: 11.22, height: 5.15 },
        "port_4din": { label: "port_4din", width: 15.00, height: 15.00 },
        "port_6din": { label: "port_6din", width: 15.00, height: 15.00 },
        "port_bnc": { label: "port_bnc", width: 18.19, height: 15.00 },
        "port_8din": { label: "port_8din", width: 15.00, height: 15.00 },
        "port_card34": { label: "port_card34", width: 35.36, height: 5.20 },
        "port_card54": { label: "port_card54", width: 54.00, height: 5.20 },
        "port_db9": { label: "port_db9", width: 18.00, height: 9.28 },
        "ps2-mouse": { label: "ps2-mouse", width: 10.00, height: 10.00 },
        "port_db25": { label: "port_db25", width: 38.00, height: 8.29 },
        "ps2-keyboard": { label: "ps2-keyboard", width: 10.00, height: 10.00 },
        "rj11": { label: "rj11", width: 9.26, height: 10.90 },
        "radiator": { label: "radiator", width: 31.65, height: 31.68 },
        "radiator-2": { label: "radiator-2", width: 78.00, height: 16.33 },
        "rj4502": { label: "rj4502", width: 13.06, height: 9.55 },
        "port_db36": { label: "port_db36", width: 50.00, height: 13.28 },
        "rj4503": { label: "rj4503", width: 13.78, height: 9.55 },
        "screw-black": { label: "screw-black", width: 9.00, height: 9.00 },
        "rj4504": { label: "rj4504", width: 18.00, height: 12.60 },
        "screw-gray": { label: "screw-gray", width: 12.00, height: 12.00 },
        "usb-printer": { label: "usb-printer", width: 8.12, height: 10.05 },
        "warn": { label: "warn", width: 14.00, height: 14.00 },
        "ypbpr": { label: "ypbpr", width: 28.66, height: 16.96 },
        "rj4501": { label: "rj4501", width: 13.77, height: 9.55 },
        "switch_01": { label: "switch_01", width: 11.39, height: 21.64 },
        "port_01": { label: "port_01", width: 14.2, height: 9.94 },
        "port_02": { label: "port_02", width: 7.7, height: 6.94 },
        "logo_hp": { label: "logo_hp", width: 8.88, height: 5.2 },
        "w01": { label: "w01", width: 189.15, height: 20.81 },
        // "w02":{label: "w02",width: 177.2, height: 30.27},
        "deco_01": { label: "deco_01", width: 14.73, height: 15.66 },
        "deco_01": { label: "deco_01", width: 14.73, height: 15.66 },
        "VGA_01": { label: "VGA_01", width: 29.27, height: 11.54 },
        "deco_02": { label: "deco_02", width: 17.98, height: 52.17 },
        "disk_01": { label: "disk_01", width: 17.92, height: 76.52 },
        "disk_03": { label: "disk_03", width: 126.43, height: 16.44 },
        "disk_02": { label: "disk_02", width: 126.42, height: 16.45 },
        "grid_01": { label: "grid_01", width: 129.55, height: 26.16 },
        "logo_ibm": { label: "logo_ibm", width: 24.83, height: 25.99 },
        "port_03": { label: "port_03", width: 5.07, height: 3.92 },
        "text_01": { label: "text_01", width: 6.90, height: 3.07 },
        "text_02": { label: "text_02", width: 34.65, height: 4.95 },
        "usb_01": { label: "usb_01", width: 12.55, height: 6.38 },
        "deco_03": { label: "deco_03", width: 14.55, height: 177.81 },
        "deco_05": { label: "deco_05", width: 3.09, height: 76.12 },
        "deco_04": { label: "deco_04", width: 179.63, height: 93.09 },
        "deco_06": { label: "deco_06", width: 14.55, height: 10.95 },
        "deco_07": { label: "deco_07", width: 67.41, height: 177.56 },
        "deco_08": { label: "deco_08", width: 191.80, height: 11.44 },
        "disk_04": { label: "disk_04", width: 133.71, height: 49.85 },
        "disk_05": { label: "disk_05", width: 14.44, height: 75.49 },
        "disk_06": { label: "disk_06", width: 127.87, height: 11.44 },
        "port_04": { label: "port_04", width: 60.80, height: 11.44 },
        "grid_02": { label: "grid_02", width: 212.96, height: 67.61 },
        "deco_09": { label: "deco_09", width: 359.13, height: 61.35 },
        "deco_10": { label: "deco_10", width: 22.15, height: 88.91 },
        "deco_11": { label: "deco_11", width: 52.33, height: 42.96 },
        "deco_12": { label: "deco_12", width: 155.36, height: 48.68 },
        "deco_13": { label: "deco_13", width: 169.03, height: 2.19 },
        "deco_15": { label: "deco_15", width: 18.66, height: 19.58 },
        "deco_14": { label: "deco_14", width: 64.68, height: 5.51 },
        "deco_16": { label: "deco_16", width: 18.66, height: 19.58 },
        "deco_17": { label: "deco_17", width: 27.27, height: 8.34 },
        "deco_18": { label: "deco_18", width: 9.32, height: 4.45 },
        "deco_19": { label: "deco_19", width: 21.42, height: 88.91 },
        "disk_07": { label: "disk_07", width: 80.34, height: 18.14 },
        "dvd": { label: "dvd", width: 133.53, height: 21.27 },
        "port_05": { label: "port_05", width: 13.99, height: 6.73 },
        "logo_intel": { label: "logo_intel", width: 15.84, height: 19.66 },
        "port_06": { label: "port_06", width: 13.37, height: 6.15 },
        "port_15din": { label: "port_15din", width: 8.96, height: 31.31 },
        "power": { label: "power", width: 7.28, height: 7.28 },
        "text_03": { label: "text_03", width: 16.56, height: 9.98 },
        "deco_20": { label: "deco_20", width: 20.00, height: 12.00 },
        "disk_08": { label: "disk_08", width: 98.01, height: 27.65 },
        "disk_09": { label: "disk_09", width: 98.01, height: 27.65 },
        "logo_hw": { label: "logo_hw", width: 14.09, height: 13.72 },
        "port_07": { label: "port_07", width: 5.01, height: 13.78 },
        "fan_01": { label: "fan_01", width: 89.49, height: 39.51 },
        "port_power": { label: "port_power", width: 15.11, height: 21.04 },
        "deco_21": { label: "deco_21", width: 16.29, height: 16.29 },
        "power_02": { label: "power_02", width: 8.29, height: 8.29 },
        "logo_dell": { label: "logo_dell", width: 17.01, height: 5.85 },
        "disk_10": { label: "disk_10", width: 96.46, height: 26.39 },
        "DVD-01": { label: "DVD-01", width: 119.54, height: 13.38 },
        "VGA_02": { label: "VGA_02", width: 8.81, height: 18.13 },
        "ball-blue": { label: "ball-blue", width: 3.41, height: 3.41 },
        "ball-green2": { label: "ball-green2", width: 4.82, height: 4.82 },
        "button_01": { label: "button_01", width: 18.47, height: 4.58 },
        "disk_12": { label: "disk_12", width: 21.72, height: 1.89 },
        "logo_dell_02": { label: "logo_dell_02", width: 14.84, height: 5.10 },
        "usb_02": { label: "usb_02", width: 12.50, height: 6.29 },
        "disk_11": { label: "disk_11", width: 72.23, height: 15.24 },
        "VGA_03": { label: "VGA_03", width: 8.33, height: 17.38 },
        "deco_22": { label: "deco_22", width: 408.23, height: 86.87 },
        "disk_13": { label: "disk_13", width: 14.14, height: 80.50 },
        "logo_dell_03": { label: "logo_dell_03", width: 26.58, height: 26.58 },
        "power_03": { label: "power_03", width: 29.19, height: 25.64 },
        "usb_03": { label: "usb_03", width: 13.29, height: 6.70 },
        "port_08": { label: "port_08", width: 14.00, height: 11.27 },
        "port_09": { label: "port_09", width: 19.67, height: 9.91 },
        "port_11": { label: "port_11", width: 13.15, height: 9.36 },
        "port_12": { label: "port_12", width: 13.14, height: 8.94 },
        "port_10": { label: "port_10", width: 18.76, height: 8.94 },
        "logo_hw_02": { label: "logo_hw_02", width: 10.66, height: 1.88 },
        "port_13": { label: "port_13", width: 6.70, height: 14.24 },
        "port_14": { label: "port_14", width: 7.54, height: 3.76 },
        "deco_23": { label: "deco_23", width: 9.64, height: 9.64 },
        "deco_24": { label: "deco_24", width: 7.17, height: 3.11 },
        "deco_25": { label: "deco_25", width: 6.80, height: 3.11 },
        "port_15": { label: "port_15", width: 28.82, height: 11.68 },
        "port_17": { label: "port_17", width: 13.60, height: 6.65 },
        "port_16": { label: "port_16", width: 28.82, height: 11.68 },
    }

    for (var name in compDef2) {
        registerServerPanelCompImage(name, compDef2[name]);
    }

    /*******************   deviceEditor end *********************/

    /*******************inbuilt  devicePanel *********************/

    var getDeviceIconPath2D = function(icon) {
        return make.Default.path + 'model/idc/icons/device/' + icon + '_front.png';
    }

    var getDeviceImagePath2D = function(icon) {
        return make.Default.path + 'model/idc/images/device/' + icon + '_front.png';
    }

    make.Default.register('twaver.idc.panel.loader', function(json) {

        var data = json.data || [];
        var scale = json.scale || 1;
        var x = json.x || 0;
        var y = json.y || 0;

        if (!data || data.length == 0) {
            return;
        }
        data.forEach(function(d) {
            d.scale = scale;
        });

        var elements = make.Default.load(data);
        if (make.Default.getOtherParameter(data[0].id, 'host')) {

            var nodes = elements;
            var parentNode = nodes[0];
            for (var i = 1; i < nodes.length; i++) {
                nodes[i].setMovable(false);
                nodes[i].setHost(parentNode);
                nodes[i].setParent(parentNode);
                parentNode.addChild(nodes[i]);
            }
            parentNode.setLocation(x, y);
            return parentNode;
        } else {
            var result = [];
            var nodeMap = {},
                nodeArray = [],
                linkArray = [];
            elements.forEach(function(element, index) {
                element.index = index;
                if (make.Default.getOtherParameter(make.Default.getId(element), 'link')) {
                    linkArray.push(element);
                } else {
                    nodeArray.push(element);
                    var bid = element.getClient('bid');
                    if (bid && bid.length > 0) {
                        nodeMap[bid] = element;
                    }
                }
            })
            nodeArray.forEach(function(n) {
                n.setMovable(false);
                result.push(n);
            })
            linkArray.forEach(function(link) {
                var linkData = data[link.index];
                link.setFromNode(nodeMap[linkData.from]);
                link.setToNode(nodeMap[linkData.to]);
                result.push(link);
            })
            return result;
        }
    });


    var registerDeviceFrontPanel = function(name, props, subType) {
        var height = props.height;


        //前视图
        make.Default.copy('twaver.idc.' + name + '.device.front', 'twaver.idc.equipment' + height + '.front', function(json) {
            json.image = getDeviceImagePath2D(name);
        }, { icon: getDeviceIconPath2D(name), subType: subType, height: props.height })

        //面板图数据
        make.Default.register('twaver.idc.' + name + '.panel.data', function(json) {

            return props.data;
        }, {
            subType: subType,
            icon: getDeviceIconPath2D(name),
            name: name,
            category: '设备面板',
            height: props.height
        })

        //面板图
        make.Default.copy('twaver.idc.' + name + '.panel.loader', 'twaver.idc.panel.loader', { data: props.data }, { subType: subType, icon: getDeviceIconPath2D(name), height: props.height })

    }

    var subTypes = ['server', 'network'];
    for (var i = 0; i < subTypes.length; i++) {
        var subType = subTypes[i];
        var subId = 'devicePanel_' + subType;
        var devicePanel = make.Default[subId];
        for (var name in devicePanel) {
            if (devicePanel[name].data) {
                registerDeviceFrontPanel(name, devicePanel[name], subType);
            }
        }
    }

    /*******************inbuilt  devicePanel *********************/

    /********************3d room models**************************/
    make.Default.copy('twaver.idc.wall5.top', 'twaver.idc.wall.top');

    make.Default.copy('twaver.idc.innerWall2.top', 'twaver.idc.innerWall.top');

    make.Default.copy('twaver.idc.glassWall1.top', 'twaver.idc.glassWall.top', {}, {
        icon: getIdcIconPath('glasswall1.png'),
    });

    make.Default.copy('twaver.idc.glassWall3.top', 'twaver.idc.glassWall2.top', {}, {
        icon: getIdcIconPath('glasswall3.png'),
    });

    make.Default.copy('twaver.idc.column1.top', 'twaver.idc.column.top');

    make.Default.copy('twaver.idc.column2.top', 'twaver.idc.column.top');

    make.Default.copy('twaver.idc.door2.top', 'twaver.idc.door1.top', {}, {
        icon: getIdcIconPath('door2.png'),
    });

    make.Default.copy('twaver.idc.headerRack1.top', 'twaver.idc.headerRack.top', {}, {
        icon: getIdcIconPath('headerRack1.png'),
    });

    make.Default.copy('twaver.idc.headerRack2.top', 'twaver.idc.headerRack.top', {}, {
        icon: getIdcIconPath('headerRack2.png'),
    });

    make.Default.copy('twaver.idc.headerRack3.top', 'twaver.idc.headerRack.top', {}, {
        icon: getIdcIconPath('headerRack3.png'),
    });

    make.Default.copy('twaver.idc.rack2.top', 'twaver.idc.rack.top', {}, {
        icon: getIdcIconPath('simpleRack2.png'),
        name: '42U机柜1',
        category: '2d机柜模型',
    });

    make.Default.copy('twaver.idc.simpleRack2.top', 'twaver.idc.simpleRack.top', {}, {
        name: '42U机柜',
        icon: getIdcIconPath('simpleRack2.png'),
    });

    for (var size = 42; size <= 47; size++) {
        make.Default.copy('twaver.idc.rack2-' + size + '.top', 'twaver.idc.rack2' + '.top', {}, {
            icon: getIdcIconPath('simpleRack2.png'),
            name: size + 'U机柜1',
            category: '2d机柜模型',
        });
        make.Default.copy('twaver.idc.rack2-' + size + '.front', 'twaver.idc.rack2' + '.front');
        make.Default.copy('twaver.idc.simpleRack2-' + size + '.top', 'twaver.idc.simpleRack2', { height: size });
    }

    make.Default.register('twaver.idc.bigScreen2.top', function(json) {
        var modelJson = {
            width: 290,
            depth: 2058,
            client: {
                type: 'model'
            }
        }
        make.Default.copyProperties(json, modelJson);
        var model = make.Default.createNode(modelJson);
        return model;
    }, {
        category: "2d部件模型",
        name: '大屏幕',
        type: "mono.Element",
        icon: getIdcIconPath('bigScreen2.png')
    });

    make.Default.register('twaver.idc.tank.top', getRegister(402, 411), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('tank.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.tank1.top', getRegister(402, 411), {
        name: '油罐1',
        description: "接待桌说明",
        icon: getIdcIconPath('tank1.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.generator2.top', getRegister(420, 220), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('generator2.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.generator3.top', getRegister(220, 140), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('generator3.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.generator4.top', getRegister(1005, 365), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('generator4.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.pdu.top', getRegister(60, 100), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('pdu.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.dianchizu.top', getRegister(110, 122), {
        name: '油罐',
        description: "接待桌说明",
        icon: getIdcIconPath('dianchizu.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.ups1.top', getRegister(110, 122), {
        name: 'ups1',
        description: "ups1说明",
        icon: getIdcIconPath('ups1.png'),
        category: '2d动环模型',
    });

    make.Default.register('twaver.idc.stair.top', getRegister(110, 122), {
        name: 'stair',
        description: "stair说明",
        icon: getIdcIconPath('stair.png'),
        category: '2d部件模型',
    });

    make.Default.register('twaver.idc.shelf.top', getRegister(60, 120), {
        name: 'stair',
        description: "stair说明",
        icon: getIdcIconPath('shelf.png'),
        category: '2d部件模型',
    });

    make.Default.register('twaver.idc.stair2.top', getRegister(105, 123), {
        name: 'stair',
        description: "stair说明",
        icon: getIdcIconPath('stair2.png'),
        category: '2d部件模型',
    });

    make.Default.register('twaver.idc.tvShelf.top', getRegister(106, 25.8), {
        name: 'stair',
        description: "stair说明",
        icon: getIdcIconPath('tvShelf.png'),
        category: '2d部件模型',
    });

    make.Default.copy('twaver.idc.line.top', 'twaver.idc.innerWall.top', {}, {
        name: '警示线',
        description: "警示线说明",
        icon: getIdcIconPath('line.png'),
        category: '2d部件模型',
    });

    make.Default.register('twaver.idc.airFloor.top', getRegister(60, 60), {
        name: '通风板',
        description: "通风板说明",
        icon: getIdcIconPath('airFloor.png'),
        category: '2d部件模型',
    });

    var rectModels = [
        { id: 'twaver.idc.ups2.top', width: 74.0, height: 90.0, name: 'UPS', icon: "ups2.png", description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转', category: '机柜模型' },
        { id: 'twaver.idc.ups3.top', width: 74.0, height: 90.0, name: 'UPS', icon: "ups3.png", description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转', category: '机柜模型' },
        { id: 'twaver.idc.ups4.top', width: 48.0, height: 90.0, name: 'UPS', icon: "ups4.png", description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转', category: '机柜模型' },
        { id: 'twaver.idc.ups5.top', width: 25.0, height: 90.0, name: 'UPS', icon: "ups5.png", description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转', category: '机柜模型' },
        { id: 'twaver.idc.ups6.top', width: 54.0, height: 90.0, name: 'UPS', icon: "ups6.png", description: '用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转', category: '机柜模型' },
        { id: 'twaver.idc.plant.top', width: 60.0, height: 57.1, name: '植物', icon: "plant.png", description: '植物描述', category: '动环模型' },
        { id: 'twaver.idc.airCondition8.top', width: 93.0, height: 100.0, name: '空调', icon: "airCondition8.png", description: '空调描述', category: '机柜模型' },
        { id: 'twaver.idc.airCondition6.top', width: 255.3, height: 90.0, name: '空调', icon: "airCondition6.png", description: '空调描述', category: '机柜模型' },
        { id: 'twaver.idc.airCondition7.top', width: 255.3, height: 90.0, name: '空调', icon: "airCondition7.png", description: '空调描述', category: '机柜模型' },
        { id: 'twaver.idc.pdc1.top', width: 60.3, height: 85.7, name: '配电柜', icon: "pdc1.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc2.top', width: 80.0, height: 86.4, name: '配电柜', icon: "pdc2.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc3.top', width: 80.0, height: 84.0, name: '配电柜', icon: "pdc3.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc4.top', width: 110.0, height: 86.5, name: '配电柜', icon: "pdc4.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc5.top', width: 80.0, height: 78.0, name: '配电柜', icon: "pdc5.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc6.top', width: 80.0, height: 90.6, name: '配电柜', icon: "pdc6.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc7.top', width: 80.0, height: 84.5, name: '配电柜', icon: "pdc7.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc8.top', width: 100.0, height: 85.4, name: '配电柜', icon: "pdc8.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc9.top', width: 140.0, height: 85.6, name: '配电柜', icon: "pdc9.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc10.top', width: 60.0, height: 85.2, name: '配电柜', icon: "pdc10.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc12.top', width: 80.0, height: 84.4, name: '配电柜', icon: "pdc12.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc11.top', width: 80.0, height: 84.4, name: '配电柜', icon: "pdc11.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.pdc13.top', width: 100.0, height: 86.1, name: '配电柜', icon: "changuanqi.png", description: '配电柜描述', category: '动环模型' },
        { id: 'twaver.idc.ups7.top', width: 60.0, height: 90.0, name: 'UPS', icon: "ups7.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.ups8.top', width: 80.0, height: 90.0, name: 'UPS', icon: "ups8.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.ups9.top', width: 165.0, height: 90.0, name: 'UPS', icon: "ups9.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.ups11.top', width: 48.0, height: 90.0, name: 'UPS', icon: "ups11.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.ups10.top', width: 165.2, height: 90.0, name: 'UPS', icon: "ups10.png", description: 'UPS描述', category: '动环模型' },
        //ups12添加进去后，chrome 浏览器的下拉框就会闪几下
        { id: 'twaver.idc.ups12.top', width: 48.0, height: 90.0, name: 'UPS', icon: "ups13.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.ups13.top', width: 180.0, height: 60.0, name: 'UPS', icon: "ups13.png", description: 'UPS描述', category: '动环模型' },
        { id: 'twaver.idc.zitouping.top', width: 80.0, height: 75.0, name: '自投屏', icon: "zhiliuping1.png", description: '自投屏描述', category: '动环模型' },
        { id: 'twaver.idc.zhiliuping1.top', width: 80.0, height: 75.0, name: '直流屏', icon: "zhiliuping1.png", description: '直流屏描述', category: '动环模型' },
        { id: 'twaver.idc.dianchigui.top', width: 80.0, height: 75.0, name: '电池柜', icon: "dianchigui.png", description: '电池柜描述', category: '动环模型' },
        { id: 'twaver.idc.dongliyuan.top', width: 180.0, height: 60.0, name: '动力源', icon: "dongliyuan.png", description: '动力源描述', category: '机柜模型' },
        { id: 'twaver.idc.fire2.top', width: 55.0, height: 56.1, name: '灭火器', icon: "fire2.png", description: '灭火器描述', category: '动环模型' },
        { id: 'twaver.idc.fire3.top', width: 55.0, height: 55.7, name: '灭火器', icon: "fire3.png", description: '灭火器描述', category: '动环模型' },
        { id: 'twaver.idc.ganshibianyaqi.top', width: 250.0, height: 151.2, name: '干式变压器', icon: "ganshibianyaqi.png", description: '干式变压器描述', category: '机柜模型' },
        { id: 'twaver.idc.generator5.top', width: 181.7, height: 34.9, name: '发电机5', icon: "generator.png", description: '发电机描述', category: '动环模型' },
        { id: 'twaver.idc.generator6.top', width: 66.6, height: 25.4, name: '发电机6', icon: "generator.png", description: '发电机描述', category: '动环模型' },
        { id: 'twaver.idc.jishuiqi1.top', width: 271.5, height: 409.0, name: '集水分水器', icon: "jishuiqi1.png", description: '集水分水器描述', category: '动环模型' },
        { id: 'twaver.idc.jishuiqi2.top', width: 268.6, height: 476.3, name: '集水分水器', icon: "jishuiqi2.png", description: '集水分水器描述', category: '动环模型' },
        { id: 'twaver.idc.lengshuita.top', width: 160.1, height: 414.5, name: '冷水塔', icon: "dongliyuan.png", description: '冷水塔描述', category: '环境模型' },
        { id: 'twaver.idc.luoxuanshi.top', width: 250.0, height: 500.0, name: '螺旋式水泵', icon: "luoxuanshi.png", description: '螺旋式水泵描述', category: '动环模型' },
        { id: 'twaver.idc.dianchizu6.top', width: 230.3, height: 64.0, name: '电池组', icon: "dianchizu6.png", description: '电池组箱描述', category: '动环模型' },
        { id: 'twaver.idc.bianpinlixin.top', width: 319.8, height: 601.5, name: '离心变频器', icon: "bianpinlixin.png", description: '离心变频器描述', category: '动环模型' },
        { id: 'twaver.idc.chiller2.top', width: 90.8, height: 187.0, name: '冷却水泵', icon: "chiller2.png", description: '冷却水泵描述', category: '动环模型' },
        { id: 'twaver.idc.dianchizu4.top', width: 371.4, height: 83.7, name: '电池组', icon: "dianchizu4.png", description: '电池组箱描述', category: '动环模型' },
        { id: 'twaver.idc.dianchizu2.top', width: 430.3, height: 64.0, name: '电池组', icon: "dianchizu2.png", description: '电池组箱描述', category: '动环模型' },
        { id: 'twaver.idc.dianchizu3.top', width: 460.8, height: 84.2, name: '电池组', icon: "dianchizu3.png", description: '电池组箱描述', category: '动环模型' },
        { id: 'twaver.idc.dianchizu5.top', width: 402.1, height: 80.0, name: '电池组', icon: "dianchizu5.png", description: '电池组箱描述', category: '动环模型' },
        { id: 'twaver.idc.camera2.top', width: 13, height: 32, name: '摄像头2', icon: "camera1.png", description: '摄像头2说明', category: '2d环境模型', color: '#99CCFF' },
        { id: 'twaver.idc.fireExtinguisherBox.top', width: 560, height: 100, name: '灭火器', icon: 'fireExtinguisherBox.png', description: '灭火器说明', category: '2d环境模型' },
        { id: 'twaver.idc.airCondition5.top', width: 50.0, height: 31.6, name: '空调', icon: 'airCondition5.png', description: '空调描述', category: '机柜模型' },
        { id: 'twaver.idc.jiankong.top', width: 85.0, height: 55.0, name: '监控设备', icon: 'jiankong.png', description: '监控设备描述', category: '动环模型' },
        { id: 'twaver.idc.heatExchanger.top', width: 36.9, height: 49.5, name: '换热器架子', icon: 'heatExchanger.png', description: '换热器描述', category: '机柜模型' },
        { id: 'twaver.idc.peidianxiang.top', width: 70.0, height: 41.5, name: '配电箱', icon: 'peidianxiang.png', description: '配电箱描述', category: '动环模型' },
        { id: 'twaver.idc.electricValve.top', width: 30.4, height: 49.0, name: '电动阀', icon: 'electricValve.png', description: '电动阀描述', category: '消防模型' },
        { id: 'twaver.idc.chuanguanqi2.top', width: 16.1, height: 3.2, name: '传感器2', icon: 'chuanguanqi2.png', description: '传感器2描述', category: '动环模型' },
        { id: 'twaver.idc.plant2.top', width: 86.5, height: 81.7, name: '植物', icon: 'plant2.png', description: '植物描述', category: '机柜模型' },
        { id: 'twaver.idc.waterPump.top', width: 30.4, height: 23.8, name: '冷却水泵', icon: 'waterPump.png', description: '冷却水泵描述', category: '消防模型' },
        { id: 'twaver.idc.coolingDevice.top', width: 350.0, height: 185.8, name: '制冷设备', icon: 'coolingDevice.png', description: '制冷设备描述', category: '消防模型' },
        { id: 'twaver.idc.chiller.top', width: 71.8, height: 299.1, name: '冷水机组', icon: 'chiller.png', description: '冷水机组描述', category: '消防模型' },
        { id: 'twaver.idc.airBox.top', width: 21.0, height: 2.0, name: '空气开关盒', icon: 'airBox.png', description: '空气开关盒', category: '其他模型' },
        { id: 'twaver.idc.rack4-47.top', width: 60.0, height: 80.0, name: '热管背板机柜', icon: 'rack.png', description: '机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭。 支持42U-47U高度，默认42U的高度。模型上还支持常见的长，宽，机柜贴图的设置', category: '机柜模型' },
    ]

    for (var i = 0; i < rectModels.length; i++) {
        var model = rectModels[i];
        make.Default.register(model.id, getRegister(model.width, model.height, model.color || '#FF9933'), {
            name: model.name,
            description: model.description,
            icon: getIdcIconPath("camera1.png"),
            category: model.category,
        });
    }

    /*
     * 内置机房库中包含下列模板
     * 机柜，玻璃机柜，简单机柜，列头柜，设备，地板，柱子，墙，内墙，玻璃墙，窗户，门，区域， 通道，简单通道，
     * 空调，UPS，电池组，电源，摄像头， 圆形摄像头，ACS
     * 另外还包含的obj的模型：发电机
     */

    var getIdcImagePath = function(image) {
        if (image.indexOf('/') >= 0) {
            return image;
        }
        return make.Default.path + 'model/idc/images/' + image;
    }

    var getIdcIconPath = function(icon) {
        if (icon.indexOf('/') >= 0) {
            return icon;
        }
        return make.Default.path + 'model/idc/icons/' + icon;
    }

    var getPRParameters = function() {
        return {
            'bid': {
                value: '',
                name: "业务ID",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            'position': {
                value: [0, 0, 0],
                name: "位置",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },
            'rotation': {
                value: [0, 0, 0],
                name: "旋转角度",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },

        }
    }

    var getBasicParameters = function(width, height, depth) {
        var result = {
            'width': {
                value: width,
                name: "宽",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                value: height,
                name: "高",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'depth': {
                value: depth,
                name: "深",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    var getBasicRackParmeters = function(height) {
        var height = height || '42U';
        return getBasicParameters(60, height, 80);
    }

    var getRackParameters = function(height) {
        var properties = getBasicRackParmeters(height);
        var rackPro = {
            'cutWidth': {
                name: "内宽",
                value: 45.5,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'frontImage': {
                name: "正面图片",
                value: '',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'backImage': {
                name: "背面图片",
                value: 'rack_back_door.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'topImage': {
                name: "顶部图片",
                value: 'rack_top.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'sideImage': {
                name: "侧面图片",
                value: 'rack_side.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'fontDoorImage': {
                name: "门正面图片",
                value: 'rack_front_door.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'backDoorImage': {
                name: "门反面图片",
                value: 'rack_door_back.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'insideTopImage': {
                name: "内部顶贴图",
                value: 'inside_top.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'insideSideImage': {
                name: "内部侧贴图",
                value: 'inside_side.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'insideBackImage': {
                name: "内部后贴图",
                value: 'inside_back.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'doorAngle': {
                name: "机柜开门角度",
                value: -150,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'evnmap': {
                name: '机柜环境贴图',
                value: 'envmap1',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,

            },
            'reflectRatio': {
                name: '环境反射率',
                value: 1,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            },
        }
        make.Default.copyProperties(rackPro, properties);
        return properties;
    }

    var getFrontPic = function(height, width) {
        var height = parseInt(height);
        var frontPic = getIdcImagePath('rack.png');
        if (width < 70) {
            frontPic = getIdcImagePath('rack' + height + 'u.png');
        } else {
            if (height == 42) {
                frontPic = getIdcImagePath('rack-120.png');
            } else if (height == 47) {
                frontPic = getIdcImagePath('rack47U-120.png');
            }
        }
        return frontPic;
    }


    //一般机柜
    make.Default.register('twaver.idc.rack', function(json, callback) {
        json = json || {};
        json.client = json.client || {};
        json.style = json.style || {};
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var cutWidth = json.cutWidth;
        var backImage = getIdcImagePath(json.backImage);
        var sideImage = getIdcImagePath(json.sideImage);
        var topImage = getIdcImagePath(json.topImage);
        var frontPic = json.frontImage || getIdcImagePath('rack' + parseInt(height) + 'u.png');
        var rackHeight = make.Default.getRackHeight(height);
        var doorAngle = json.doorAngle;
        var evnmap = make.Default.getEnvMap(json.evnmap);
        var reflectRatio = json.reflectRatio;
        var insideTopImage = getIdcImagePath(json.insideTopImage);
        var insideSideImage = getIdcImagePath(json.insideSideImage);
        var insideBackImage = getIdcImagePath(json.insideBackImage);

        var doorFrontPic = getIdcImagePath(json.fontDoorImage);
        var doorBackPic = getIdcImagePath(json.backDoorImage);
        var doorTransparent = json.doorTransparent || false;

        var offset = make.Default.RACK_OFFSET_Y * 2;

        var rack = new mono.Cube(width, rackHeight, depth);
        rack.s({
            'm.color': '#666666',
            'm.ambient': '#ffffff',
            'm.specular': '#e5e5e5',
            'm.type': 'phong',
            'm.specularStrength': 3,
            'left.m.texture.image': sideImage,
            'right.m.texture.image': sideImage,
            'top.m.texture.image': topImage,
            'bottom.m.texture.image': topImage,
            'back.m.texture.image': backImage,
            'front.m.texture.image': frontPic,
            'front.m.specularStrength': 2,
        });

        var cut = new mono.Cube(cutWidth, rackHeight - offset + 1, depth * 0.7);
        cut.s({
            'm.type': 'basic',
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'back.m.texture.image': insideBackImage,
            'left.m.texture.image': insideSideImage,
            'left.m.texture.flipX': true,
            'right.m.texture.image': insideSideImage,
            'top.m.texture.image': insideTopImage,
            'top.m.texture.flipY': true,
            'bottom.m.texture.image': insideTopImage,
        });
        cut.setPosition(0, 0, rack.getDepth() / 2 - cut.getDepth() / 2 + 2);

        var newRack;
        if (json.objectId) {
            newRack = new mono.ComboNode({
                'id': json.objectId,
                'combos': [rack, cut],
                'operators': ['-']
            });
        } else {
            newRack = new mono.ComboNode([rack, cut], ['-']);
        }
        for (var p in json.client) {
            newRack.setClient(p, json.client[p]);
        }
        var rackDoor = new mono.Cube(width, rackHeight, 2);
        rackDoor.s({
            'm.type': 'phong',
            'm.transparent': doorTransparent,
            'front.m.texture.image': doorFrontPic,
            'back.m.texture.image': doorBackPic,
            'm.envmap.image': evnmap,
            'm.reflectRatio': reflectRatio,
        });
        rackDoor.setParent(newRack);
        rackDoor.setClient('animation', 'rotation:right:{}:1000:0:bounceOut'.format(doorAngle || '-150'));
        rackDoor.setClient('type', 'rack_door');
        rackDoor.setClient('inbuilt', true);
        rackDoor.setPosition(0, 0, depth / 2 + 1);
        newRack.rackDoor = rackDoor;
        newRack.setPosition(x, 0, z);
        make.Default.setPositionY(newRack, y);
        newRack.setClient('type', 'rack');
        newRack.setClient('showShadow', true);
        newRack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setObject3dCSProps(newRack, json);
        if (callback) callback(newRack);
        return newRack;
    }, {
        name: "机柜",
        category: "机柜模型",
        description: "机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭。 支持42U-47U高度，默认42U的高度。模型上还支持常见的长，宽，机柜贴图的设置",
        icon: getIdcIconPath('rack.png'),
        type: 'rack',
        sdkCategory: 'rack',
        modelDefaultParameters: getRackParameters('42U'),
    });
    var registerRack3d = function(size) {
        make.Default.register('twaver.idc.rack' + size, function(json, callback) {
            var rack42Json = {
                id: 'twaver.idc.rack',
                height: size + 'U',
            }
            make.Default.copyProperties(json, rack42Json);
            return make.Default.load(rack42Json, callback);
        }, {
            childrenSize: size,
            name: size + "U机柜",
            description: size + "U机柜, 机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭",
            icon: getIdcIconPath('rack.png'),
            category: '机柜模型',
            type: 'mono.Element',
            sdkCategory: 'rack',
            modelDefaultParameters: getRackParameters(size + 'U'),
        });
    }

    for (var i = 42; i <= 47; i++) {
        registerRack3d(i);
    }



    /**
     * 贴图机柜
     */
    var generateAssetImage = function(text) {
        var width = 512,
            height = 256;

        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        var ctx = canvas.getContext('2d'); //获取该canvas的2D绘图环境对象
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        // ctx.font = 450 + 'px "Microsoft Yahei" bold';
        ctx.font = "150px Arial";
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width / 2, height / 2); //绘制文字的位置（text,x,y）,默认黑色，
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 15;
        ctx.strokeText(text, width / 2, height / 2); //绘制文字的位置（text,x,y）,没有填色,默认黑色

        return canvas;
    }

    make.Default.register('twaver.idc.rack200', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var data = json.data;
        var width = json.width || 70;
        var height = json.height || 200;
        var depth = json.depth || 80;
        var label = json.label;
        var severity = json.severity;
        var shadow = json.shadow;
        var rotation = json.rotation || [0, 0, 0];

        var pic = getImagePath('white.png');
        var offset = make.Default.RACK_OFFSET_Y * 2;
        var frontPic = getFrontPic(height, width);

        var rack = new mono.Cube(width, height, depth);
        var labelCanvas = generateAssetImage(label);
        var img = labelCanvas.toDataURL();


        rack.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.ambient': '#557E7A',
            'm.specularStrength': 50,
            'top.m.texture.image': img,
            'top.m.specularmap.image': img,
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.normalmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'front.m.normalmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'front.m.texture.image': frontPic,
            'front.m.texture.repeat': new mono.Vec2(1, 1),
            'front.m.specularmap.image': getImagePath('white.png'),
            'front.m.specularStrength': 200,
            'front.m.envmap.image': [pic, pic, pic, pic, pic, pic],
        });
        rack.setPosition(x, height / 4 - 50 - y, z);
        rack.shadow = shadow;

        var cut = new mono.Cube(55.5, height - offset, depth * 0.7);
        cut.s({
            'm.type': 'basic',
            'm.color': '#888888',
            'm.ambient': '#888888',
            'm.lightmap.image': make.Default.getImagePath('inside_lightmap.jpg'),
            'left.m.texture.image': getImagePath('rack_panel.png'),
            'right.m.texture.image': getImagePath('rack_panel.png'),
            'back.m.texture.image': getImagePath('rack_panel.png'),
        });
        cut.setPosition(0, 0, rack.getDepth() / 2 - cut.getDepth() / 2 + 2);

        var newRack;
        if (json.objectId) {
            newRack = new mono.ComboNode({ 'id': json.objectId, 'combos': [rack, cut], 'operators': ['-'] });
        } else {
            newRack = new mono.ComboNode([rack, cut], ['-']);
        }

        //create rack door
        var rackDoor = new mono.Cube(width, height, 2);
        rackDoor.s({
            'm.type': 'phong',
            'm.color': '#A5F1B5',
            'm.ambient': '#A4F4EC',
            'front.m.texture.image': getImagePath('rack_front_door.jpg'),
            'back.m.texture.image': getImagePath('rack_door_back.png'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
        });
        rackDoor.setParent(newRack);
        rack.door = rackDoor;
        rackDoor.setPosition(0, 0, depth / 2 + 1);
        rackDoor.setClient('type', 'rack_door');
        rackDoor.setClient('animation', 'rotation:right:-150:1000:0:bounceOut');
        rackDoor.setClient('inbuilt', true);

        newRack.p(x, 0, z);
        newRack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(newRack, y);
        newRack.setClient('label', label);

        newRack.setClient('type', 'rack');
        newRack.setClient('loaded', false);
        if (callback) callback(newRack);
        return newRack;
    });




    //机柜1，玻璃效果
    make.Default.register('twaver.idc.rack1', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rackHeight = make.Default.getRackHeight(height);
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var pic = getIdcImagePath('white.png');
        var offset = make.Default.RACK_OFFSET_Y * 2;
        var frontPic = getFrontPic(height, width);

        var rack = new mono.Cube(width, rackHeight, depth);
        rack.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.ambient': '#557E7A',
            'm.specularStrength': 50,
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.normalmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'front.m.normalmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'front.m.texture.image': frontPic,
            'front.m.texture.repeat': new mono.Vec2(1, 1),
            'front.m.specularmap.image': getIdcImagePath('white.png'),
            'front.m.specularStrength': 200,
            'front.m.envmap.image': [pic, pic, pic, pic, pic, pic],
        });
        var cut = new mono.Cube(45.5, rackHeight - offset, depth * 0.7);
        cut.s({
            'm.type': 'basic',
            'm.color': '#888888',
            'm.ambient': '#888888',
            'm.lightmap.image': make.Default.getImagePath('inside_lightmap.jpg'),
            'left.m.texture.image': getIdcImagePath('rack_panel.png'),
            'right.m.texture.image': getIdcImagePath('rack_panel.png'),
            'back.m.texture.image': getIdcImagePath('rack_panel.png'),
        });
        cut.setPosition(0, 0, rack.getDepth() / 2 - cut.getDepth() / 2 + 2);

        var newRack;
        if (json.objectId) {
            newRack = new mono.ComboNode({
                'id': json.objectId,
                'combos': [rack, cut],
                'operators': ['-']
            });
        } else {
            newRack = new mono.ComboNode([rack, cut], ['-']);
        }

        //create rack door
        var rackDoor = new mono.Cube(width, rackHeight, 2);
        rackDoor.s({
            'm.type': 'phong',
            'm.color': '#A5F1B5',
            'm.ambient': '#A4F4EC',
            'front.m.texture.image': getIdcImagePath('rack_front_door.jpg'),
            'back.m.texture.image': getIdcImagePath('rack_door_back.png'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
        });
        rackDoor.setParent(newRack);
        rackDoor.setPosition(0, 0, depth / 2 + 1);
        rackDoor.setClient('type', 'rack_door');
        rackDoor.setClient('animation', 'rotation:right:-150:1000:0:bounceOut');
        rackDoor.setClient('inbuilt', true);

        newRack.p(x, 0, z);
        newRack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(newRack, y);
        newRack.setClient('type', 'rack');
        make.Default.setObject3dCSProps(newRack, json);
        if (callback) callback(newRack);
        return newRack;
    }, {
        name: "机柜1",
        description: '机房最常见的模型。和"twaver.idc.rack"区别在于这种类型的机柜加了环境贴图，是另外一种风格的机柜样式',
        icon: getIdcIconPath('rack1.png'),
        category: '机柜模型',
        type: 'rack',
        sdkCategory: 'rack',
        modelDefaultParameters: getBasicRackParmeters('47U'),
    });

    var getSimpleRackParameters = function() {
        var result = getBasicRackParmeters();
        var rackPro = {
            'image': {
                name: "贴图",
                value: 'rack_wrap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        make.Default.copyProperties(rackPro, result);
        return result;
    }

    //简单机柜，用于和真实机柜之间的切换，便于提高性能
    make.Default.register('twaver.idc.simpleRack', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        height = make.Default.getRackHeight(height);
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var pic = getIdcImagePath(json.image);

        var rack;
        if (json.objectId) {
            rack = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            rack = new mono.Cube(width, height, depth);
        }
        rack.s({
            'm.type': 'phong',
            'm.color': '#666666',
            'm.ambient': '#ffffff',
            'm.specular': '#e5e5e5',
            'm.specularStrength': 2,
            'm.texture.image': pic,
            'm.texture.anisotropy': 16,
        });
        rack.setWrapMode('six-each');
        rack.p(x, 0, z);
        rack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(rack, y);
        rack.setClient('type', 'rack');
        rack.setClient('showShadow', true);
        make.Default.setObject3dCSProps(rack, json);
        if (callback) callback(rack);
        return rack;
    }, {
        name: "简单机柜",
        description: "机柜的简单实现，一个cube加一个贴图，外观和twaver.idc.rack一样，但没有门和内部结构，可用于不关注内部细节时显示",
        icon: getIdcIconPath('racks.png'),
        category: '机柜模型',
        type: 'rack',
        sdkCategory: 'rack',
        modelDefaultParameters: getSimpleRackParameters(),
    });

    var getFrontHeaderRackPic = function(height) {
        var frontPic = getIdcImagePath('head_rack.png');
        if (height == 220) {
            frontPic = getIdcImagePath('head_rack1.jpg');
        }
        return frontPic;
    }

    var getHeaderRackParmeters = function() {
        var result = getBasicParameters(60, 200, 80);
        result.color = {
            name: '颜色',
            value: 'white',
            type: make.Default.PARAMETER_TYPE_COLOR,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        result.frontImage = {
            name: '前贴图',
            value: '',
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        result.backImage = {
            name: '后贴图',
            value: 'head_rack_side.png',
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        result.topImage = {
            name: '顶图片',
            value: 'head_rack_side.png',
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        result.sideImage = {
            name: '边贴图',
            value: 'head_rack_side.png',
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };

        return result;
    }

    //列头柜
    make.Default.register('twaver.idc.headerRack', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var color = json.color;
        var sideImage = getIdcImagePath(json.sideImage);
        var topImage = getIdcImagePath(json.topImage) || sideImage;
        var backImage = getIdcImagePath(json.backImage) || sideImage;
        var frontImage = json.frontImage;
        if (!frontImage) {
            frontImage = getFrontHeaderRackPic(height);
        }

        var rack;
        if (json.objectId) {
            rack = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            rack = new mono.Cube(width, height, depth);
        }
        rack.s({
            'm.type': 'phong',
            'm.color': color,
            'm.ambient': color,
            'm.specular': '#FFFFFF',
            'm.specularStrength': 3,
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': sideImage,
            'top.m.texture.image': topImage,
            'back.m.texture.image': backImage,
            'front.m.texture.image': frontImage,
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        rack.p(x, 0, z);
        rack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(rack, y);
        rack.setClient('type', 'header_rack');
        rack.setClient('showShadow', true);
        make.Default.setObject3dCSProps(rack, json);
        if (callback) callback(rack);
        return rack;
    }, {
        name: "列头柜",
        description: "机房常见设备之一，列头柜支持修改长，宽，高，颜色参数。",
        icon: getIdcIconPath('headerRack.png'),
        category: '机柜模型',
        type: 'header_rack',
        sdkCategory: 'rack',
        modelDefaultParameters: getHeaderRackParmeters(),
    });

    //设备贴图map
    var equipmentPicMap = {
        1: 'equipment_front-1U.png',
        2: 'equipment_front-2U.png',
        3: 'equipment_front-3U.png',
        4: 'equipment_front-4U.png',
        5: 'equipment_front-5U.png',
        6: 'equipment_front-6U.png',
        7: 'equipment_front-7U.png',
        8: 'equipment_front-8U.png',
    }

    //设备参数
    var getEquipmentProParameters = function(height, image) {
        var pr = getPRParameters();
        var params = {
            'width': {
                value: 45,
                name: "宽",
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                value: height,
                name: '高(U)',
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false
            },
            'depth': {
                value: 50,
                name: "深",
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'frontImage': {
                value: image || equipmentPicMap[height],
                name: "正面贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },

        }
        make.Default.copyProperties(pr, params);
        return params;
    }

    var getEquipmentParameters = function(height, icon) {
        return {
            size: height,
            type: "server",
            category: "设备模型",
            name: height + "U设备",
            icon: getIdcIconPath(icon || 'server1.png'),
            description: height + "U的服务器设备。高度为U数，宽度默认是45cm。支持修改宽度，深度和贴图。",
            modelDefaultParameters: getEquipmentProParameters(height),
        }
    }

    make.Default.register('twaver.idc.equipment', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0];
        var y = position[1]
        var z = position[2];
        var width = json.width;
        var heightU = parseInt(json.height || 1);
        var depth = json.depth;
        var height = heightU * 4.445;
        var frontPic = equipmentPicMap;
        var cut = json.cut;
        var combos = [];
        var operators = [];
        var panelWidth = json.panelWidth || parseFloat(width) + 5;

        var serverBody = new mono.Cube(width, height - 1, depth);
        serverBody.s({
            'm.color': '#666',
            'm.ambient': '#666',
            'm.type': 'phong',
            'm.side': mono.DoubleSide,
            'm.texture.image': getIdcImagePath('rack_inside.png'),
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
        });
        combos.push(serverBody);
        var serverPanel = new mono.Cube(panelWidth, parseFloat(height), 1);
        var image = getIdcImagePath(json.frontImage || 'server.png');
        if (!cut) {
            image = getIdcImagePath(json.frontImage || frontPic[heightU]);
        }
        serverPanel.s({
            'm.type': 'phong',
            'm.color': '#333',
            'm.ambient': '#333',
            'm.texture.image': getIdcImagePath('rack_inside.png'),
            // 'front.m.transparent': true,
            'm.side': mono.DoubleSide,
            'front.m.texture.image': image,
            'front.m.texture.repeat': new mono.Vec2(1, 1),
            'front.m.color': '#fff',
            'front.m.ambient': '#fff',
        });
        serverPanel.p(0, 0, serverBody.getDepth() / 2 + serverPanel.getDepth() / 2);
        combos.push(serverPanel);
        operators.push('+');
        if (cut) {
            var cutPosition = json.cutPosition || [0, 0, 10];
            var cutCube = new mono.Cube(parseFloat(json.cutWidth), parseFloat(json.cutHeight), parseFloat(depth) - 10);
            cutCube.s({
                'm.color': '#666',
                'm.ambient': '#666',
                'm.type': 'phong',
                'm.texture.image': getIdcImagePath('rack_inside.png'),
            });
            cutCube.p(cutPosition[0], cutPosition[1], cutPosition[2]);
            combos.push(cutCube);
            operators.push('-');
        }

        var server;
        if (json.objectId) {
            server = new mono.ComboNode({
                'id': json.objectId,
                'combos': combos,
                'operators': operators
            });
        } else {
            server = new mono.ComboNode(combos, operators);
        }
        if (json.client) {
            for (var p in json.client) {
                server.setClient(p, json.client[p]);
            }
        }
        server.setClient('animation', 'move:front:1:1000:0:bounceOut');
        server.p(x, 0, z);
        make.Default.setPositionY(server, y);
        make.Default.setObject3dCSProps(server, json);
        if (callback) callback(server);
        return server;
    }, getEquipmentParameters(2, 'server2.png'));

    var registerEquipment = function(size) {
        make.Default.register('twaver.idc.equipment{}'.format(size), function(json, callback) {
            var newData = {
                id: 'twaver.idc.equipment',
                height: size
            }
            make.Default.copyProperties(json, newData);
            return make.Default.load(newData, callback);
        }, getEquipmentParameters(size, 'server{}.png'.format(size)));
    }

    for (var i = 1; i <= 8; i++) {
        registerEquipment(i);
    }

    make.Default.register('twaver.idc.equipment8-1', function(json, callback) {
        json.id = 'twaver.idc.equipment';
        json.height = json.height || 8;
        json.frontImage = getIdcImagePath('server.png');
        json.cut = true;
        json.panelWidth = 50;
        json.width = 46;
        json.cutWidth = 45;
        json.cutHeight = 33;
        return make.Default.load(json, callback);
    }, {
        type: "server",
        category: "设备模型",
        name: "8U机框",
        icon: getIdcIconPath('server8-1.png'),
        description: "U的服务器设备。这是一种挖空的机架，支持修改宽度和深度",
        modelDefaultParameters: getEquipmentProParameters(8),
    });

    make.Default.register('twaver.idc.HW_NE40E-X8.device', function(json, callback) {
        json.id = 'twaver.idc.equipment';
        json.height = 14;
        json.frontImage = getIdcImagePath('NE40E-X8.png');
        json.cut = true;
        json.width = 45;
        json.panelWidth = 45
        json.cutWidth = 44;
        json.cutHeight = 36;
        json.cutPosition = [0, -2.3, 10];
        return make.Default.load(json, callback);
    }, {
        type: "server",
        category: "设备模型",
        name: "14U机框",
        icon: getIdcIconPath('server14-1.png'),
        description: "U的服务器设备。这是一种挖空的机架，支持修改宽度和深度",
        modelDefaultParameters: getEquipmentProParameters(14),
    });

    //板卡参数
    var getCardParameters = function(w, h, d) {
        var result = getBasicParameters(w, h, d);
        result.color = {
            name: '颜色',
            value: 'white',
            type: make.Default.PARAMETER_TYPE_COLOR,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        result.image = {
            value: 'card2.png',
            name: "贴图",
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        };
        return result;
    }

    //板卡
    make.Default.register('twaver.idc.card', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var color = json.color || 'white';
        var pic = getIdcImagePath(json.image || 'card2.png');

        var parts = [{
            //card panel
            type: 'cube',
            width: width,
            height: height,
            depth: 1,
            position: [0, 0, 0],
            rotation: rotation,
            op: '+',
            style: {
                'm.color': color,
                'm.ambient': color,
                'm.texture.image': getIdcImagePath('gray.png'),
                'front.m.texture.image': pic,
                'back.m.texture.image': pic,
            }
        }, {
            //card body
            type: 'cube',
            width: 1,
            height: height * 0.95,
            depth: depth,
            position: [0, 0, -depth / 2],
            rotation: rotation,
            op: '+',
            style: {
                'm.color': color,
                'm.ambient': color,
                'm.texture.image': getIdcImagePath('gray.png'),
                'left.m.texture.image': getIdcImagePath('card_body.png'),
                'right.m.texture.image': getIdcImagePath('card_body.png'),
                'left.m.texture.flipX': true,
                'm.transparent': true,
                'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            }
        }];
        var card = make.Default.createCombo(parts, json.objectId);
        card.p(x, y, z);
        card.setClient('type', 'card');
        card.setClient('animation', 'move:front:1:1000:0:bounceOut');
        make.Default.setObject3dCSProps(card, json);
        callback && callback(card);
        return card;
    }, {
        category: "设备模型",
        type: "card",
        name: "板卡",
        icon: getIdcIconPath('card.png'),
        description: "板卡",
        modelDefaultParameters: getCardParameters(5, 50, 50)
    });


    var getFloorParameters = function() {
        return {
            image: {
                name: "贴图",
                value: 'floor.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            repeat: {
                name: "重复次数",
                value: 183,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            amount: {
                name: "地板厚度",
                value: 2,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            data: {
                name: "点位置",
                value: '',
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'position': {
                value: [0, 0, 0],
                name: "位置",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },
            'rotation': {
                value: [0, 0, 0],
                name: "旋转角度",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },

        }
    }

    //shapeNode Floor
    make.Default.register('twaver.idc.floor', function(json, callback) {
        var data = json.data;
        var image = getIdcImagePath(json.image);
        var repeat = json.repeat;
        var amount = json.amount;
        var position = json.position || [0, 0, 0];
        var object = {
            type: 'shapeNode',
            data: data,
            vertical: true,
            repeat: repeat,
            amount: amount,
            position: position,
            client: {
                type: 'floor',
            },
            style: {
                'm.type': 'basic',
                'm.texture.image': image,
            }
        }
        var floor = make.Default.createCombo([object]);
        make.Default.setObject3dCSProps(floor, json);
        if (callback) callback(floor);
        return floor;
    }, {
        category: "房间模型",
        type: "floor",
        name: "地板",
        icon: getIdcIconPath('floor.png'),
        description: "地板是和墙，内墙一起使用的。用来创建3d机房的房间轮廓",
        modelDefaultParameters: getFloorParameters(),
    });


    //柱子
    var getColumnParameters = function() {
        var result = getBasicParameters(60, 261, 60);
        result.color = {
            value: '#E8E8E8',
            name: "颜色",
            type: make.Default.PARAMETER_TYPE_COLOR,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
        result.topColor = {
            value: '#F7F7F7',
            name: "顶部颜色",
            type: make.Default.PARAMETER_TYPE_COLOR,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
        result.image = {
            value: '',
            name: "贴图",
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
        return result;
    }

    make.Default.register('twaver.idc.column', function(json, callback) {
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        // var position = json.position || [0, 0, 0];
        var color = json.color;
        // var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var image = getIdcImagePath(json.image);
        var column;
        // if(!this._columnInstance){
        column = new mono.Cube(width, height, depth);
        column.s({
            'm.type': 'basic',
            'm.color': color,
            'm.lightmap.image': make.Default.getImagePath('inside_lightmap1.png'),
            'top.m.lightmap.image': getIdcImagePath('white.png'),
            'top.m.color': json.topColor,
        });
        column.c({
            'type': 'column'
        });
        if (json.image) {
            column.setStyle('left.m.texture.image', image);
            column.setStyle('right.m.texture.image', image);
            column.setStyle('front.m.texture.image', image);
            column.setStyle('back.m.texture.image', image);
        }
        // column.p(position[0], 0, position[2]);
        // column.setRotation(rotation[0], rotation[1], rotation[2]);
        column.setClient('showShadow', true);
        column.setClient('shadowWeight', 1);
        // make.Default.setPositionY(column, position[1]);
        // make.Default.setObject3dCSProps(column, json);


        // }else{
        //     column = this._columnInstance.clone();
        // }
        make.Default.setObject3dCommonProps(column, json);

        if (callback) callback(column);
        return column;
    }, {
        category: "房间模型",
        type: "column",
        name: "柱子",
        icon: getIdcIconPath('column.png'),
        sdkCategory: 'floor-child',
        description: "柱子一般是加在房间外墙上，有些机房会在通道内也会有柱子对象",

        modelDefaultParameters: getColumnParameters(),
    });

    var getRotationYByDatas = function(position, datas, position2) {
        var rotationY = 0;
        var point = {
            x: position[0],
            y: position[2]
        };
        var newDatas = [];
        var position2 = position2 || [0, 0, 0];
        if (datas[0] instanceof Array) {
            for (var i = 0; i < datas.length; i++) {
                newDatas.push(datas[i]);
            }
            newDatas.push(datas[0]);
            for (var i = 0; i < newDatas.length - 1; i++) {
                var point1 = {
                    x: newDatas[i][0] + position2[0],
                    y: newDatas[i][1] + position2[2]
                };
                var point2 = {
                    x: newDatas[i + 1][0] + position2[0],
                    y: newDatas[i + 1][1] + position2[2]
                };
                if (isPointOnLine(point, point1, point2, 10)) {
                    rotationY = Math.atan((point1.y - point2.y) / (point1.x - point2.x));
                }
            }
        } else {
            for (var i = 0; i < datas.length; i++) {
                newDatas.push(datas[i]);
            }
            newDatas.push(datas[0]);
            newDatas.push(datas[1]);
            for (var i = 0; i < newDatas.length - 2; i = i + 2) {
                var point1 = {
                    x: newDatas[i] + position2[0],
                    y: newDatas[i + 1] + position2[2]
                };
                var point2 = {
                    x: newDatas[i + 2] + position2[0],
                    y: newDatas[i + 3] + position2[2]
                };
                if (isPointOnLine(point, point1, point2, 10)) {
                    rotationY = Math.atan((point1.y - point2.y) / (point1.x - point2.x));
                }
            }

        }

        return -rotationY * 180 / Math.PI;
    };

    var isPointOnLine = function(point, point1, point2, width) {
        if (width < 0) {
            width = 0;
        }
        var distance = getDistanceFromPointToLine(point, point1, point2);
        return distance <= width && (point.x >= Math.min(point1.x, point2.x) - width) && (point.x <= Math.max(point1.x, point2.x) + width) && (point.y >= Math.min(point1.y, point2.y) - width) && (point.y <= Math.max(point1.y, point2.y) + width);
    };

    var getDistanceFromPointToLine = function(point, point1, point2) {
        if (point1.x === point2.x) {
            return Math.abs(point.x - point1.x);
        }
        var lineK = (point2.y - point1.y) / (point2.x - point1.x);
        var lineC = (point2.x * point1.y - point1.x * point2.y) / (point2.x - point1.x);
        return Math.abs(lineK * point.x - point.y + lineC) / (Math.sqrt(lineK * lineK + 1));
    };

    /** json data is like
     [-2400, 660, 2400, 660, 2400, -660, -2400, -660, -2400, 660]
     **/

    /* var filterChildrenJsonForWall = function(){
    
     };*/

    var getWallParameters = function() {
        return {
            data: {
                name: "坐标点",
                value: [],
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            closed: {
                name: "是否合并",
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            showFloor: {
                name: "是否显示地板",
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            floorId: {
                name: "地板编号",
                value: '',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            floorImage: {
                name: "地板贴图",
                value: 'floor.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            wallDepth: {
                name: "墙厚度",
                value: 30,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            wallHeight: {
                name: "墙高度",
                value: 261,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            insideColor: {
                name: "内墙颜色",
                value: '#EFEFEF',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            outsideColor: {
                name: "外墙颜色",
                value: '#DCE8E9',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            asideColor: {
                name: "外墙颜色",
                value: '#B8CAD5',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            zsideColor: {
                name: "外墙颜色",
                value: '#B8CAD5',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            topColor: {
                name: "顶部颜色",
                value: '#F7F7F7',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            bottomColor: {
                name: "底部颜色",
                value: '#F7FEFF',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            insideImage: {
                name: "内墙贴图",
                value: '',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            outsideImage: {
                name: "外墙贴图",
                value: 'wall.png',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            insideMap: {
                name: "内墙Light贴图",
                value: 'inside_lightmap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            outsideMap: {
                name: "外墙Light贴图",
                value: 'outside_lightmap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            repeat: {
                name: "重复高度",
                value: '130',
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            children: {
                name: "孩子对象",
                value: [],
                hidden: true,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
    }

    make.Default.register('twaver.idc.wall', function(json, callback) {
        var objects = [];
        var client = json.client || {};
        var width = json.wallDepth;
        var position = json.position || [0, 0, 0];
        position[1] = parseFloat(position[1]) || 0;
        var insideImage = json.insideImage ? getIdcImagePath(json.insideImage) : null;
        var outsideImage = json.outsideImage ? getIdcImagePath(json.outsideImage) : null;
        var insideMap = json.insideMap ? make.Default.getImagePath(json.insideMap) : null;
        var outsideMap = json.outsideMap ? make.Default.getImagePath(json.outsideMap) : null;

        var wall = {
            type: 'path',
            op: '+',
            width: width,
            height: json.wallHeight,
            insideColor: json.insideColor,
            outsideColor: json.outsideColor,
            asideColor: json.asideColor,
            zsideColor: json.zsideColor,
            topColor: json.topColor,
            bottomColor: json.bottomColor,
            insideImage: insideImage,
            outsideImage: outsideImage,
            insideMap: insideMap,
            outsideMap: outsideMap,
            repeat: json.repeat,
            //position: position,
            data: json.data,
            closed: json.closed,
        };
        objects.push(wall);

        if (json.children) {
            for (var i = 0; i < json.children.length; i++) {
                json.children[i].inbuilt = true;
                json.children[i].depth = width + 6;
                var rotationY = getRotationYByDatas(json.children[i].position, json.data, json.position);
                json.children[i].rotation = [0, rotationY, 0];
                var p = json.children[i].position;
                json.children[i].position = [p[0] - position[0], p[1] - position[1], p[2] - position[2]]
                var children = make.Default.load(json.children[i]);
                objects = objects.concat(children);
            }
        }

        var comboChildren = [];
        var returnObjects = [];
        for (var i = 0; i < objects.length; i++) {
            var child = objects[i];
            if (child.op) {
                comboChildren.push(child);
            } else {
                returnObjects.push(child);
            }
        }

        var combo = make.Default.createCombo(comboChildren);
        if (json.objectId) {
            combo._id = json.objectId;
        }
        combo.setPosition(position[0], position[1], position[2])
        if (json.style) {
            combo.s(json.style);
        }

        // combo.setClient('width', width);
        combo.setClient('data', json.data);
        combo.setClient('type', 'wall');
        if (returnObjects.length > 0) {
            for (var i = 0; i < returnObjects.length; i++) {
                var returnObject = returnObjects[i];
                var object = make.Default.createCombo(returnObject);
                object.setParent && (object.setParent(combo));
            }
        }
        make.Default.setObject3dCSProps(combo, json);
        if (json.showFloor) {
            var position = json.position || [0, 0, 0];
            var floorImage = json.floorImage;
            var floorId = json.floorId || 'twaver.idc.floor'
            var floor = make.Default.load({
                id: floorId,
                data: json.data,
                image: floorImage
                    //position: [position[0], -1, position[2]],
            });
            floor.setParent(combo);
        }
        if (callback) callback(combo);
        return combo;
    }, {
        category: "房间模型",
        type: "wall",
        name: "外墙",
        icon: getIdcIconPath('wall.png'),
        description: "外墙是和内墙，地板一起使用的。用来创建3d机房的房间轮廓",
        sdkCategory: 'floor',
        modelDefaultParameters: getWallParameters(),
    });

    var getShapedWallParameters = function(data) {
        var result = getWallParameters();
        result.closed.value = true;
        result.showFloor.value = true;
        result.data.value = data;
        return result;
    }

    make.Default.register('twaver.idc.wall1', function(json, callback) {
        json.id = 'twaver.idc.wall';
        return make.Default.load(json, callback);
    }, {
        category: "房间模型",
        type: "wall",
        name: "外墙1",
        icon: getIdcIconPath('wall1.png'),
        description: "固定形状的房间，带地板",
        sdkCategory: 'floor',
        modelDefaultParameters: getShapedWallParameters([
            [-2000, -2000],
            [2000, -2000],
            [2000, 2000],
            [-2000, 2000]
        ]),
    });

    make.Default.register('twaver.idc.wall2', function(json, callback) {
        json.id = 'twaver.idc.wall';
        return make.Default.load(json, callback);
    }, {
        category: "房间模型",
        type: "wall",
        name: "外墙2",
        icon: getIdcIconPath('wall2.png'),
        description: "固定形状的房间，带地板",
        sdkCategory: 'floor',
        modelDefaultParameters: getShapedWallParameters([
            [-2500, -2500],
            [0, -2550],
            [0, 0],
            [2500, 0],
            [2500, 2500],
            [-2500, 2500]
        ]),
    });

    make.Default.register('twaver.idc.wall3', function(json, callback) {
        json.id = 'twaver.idc.wall';
        return make.Default.load(json, callback);
    }, {
        category: "房间模型",
        type: "wall",
        name: "外墙3",
        icon: getIdcIconPath('wall3.png'),
        description: "固定形状的房间，带地板",
        sdkCategory: 'floor',
        modelDefaultParameters: getShapedWallParameters([
            [-2500, -500],
            [-1300, -500],
            [-1300, -2500],
            [1300, -2500],
            [1300, -500],
            [2500, -500],
            [2500, 2500],
            [-2500, 2500]
        ]),
    });

    make.Default.register('twaver.idc.wall4', function(json, callback) {
        json.id = 'twaver.idc.wall';
        return make.Default.load(json, callback);
    }, {
        category: "房间模型",
        type: "wall",
        name: "外墙4",
        icon: getIdcIconPath('wall4.png'),
        description: "固定形状的房间，带地板",
        sdkCategory: 'floor',
        modelDefaultParameters: getShapedWallParameters([
            [-2500, -500],
            [-1500, -500],
            [-1000, -2500],
            [1000, -2500],
            [1500, -500],
            [2500, -500],
            [2500, 2500],
            [-2500, 2500]
        ]),
    });

    var getInnerWallParameters = function() {
        var result = getWallParameters();
        result.wallDepth.value = 20;
        result.outsideColor.value = '#EFEFEF';
        result.outsideImage.value = '';
        delete result.showFloor;
        delete result.closed;
        return result;
    }


    make.Default.register('twaver.idc.innerWall', function(json, callback) {
        var objects = [];
        var client = json.client || {};
        var width = json.wallDepth;
        var height = json.wallHeight;
        var insideMap = json.insideMap ? make.Default.getImagePath(json.insideMap) : null;
        var outsideMap = json.outsideMap ? make.Default.getImagePath(json.outsideMap) : null;
        var position = json.position || [0, 0, 0];

        var wall = {
            type: 'path',
            op: '+',
            width: width,
            height: height,
            insideColor: json.insideColor,
            outsideColor: json.outsideColor,
            asideColor: json.asideColor,
            zsideColor: json.zsideColor,
            topColor: json.topColor,
            bottomColor: json.bottomColor,
            insideImage: json.insideImage,
            outsideImage: json.outsideImage,
            insideMap: insideMap,
            outsideMap: outsideMap,
            repeat: json.repeat,
            // position: json.position,
            data: json.data,
            // style: {
            //     'm.polygonOffset': true,
            //     'm.polygonOffsetFactor': 6,
            //     'm.polygonOffsetUnits': 3,
            // },
        };
        objects.push(wall);

        if (json.children) {
            for (var i = 0; i < json.children.length; i++) {
                json.children[i].inbuilt = true;
                json.children[i].depth = width + 6;
                var rotationY = getRotationYByDatas(json.children[i].position, json.data, json.position);
                json.children[i].rotation = [0, rotationY, 0];
                var p = json.children[i].position;
                json.children[i].position = [p[0] - position[0], p[1] - position[1], p[2] - position[2]]
                var children = make.Default.load(json.children[i]);
                objects = objects.concat(children);
            }
        }

        var comboChildren = [];
        var returnObjects = [];
        for (var i = 0; i < objects.length; i++) {
            var child = objects[i];
            if (child.op) {
                comboChildren.push(child);
            } else {
                returnObjects.push(child);
            }
        }

        var combo = make.Default.createCombo(comboChildren);
        if (json.style) {
            combo.s(json.style);
        }
        combo.setPosition(position[0], position[1], position[2])
        combo.setClient('data', json.data);
        combo.setClient('type', 'inner_wall');

        if (returnObjects.length > 0) {
            for (var i = 0; i < returnObjects.length; i++) {
                var returnObject = returnObjects[i];
                var object = make.Default.createCombo(returnObject);
                object.setParent && (object.setParent(combo));
            }
        }
        make.Default.setObject3dCSProps(combo, json);
        if (callback) callback(combo);
        return combo;
    }, {
        category: "房间模型",
        type: "innerWall",
        name: "内墙",
        icon: getIdcIconPath('innerWall.png'),
        description: "内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getInnerWallParameters(),
    });

    var getGlassWallParameters = function() {
        return {
            data: {
                name: "坐标点",
                value: [],
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            wallDepth: {
                name: "墙面厚度",
                value: 20,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            wallHeight: {
                name: "墙高度",
                value: 261,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            insideColor: {
                name: "内墙颜色",
                value: '#62F3FF',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            outsideColor: {
                name: "外墙颜色",
                value: '#62F3FF',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            asideColor: {
                name: "外墙颜色",
                value: '#000000',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            zsideColor: {
                name: "外墙颜色",
                value: '#333333',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            topColor: {
                name: "顶部颜色",
                value: '#F7F7F7',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            bottomColor: {
                name: "底部颜色",
                value: '#D6E4EC',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            insideImage: {
                name: "内墙贴图",
                value: 'glass_wall.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            outsideImage: {
                name: "外墙贴图",
                value: 'glass_wall.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            repeat: {
                name: "重复高度",
                value: 260,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            children: {
                name: "孩子对象",
                value: '',
                hidden: true,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        return result;
    }

    make.Default.register('twaver.idc.glassWall', function(json, callback) {
        var objects = [];
        var client = json.client || {};
        var width = json.wallDepth;
        var insideImage = getIdcImagePath(json.insideImage);
        var outsideImage = getIdcImagePath(json.outsideImage);

        var wall = {
            type: 'path',
            op: '+',
            width: width,
            height: json.wallHeight,
            floorShadow: true,
            repeat: json.repeat,
            position: json.position,
            data: json.data,
            insideColor: json.insideColor,
            outsideColor: json.outsideColor,
            asideColor: json.asideColor,
            zsideColor: json.zsideColor,
            topColor: json.topColor,
            bottomColor: json.bottomColor,
            insideImage: insideImage,
            outsideImage: outsideImage,
            style: {
                'm.type': 'phong',
                // 'm.polygonOffset': true,
                // 'm.polygonOffsetFactor': 6,
                // 'm.polygonOffsetUnits': 2,
                'm.transparent': true,
                'm.specularStrength': 100,
                'm.envmap.image': make.Default.getEnvMap('envmap2'),
                'm.specularmap.image': getIdcImagePath('white.png'),
            },
        };
        objects.push(wall);

        if (json.children) {
            for (var i = 0; i < json.children.length; i++) {
                json.children[i].inbuilt = true;
                json.children[i].depth = width + 6;
                var rotationY = getRotationYByDatas(json.children[i].position, json.data, json.position);
                json.children[i].rotation = [0, rotationY, 0];
                var children = make.Default.load(json.children[i]);
                objects = objects.concat(children);
            }
        }

        var comboChildren = [];
        var returnObjects = [];
        for (var i = 0; i < objects.length; i++) {
            var child = objects[i];
            if (child.op) {
                comboChildren.push(child);
            } else {
                returnObjects.push(child);
            }
        }

        var combo = make.Default.createCombo(comboChildren);
        if (json.style) {
            combo.s(json.style);
        }
        combo.setClient('data', json.data);
        combo.setClient('type', 'glass_wall');

        if (returnObjects.length > 0) {
            for (var i = 0; i < returnObjects.length; i++) {
                var returnObject = returnObjects[i];
                var object = make.Default.createCombo(returnObject);
                object.setParent && (object.setParent(combo));
            }
        }
        make.Default.setObject3dCSProps(combo, json);
        if (callback) callback(combo);
        return combo;
    }, {
        category: "房间模型",
        type: "innerWall",
        name: "玻璃墙",
        icon: getIdcIconPath('glasswall.png'),
        description: "内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getGlassWallParameters(),
    });

    var getGlassWall2Parameters = function() {
        var result = getGlassWallParameters();
        var params = {
            glassImage: {
                name: "玻璃贴图",
                value: '',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            glassColor: {
                name: "玻璃颜色",
                value: '#01A9DB',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            glassOpacity: {
                name: "玻璃透明度",
                value: '0.5',
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        };
        make.Default.copyProperties(params, result);
        result.insideColor.value = "#B8CAD5";
        result.outsideColor.value = "#A5BDDD";
        result.asideColor.value = "#D6E4EC";
        result.zsideColor.value = "#D6E4EC";
        result.topColor.value = "#D6E4EC";
        result.bottomColor.value = "#D6E4EC";
        result.insideImage.value = "";
        result.outsideImage.value = "";
        return result;
    }

    make.Default.register('twaver.idc.glassWall2', function(json, callback) {
        var objects = [];
        var width = json.wallDepth;
        var height = json.wallHeight;
        var glassHeight = height * 0.6;
        var position = json.position || [0, 0, 0];
        var wall = {
            type: 'path',
            op: '+',
            width: width,
            height: height,
            insideColor: json.insideColor,
            outsideColor: json.outsideColor,
            asideColor: json.asideColor,
            zsideColor: json.zsideColor,
            topColor: json.topColor,
            bottomColor: json.bottomColor,
            repeat: json.repeat,
            // position: json.position,
            data: json.data,
            closed: json.closed,
        };
        objects.push(wall);
        var cut = {
            type: 'path',
            width: width + 2,
            height: glassHeight,
            op: '-',
            position: [0, (height - glassHeight) / 3 * 2, 0],
            insideColor: json.insideColor,
            outsideColor: json.outsideColor,
            asideColor: json.asideColor,
            zsideColor: json.zsideColor,
            topColor: json.topColor,
            bottomColor: json.bottomColor,
            data: json.data,
            closed: json.closed,
        };
        objects.push(cut);
        var glassWall = {
            type: 'path',
            width: 1,
            height: glassHeight,
            op: '+',
            position: [0, (height - glassHeight) / 3 * 2, 0],
            insideImage: json.glassImage,
            outsideImage: json.glassImage,
            topColor: json.topColor,
            bottomColor: 'json.bottomColor',
            style: {
                'm.type': 'phong',
                'm.transparent': true,
                'm.opacity': json.glassOpacity,
                'm.color': json.glassColor,
                'm.ambient': json.glassColor,
                'm.specularStrength': 100,
                'm.envmap.image': make.Default.getEnvMap('envmap1'),
                'm.specularmap.image': make.Default.getImagePath('metal_normalmap1.jpg'),
                // 'm.texture.repeat': new mono.Vec2(5, 5),
            },
            data: json.data,
            closed: json.closed,
        };
        objects.push(glassWall);

        if (json.children) {
            for (var i = 0; i < json.children.length; i++) {
                json.children[i].inbuilt = true;
                json.children[i].depth = width + 6;
                var rotationY = getRotationYByDatas(json.children[i].position, json.data, json.position);
                json.children[i].rotation = [0, rotationY, 0];
                var p = json.children[i].position;
                json.children[i].position = [p[0] - position[0], p[1] - position[1], p[2] - position[2]]
                var children = make.Default.load(json.children[i]);
                objects = objects.concat(children);
            }
        }

        var comboChildren = [];
        var returnObjects = [];
        for (var i = 0; i < objects.length; i++) {
            var child = objects[i];
            if (child.op) {
                comboChildren.push(child);
            } else {
                returnObjects.push(child);
            }
        }

        var combo = make.Default.createCombo(comboChildren);
        if (json.style) {
            combo.s(json.style);
        }
        combo.setPosition(position[0], position[1], position[2]);
        combo.setClient('data', json.data);
        combo.setClient('type', 'glass_wall');
        if (returnObjects.length > 0) {
            for (var i = 0; i < returnObjects.length; i++) {
                var returnObject = returnObjects[i];
                var object = make.Default.createCombo(returnObject);
                object.setParent && (object.setParent(combo));
            }
        }
        make.Default.setObject3dCSProps(combo, json);
        if (json.showFloor) {
            var position = json.position || [0, 0, 0];
            var floorImage = json.floorImage;
            var floorId = json.floorId || 'twaver.idc.floor'
            var floor = make.Default.load({
                id: floorId,
                data: json.data,
                image: floorImage,
                position: [position[0], -1, position[2]],
            });
            floor.setParent(combo);
        }

        if (callback) callback(combo);
        return combo;
    }, {
        category: "房间模型",
        type: "innerWall",
        name: "玻璃墙",
        icon: getIdcIconPath('glasswall2.png'),
        description: "内墙是和外墙，地板一起使用的。用来创建3d机房的房间轮廓",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getGlassWall2Parameters(),
    });

    var getWindowParameters = function() {
        var result = getBasicParameters(120, 150, 50);
        var params = {
            image: {
                name: '贴图',
                value: 'window.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            transparent: {
                name: '是否透明',
                value: true,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            glassDepth: {
                name: "玻璃厚度",
                value: 4,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.window', function(json) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var client = json.client;
        var glassDepth = json.glassDepth;
        var platformHeight = 5,
            platformDepth = 45,
            platformOffsetZ = 10;
        var image = getIdcImagePath(json.image);
        var transparent = json.transparent;

        var platform = json.platform;

        var cutoff = {
            // window cut off
            type: 'cube',
            width: width,
            height: height,
            depth: depth,
            rotation: rotation,
            position: [x, y + 30 + height / 2, z],
            op: '-',
            sideColor: '#EFEFEF',
            topColor: '#EFEFEF',
        };

        var glass = {
            //window glass
            type: 'cube',
            width: width - 0.5,
            height: height - 0.5,
            depth: glassDepth,
            rotation: rotation,
            position: [x, y + 30 + height / 2, z],
            op: '+',
            style: {
                'm.color': '#F0F0F0',
                'm.ambient': '#F0F0F0',
                'm.type': 'phong',
                'm.specularStrength': 0.1,
                'm.envmap.image': make.Default.getEnvMap('envmap1'),
                'm.texture.repeat': new mono.Vec2(1, 1),
                'm.texture.image': image,
            },
            client: {
                type: 'window'
            }
        };
        if (json.transparent != false) {
            glass.style['front.m.transparent'] = true;
            glass.style['back.m.transparent'] = true;
        }

        var parts = [cutoff, glass];

        if (platform) {
            parts.push({
                //window bottom platform.
                type: 'cube',
                width: width,
                height: platformHeight,
                depth: platformDepth,
                position: [x, y, z + platformOffsetZ],
                rotation: rotation,
                op: '+',
                sideColor: '#A5BDDD',
                topColor: '#D6E4EC',
            });
        }
        if (json.inbuilt) {
            return parts;
        }
        return make.Default.createCombo(parts);
    }, {
        category: "房间模型",
        type: "window",
        name: "窗户",
        icon: getIdcIconPath('window.png'),
        description: "窗户一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getWindowParameters(),
    });

    var getDoor1Parameters = function() {
        var result = getBasicParameters(100, 180, 26);
        var params = {
            'color': {
                name: '颜色',
                value: '#9E9E9E',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                name: '贴图',
                value: 'door-1.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            transparent: {
                name: '是否透明',
                value: true,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            frame: {
                name: '显示门框',
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.door1', function(json) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var frameEdge = 10,
            frameBottomEdge = 2;
        var image = getIdcImagePath(json.image);
        var transparent = true;
        var color = json.color;
        var client = json.client || {};
        if (json.transparent != null && json.transparent != undefined) {
            transparent = json.transparent;
        }
        var parts = [];
        if (json.frame) {
            parts.push({
                //door frame.
                type: 'cube',
                width: width,
                height: height,
                depth: depth,
                op: '+',
                position: [x, y + height / 2, z],
                rotation: rotation,
                sideColor: '#CDCDCD',
                topColor: '#CDCDCD',
                style: {
                    'm.type': 'phong',
                    'm.specularStrength': 50,
                }
            });

        }
        if (json.frame || json.inbuilt) {
            parts.push({
                //door cut off.
                type: 'cube',
                width: width - frameEdge,
                height: height - frameEdge / 2 - frameBottomEdge,
                depth: depth + 2,
                op: '-',
                position: [x, y + frameBottomEdge + height / 2, z],
                rotation: rotation,
                sideColor: '#FEFEFE',
                topColor: '#CCCCCC',
            });
        }
        parts.push({
            //door.
            type: 'cube',
            width: (width - frameEdge) - 2,
            height: height - frameEdge / 2 - frameBottomEdge - 2,
            depth: 2,
            position: [x, y + frameBottomEdge + 1 + height / 2, z],
            color: color,
            rotation: rotation,
            wrapMode: 'six-each',
            style: {
                'm.type': 'phong',
                'm.transparent': transparent,
                'm.texture.image': image,
                'front.m.texture.flipX': true,
                'm.specularStrength': 100,
                'm.envmap.image': transparent ? make.Default.getEnvMap('envmap2') : null,
                'm.specularmap.image': getIdcImagePath('white.png'),
            },
            client: {
                'animation': 'rotation:left:-80:1000:0:bounceOut',
                'type': 'door',
                'bid': client.bid,
            },
        });
        if (json.inbuilt) {
            return parts;
        }
        return make.Default.createCombo(parts);
    }, {
        category: "房间模型",
        type: "door",
        name: "单开门",
        icon: getIdcIconPath('door1.png'),
        description: "门一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getDoor1Parameters(),
    });

    var getDoorParameters = function() {
        var result = getBasicParameters(205, 180, 26);
        var params = {
            'color': {
                name: '颜色',
                value: '#9E9E9E',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'leftImage': {
                name: '左门贴图',
                value: 'door-1.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rightImage': {
                name: '右门贴图',
                value: 'door-2.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            /*'envmap': {
             name: '环境贴图',
             value: make.Default.getEnvMap('envmap2'),
             type: make.Default.PARAMETER_TYPE_IMAGE,
             propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
             },*/
            'frame': {
                name: '显示门框',
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            acs: {
                name: '显示门禁',
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            transparent: {
                name: '是否透明',
                value: true,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'doorAnimationType': {
                name: "门动画类型", //1 代表旋转门；2是左右平移
                value: 1,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.door', function(json) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var width = json.width || 205,
            height = json.height || 213,
            depth = json.depth || 26;
        var frameEdge = 10,
            frameBottomEdge = 5;
        var client = json.client || {};
        var color = json.color;
        var acs = json.acs;
        var frame = json.frame;
        var leftImage = getIdcImagePath(json.leftImage);
        var rightImage = getIdcImagePath(json.rightImage);
        var envmap = json.envmap;
        var transparent = json.transparent;
        var parts = [];
        var doorAnimationType = json.doorAnimationType || 1;
        if (transparent != false) transparent = true;
        if (doorAnimationType == 2) {
            var animateLeft = 'move:front:35:1000:0:bounceOut';
            var animateRight = 'move:back:35:1000:0:bounceOut';
        } else {
            var animateLeft = 'rotation:left:-90:1000:0:bounceOut';
            var animateRight = 'rotation:right:90:1000:0:bounceOut';
        }
        if (frame) {
            parts.push({
                //door frame.
                type: 'cube',
                width: width,
                height: height,
                depth: depth,
                op: '+',
                position: [x, y + height / 2, z],
                rotation: rotation,
                sideColor: '#CDCDCD',
                topColor: '#CDCDCD',
                style: {
                    'm.type': 'phong',
                    'm.specularStrength': 50,
                }
            });
        }
        if (frame || json.inbuilt) {
            parts.push({
                //door cut off.
                type: 'cube',
                width: width - frameEdge,
                height: height - frameEdge / 2 - frameBottomEdge,
                depth: depth + 2,
                op: '-',
                position: [x, y + frameBottomEdge + height / 2, z],
                rotation: rotation,
                sideColor: '#FEFEFE',
                topColor: '#CCCCCC',
            });
        }

        parts.push({
            //left door.
            type: 'cube',
            width: (width - frameEdge) / 2 - 2,
            height: height - frameEdge / 2 - frameBottomEdge - 5,
            depth: 2,
            position: [x - (width - frameEdge) / 4 + 1, y + frameBottomEdge + 1 + height / 2 + 3, z],
            color: color,
            rotation: rotation,
            rotationAnchor: 'left',
            wrapMode: 'six-each',
            style: {
                'm.type': 'phong',
                'm.transparent': transparent,
                // 'front.m.texture.image': leftImage,
                // 'back.m.texture.image': rightImage,
                'm.texture.image': leftImage,
                'm.specularStrength': 100,
                'm.envmap.image': envmap,
                'm.specularmap.image': getIdcImagePath('white.png'),
            },
            client: {
                'animation': animateLeft,
                'type': 'door',
                'bid': client.bid + '-left',
            },
        });
        parts.push({
            //right door.
            type: 'cube',
            width: (width - frameEdge) / 2 - 2,
            height: height - frameEdge / 2 - frameBottomEdge - 5,
            depth: 2,
            position: [x + (width - frameEdge) / 4 - 1, y + frameBottomEdge + 1 + height / 2 + 3, z],
            color: color,
            rotation: rotation,
            rotationAnchor: 'right',
            wrapMode: 'six-each',
            style: {
                'm.type': 'phong',
                'm.transparent': transparent,
                // 'front.m.texture.image': rightImage,
                // 'back.m.texture.image': leftImage,
                'm.texture.image': rightImage,
                'm.specularStrength': 100,
                'm.envmap.image': envmap,
                'm.specularmap.image': getIdcImagePath('white.png'),
            },
            client: {
                'animation': animateRight,
                'type': 'door',
                'bid': client.bid + '-right',
            },
        });
        if (acs) {
            parts.push({
                type: 'cube',
                width: 11.6,
                height: 11.6,
                depth: 2,
                rotation: rotation,
                rotationAnchor: 'left',
                position: [x + width / 2 + 8, (height - frameEdge / 2 - frameBottomEdge - 2) / 2, z + 10],
                style: {
                    'm.color': '#ffffff',
                    'm.ambient': '#ffffff',
                    'm.specular': '#FFFFFF',
                    'm.type': 'phong',
                    'm.texture.image': getIdcImagePath('rack_inside.png'),
                    'front.m.texture.image': getIdcImagePath('acs.jpg'),
                }
            });
        }
        if (json.inbuilt) {
            return parts;
        }
        var door = make.Default.createCombo(parts);
        make.Default.setObject3dCSProps(door, json);
        return door;
    }, {
        category: "房间模型",
        type: "door",
        name: "双开门",
        icon: getIdcIconPath('door.png'),
        description: "门一般不单独使用，是加在内墙或外墙模型上，作为这类模型的孩子对象",
        sdkCategory: 'floor-child',
        modelDefaultParameters: getDoorParameters(),
    });

    var getDoor3Parameters = function() {
        var result = getDoorParameters();
        result.leftImage.value = 'door_left3.jpg';
        result.rightImage.value = 'door_right3.jpg';
        result.transparent.value = false;
        result.color.value = '#FFFFFF';
        return result;
    }

    make.Default.copy('twaver.idc.door3', 'twaver.idc.door', null, {
        modelDefaultParameters: getDoor3Parameters()
    });

    var getAreaParameters = function() {
        return {
            height: {
                name: "高",
                value: 5,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            color: {
                name: '颜色',
                value: '#abc',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            label: {
                name: "标签",
                value: '',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            labelColor: {
                name: "标签颜色",
                value: 'red',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            labelFont: {
                name: "标签字体",
                value: 'bold 360px 微软雅黑,sans-serif',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            "labelPositionX": {
                name: "标签位置X",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            },
            "labelPositionZ": {
                name: "标签位置Z",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
            },
            data: {
                name: "坐标点",
                value: [],
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            opacity: {
                name: "透明度",
                value: 0.05,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
    }

    make.Default.register('twaver.idc.area', function(json, callback) {
        var height = json.height;
        var position = json.position || [0, 0, 0];
        var color = json.color;
        var client = json.client || {};
        var label = json.label;
        var labelPositionX = json.labelPositionX;
        var labelPositionZ = json.labelPositionZ;
        var labelColor = json.labelColor || 'red';
        var labelFont = json.labelFont;
        var opacity = json.opacity || 1;

        var path = make.Default.createShapeNodePath(json.data);
        var area = new mono.ShapeNode(path);
        area.s({
            'm.type': 'phong',
            'm.side': 'both',
            'm.color': color,
            'm.ambient': color,
        });
        if (opacity != 1) {
            area.s({
                'm.transparent': true,
                'm.opacity': opacity,
            });
        }
        area.setAmount(height);
        area.setVertical(true);
        area.setClient('type', 'area');
        area.renderDepth = -100;
        area.p(position[0], position[1], position[2]);

        if (label) {
            var size = make.Default.getPathBoundingBox(json.data).size;
            var bb = area.getBoundingBox();
            var min = bb.min,
                max = bb.max;


            var canvas = make.Default.generateTextCanvas(label, labelColor, labelFont, false);
            var drawRect = canvas.drawRect;
            var labelNode = new mono.Plane(drawRect.width, drawRect.height, 1, 1);
            labelNode.s({
                'm.transparent': false,
                'm.alphaTest': 0.5,
                'm.texture.image': canvas,
                'm.texture.anisotropy': 8,
                'm.texture.repeat': new mono.Vec2(drawRect.width / canvas.width, drawRect.height / canvas.height),
                'm.texture.offset': new mono.Vec2(0, 0),
            });
            labelNode.setRotationX(-Math.PI / 2);
            labelNode.setSelectable(false);
            if (labelPositionX === null || labelPositionX === undefined) {
                labelPositionX = (min.x + max.x) / 2;
            }
            if (labelPositionZ === null || labelPositionZ === undefined) {
                labelPositionZ = (min.z + max.z) / 2
            }
            labelNode.p(labelPositionX, (min.y + max.y) / 2 + height / 2 + 2, labelPositionZ);
            labelNode.setParent(area);
        }
        make.Default.setObject3dCSProps(area, json);
        callback && callback(area);
        return area;
    }, {
        category: "房间模型",
        type: "area",
        name: "区域",
        icon: getIdcIconPath('area.png'),
        description: "区域是加在某个房间上的。用来对房间进一步细分。可以指定区域的高度，文字，颜色等属性",
        sdkCategory: 'room',
        modelDefaultParameters: getAreaParameters(),
    });

    var getAisleParameters = function() {
        return {
            'rackWidth': {
                name: "机柜宽度",
                value: 60,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackHeight': {
                name: "机柜高度",
                value: 200,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackDepth': {
                name: "机柜深度",
                value: 80,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rackNumber': {
                name: "机柜数量",
                value: 20,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            aisleDepth: {
                name: "通道深度",
                value: 140,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'windowAnimationType': {
                name: "天窗类型", //1 表示不能打开天窗，天窗没有动画； 2 表示有动画
                value: 2,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'doorAnimationType': {
                name: "门动画类型", //1 代表旋转门；2是左右平移
                value: 2,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'isSingle': {
                name: "是否为单通道",
                value: false,
                type: make.Default.PARAMETER_TYPE_BOOLEAN,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            side: {
                name: "单通道类型", //可选值： left 或 right
                value: 'left',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
    }

    make.Default.register('twaver.idc.aisle1', function(json, callback) {
        json.isSingle = true;
        var side = json.side || 'left';
        json.side = side;
        json.id = 'twaver.idc.aisle';
        aisle = make.Default.load(json, callback);
        return aisle;
    }, {
        category: "机柜模型",
        type: "channel",
        name: "单通道，由通道门和天窗组成。可以设置通道内摆放的机柜数和通道的高度",
        icon: getIdcIconPath('aisle1.png'),
        description: "",
        sdkCategory: 'channel',
        modelDefaultParameters: getAisleParameters(),
    });

    /**
     * 定义通道，通道是由天窗，天窗上部和左右钢结构以及通道终端门组成，共6个材质
     * 通道需要传入的参数有摆放的机柜尺寸以及摆放多少机柜
     */
    make.Default.register('twaver.idc.aisle', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var axis = json.axis || 'x';
        var client = json.client;
        var rackNumber = parseFloat(json.rackNumber);
        var gap = parseFloat(json.rackWidth);
        var width = parseFloat(json.aisleWidth || 0);
        width = width || rackNumber / 2 * gap;
        var height = parseFloat(json.rackHeight);
        var depth = parseFloat(json.rackDepth);
        var aisleDepth = parseFloat(json.aisleDepth);
        var windowAnimationType = json.windowAnimationType;
        var doorAnimationType = json.doorAnimationType;
        var isSingle = json.isSingle;
        var side = json.side;

        var comboParts = [];
        var winParts = [];
        var parentWidth = depth * 2 + aisleDepth;
        if (isSingle) {
            width = json.aisleWidth ? width : rackNumber * gap;
            parentWidth = depth + aisleDepth - 5;
        }
        var parent = new mono.Cube(width, height, parentWidth);
        parent.s({
            'm.visible': false,
        });

        parent.setPosition(0, height / 2 + 1, 0);

        var real_channel = [];

        var positionZ = 0,
            offsetZ = 0;

        if (isSingle) {
            doorAnimationType = doorAnimationType || 1;
            if (side == 'left') {
                positionZ = aisleDepth / 2 - 2;
                offsetZ = depth / 2;
            } else {
                positionZ = -aisleDepth / 2 + 2;
                offsetZ = -depth / 2;
            }

            //add side door
            comboParts.push({
                type: 'cube',
                width: width + 5,
                height: height,
                depth: 5,
                op: '+',
                position: [0, 0, positionZ + offsetZ],
                style: {
                    'm.type': 'phong',
                    'm.side': 'both',
                    'm.color': '#62F3FF',
                    'm.ambient': '#62F3FF',
                    'm.envmap.image': make.Default.getEnvMap('envmap2'),
                    'm.transparent': true,
                    'm.texture.image': getIdcImagePath('skylight01-1.png'),
                    'm.polygonOffset': true,
                    'm.polygonOffsetFactor': 6,
                    'm.polygonOffsetUnits': 3,
                }
            });
        }

        //天窗前后侧边框
        for (var i = -1; i < 2; i = i + 2) {
            comboParts.push({
                type: 'cube',
                width: width + 5,
                height: 12,
                depth: 2,
                op: '+',
                position: [0, height / 2, (aisleDepth - 5) / 2 * i + offsetZ],
                style: {
                    'm.type': 'phong',
                    'm.color': '#666666',
                    'm.ambient': '#0c0c0c',
                    'm.specular': '#e5e5e5',
                    'm.specularStrength': 3,
                }
            });
        }
        //天窗左右侧边框
        for (var i = -1; i < 2; i = i + 2) {
            comboParts.push({
                type: 'cube',
                width: 10,
                height: 16,
                depth: parentWidth,
                op: '+',
                position: [(width / 2 + 5) * i, height / 2 - 3, 0],
                style: {
                    'm.type': 'phong',
                    'm.color': '#666666',
                    'm.ambient': '#0c0c0c',
                    'm.specular': '#e5e5e5',
                    'm.specularStrength': 3,
                }
            });
        }

        //门
        for (var i = -1; i < 2; i = i + 2) {
            var animationGroupName = 'door1';
            var animation = 'move:front:0.8';
            if (doorAnimationType == 1) {
                // rotation:left:-90:1000:0:Bounce.Out
                animation = 'rotation:front:-120:1000:0:bounceOut';
            }
            if (i == 1) {
                animationGroupName = 'door2';
                if (doorAnimationType == 1) {
                    animation = 'rotation:front:120:1000:0:bounceOut';
                }
            }
            winParts.push({
                type: 'cube',
                width: 5,
                height: height - 5,
                depth: aisleDepth / 2,
                position: [width / 2 * i, 0, aisleDepth / 4 + offsetZ],
                style: {
                    'm.type': 'phong',
                    'm.color': '#62F3FF',
                    'm.ambient': '#62F3FF',
                    'm.envmap.image': make.Default.getEnvMap('envmap2'),
                    'left.m.transparent': true,
                    'left.m.texture.image': getIdcImagePath('right-door.png'),
                    'right.m.transparent': true,
                    'right.m.texture.image': getIdcImagePath('left-door.png'),
                },
                client: {
                    'animation': animation,
                    'animation-group': animationGroupName,
                }

            });
        }

        //门
        for (var i = -1; i < 2; i = i + 2) {
            var animationGroupName = 'door1';
            var animation = 'move:back:0.8';
            if (doorAnimationType == 1) {
                animation = 'rotation:back:120:1000:0:bounceOut';
            }
            if (i == 1) {
                animationGroupName = 'door2';
                if (doorAnimationType == 1) {
                    animation = 'rotation:back:-120:1000:0:bounceOut';
                }
            }

            winParts.push({
                type: 'cube',
                width: 5,
                height: height - 5,
                depth: aisleDepth / 2,
                position: [width / 2 * i, 0, -aisleDepth / 4 + offsetZ],
                style: {
                    'm.type': 'phong',
                    'm.color': '#62F3FF',
                    'm.ambient': '#62F3FF',
                    'm.envmap.image': make.Default.getEnvMap('envmap2'),
                    'left.m.transparent': true,
                    'left.m.texture.image': getIdcImagePath('left-door.png'),
                    'right.m.transparent': true,
                    'right.m.texture.image': getIdcImagePath('right-door.png'),
                },
                client: {
                    'animation': animation,
                    'animation-group': animationGroupName,
                }
            });
        }

        //天窗
        var client = {};
        if (windowAnimationType == 2) {
            client = {
                'animation': 'rotation:center-z:90:1000:0:bounceOut',
                'animation-group': 'skylight',
            };
        }
        var skyCount = isSingle ? rackNumber : rackNumber / 2;
        for (var i = 0; i < skyCount; i++) {
            var skylight = {
                type: 'cube',
                width: gap,
                height: 2,
                depth: aisleDepth,
                position: [-gap * skyCount / 2 + gap / 2 + i * gap, (height / 2 + 6), offsetZ],
                style: {
                    'm.type': 'phong',
                    'm.color': '#00ECFF',
                    'm.ambient': '#00ECFF',
                    'm.envmap.image': make.Default.getEnvMap('envmap2'),
                    'm.transparent': true,
                    'm.texture.image': getIdcImagePath('skylight.png'),
                },
                client: client
            };
            winParts.push(skylight);
        }
        var combos = make.Default.createCombo(comboParts);
        real_channel.push(combos);
        // combos.setParent(parent);

        var objects = make.Default.createCombo(winParts);

        for (var i = 0; i < objects.length; i++) {
            // objects[i].setParent(parent);
            real_channel.push(objects[i]);
        }

        // parent.setClient('simple_channel', simple_channel);
        parent.setClient('real_channel', real_channel);
        for (var i = 0; i < real_channel.length; i++) {
            real_channel[i].setParent(parent);
        }
        parent.p(x, 0, z);
        make.Default.setPositionY(parent, y);
        parent.setDepth(parentWidth);
        parent.setClient('type', 'aisle');
        if (axis === 'z') {
            parent.setRotation(0, Math.PI / 2, 0);
        } else {
            parent.setRotation(rotation[0], rotation[1], rotation[2]);
        }
        parent.getSkyLights = function() {
            return objects;
        };
        make.Default.setObject3dCSProps(parent, json);
        callback && callback(parent);
        return parent;
    }, {
        category: "机柜模型",
        type: "channel",
        name: "通道",
        icon: getIdcIconPath('channel.png'),
        description: "通道是机房中用于摆放机柜的节能模块，分为单通道和双通道，由通道门和天窗组成。可以设置通道内摆放的机柜数和通道的高度",
        sdkCategory: 'channel',
        modelDefaultParameters: getAisleParameters(),
    });

    var getSkyWindowParameters = function() {
        var result = getBasicParameters(60, 2, 130);
        var params = {
            'image': {
                name: "贴图",
                value: 'skylight.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },

        };
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.skyWindow', function(json, callback) {
        var image = getIdcImagePath(json.image);
        var skyWindow = make.Default.createCube({
            width: json.width,
            height: json.height,
            depth: json.depth,
            image: image,
            style: {
                'm.type': 'phong',
                'm.color': '#aaa',
                'm.ambient': '#aaa',
                'm.envmap.image': make.Default.getEnvMap('envmap2'),
                'm.transparent': true,
            },
            client: {
                'animation': 'rotation:center-z:90:1000:0:bounceOut',
            }
        });
        make.Default.setObject3dCommonProps(skyWindow, json);
        if (callback) callback(skyWindow);
        return skyWindow;
    }, {
        category: "部件模型",
        type: 'skyWindow',
        name: "天窗",
        icon: getIdcImagePath('skyWindow.png'),
        description: "天窗，可用于通道顶部",
        modelDefaultParameters: getSkyWindowParameters()

    });

    var getDoor5Parameters = function() {
        var result = getBasicParameters(130, 190, 3);
        var params = {
            'color': {
                name: '颜色',
                value: '#9E9E9E',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.door5', function(json, callback) {
        var width = json.width;
        var rotationDirection = json.rotationDirection || 'front';

        var animationLeft = 'rotation:left:-120:1000:0:bounceOut';
        var animationRight = 'rotation:left:120:1000:0:bounceOut';
        if (rotationDirection == 'back') {
            animationLeft = 'rotation:left:120:1000:0:bounceOut';
            animationRight = 'rotation:left:-120:1000:0:bounceOut';

        }

        var leftDoor = make.Default.createCube({
            width: json.width / 2,
            height: json.height,
            depth: json.depth,
            wrapMode: 'six-each',
            style: {
                'm.type': 'phong',
                'm.color': '#999',
                'm.ambient': '#999',
                'm.envmap.image': make.Default.getEnvMap('envmap2'),
                'm.transparent': true,
                'm.texture.image': getIdcImagePath('door_wrap1.png'),
                'm.texture.anisotropy': 16,
            },
            client: {
                'animation': animationLeft,
            }
        });
        leftDoor.setPositionX(-width / 4);

        rightDoor = leftDoor.clonePrefab();
        rightDoor.setRotationY(Math.PI);
        rightDoor.setClient('animation', animationRight);
        rightDoor.setPositionX(width / 4);
        var parent = new mono.Cube(1, 1, 1);
        parent.setStyle('m.visible', false);
        leftDoor.setParent(parent);
        rightDoor.setParent(parent);
        make.Default.setObject3dCommonProps(parent, json);
        if (callback) callback(parent);
        return parent;
    }, {
        modelDefaultParameters: getDoor5Parameters()
    });


    var getParameters = function() {
        var result = getBasicParameters(60, 2, 130);
        var params = {
            'image': {
                name: "贴图",
                value: 'skylight.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },

        };
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.pedestal', function(json, callback) {
        var image = getIdcImagePath(json.image || 'board.png');
        var repeatW = json.repeatW || 5.5;
        var repeatD = json.repeatD || 2.5;
        var pedestal = make.Default.createCube({
            width: json.width,
            height: json.height,
            depth: json.depth,
            style: {
                'm.type': 'phong',
                'm.color': '#888',
                'm.ambient': '#888',
                'm.envmap.image': make.Default.getEnvMap('envmap2'),
                'm.reflectRatio': 0.2,
                'front.m.texture.image': image,
                'front.m.texture.repeat': new mono.Vec2(repeatW, 1),
                'back.m.texture.image': image,
                'back.m.texture.repeat': new mono.Vec2(repeatW, 1),
                'left.m.texture.image': image,
                'left.m.texture.repeat': new mono.Vec2(repeatD, 1),
                'right.m.texture.image': image,
                'right.m.texture.repeat': new mono.Vec2(repeatD, 1),
                'm.texture.anisotropy': 16,
                'top.m.color': '#4E4E4E',
                'top.m.ambient': '#4E4E4E',
            }
        });
        make.Default.setObject3dCommonProps(pedestal, json);
        if (callback) callback(pedestal);
        return pedestal;
    }, {
        category: "部件模型",
        type: 'pedestal',
        name: "底座",
        icon: getIdcImagePath('skyWindow.png'),
        description: "底座",
        modelDefaultParameters: getBasicParameters(840, 30, 360)

    });

    make.Default.register('twaver.idc.board', function(json, callback) {
        var image = getIdcImagePath(json.image || 'board_wrap.png');
        var color = json.color || '#999';
        var board = make.Default.createCube({
            width: json.width,
            height: json.height,
            depth: json.depth,
            image: image,
            color: color,
            wrapMode: 'six-each',
            style: {
                'm.type': 'phong',
                'm.color': color,
                'm.ambient': color,
                'm.envmap.image': make.Default.getEnvMap('envmap2'),
                'm.reflectRatio': 0.2,
                'm.texture.anisotropy': 16,
            }
        });
        make.Default.setObject3dCommonProps(board, json);
        if (callback) callback(board);
        return board;
    }, {
        category: "部件模型",
        type: 'board',
        name: "板子",
        icon: getIdcImagePath('skyWindow.png'),
        description: "板子",
        modelDefaultParameters: getBasicParameters(130, 90, 5)

    });





    make.Default.register('twaver.idc.simpleAisle', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var axis = json.axis || 'x';
        var rackNumber = parseFloat(json.rackNumber);
        var gap = parseFloat(json.rackWidth) + 1;
        var width = parseFloat(json.aisleWidth || 0);
        width = width || rackNumber / 2 * gap;
        var height = parseFloat(json.rackHeight);
        var depth = parseFloat(json.rackDepth);
        var aisleDepth = parseFloat(json.aisleDepth);
        var windowAnimationType = json.windowAnimationType;
        var doorAnimationType = json.doorAnimationType;
        var isSingle = json.isSingle;
        var side = json.side || 'left';

        //通道的深度是机柜的深度*2+通道门的深度
        var parentWidth = depth * 2 + aisleDepth;
        if (isSingle) {
            width = json.aisleWidth ? width : rackNumber * gap;
            parentWidth = depth + aisleDepth - 5;
        }
        var parent = new mono.Cube(width, height, parentWidth);
        parent.s({
            "m.visible": false
        });

        var parts = [];

        var positionZ = 0,
            offsetZ = 0;
        if (isSingle) {
            doorAnimationType = json.doorAnimationType || 1;
            if (side == 'left') {
                positionZ = aisleDepth / 2;
                offsetZ = depth / 2;
            } else {
                positionZ = -aisleDepth / 2;
                offsetZ = -depth / 2;
            }

            //add simple channel
            var part = new mono.Cube(width + 5, height, 5);
            part.p(0, 0, positionZ + offsetZ);
            part.s({
                'm.type': 'phong',
                'm.side': 'both',
                'm.color': '#62F3FF',
                'm.ambient': '#62F3FF',
                'm.envmap.image': make.Default.getEnvMap('envmap1'),
                'm.transparent': true,
                'm.texture.image': getIdcImagePath('skylight01.png'),
                'm.polygonOffset': true,
                'm.polygonOffsetFactor': 6,
                'm.polygonOffsetUnits': 3,

            });
            parts.push(part);
        }

        var simpleDoor = new mono.Cube(width, height, aisleDepth);
        simpleDoor.p(0, 0, offsetZ);
        simpleDoor.s({
            'm.type': 'phong',
            'm.transparent': true,
            'm.side': 'both',
            'front.m.opacity': 0,
            'back.m.opacity': 0,
            'bottom.m.opacity': 0,
            'left.m.color': '#62F3FF',
            'left.m.ambient': '#62F3FF',
            'left.m.texture.image': getIdcImagePath('door.png'),
            'left.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'right.m.color': '#62F3FF',
            'right.m.ambient': '#62F3FF',
            'right.m.texture.image': getIdcImagePath('door.png'),
            'right.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'top.m.color': '#62F3FF',
            'top.m.ambient': '#62F3FF',
            'top.m.texture.image': getIdcImagePath('skylight01.png'),
            'top.m.envmap.image': make.Default.getEnvMap('envmap1'),
        });
        parts.push(simpleDoor);

        for (var i = 0; i < parts.length; i++) {
            parts[i].setParent(parent);
        }
        parent.p(x, 0, z);
        make.Default.setPositionY(parent, y);
        parent.setDepth(parentWidth);
        parent.setClient('type', 'aisle');
        if (axis === 'z') {
            parent.setRotation(0, Math.PI / 2, 0);
        } else {
            parent.setRotation(rotation[0], rotation[1], rotation[2]);
        }
        callback && callback(parent);
        return parent;
    }, {
        category: "机柜模型",
        type: "channel",
        name: "通道",
        icon: getIdcIconPath('simpleAisle.png'),
        description: "同上。区别在于 简单通道只是没有细节，是用几个cube加贴图组成，通道窗户不能打开。主要用于和真实通道之间的切换。",
        sdkCategory: 'channel',
        modelDefaultParameters: getAisleParameters(),
    });

    var getAirConditionParameters = function() {
        var result = getBasicParameters(100, 200, 80);
        var params = {
            'sideImage': {
                name: "侧面贴图",
                value: 'air-condition-side.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'frontImage': {
                name: "正面贴图",
                value: 'air-condition-front.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'backImage': {
                name: "正面贴图",
                value: 'air-condition-side.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'topImage': {
                name: "顶部贴图",
                value: 'air-condition-top.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        };
        make.Default.copyProperties(params, result);
        return result;
    }


    make.Default.register('twaver.idc.airCondition', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var sideImage = getIdcImagePath(json.sideImage);
        var topImage = getIdcImagePath(json.topImage);
        var frontImage = getIdcImagePath(json.frontImage);

        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var source = new mono.Cube(width, height, depth);
        source.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': sideImage,
            'front.m.texture.image': frontImage,
            'top.m.texture.image': topImage,
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        source.setPosition(x, 0, z);
        source.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(source, y);
        make.Default.setObject3dCSProps(source, json);
        source.setClient('type', 'airCondition');
        source.setClient('showShadow', true);
        if (callback) callback(source);
        return source;
    }, {
        name: "空调",
        description: "精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数",
        icon: getIdcIconPath('airCondition.png'),
        category: '机柜模型',
        type: 'airCondition',
        modelDefaultParameters: getAirConditionParameters(),
    });

    make.Default.register('twaver.idc.airCondition1', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var color = json.color || "#FFFFFF";

        var airCondition;
        if (json.objectId) {
            airCondition = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            airCondition = new mono.Cube(width, height, depth);
        }

        airCondition.s({
            'm.type': 'phong',
            'm.color': color,
            'm.ambient': color,
            'm.texture.image': getIdcImagePath('aircondition1_wrap.jpg'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.5,
        });
        airCondition.setWrapMode('six-each');
        airCondition.p(x, 0, z);
        airCondition.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(airCondition, y);
        airCondition.setClient('type', 'airCondition');
        airCondition.setClient('showShadow', true);
        make.Default.setObject3dCSProps(airCondition, json);
        if (callback) callback(airCondition);
        return airCondition;
    }, {
        name: "空调",
        description: "精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数",
        icon: getIdcIconPath('airCondition1.png'),
        category: '机柜模型',
        type: 'airCondition',
        modelDefaultParameters: getBasicParameters(188, 174, 75),
    });

    make.Default.register('twaver.idc.airCondition2', function(json, callback) {
        json.id = 'twaver.idc.airCondition1';
        json.color = "#A4F4EC";
        return make.Default.load(json, callback);
    }, {
        name: "空调",
        description: "精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数",
        icon: getIdcIconPath('airCondition2.png'),
        category: '机柜模型',
        type: 'airCondition',
        modelDefaultParameters: getBasicParameters(188, 174, 75),
    });

    make.Default.register('twaver.idc.switchgear', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var switchgear;
        if (json.objectId) {
            switchgear = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            switchgear = new mono.Cube(width, height, depth);
        }
        switchgear.s({
            'm.type': 'phong',
            // 'm.color': '#ffffff',
            // 'm.ambient': '#d0d0d0',
            'm.texture.image': getIdcImagePath('switch_wrap.jpg'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        switchgear.setWrapMode('six-each');
        switchgear.p(x, 0, z);
        switchgear.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(switchgear, y);
        switchgear.setClient('type', 'switchgear');
        switchgear.setClient('showShadow', true);
        make.Default.setObject3dCSProps(switchgear, json);
        if (callback) callback(switchgear);
        return switchgear;
    }, {
        name: "开关柜",
        description: "机房常见设备之一，开关柜支持修改长，宽，高等基本参数。",
        icon: getIdcIconPath('switchgear.png'),
        category: '机柜模型',
        type: 'switchgear',
        modelDefaultParameters: getBasicParameters(60, 180, 37),
    });

    //Power Distribution Cabinet
    make.Default.register('twaver.idc.pdc', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var pdc;
        if (json.objectId) {
            pdc = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            pdc = new mono.Cube(width, height, depth);
        }
        pdc.s({
            'm.type': 'phong',
            // 'm.color': '#ffffff',
            // 'm.ambient': '#d0d0d0',
            // 'm.specular': '#e5e5e5',
            // 'm.specularStrength': 2,
            'm.texture.image': getIdcImagePath('pdc_wrap.jpg'),
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        pdc.setWrapMode('six-each');
        pdc.p(x, 0, z);
        pdc.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(pdc, y);
        pdc.setClient('type', 'pdc');
        pdc.setClient('showShadow', true);
        make.Default.setObject3dCSProps(pdc, json);
        if (callback) callback(pdc);
        return pdc;
    }, {
        name: "配电柜",
        description: "机房常见设备之一，配电柜支持修改长，宽，高等基本参数。",
        icon: getIdcIconPath('pdc.png'),
        category: '机柜模型',
        type: 'pdc',
        modelDefaultParameters: getBasicParameters(80, 180, 37),
    });

    var getPduParameters = function() {
        var result = getBasicParameters(60, 220, 100);
        var params = {
            'image': {
                name: "贴图",
                value: 'pdu_wrap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        };
        make.Default.copyProperties(params, result);
        return result;
    }

    //Power Distribution Unit
    make.Default.register('twaver.idc.pdu', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var image = getIdcImagePath(json.image);

        var pdu;
        if (json.objectId) {
            pdu = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            pdu = new mono.Cube(width, height, depth);
        }
        pdu.s({
            'm.type': 'phong',
            'm.specularStrength': 2,
            'm.texture.image': image,
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        pdu.setWrapMode('six-each');
        pdu.p(x, 0, z);
        pdu.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(pdu, y);
        pdu.setClient('type', 'pdu');
        pdu.setClient('showShadow', true);
        make.Default.setObject3dCSProps(pdu, json);
        if (callback) callback(pdu);
        return pdu;
    }, {
        name: "电源插座",
        description: "PDU（Power Distribution Unit，电源分配单元），也就是我们常说的机柜用电源分配插座，PDU是为机柜式安装的电气设备提供电力分配而设计的产品，拥有不同的功能、安装方式和不同插位组合的多种系列规格，能为不同的电源环境提供适合的机架式电源分配解决方案。PDU的应用，可使机柜中的电源分配更加整齐、可靠、安全、专业和美观，并使得机柜中电源的维护更加便利和可靠",
        icon: getIdcIconPath('pdu.png'),
        category: '机柜模型',
        type: 'pdu',
        modelDefaultParameters: getPduParameters(),
    });

    make.Default.register('twaver.idc.ups', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var source = new mono.Cube(width, height, depth);
        source.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': getIdcImagePath('ups-side.jpg'),
            'top.m.texture.image': getIdcImagePath('ups-top.jpg'),
            'front.m.texture.image': getIdcImagePath('ups-front.jpg'),
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        source.setPosition(x, 0, z);
        make.Default.setPositionY(source, y);
        source.setRotation(rotation[0], rotation[1], rotation[2]);
        source.setClient('showShadow', true);
        make.Default.setObject3dCSProps(source, json);
        if (callback) callback(source);
        return source;
    }, {
        name: "UPS",
        description: "用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转",
        icon: getIdcIconPath('ups.png'),
        category: '机柜模型',
        type: 'ups',
        modelDefaultParameters: getBasicParameters(80, 200, 60),
    });


    var getUpsParameters = function(width, height, depth) {
        var result = getBasicParameters(width, height, depth);
        var upsPro = {
            image: {
                name: "贴图",
                value: 'ups_wrap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        make.Default.copyProperties(upsPro, result);
        return result;
    }

    make.Default.register('twaver.idc.ups1', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var ups = new mono.Cube(width, height, depth);
        var image = getIdcImagePath(json.image);
        ups.s({
            'm.type': 'phong',
            'm.texture.image': image,
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
            'm.texture.anisotropy': 16,
        });
        ups.setWrapMode('six-each');
        ups.p(x, 0, z);
        ups.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(ups, y);
        ups.setClient('type', 'ups');
        ups.setClient('showShadow', true);
        make.Default.setObject3dCSProps(ups, json);
        if (callback) callback(ups);
        return ups;
    }, {
        name: "UPS",
        description: "用于给单台计算机、计算机网络系统或其它垫子设备如电磁阀、压力变送器等提供稳定、不间断的电力供应，保证机房在突发情况下也能正常运转",
        icon: getIdcIconPath('ups1.png'),
        category: '机柜模型',
        type: 'ups',
        modelDefaultParameters: getUpsParameters(80, 200, 60),
    });

    //74, 200,90
    make.Default.copy('twaver.idc.ups2', 'twaver.idc.ups1', function(json, callback) {
        json.image = getIdcImagePath('ups2_wrap.jpg');
    }, {
        modelDefaultParameters: getUpsParameters(74, 200, 90),
        icon: getIdcIconPath('ups2.png'),
    });


    make.Default.copy('twaver.idc.ups3', 'twaver.idc.ups1', function(json, callback) {
        json.image = getIdcImagePath('ups3_wrap.jpg');
    }, {
        modelDefaultParameters: getUpsParameters(74, 200, 90),
        icon: getIdcIconPath('ups3.png'),
    });

    make.Default.copy('twaver.idc.ups4', 'twaver.idc.ups1', function(json, callback) {
        json.image = getIdcImagePath('ups4_wrap.jpg');
    }, {
        modelDefaultParameters: getUpsParameters(48, 200, 90),
        icon: getIdcIconPath('ups4.png'),
    });

    make.Default.copy('twaver.idc.ups5', 'twaver.idc.ups1', function(json, callback) {
        json.image = getIdcImagePath('ups5_wrap.jpg');
    }, {
        modelDefaultParameters: getUpsParameters(25, 200, 90),
        icon: getIdcIconPath('ups5.png'),
    });

    make.Default.copy('twaver.idc.ups6', 'twaver.idc.ups1', function(json, callback) {
        json.image = getIdcImagePath('ups6_wrap.jpg');
    }, {
        modelDefaultParameters: getUpsParameters(54, 200, 90),
        icon: getIdcIconPath('ups6.png'),
    });

    make.Default.register('twaver.idc.battery', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var source = new mono.Cube(width, height, depth);
        source.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.transparent': true,
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': getIdcImagePath('battery-side.png'),
            'front.m.texture.image': getIdcImagePath('battery-front.png'),
            'back.m.texture.image': getIdcImagePath('battery-front.png'),
            'top.m.texture.image': getIdcImagePath('battery-top.jpg'),
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        source.setRotation(rotation[0], rotation[1], rotation[2]);
        source.setPosition(x, 0, z);
        source.setClient('showShadow', true);
        make.Default.setPositionY(source, y);
        make.Default.setObject3dCSProps(source, json);
        if (callback) callback(source);
        return source;
    }, {
        name: "蓄电池",
        description: "机房蓄电池用于给UPS或其他设备不间断供电，保证机房的稳定运行",
        icon: getIdcIconPath('battery.png'),
        category: '机柜模型',
        type: 'battery',
        modelDefaultParameters: getBasicParameters(150, 80, 60),
    });

    //发电机
    make.Default.register('twaver.idc.alternator', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;

        var source = new mono.Cube(width, height, depth);
        source.s({
            'm.type': 'phong',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': getIdcImagePath('alternator-side.jpg'),
            'front.m.texture.image': getIdcImagePath('alternator-front.jpg'),
            'back.m.texture.image': getIdcImagePath('alternator-front.jpg'),
            'top.m.texture.image': getIdcImagePath('alternator-top.jpg'),
            'bottom.m.texture.image': getIdcImagePath('alternator-top.jpg'),
        });
        source.setPosition(x, 0, z);
        make.Default.setPositionY(source, y);
        source.setClient('showShadow', true);
        make.Default.setObject3dCSProps(source, json);
        if (callback) callback(source);
        return source;
    }, {
        name: "发电机",
        description: "发电机也是保证机房正常工作的设备之一，在电停的时候发电机自动启动，电来时候，自动停止工作",
        icon: getIdcIconPath('alternator.png'),
        category: '机柜模型',
        type: 'alternator',
        modelDefaultParameters: getBasicParameters(200, 107, 85),
    });

    //摄像头
    make.Default.register('twaver.idc.camera', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];

        var body = new mono.Cylinder(8, 8, 30);
        body.s({
            'm.type': 'phong',
            'm.texture.image': getIdcImagePath('bbb.png'),
            'top.m.texture.image': getIdcImagePath('camera.png'),
            'bottom.m.texture.image': getIdcImagePath('eee.png'),
        });
        body.setRotationX(Math.PI / 3 * 2);

        var cover1 = new mono.Cylinder(12, 12, 40);
        var cover2 = new mono.Cylinder(10, 10, 40);
        var cover3 = new mono.Cube(20, 40, 20);
        var cover = new mono.ComboNode([cover1, cover3, cover2], ['+', '-']);
        cover.s({
            'm.type': 'phong',
            'm.color': '#333',
            'm.ambient': '#333',
        });
        cover.setRotationX(Math.PI / 3 * 2);

        var path = new mono.Path();
        path.moveTo(0, 0, 0);
        path.lineTo(0, -20, 0);
        path.lineTo(0, -22, -1);
        path.lineTo(0, -24, -24);
        path.lineTo(0, -24, -40);
        var pipe = new mono.PathNode(path, 10, 4, 10, 'round', 'round');
        pipe.s({
            'm.type': 'phong',
            'm.color': '#333',
            'm.ambient': '#333',
        });
        var parent = new mono.ComboNode([body, cover, pipe], ['+', '+']);
        parent.p(x, 0, z);
        make.Default.setPositionY(parent, y);
        parent.setRotation(rotation[0], rotation[1], rotation[2]);
        callback && callback(parent);
        return parent;
    }, {
        name: "摄像头",
        description: "机房摄像头，这种类型的摄像头只在某个固定的角度监控视频。支持修改旋转角度",
        icon: getIdcIconPath('camera.png'),
        category: '动环模型',
        type: 'camera',
        modelDefaultParameters: getPRParameters()
    });

    make.Default.register('twaver.idc.camera1', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];

        var sphere = new mono.Sphere(10);
        sphere.s({
            'm.type': 'phong',
            'm.color': '#ADADAD',
            'm.ambient': '#ADADAD',
            'm.envmap.image': make.Default.getEnvMap('envmap1'),
        });

        var path = new mono.Path();
        path.moveTo(0, 0);
        path.lineTo(0, 8);
        var top1 = new mono.PathNode(path, 20, 3, 20, 'plain', 'round');
        top1.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0',
        });
        top1.setPositionY(12);
        top1.setParent(sphere);

        path = new mono.Path();
        path.moveTo(0, 0);
        path.lineTo(0, 0.5);
        var body = new mono.PathNode(path, 20, 12, 20, 'plain', 'round');
        body.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0',
            'm.specularStrength': 20,
        });
        body.setScaleY(1.7);
        body.setParent(sphere);

        var path = new mono.Path();
        path.moveTo(0, 0, 0);
        path.lineTo(0, 14, 0);
        path.curveTo(0, 15, 0, -1, 15, 0);
        path.lineTo(-10, 15, 0);
        path.curveTo(-12, 15, 0, -15, 13, 0);
        // path.curveTo(-12,15,0,-27,0,0);
        var pipe = new mono.PathNode(path, 10, 2, 10, 'plain', 'plain');
        pipe.s({
            'm.type': 'phong',
            'm.color': '#DFDAD0',
            'm.ambient': '#DFDAD0',
        });
        pipe.setPosition(0, 12, 0);
        pipe.setParent(sphere);
        sphere.setPosition(x, y, z);
        sphere.setRotation(rotation[0], rotation[1], rotation[2]);
        callback && callback(sphere);
        return sphere;
    }, {
        name: "摄像头1",
        description: "360度无死角摄像头，这种类型的摄像头监控的范围更广一些",
        icon: getIdcIconPath('camera1.png'),
        category: '动环模型',
        type: 'camera',
        modelDefaultParameters: getPRParameters()
    });

    make.Default.register('twaver.idc.ACS', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;

        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var r = make.Default.createCombo({
            type: 'cube',
            width: width,
            height: height,
            depth: depth,
            position: [x, y, z],
            style: {
                'm.color': '#ffffff',
                'm.ambient': '#ffffff',
                'm.specular': '#FFFFFF',
                'm.type': 'phong',
                'm.texture.image': getIdcImagePath('rack_inside.png'),
                'front.m.texture.image': getIdcImagePath('acs.jpg'),
            }
        })
        callback && callback(r);
        return r;
    }, {
        name: "门禁",
        description: "门禁一般不单独创建，是和门一起使用的，放在门边上的一种控制系统",
        icon: getIdcIconPath('acs.png'),
        category: '房间模型',
        type: 'acs',
        modelDefaultParameters: getBasicParameters(11.6, 11.6, 2)
    });

    make.Default.register('twaver.idc.watercable', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var color = json.color || '#B45F04';
        var cableJson = {
            type: 'pathNode',
            data: json.data,
            radius: json.radius || 100,
            repeat: json.repeat || 25,
            pathImage: getIdcImagePath('flow.jpg'),
            style: {
                'm.type': 'phong',
                'm.specularStrength': 50,
                'm.color': color,
                'm.ambient': color,
            },
            client: {
                type: 'cable',
            }
        };

        var cable = make.Default.createCombo(cableJson);
        cable.setPosition(position[0], position[1], position[2]);
        // cable.setClient('showShadow', true);
        if (callback) callback(cable);
        return cable;
    }, {
        name: "水浸线",
        description: "水浸线描述",
        icon: getIdcIconPath('cable.png'),
        category: '动环模型',
        type: 'watercable',
        sdkCategory: 'watercable',
        modelDefaultParameters: {
            color: {
                name: '颜色',
                value: 'white',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            data: {
                name: '点位置',
                value: '',
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
    });

    /*make.Default.register('twaver.idc.waterleak', function (json, callback) {
     var position = json.position || [0, 0, 0];
     var color = json.color || 'orange';
     var cableJson = {
     type: 'pathNode',
     data: json.data,
     radius: 20,
     repeat: 200,
     pathImage: getIdcImagePath('flow.jpg'),
     style: {
     'm.color': color,
     'm.ambient': color,
     },
     client: {
     type: 'water_leak'
     }
     };
     var cable = make.Default.createCombo(cableJson);
     cable.setStartCap('plain');
     cable.setEndCap('plain');
     cable.setPosition(position[0], position[1], position[2]);
     if (callback) callback(cable);
     return cable;
     }, {
     name: "水浸线",
     description: "水浸线描述",
     icon: getIdcIconPath('cable.png'),
     category: '动环模型',
     type: 'watercable',
     modelDefaultParameters: {
     color: {
     name: '颜色',
     value: 'white',
     type: make.Default.PARAMETER_TYPE_COLOR,
     propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
     },
     data: {
     name: '点位置',
     value: '',
     type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
     propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
     }
     }
     });
     */


    make.Default.registerObj('twaver.idc.yangan', 'yangan', './model/idc/obj/yangan/', {
        name: "烟感",
        description: "烟感描述",
        icon: getIdcIconPath('yangan.png'),
        category: '动环模型',
        type: 'yangan',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.changuanqi', 'wendu', './model/idc/obj/wendu/', {
        name: "传感器",
        description: "传感器描述",
        icon: getIdcIconPath('changuanqi.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.shuangjian', 'shuangjian', './model/idc/obj/shuangjian/', {
        name: "双涧",
        description: "双涧描述",
        icon: getIdcIconPath('shuangjian.png'),
        category: '动环模型',
        type: 'shuangjian',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.shuijin', 'shuijin', './model/idc/obj/shuijin/', {
        name: "水浸",
        description: "水浸描述",
        icon: getIdcIconPath('shuijin.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.generator', 'fadianji1', './model/idc/obj/fadianji1/', {
        name: "发电机",
        description: "发电机描述",
        icon: getIdcIconPath('generator.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.generator2', 'fadianji2', './model/idc/obj/fadianji2/', {
        name: "发电机2",
        description: "发电机描述",
        icon: getIdcIconPath('generator2.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.generator3', 'fadianji3', './model/idc/obj/fadianji3/', {
        name: "发电机3",
        description: "发电机描述",
        icon: getIdcIconPath('generator3.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.generator4', 'fadianji4', './model/idc/obj/fadianji4/', {
        name: "发电机4",
        description: "发电机描述",
        icon: getIdcIconPath('generator4.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.generator5', 'fadianji', './model/idc/obj/fadianji5/', {
        name: "发电机5",
        description: "发电机描述",
        icon: getIdcIconPath('generator.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.generator6', 'fadianji2', './model/idc/obj/fadianji6/', {
        name: "发电机6",
        description: "发电机描述",
        icon: getIdcIconPath('generator.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.blower', 'fengshan', './model/idc/obj/fengshan/', {
        name: "风扇",
        description: "风扇描述",
        icon: getIdcIconPath('blower.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.tank', 'hongguan', './model/idc/obj/hongguan/', {
        name: "油罐",
        description: "油罐描述",
        icon: getIdcIconPath('tank.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.tank1', 'lvguan', './model/idc/obj/lvguan/', {
        name: "油罐1",
        description: "油罐1描述",
        icon: getIdcIconPath('tank1.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.chimney', 'yuanzhu', './model/idc/obj/yuanzhu/', {
        name: "烟囱",
        description: "烟囱描述",
        icon: getIdcIconPath('chimney.png'),
        category: '动环模型',
        type: 'generator',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.fire', 'miehuoqi', './model/idc/obj/miehuoqi/', {
        name: "灭火器",
        description: "灭火器描述",
        icon: getIdcIconPath('fire.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    }, true, 1);

    make.Default.registerObj('twaver.idc.fire2', 'miehuoqi170', './model/idc/obj/miehuoqi2/', {
        name: "灭火器",
        description: "灭火器描述",
        icon: getIdcIconPath('fire2.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    }, true, 1);

    make.Default.registerObj('twaver.idc.fire3', 'miehuoqi200', './model/idc/obj/miehuoqi3/', {
        name: "灭火器",
        description: "灭火器描述",
        icon: getIdcIconPath('fire3.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    }, true, 1);


    make.Default.registerObj('twaver.idc.stair', 'louti', './model/idc/obj/louti/', {
        name: "楼梯",
        description: "楼梯描述",
        icon: getIdcIconPath('stair.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    }, true, 1);

    make.Default.registerObj('twaver.idc.fireExtinguisherBox', 'miehuosystem', './model/idc/obj/miehuosystem/', {
        name: "灭火器组",
        description: "灭火器组描述",
        icon: getIdcIconPath('fireBox.png'),
        category: '动环模型',
        type: 'fireExtinguisher',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu', 'dianchizu', './model/idc/obj/dianchizu/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.worker', 'worker', './model/idc/obj/worker/', {
        name: "工人",
        description: "工人描述",
        icon: getIdcIconPath('worker.png'),
        category: '动环模型',
        type: 'worker',
        modelDefaultParameters: {}
    }, false);
    make.Default.registerObj('twaver.idc.ren', 'ren', './model/idc/obj/ren/', {
        name: "人",
        description: "人描述",
        icon: getIdcIconPath('ren.png'),
        category: '动环模型',
        type: 'ren',
        modelDefaultParameters: {}
    }, false);

    make.Default.register('twaver.idc.plant', function(json, callback) {
        var scale = json.scale || [2, 2, 2];
        var scaleX = scale[0],
            scaleY = scale[1],
            scaleZ = scale[2];
        var pos = json.position || [0, 0, 0];
        var x = pos[0],
            y = pos[1],
            z = pos[2];

        var plant;
        if (!this._plantInstance) {
            var w = json.width,
                h = json.height,
                pic = getIdcImagePath(json.picture);
            var objects = [];

            var cylinderVase = new mono.Cylinder(w * 0.5, w * 0.4, h * 2, 20, 1, false, false);
            cylinderVase.s({
                'm.type': 'phong',
                'm.color': '#ADADAD',
                'm.ambient': '#ADADAD',
                'm.texture.repeat': new mono.Vec2(10, 4),
                'm.specularmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
                'm.normalmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
            });
            var cylinderHollow = cylinderVase.clone();
            cylinderHollow.setScale(0.9, 1, 0.9);
            var cylinderMud = cylinderHollow.clone();
            cylinderMud.setScale(0.9, 0.9, 0.9);
            cylinderMud.s({
                'm.type': 'phong',
                'm.color': '#163511',
                'm.ambient': '#163511',
                'm.texture.repeat': new mono.Vec2(10, 4)
            });
            var vase = new mono.ComboNode([cylinderVase, cylinderHollow, cylinderMud], ['-', '+']);
            objects.push(vase);

            var count = 5;
            for (var i = 0; i < count; i++) {
                var plant = new mono.Cube(w * 2, h + 20, 0.01);

                plant.s({
                    'm.transparent': true,
                    'front.m.visible': true,
                    'front.m.texture.image': pic,
                    'back.m.visible': true,
                    'back.m.texture.image': pic,
                });
                plant.setSelectable(false);
                plant.setEditable(false);
                plant.setParent(vase);
                plant.setPositionY(cylinderVase.getHeight() / 2 + plant.getHeight() / 2 - 20);
                plant.setRotationY(Math.PI * i / count);
                objects.push(plant);
            }

            this._plantInstance = new mono.ComboNode(objects);
            this._plantInstance.setClient('plant.original.y', cylinderVase.getHeight() / 2 + cylinderVase.getHeight() / 4 * Math.min(scaleX, scaleZ));
            this._plantInstance.setClient('showShadow', true);
            this._plantInstance.setClient('shadowType', 1);
            this._plantInstance.setClient('shadowRadius', w * 0.4);
            plant = this._plantInstance;
        } else {
            plant = this._plantInstance.clone();
        }

        plant.setPosition(x, 0, z);
        make.Default.setPositionY(plant, y);
        plant.setScale(scaleX, scaleY, scaleZ);
        make.Default.setObject3dCSProps(plant, json);
        if (callback) callback(plant);
        return plant;

    }, {
        name: "植物",
        description: "植物描述",
        icon: getIdcIconPath('plant.png'),
        category: '动环模型',
        type: 'plant',
        modelDefaultParameters: {
            'width': {
                name: "宽",
                value: 30,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                name: "高",
                value: 30,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'picture': {
                name: "贴图",
                value: 'plant.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });


    /*******************inbuilt  devicePanel *********************/
    var getDeviceIconPath3D = function(icon) {
        return make.Default.path + 'model/idc/icons/device/' + icon + '_front.png';
    }

    var getDeviceImagePath3D = function(image) {
        return make.Default.path + 'model/idc/images/device/' + image;
    }

    var registerDevicePanel = function(name, props, subType) {
        var height = props.height;
        make.Default.copy('twaver.idc.' + name + '.device', 'twaver.idc.equipment', function(json) {
            json.frontImage = getDeviceImagePath3D(json.frontImage);
        }, getDevicePanelParams(name, props, subType))
    }

    var getDevicePanelParams = function(name, props, subType) {
        var height = props.height;
        var result = {
            name: name,
            type: 'device',
            category: '设备模型',
            modelDefaultParameters: getEquipmentProParameters(height, name + '_front.jpg'),
            icon: getDeviceIconPath3D(name),
            description: props.description,
            subType: subType,
        }
        return result;
    }

    var subTypes = ['server', 'network'];
    for (var i = 0; i < subTypes.length; i++) {
        var subType = subTypes[i];
        var subId = 'devicePanel_' + subType;
        var devicePanel = make.Default[subId];
        for (var name in devicePanel) {
            registerDevicePanel(name, devicePanel[name], subType);
        }
    }
    /*******************inbuilt  devicePanel *********************/


    /*******************inbuilt  cardPanel *********************/
    var getCardIconPath3D = function(icon) {
        return make.Default.path + 'model/idc/icons/' + icon + '_front.png';
    }

    var getCardImagePath3D = function(image) {
        return make.Default.path + 'model/idc/images/device/' + image;
    }

    var registerCardPanel = function(name, props) {
        make.Default.copy('twaver.idc.' + name + '.card', 'twaver.idc.card', function(json) {
            json.image = getCardImagePath3D(name + '_front.jpg');
        }, getBoardPanelParams(name, props))
    }

    var getBoardPanelParams = function(name, props) {
        var height = props.height;
        var width = props.width;
        var depth = props.depth;
        var result = {
            name: name,
            type: 'device',
            category: '板卡模型',
            modelDefaultParameters: getCardParameters(width, height, depth),
            icon: getCardIconPath3D(name),
            description: props.description,
            subType: subType,
        }
        return result;
    }


    var cardPanel = make.Default.cardPanel_network;
    for (var name in cardPanel) {
        registerCardPanel(name, cardPanel[name]);
    }

    /*******************inbuilt  cardPanel *********************/

    /********************3d room models**************************/
    make.Default.register('twaver.idc.tv', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var edgeX = 4,
            edgeY = 2;
        var picture = getIdcImagePath(json.image);
        var rotate = json.rotate || [0, 0, 0];

        var parts = [{
            //tv body
            type: 'cube',
            width: 150,
            height: 80,
            depth: 5,
            rotate: rotate,
            op: '+',
            style: {
                'm.type': 'phong',
                'm.color': '#2D2F31',
                'm.ambient': '#2D2F31',
                'm.normalmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
                'm.texture.repeat': new mono.Vec2(10, 6),
                'm.specularStrength': 20,
            },
        }, {
            //'tv cut off',
            type: 'cube',
            width: 130,
            height: 75,
            depth: 5,
            position: [0, edgeY, edgeX],
            rotate: rotate,
            op: '-',
            style: {
                'm.type': 'phong',
                'm.color': '#2D2F31',
                'm.ambient': '#2D2F31',
                'm.normalmap.image': make.Default.getImagePath('metal_normalmap.jpg'),
                'm.texture.repeat': new mono.Vec2(10, 6),
                'm.specularStrength': 100,
            },
        }, {
            //'tv screen',
            type: 'cube',
            width: 130,
            height: 75,
            depth: 1,
            position: [0, edgeY, 1.6],
            rotate: rotate,
            op: '+',
            style: {
                'm.type': 'phong',
                'm.specularStrength': 200,
                'front.m.texture.image': picture,
            },
        }];
        var tv = make.Default.createCombo(parts);
        tv.setPosition(x, y, z);
        tv.setClient('type', 'tv');
        return tv;
    }, {
        name: "电视",
        description: "电视描述",
        icon: getIdcIconPath('tv.png'),
        category: '动环模型',
        type: 'tv',
        modelDefaultParameters: {
            'width': {
                name: "宽",
                value: 130,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                name: "高",
                value: 75,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                name: "贴图",
                value: 'tv.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });

    make.Default.register('twaver.idc.post', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width,
            height = json.height;
        var pic = getIdcImagePath(json.image);
        var post = new mono.Cube(width, height, 0);
        post.s({
            'm.visible': false,
        });
        post.s({
            'm.texture.image': pic,
            'front.m.visible': true,
        });
        post.setPosition(x, 0, z);
        make.Default.setPositionY(post, y);
        post.setClient('type', 'post');
        return post;
    }, {
        name: "刷卡机",
        description: "刷卡机描述",
        icon: getIdcIconPath('post.png'),
        category: '动环模型',
        type: 'post',
        modelDefaultParameters: {
            'width': {
                name: "宽",
                value: 70,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                name: "高",
                value: 120,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                name: "贴图",
                value: 'post.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });

    make.Default.register('twaver.idc.door_control', function(json) {
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var cube = new mono.Cube(width, height, depth);
        var image = getIdcImagePath(json.image);
        cube.s({
            'left.m.visible': false,
            'right.m.visible': false,
            'top.m.visible': false,
            'bottom.m.visible': false,
            // 'm.transparent': true,
            'm.specularStrength': 50,
            'front.m.texture.image': image,
            'back.m.texture.image': image,
        });
        cube.setClient('type', 'door_control');
        cube.setPosition(x, 0, z);
        make.Default.setPositionY(cube, y);
        return cube;
    }, {
        name: "控制门",
        description: "控制门描述",
        icon: getIdcIconPath('door_control.png'),
        category: '动环模型',
        type: 'control',
        modelDefaultParameters: {
            'width': {
                name: "宽",
                value: 10,
                type: "number",
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'height': {
                name: "高",
                value: 20,
                type: "string",
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'depth': {
                name: "深",
                value: 1,
                type: "number",
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                name: "贴图",
                value: 'lock.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });

    make.Default.register('twaver.idc.pipeline', function(json) {
        var color = json.color,
            radius = json.radius,
            image = getIdcImagePath(json.image);
        var path = new mono.Path();
        path.moveTo(-100, 0, 0);
        path.lineTo(100, 0, 0);
        var pathNode = new mono.PathNode({
            radius: radius,
            path: path,
        });

        pathNode._autoAdjust = true;

        pathNode.s({
            'm.type': 'phong',
            'm.color': color,
            'm.ambient': color,
        });
        if (image) {
            pathNode.s({
                'm.texture.image': image,
                'm.texture.repeat': new mono.Vec2(100, 1),
            });
        }
        return pathNode;
    }, {
        category: "动环模型",
        type: "mono.Element",
        icon: getIdcIconPath('pipeline.png'),
        modelDefaultParameters: {
            color: {
                name: "颜色",
                value: "cyan",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            radius: {
                value: 2,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                name: "贴图",
                value: 'flow.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });

    make.Default.register('twaver.idc.water_leaking_sign', function(json) {
        var radius = json.radius;
        image = getIdcImagePath(json.image);
        var sign = new mono.Billboard();
        sign.s({
            'm.texture.image': image,
            'm.vertical': true,
        });
        sign.setScale(80, 160, 1);
        sign.setPosition(0, 90, 0);

        var ball = new mono.Sphere(radius);
        ball.s({
            'm.transparent': true,
            'm.opacity': 0.8,
            'm.type': 'phong',
            'm.color': '#58FAD0',
            'm.ambient': '#81BEF7',
            'm.specularStrength': 50,
            'm.normalmap.image': make.Default.getImagePath('metal_normalmap2.jpg'),
        });
        ball.setScale(1, 0.1, 0.7);

        var root = new mono.Cube(0.1, 0.1, 0.1);
        sign.setParent(root);
        ball.setParent(root);
        return root;
    }, {
        category: "动环模型",
        type: "mono.Element",
        icon: getIdcIconPath('sign.png'),
        modelDefaultParameters: {
            radius: {
                value: 30,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            image: {
                name: "贴图",
                value: 'alert.png',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
    });

    var getWall5Parameters = function() {
        var result = getWallParameters();
        result.wallHeight.value = 310;
        result.insideImage.value = "wall.jpg";
        result.outsideImage.value = "";
        result.outsideColor.value = "#A9B1BB";
        result.outsideMap.value = "";
        result.repeat.value = 310;
        return result;
    }

    make.Default.copy("twaver.idc.wall5", 'twaver.idc.wall', null, {
        modelDefaultParameters: getWall5Parameters(),
        icon: getIdcIconPath('wall5.png')
    });

    var getInnerWall2Parameters = function() {
        var result = getInnerWallParameters();
        result.wallHeight.value = 300;
        result.repeat.value = 300;
        return result;
    }

    make.Default.copy("twaver.idc.innerWall2", 'twaver.idc.innerWall', null, {
        description: '同上，高度为300的内墙',
        modelDefaultParameters: getInnerWall2Parameters(),
    });

    var getGlassWall1Parameters = function() {
        var result = getGlassWallParameters();
        result.wallHeight.value = 300;
        result.wallDepth.value = 15;
        result.topColor.value = "#E3E3E3";
        result.repeat.value = 300;
        return result;
    }

    make.Default.copy("twaver.idc.glassWall1", 'twaver.idc.glassWall', function(json, callback) {
        json.insideImage = getIdcImagePath('glass.png');
        json.outsideImage = getIdcImagePath('glass.png');
    }, {
        icon: getIdcIconPath('glasswall1.png'),
        modelDefaultParameters: getGlassWall1Parameters(),
    });

    var getGlassWall3Parameters = function() {
        var result = getGlassWall2Parameters();
        result.wallDepth.value = 15;
        result.insideColor.value = "#bababa";
        result.outsideColor.value = "#bababa";
        result.topColor.value = "#E3E3E3";
        result.bottomColor.value = "#8F8F8F";
        result.glassColor.value = "#FFF";
        return result;
    }

    make.Default.copy('twaver.idc.glassWall3', 'twaver.idc.glassWall2', function(json, callback) {
        json.glassImage = getIdcImagePath('glass.png');
    }, {
        icon: getIdcIconPath('glasswall3.png'),
        modelDefaultParameters: getGlassWall3Parameters(),
    });

    make.Default.copy('twaver.idc.column1', 'twaver.idc.column', function(json, callback) {
        json.height = 300;
    });

    make.Default.copy('twaver.idc.column2', 'twaver.idc.column', function(json, callback) {
        json.height = 310;
        json.color = '#777';
        json.topColor = '#aaa';
    }, {
        icon: getIdcIconPath('column2.png')
    });

    make.Default.copy('twaver.idc.door2', 'twaver.idc.door1', function(json, callback) {
        json.width = 120;
        json.transparent = false;
        json.image = getIdcImagePath("door2.png");
    }, {
        icon: getIdcIconPath('door2.png')
    });

    make.Default.copy('twaver.idc.door4', 'twaver.idc.door1', function(json, callback) {
        json.width = 120;
        json.color = '#FFFFFF';
        json.transparent = false;
        json.image = getIdcImagePath("door4.jpg");
    }, {
        icon: getIdcIconPath('door2.png')
    });

    make.Default.copy('twaver.idc.headerRack1', 'twaver.idc.headerRack', function(json) {
        json.sideImage = getIdcImagePath("h1srack.jpg");
        json.topImage = getIdcImagePath("h1track.jpg");
        json.frontImage = getIdcImagePath("h1frack.jpg");
        json.backImage = getIdcImagePath("h1brack.jpg");
    }, {
        icon: getIdcIconPath('headerRack1.png')
    });

    make.Default.copy('twaver.idc.headerRack2', 'twaver.idc.headerRack', function(json, callback) {
        json.sideImage = getIdcImagePath("h2srack.jpg");
        json.topImage = getIdcImagePath("h2track.jpg");
        json.frontImage = getIdcImagePath("h2frack.jpg");
        json.backImage = getIdcImagePath("h2brack.jpg");
    }, {
        icon: getIdcIconPath('headerRack2.png')
    });

    make.Default.copy('twaver.idc.headerRack3', 'twaver.idc.headerRack', function(json, callback) {
        json.sideImage = getIdcImagePath("h3srack.jpg");
        json.topImage = getIdcImagePath("h3track.jpg");
        json.frontImage = getIdcImagePath("h3frack.jpg");
        json.backImage = getIdcImagePath("h3brack.jpg");
    }, {
        icon: getIdcIconPath('headerRack3.png')
    });

    make.Default.copy('twaver.idc.rack2', 'twaver.idc.rack', function(json, callback) {
        var frontPic = {
            42: 'r1frack42.png',
            43: 'r1frack43.png',
            44: 'r1frack44.png',
            45: 'r1frack45.png',
            46: 'r1frack46.png',
            47: 'r1frack47.png'
        }
        json.backImage = getIdcImagePath("r1brack.jpg");
        json.sideImage = getIdcImagePath("r1srack.jpg");
        json.topImage = getIdcImagePath("r1track.jpg");
        //根据高度,切换到不同的正面贴图
        var fontImage = frontPic[json.height && parseInt(json.height)] || frontPic[42];
        json.frontImage = getIdcImagePath(fontImage);
        json.fontDoorImage = getIdcImagePath("r1frack.jpg");
        json.backDoorImage = getIdcImagePath("r1brack.jpg");
    }, {
        icon: getIdcIconPath('simpleRack2.png'),
    });

    make.Default.copy('twaver.idc.simpleRack2', 'twaver.idc.simpleRack', function(json, callback) {
        json.image = getIdcImagePath('srack.jpg');
    }, {
        icon: getIdcIconPath('simpleRack2.png'),
    });

    for (var size = 42; size <= 47; size++) {
        make.Default.copy('twaver.idc.rack2-' + size, 'twaver.idc.rack2', {
            height: size
        });
        make.Default.copy('twaver.idc.simpleRack2-' + size, 'twaver.idc.simpleRack2', {
            height: size
        });
    }

    var getRack4Parameters = function(height) {
        var result = getRackParameters();
        result.backImage.value = 'r1brack.jpg';
        result.sideImage.value = 'r1srack.jpg';
        result.topImage.value = 'r1track.jpg';
        result.fontDoorImage.value = 'srack04-door.jpg';
        result.backDoorImage.value = 'r1brack.jpg';
        return result;
    }

    make.Default.register('twaver.idc.rack4', function(json, callback) {
        json = json || {};
        json.client = json.client || {};
        json.style = json.style || {};
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var cutWidth = json.cutWidth;
        var backImage = getIdcImagePath(json.backImage);
        var sideImage = getIdcImagePath(json.sideImage);
        var topImage = getIdcImagePath(json.topImage);
        var rackHeight = make.Default.getRackHeight(height);
        var doorAngle = json.doorAngle;
        var evnmap = make.Default.getEnvMap(json.evnmap);
        var reflectRatio = json.reflectRatio;
        var insideTopImage = getIdcImagePath(json.insideTopImage);
        var insideSideImage = getIdcImagePath(json.insideSideImage);
        var insideBackImage = getIdcImagePath(json.insideBackImage);

        var doorFrontPic = getIdcImagePath(json.fontDoorImage);
        var doorBackPic = getIdcImagePath(json.backDoorImage);
        var doorTransparent = json.doorTransparent || false;

        var offset = make.Default.RACK_OFFSET_Y * 2;

        var frontPic = {
            42: 'r1frack42.png',
            43: 'r1frack43.png',
            44: 'r1frack44.png',
            45: 'r1frack45.png',
            46: 'r1frack46.png',
            47: 'r1frack47.png'
        }
        var frontImage = frontPic[height && parseInt(height)] || frontPic[42];
        var frontPic = json.frontImage || getIdcImagePath(frontImage);

        var rack = new mono.Cube(width, rackHeight, depth);
        rack.s({
            'm.color': '#666666',
            'm.ambient': '#ffffff',
            'm.specular': '#e5e5e5',
            'm.type': 'phong',
            'm.specularStrength': 3,
            'left.m.texture.image': sideImage,
            'right.m.texture.image': sideImage,
            'top.m.texture.image': topImage,
            'bottom.m.texture.image': topImage,
            'back.m.texture.image': backImage,
            'front.m.texture.image': frontPic,
            'front.m.specularStrength': 2,
        });

        var cut = new mono.Cube(cutWidth, rackHeight - offset + 1, depth * 0.7);
        cut.s({
            'm.type': 'basic',
            'm.lightmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'back.m.texture.image': insideBackImage,
            'left.m.texture.image': insideSideImage,
            'left.m.texture.flipX': true,
            'right.m.texture.image': insideSideImage,
            'top.m.texture.image': insideTopImage,
            'top.m.texture.flipY': true,
            'bottom.m.texture.image': insideTopImage,
        });
        cut.setPosition(0, 0, rack.getDepth() / 2 - cut.getDepth() / 2 + 2);

        var newRack;
        if (json.objectId) {
            newRack = new mono.ComboNode({
                'id': json.objectId,
                'combos': [rack, cut],
                'operators': ['-']
            });
        } else {
            newRack = new mono.ComboNode([rack, cut], ['-']);
        }
        for (var p in json.client) {
            newRack.setClient(p, json.client[p]);
        }
        var door1 = new mono.Cube(width, rackHeight, 2);
        door1.s({
            'm.color': '#4B545E',
            'm.ambient': '#4B545E',
            'front.m.color': '#57626E',
            'front.m.ambient': '#57626E',
            'back.m.texture.image': doorBackPic,
            // 'm.envmap.image': evnmap,
            // 'm.reflectRatio': reflectRatio,
        });
        var door2 = new mono.Cube(width * 0.8, rackHeight * 0.9, 3);
        door2.s({
            'm.type': 'phong',
            'm.color': '#666666',
            'm.ambient': '#ffffff',
            'm.specular': '#e5e5e5',
            'm.specularStrength': 2,
            'm.texture.image': doorFrontPic,
            // 'm.envmap.image': evnmap,
            // 'm.reflectRatio': reflectRatio,
        });
        door2.p(0, 0, 2.5);
        door2.setWrapMode('six-each');
        var rackDoor = new mono.ComboNode([door1, door2]);
        rackDoor.setParent(newRack);
        rackDoor.setClient('animation', 'rotation:right:{}:1000:0:bounceOut'.format(doorAngle || '-150'));
        rackDoor.setClient('type', 'rack_door');
        rackDoor.setClient('inbuilt', true);
        rackDoor.setPosition(0, 0, depth / 2 + 1);
        newRack.rackDoor = rackDoor;
        newRack.setPosition(x, 0, z);
        make.Default.setPositionY(newRack, y);
        newRack.setClient('type', 'rack');
        newRack.setClient('showShadow', true);
        newRack.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setObject3dCSProps(newRack, json);
        if (callback) callback(newRack);
        return newRack;
    }, {
        name: "热管背板机柜",
        category: "机柜模型",
        description: "机房最常见的模型。机柜是由机柜的主体和机柜门组成的，机柜门支持动画打开，关闭。 支持42U-47U高度，默认42U的高度。模型上还支持常见的长，宽，机柜贴图的设置",
        icon: getIdcIconPath('rack.png'),
        type: 'rack',
        sdkCategory: 'rack',
        modelDefaultParameters: getRack4Parameters('42U'),
    });

    make.Default.copy('twaver.idc.simpleRack4', 'twaver.idc.simpleRack', function(json, callback) {
        json.image = getIdcImagePath('srack04.jpg');
    }, {
        icon: getIdcIconPath('simpleRack4.png'),
    });

    for (var size = 42; size <= 47; size++) {
        make.Default.copy('twaver.idc.rack4-' + size, 'twaver.idc.rack4', {
            height: size
        });
        make.Default.copy('twaver.idc.simpleRack4-' + size, 'twaver.idc.simpleRack4', {
            height: size
        }, {
            icon: getIdcIconPath('simpleRack4.png'),
        });
    }

    /********************3d room models**************************/


    make.Default.copy('twaver.idc.rack3', 'twaver.idc.rack', function(json, callback) {
        json.backImage = getIdcImagePath("back.jpg");
        json.sideImage = getIdcImagePath("side.jpg");
        json.topImage = getIdcImagePath("top.jpg");
        json.fontDoorImage = getIdcImagePath("front.jpg");
        json.backDoorImage = getIdcImagePath("dback.jpg");
        json.frontImage = getIdcImagePath("frack.png");
        json.reflectRatio = 0.5;
    }, {
        icon: getIdcIconPath('rack3.png')
    });

    make.Default.copy('twaver.idc.simpleRack3', 'twaver.idc.simpleRack', function(json, callback) {
        json.image = getIdcImagePath('srack-2.jpg');
    }, {
        icon: getIdcIconPath('rack3.png')
    });

    make.Default.copy('twaver.idc.innerWall3', 'twaver.idc.innerWall', function(json, callback) {
        json.insideColor = '#abacb0';
        json.outsideColor = '#abacb0';
    }, {
        icon: getIdcIconPath('innerWall3.png')
    });

    make.Default.copy('twaver.idc.airCondition3', 'twaver.idc.airCondition', function(json, callback) {
        json.sideImage = getIdcImagePath('a1sair.jpg');
        json.frontImage = getIdcImagePath('a1fair.jpg');
        json.backImage = getIdcImagePath('a1bair.jpg');
        json.topImage = getIdcImagePath('a1tair.jpg');
    }, {
        icon: getIdcIconPath('airCondition3.png')
    });

    var getAirCondition4Parameters = function(width, height, depth) {
        var result = getBasicParameters(width, height, depth);
        var params = {
            'image': {
                name: "空调贴图",
                value: 'air-condition-wrap.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        };
        make.Default.copyProperties(params, result);
        return result;
    }

    make.Default.register('twaver.idc.airCondition4', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var image = getIdcImagePath(json.image);

        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];

        var source = new mono.Cube(width, height, depth);
        source.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.specularmap.image': make.Default.getImagePath('outside_lightmap.jpg'),
            'm.texture.image': image,
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        source.setWrapMode('six-each');
        source.setPosition(x, 0, z);
        source.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(source, y);
        make.Default.setObject3dCSProps(source, json);
        source.setClient('type', 'airCondition');
        source.setClient('showShadow', true);
        if (callback) callback(source);
        return source;
    }, {
        name: "行级空调",
        description: "行级精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数",
        icon: getIdcIconPath('airCondition.png'),
        category: '机柜模型',
        type: 'airCondition',
        modelDefaultParameters: getAirCondition4Parameters(30, 200, 120),
    });

    //采用obj的模型
    /*make.Default.register('twaver.idc.airCondition6', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
    
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
    
        var image1 = getIdcImagePath('air-condition6-wrap.jpg');
        var air1 = new mono.Cube(width, height, depth);
        air1.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.texture.image': image1,
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        air1.p(width, 0, 0);
        air1.setWrapMode('six-each');
    
        var image2 = getIdcImagePath('air-condition61-wrap.jpg');
        var air2 = new mono.Cube(width, height, depth);
        air2.s({
            'm.type': 'phong',
            'm.color': '#557E7A',
            'm.specular': '#ffffff',
            'm.specularStrength': 3,
            'm.texture.image': image2,
            'front.m.envmap.image': make.Default.getEnvMap('envmap1'),
            'm.reflectRatio': 0.2,
        });
        air2.setWrapMode('six-each');
        air2.p(0, 0, 0);
    
        var air3 = air2.clonePrefab();
        air3.p(-width, 0, 0);
        air3.setParent(air2);
        air1.setParent(air2);
    
        air2.setPosition(x, 0, z);
        air2.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(air2, y);
        make.Default.setObject3dCSProps(air2, json);
        air2.setClient('type', 'airCondition');
        air2.setClient('showShadow', true);
        if (callback) callback(air2);
        return air2;
    }, {
        name: "精密空调",
        description: "精密空调是机房中用于散热，排风的模块，保证机房的恒温恒湿。支持修改长，宽，高基本参数",
        icon: getIdcIconPath('airCondition.png'),
        category: '机柜模型',
        type: 'airCondition',
        modelDefaultParameters: getAirCondition4Parameters(85, 200, 90),
    });*/

    make.Default.copy('twaver.idc.headerRack4', 'twaver.idc.headerRack', function(json, callback) {
        json.id = 'twaver.idc.headerRack';
        json.sideImage = getIdcImagePath('h1shead.jpg');
        json.frontImage = getIdcImagePath('h1fhead.jpg');
        json.backImage = getIdcImagePath('h1bhead.jpg');
        json.topImage = getIdcImagePath('h1thead.jpg');
    }, {
        icon: getIdcIconPath('headerRack4.png')
    });

    make.Default.registerObj('twaver.idc.jiankongshi', 'jiankongshi', './model/idc/obj/jiankongshi/', {}, true);

    make.Default.register('twaver.idc.bigScreen', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var picture = getIdcImagePath(json.image);
        var rotation = json.rotation || [0, 0, 0];
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var screen = new mono.Cube(width, height, depth);
        screen.s({
            'm.type': 'phong',
            'front.m.texture.image': picture,
        });
        return screen;
    }, {
        category: "动环模型",
        type: "mono.Element",
        icon: getIdcIconPath('bigScreen.png'),
        modelDefaultParameters: {
            width: {
                type: "number",
                value: 700,
                name: "宽"
            },
            height: {
                type: "number",
                value: 200,
                name: "高"
            },
            depth: {
                type: "number",
                value: 10,
                name: "深"
            },
            image: {
                type: "image",
                value: 'screen.jpg',
                name: "image"
            }
        }
    });

    make.Default.registerObj('twaver.idc.bigScreen2', 'pingmu', './model/idc/obj/pingmu/', {
        category: "动环模型",
        type: "mono.Element",
        icon: getIdcIconPath('bigScreen2.png'),
    });

    make.Default.register('twaver.idc.postFlag', function(json) {
        var color = json.color || '#094bc7'; //#e2001f红
        var parts = [{
            //flagstaff.
            type: 'cube',
            width: 5,
            height: 300,
            depth: 5,
            op: '+',
            position: [0, 0, 0],
            style: {
                'm.type': 'phong',
                'm.specularStrength': 50,
                'm.color': color,
                'm.ambient': color
            }
        }, {
            //flag.
            type: 'cube',
            width: 150,
            height: 100,
            depth: 2,
            op: '+',
            position: [75, 100, 0],
            style: {
                'm.type': 'phong',
                'm.specularStrength': 50,
                'm.color': color,
                'm.ambient': color,
                'front.m.texture.image': getIdcImagePath('postPeople.png'),
                'back.m.texture.image': getIdcImagePath('postPeople.png'),
            }
        }];
        return make.Default.createCombo(parts);
    }, {
        category: "动环模型",
        type: "post",
        name: "岗位旗",
        icon: getIdcIconPath('postFlag.png'),
        description: "岗位旗",
        sdkCategory: 'post',
    });

    make.Default.register('twaver.idc.PUEBoard', function(json) {
        var w = json.width || 110,
            h = json.height || 220,
            d = 2;
        var cube = new mono.Cube(w, h, d),
            color = json.color || 'green';
        var canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 512;
        cube.s({
            'm.visible': false,
            'front.m.visible': true,
            'front.m.texture.image': canvas,
            'm.type': 'basic',
        });
        var p = { text: json.text || '', color: color, value: '0.00' };
        cube.setClient('update', function(param) {
            createTextImage(param);
            cube.invalidateTexture();
        });
        createTextImage(p)
        cube.invalidateTexture();

        function createTextImage(json) {
            var text = json.text,
                color = json.color,
                value = json.value;

            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            ctx.fillStyle = '#303030';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = color;
            ctx.lineWidth = 10;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
            var font = '30px Dialog';
            ctx.font = font;
            ctx.fillStyle = color;
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            var x = canvas.width / 2;
            var lines = text.split('\n'),
                lineCount = lines.length;
            var y = 100;
            for (var i = 0; i < lineCount; i++) {
                var height = mono.Utils.getTextSize(font, lines[i]).height;
                y = y + i * height - 5
                ctx.fillText(lines[i], x, y);
            }
            ctx.strokeStyle = color;
            ctx.font = '66px Dialog';
            ctx.fillText('PUE值', x, y += 70);
            ctx.font = '96px Dialog';
            ctx.fillText(value, x, y += 80);
            // window.open(canvas.toDataURL());
            return canvas;
        }

        return cube;
    }, {
        category: "动环模型",
        type: "PUE",
        name: "PUE板",
        icon: getIdcIconPath('PUEBoard.png'),
        description: "PUE板",
        sdkCategory: 'PUE',
    });

    var getAirFloorParameters = function() {
        var result = getBasicParameters(60, 2, 60);
        result.image = {
            value: 'airFloor.jpg',
            name: "贴图",
            type: make.Default.PARAMETER_TYPE_IMAGE,
            propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
        }
        return result;
    }

    make.Default.register('twaver.idc.airFloor', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var image = getIdcImagePath(json.image);
        var rotation = json.rotation || [0, 0, 0];
        var width = json.width,
            height = json.height,
            depth = json.depth;
        var floor = new mono.Cube(width, height, depth);
        floor.s({
            'm.color': '#EEE9E0',
            'm.ambient': '#EEE9E0',
            'top.m.texture.image': image,
            'm.texture.anisotropy': 16
        });
        floor.setPosition(x, 0, z);
        floor.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(floor, y);
        make.Default.setObject3dCSProps(floor, json);
        floor.setClient('type', 'airFloor');
        if (callback) callback(floor);
        return floor;
    }, {
        name: "空气板",
        category: "房间模型",
        description: "空气板描述",
        type: "mono.Element",
        icon: getIdcIconPath('airFloor.png'),
        modelDefaultParameters: getAirFloorParameters()
    });

    make.Default.registerObj('twaver.idc.shelf', 'jiaodian2', './model/idc/obj/jiaodian/', {
        name: "机柜架子",
        description: "机柜架子描述",
        icon: getIdcIconPath('shelf.png'),
        category: '机柜模型',
        type: 'shelf',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.stair2', 'louti', './model/idc/obj/louti2/', {
        name: "楼梯",
        description: "楼梯描述",
        icon: getIdcIconPath('stair2.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.tvShelf', 'dianshijijiazi', './model/idc/obj/dianshijijiazi/', {
        name: "电视机架子",
        description: "电视机架子描述",
        icon: getIdcIconPath('tvShelf.png'),
        category: '机柜模型',
        type: 'tvShelf',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.heatExchanger', 'huanreqi', './model/idc/obj/huanreqi/', {
        name: "换热器架子",
        description: "换热器描述",
        icon: getIdcIconPath('heatExchanger.png'),
        category: '机柜模型',
        type: 'yangan',
        modelDefaultParameters: {}
    });

    make.Default.register('twaver.idc.line', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var color = json.color || '#B45F04';
        var image = getIdcImagePath(json.image);
        var lineJson = {
            type: 'pathNode',
            data: json.data,
            pathImage: image,
            pathWidth: 4,
            pathHeight: 2,
            repeat: 15,
            style: {
                'm.type': 'phong',
                'm.side': 'both',
                'm.polygonOffset': true,
                // 'm.polygonOffsetFactor': 16,
                // 'm.polygonOffsetUnits': 3,
            },
            client: {
                type: 'line',
            }
        };

        var line = make.Default.createCombo(lineJson);
        line.setPosition(position[0], position[1], position[2]);
        if (callback) callback(line);
        return line;
    }, {
        name: "警示线",
        description: "警示线描述",
        icon: getIdcIconPath('line.png'),
        category: '动环模型',
        sdkCategory: 'floor-child',
        type: 'watercable',
        modelDefaultParameters: {
            color: {
                name: '颜色',
                value: 'white',
                type: make.Default.PARAMETER_TYPE_COLOR,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            image: {
                name: '贴图',
                value: 'line.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            data: {
                name: '点位置',
                value: '',
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
    });

    make.Default.registerObj('twaver.idc.showroom', 'zhanting', './model/idc/obj/zhanting/', {
        name: "展厅",
        description: "展厅描述",
        icon: getIdcIconPath('showroom.png'),
        category: '房间模型',
        type: 'room',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.airCondition5', 'kongtiao', './model/idc/obj/kongtiao/', {
        name: "空调",
        description: "空调描述",
        icon: getIdcIconPath('airCondition5.png'),
        category: '机柜模型',
        type: 'room',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.plant2', 'penzai', './model/idc/obj/penzai/', {
        name: "植物",
        description: "植物描述",
        icon: getIdcIconPath('plant2.png'),
        category: '机柜模型',
        type: 'room',
        modelDefaultParameters: {}
    });

    make.Default.register('twaver.idc.stair3', function(json, callback) {
        var level = json.level || 3;
        var levelHeight = json.height || 12;
        var stairWidth = json.stairWidth || 20;
        var stairDepth = json.stairDepth || 80;
        var statirs = [];

        for (var i = 1; i <= level; i++) {
            var cube = new mono.Cube(stairWidth, levelHeight * i, stairDepth);
            cube.s({
                'm.type': 'phong',
                'm.texture.image': getIdcImagePath('stair.jpg'),
            });
            cube.setWrapMode('six-each');
            cube.setPosition(stairWidth * (i - 1), levelHeight * i / 2, 0);
            statirs.push(cube);
            console.log(cube, cube.getWidth(), cube.getHeight(), cube.getDepth());
        }
        var stair = new mono.ComboNode(statirs);
        if (callback) callback(stair);
        return stair;
    }, {
        name: "楼梯",
        description: "楼梯描述",
        icon: getIdcIconPath('stair3.png'),
        category: '动环模型',
        type: 'fire',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.fireExtinguisherBox2', 'xiaofangshuanxiang', './model/idc/obj/xiaofangxuan/', {
        name: "消防箱",
        description: "消防箱描述",
        icon: getIdcIconPath('fireExtinguisherBox2.png'),
        category: '消防模型',
        type: 'yangan',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.coolingDevice', 'lengque', './model/idc/obj/coolingDevice/', {
        name: "制冷设备",
        description: "制冷设备描述",
        icon: getIdcIconPath('coolingDevice.png'),
        category: '消防模型',
        type: 'cool',
        modelDefaultParameters: {}
    }, false);

    make.Default.registerObj('twaver.idc.chiller', 'lengshui', './model/idc/obj/chiller/', {
        name: "冷水机组",
        description: "冷水机组描述",
        icon: getIdcIconPath('chiller.png'),
        category: '消防模型',
        type: 'cool',
        modelDefaultParameters: {}
    }, false);

    make.Default.registerObj('twaver.idc.electricValve', 'diandongfa', './model/idc/obj/electricValve/', {
        name: "电动阀",
        description: "电动阀描述",
        icon: getIdcIconPath('electricValve.png'),
        category: '消防模型',
        type: 'cool',
        modelDefaultParameters: {}
    }, false);

    make.Default.registerObj('twaver.idc.waterPump', 'shuiben', './model/idc/obj/waterPump/', {
        name: "冷却水泵",
        description: "冷却水泵描述",
        icon: getIdcIconPath('waterPump.png'),
        category: '消防模型',
        type: 'cool',
        modelDefaultParameters: {}
    }, false);

    make.Default.registerObj('twaver.idc.chuanguanqi2', 'changanqi', './model/idc/obj/wenshidu/', {
        name: "传感器2",
        description: "传感器2描述",
        icon: getIdcIconPath('chuanguanqi2.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.jiankong', 'jiankong', './model/idc/obj/jiankong/', {
        name: "监控设备",
        description: "监控设备描述",
        icon: getIdcIconPath('jiankong.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.camera2', 'S3', './model/idc/obj/camera/', {
        name: "摄像头2",
        description: "摄像头2描述",
        icon: getIdcIconPath('camera2.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.camera3', 'banqiu', './model/idc/obj/camera3/', {
        name: "摄像头3",
        description: "摄像头3描述",
        icon: getIdcIconPath('camera3.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.peidianxiang', 'guizi', './model/idc/obj/peidianxiang/', {
        name: "配电箱",
        description: "配电箱描述",
        icon: getIdcIconPath('peidianxiang.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    });


    var getAirBoxParameters = function() {
        var result = getBasicParameters(21, 14, 2);
        var params = {
            'image': {
                name: "贴图",
                value: 'airBox.jpg',
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        };
        make.Default.copyProperties(params, result);
        return result;
    }

    //空气开关盒
    make.Default.register('twaver.idc.airBox', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var width = json.width;
        var height = json.height;
        var depth = json.depth;
        var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
        var image = getIdcImagePath(json.image);

        var airBox;
        if (json.objectId) {
            airBox = new mono.Cube({
                'id': json.objectId,
                'width': width,
                'height': height,
                'depth': depth
            });
        } else {
            airBox = new mono.Cube(width, height, depth);
        }
        airBox.s({
            'm.type': 'phong',
            'm.specularStrength': 2,
            'front.m.texture.image': image,
            'm.color': '#e0e0e0',
        });
        airBox.p(x, 0, z);
        airBox.setRotation(rotation[0], rotation[1], rotation[2]);
        make.Default.setPositionY(airBox, y);
        airBox.setClient('type', 'airBox');
        make.Default.setObject3dCSProps(airBox, json);
        if (callback) callback(airBox);
        return airBox;
    }, {
        name: "空气开关盒",
        description: "空气开关盒",
        icon: getIdcIconPath('airBox.png'),
        category: '其他模型',
        type: 'airBox',
        modelDefaultParameters: getAirBoxParameters(),
    });

    make.Default.registerObj('twaver.idc.pdc1', 'diya60', './model/idc/obj/pdc1/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc1.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc2', 'diya80', './model/idc/obj/pdc2/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc2.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc3', 'diya80-2', './model/idc/obj/pdc3/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc3.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc4', 'diya110', './model/idc/obj/pdc4/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc4.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc5', 'qian80', './model/idc/obj/pdc5/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc5.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc6', 'hou90', './model/idc/obj/pdc6/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc6.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc7', 'diya', './model/idc/obj/pdc7/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc7.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc8', 'diya100', './model/idc/obj/pdc8/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc8.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc9', 'diya140', './model/idc/obj/pdc9/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc9.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc10', 'mcc60', './model/idc/obj/pdc10/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc10.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc11', 'mcc80-1', './model/idc/obj/pdc11/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc11.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc12', 'mcc80-2', './model/idc/obj/pdc12/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('pdc12.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.pdc13', 'pdc-100-2', './model/idc/obj/pdc13/', {
        name: "配电柜",
        description: "配电柜描述",
        icon: getIdcIconPath('changuanqi.png'),
        category: '动环模型',
        type: 'changuanqi',
        modelDefaultParameters: {}
    }, true);



    make.Default.registerObj('twaver.idc.ups7', 'ups60', './model/idc/obj/ups7/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups7.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups8', 'ups80', './model/idc/obj/ups8/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups8.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups9', 'ups165', './model/idc/obj/ups9/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups9.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups10', 'ups165-2', './model/idc/obj/ups10/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups10.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups11', 'ups48-2', './model/idc/obj/ups11/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups11.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups12', 'ups48-3', './model/idc/obj/ups12/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups12.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ups13', 'ups', './model/idc/obj/ups13/', {
        name: "UPS",
        description: "UPS描述",
        icon: getIdcIconPath('ups13.png'),
        category: '动环模型',
        type: 'ups',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.bianpinlixin', 'bianpinlixin', './model/idc/obj/bianpinlixin/', {
        name: "离心变频器",
        description: "离心变频器描述",
        icon: getIdcIconPath('bianpinlixin.png'),
        category: '动环模型',
        type: 'bianpin',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchigui', 'dianchigui', './model/idc/obj/dianchigui/', {
        name: "电池柜",
        description: "电池柜描述",
        icon: getIdcIconPath('dianchigui.png'),
        category: '动环模型',
        type: 'dianchigui',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.zhiliuping1', 'zhiliuping1', './model/idc/obj/zhiliuping/', {
        name: "直流屏",
        description: "直流屏描述",
        icon: getIdcIconPath('zhiliuping1.png'),
        category: '动环模型',
        type: 'zhiliuping',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.zhiliuping2', 'zhiliuping2', './model/idc/obj/zhiliuping/', {
        name: "直流屏",
        description: "直流屏描述",
        icon: getIdcIconPath('zhiliuping2.png'),
        category: '动环模型',
        type: 'zhiliuping',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.zitouping', 'zitouping', './model/idc/obj/zitouping/', {
        name: "自投屏",
        description: "自投屏描述",
        icon: getIdcIconPath('zitouping.png'),
        category: '动环模型',
        type: 'zitouping',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu2', 'dianchiguizi', './model/idc/obj/dianchiguizi/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu2.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu3', 'dianchizu1', './model/idc/obj/dianchizu3/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu3.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu4', 'dianchizu3', './model/idc/obj/dianchizu4/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu4.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu5', 'dianchizu2', './model/idc/obj/dianchizu5/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu5.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.dianchizu6', 'dianchizu4', './model/idc/obj/dianchizu6/', {
        name: "电池组",
        description: "电池组箱描述",
        icon: getIdcIconPath('dianchizu6.png'),
        category: '动环模型',
        type: 'dianchizu',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.jishuiqi1', 'jishuiqi1', './model/idc/obj/jishuiqi/', {
        name: "集水分水器",
        description: "集水分水器描述",
        icon: getIdcIconPath('jishuiqi1.png'),
        category: '动环模型',
        type: 'jishuiqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.jishuiqi2', 'jishuiqi2', './model/idc/obj/jishuiqi/', {
        name: "集水分水器",
        description: "集水分水器描述",
        icon: getIdcIconPath('jishuiqi2.png'),
        category: '动环模型',
        type: 'jishuiqi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.chiller2', 'shuiben', './model/idc/obj/shuiben/', {
        name: "冷却水泵",
        description: "冷却水泵描述",
        icon: getIdcIconPath('chiller2.png'),
        category: '动环模型',
        type: 'chiller',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.luoxuanshi', 'luoxuanshi', './model/idc/obj/luoxuanshi/', {
        name: "螺旋式水泵",
        description: "螺旋式水泵描述",
        icon: getIdcIconPath('luoxuanshi.png'),
        category: '动环模型',
        type: 'luoxuanshi',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.airCondition6', 'ac-4', './model/idc/obj/ac6/', {
        name: "空调",
        description: "空调描述",
        icon: getIdcIconPath('airCondition6.png'),
        category: '机柜模型',
        type: 'ac',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.airCondition7', 'ac-3', './model/idc/obj/ac7/', {
        name: "空调",
        description: "空调描述",
        icon: getIdcIconPath('airCondition7.png'),
        category: '机柜模型',
        type: 'ac',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.airCondition8', 'ac-1', './model/idc/obj/ac8/', {
        name: "空调",
        description: "空调描述",
        icon: getIdcIconPath('airCondition8.png'),
        category: '机柜模型',
        type: 'ac',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.airCondition9', 'ac-2', './model/idc/obj/ac9/', {
        name: "空调",
        description: "空调描述",
        icon: getIdcIconPath('airCondition9.png'),
        category: '机柜模型',
        type: 'ac',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.idc.ganshibianyaqi', 'ganshibianyaqi', './model/idc/obj/ganshibianyaqi/', {
        name: "干式变压器",
        description: "干式变压器描述",
        icon: getIdcIconPath('ganshibianyaqi.png'),
        category: '机柜模型',
        type: 'bianyaqi',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.dongliyuan', 'zhiliu', './model/idc/obj/dongliyuan/', {
        name: "动力源",
        description: "动力源描述",
        icon: getIdcIconPath('dongliyuan.png'),
        category: '机柜模型',
        type: 'dongliyuan',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.idc.lengshuita', 'lengshuita', './model/idc/obj/lengshuita/', {
        name: "冷水塔",
        description: "冷水塔描述",
        icon: getIdcIconPath('dongliyuan.png'),
        category: '环境模型',
        type: 'lengshiuta',
        modelDefaultParameters: {}
    });



    var getMeetingImagePath = function(image) {
        if (image.indexOf('/') > 0) {
            return image;
        }
        return make.Default.path + 'model/meeting/images/' + image;
    }

    var getMeetingIconPath = function(icon) {
        if (icon.indexOf('/') > 0) {
            return icon;
        }
        return make.Default.path + 'model/meeting/icons/' + icon;
    }


    var getMeeting2dBasicParameters = function(arg) {
        arg = arg || {};
        return {
            'bid': {
                name: "业务ID",
                value: undefined,
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            x: {
                name: "X轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            y: {
                name: "Z轴位置",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
            angle: {
                name: "Y轴旋转",
                value: 0,
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_ACCESSOR,
                exportable: false,
            },
        }
    }

    make.Default.register('twaver.meeting.table1.top', function(json) {
        var modelJson = {
            width: 500,
            depth: 180,
            client: {
                type: 'model'
            }
        }
        make.Default.copyProperties(json, modelJson);
        var model = make.Default.createNode(modelJson);
        return model;
    }, {
        name: '桌子',
        description: "桌子说明",
        icon: getMeetingIconPath('table1.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters(),
    });

    make.Default.register('twaver.meeting.chair2.top', function(json) {
        var modelJson = {
            width: 62,
            depth: 78,
            client: {
                type: 'model'
            }
        }
        make.Default.copyProperties(json, modelJson);
        var model = make.Default.createNode(modelJson);
        return model;
    }, {
        name: '椅子',
        description: "椅子说明",
        icon: getMeetingIconPath('chair2.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });

    var getRegister = function(width, depth) {
        return function(json) {
            var modelJson = {
                width: width,
                depth: depth,
                client: {
                    type: 'model'
                }
            }
            make.Default.copyProperties(json, modelJson);
            var model = make.Default.createNode(modelJson);
            return model;
        }
    }
    var getTableParameters = function() {
        return {
            name: '桌子',
            description: "桌子说明",
            icon: getMeetingIconPath('table1.png'),
            category: 'meeting',
            modelDefaultParameters: getMeeting2dBasicParameters(),
        };
    }
    make.Default.register('twaver.meeting.table.top', getRegister(155, 360), {
        name: '桌子',
        description: "桌子说明",
        icon: getMeetingIconPath('table.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.officeTable1.top', getRegister(185, 184), {
        name: '办公桌1',
        description: "办公桌1说明",
        icon: getMeetingIconPath('officeTable1.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.officeTable2.top', getRegister(134, 122), {
        name: '办公桌2',
        description: "办公桌2说明",
        icon: getMeetingIconPath('officeTable2.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.boardroomTable1.top', getRegister(421, 742), {
        name: '董事会桌1',
        description: "董事会桌1说明",
        icon: getMeetingIconPath('boardroomTable1.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });

    make.Default.register('twaver.meeting.boardroomTable2.top', getRegister(373, 784), {
        name: '董事会桌2',
        description: "董事会桌2说明",
        icon: getMeetingIconPath('boardroomTable2.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.boardroomTable3.top', getRegister(242, 388), {
        name: '董事会桌3',
        description: "董事会桌3说明",
        icon: getMeetingIconPath('boardroomTable3.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.boardroomTable4.top', getRegister(220, 541), {
        name: '董事会桌4',
        description: "董事会桌4说明",
        icon: getMeetingIconPath('boardroomTable4.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.receptionDesk.top', getRegister(173, 584), {
        name: '接待桌',
        description: "接待桌说明",
        icon: getMeetingIconPath('receptionDesk.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });
    make.Default.register('twaver.meeting.wardrobe.top', getRegister(180, 62), {
        name: '衣柜',
        description: "衣柜说明",
        icon: getMeetingIconPath('wardrobe.png'),
        category: 'meeting',
        modelDefaultParameters: getMeeting2dBasicParameters({ width: 62, depth: 78 }),
    });


    var getMeetingImagePath = function(image) {
        if (image.indexOf('/') > 0) {
            return image;
        }
        return make.Default.path + 'model/meeting/images/' + image;
    }

    var getMeetingIconPath = function(icon) {
        if (icon.indexOf('/') > 0) {
            return icon;
        }
        return make.Default.path + 'model/meeting/icons/' + icon;
    }

    make.Default.registerObj('twaver.meeting.table1', 'zhuozi001', './model/meeting/obj/zhuozi001/', {
        name: "桌子",
        description: "桌子描述",
        icon: getMeetingIconPath('table1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.meeting.chair1', 'yizi002', './model/meeting/obj/yizi002/', {
        name: "椅子1",
        description: "椅子描述",
        icon: getMeetingIconPath('chair1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });

    make.Default.registerObj('twaver.meeting.chair2', 'yizi001', './model/meeting/obj/yizi001/', {
        name: "椅子2",
        description: "椅子描述",
        icon: getMeetingIconPath('chair2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.meeting.table', 'jk', './model/meeting/obj/jiankongshi/', {
        name: "监控桌",
        description: "监控桌描述",
        icon: getMeetingIconPath('table.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);

    make.Default.registerObj('twaver.meeting.officeTable1', 'bangongzhuo1', './model/meeting/obj/bangongzhuo1/', {
        name: "办公桌",
        description: "办公桌描述",
        icon: getMeetingIconPath('officeTable1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.officeTable2', 'bangongzhuo2', './model/meeting/obj/bangongzhuo2/', {
        name: "办公桌2",
        description: "办公桌描述",
        icon: getMeetingIconPath('officeTable2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}

    }, true);
    make.Default.registerObj('twaver.meeting.boardroomTable1', 'huiyizhuo1', './model/meeting/obj/huiyizhuo1/', {
        name: "会议桌1",
        description: "会议桌1描述",
        icon: getMeetingIconPath('boardroomTable1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.boardroomTable2', 'huiyizhuo2', './model/meeting/obj/huiyizhuo2/', {
        name: "会议桌2",
        description: "会议桌2描述",
        icon: getMeetingIconPath('boardroomTable2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.boardroomTable3', 'huiyizhuo3', './model/meeting/obj/huiyizhuo3/', {
        name: "会议桌3",
        description: "会议桌3描述",
        icon: getMeetingIconPath('boardroomTable3.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.boardroomTable4', 'huiyizhuo4', './model/meeting/obj/huiyizhuo4/', {
        name: "会议桌4",
        description: "会议桌4描述",
        icon: getMeetingIconPath('boardroomTable4.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.receptionDesk', 'jiedaichu', './model/meeting/obj/jiedaichu/', {
        name: "接待处",
        description: "接待处描述",
        icon: getMeetingIconPath('receptionDesk.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.wardrobe', 'yigui', './model/meeting/obj/yigui/', {
        name: "衣柜",
        description: "衣柜描述",
        icon: getMeetingIconPath('wardrobe.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.langan', 'langan001', './model/meeting/obj/langan001/', {
        name: "栏杆",
        description: "栏杆描述",
        icon: getMeetingIconPath('langan1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });
    make.Default.registerObj('twaver.meeting.sound1', 'yinxiang001', './model/meeting/obj/yinxiang001/', {
        name: "音响1",
        description: "音响1描述",
        icon: getMeetingIconPath('sound1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.sound2', 'yinxiang002', './model/meeting/obj/yinxiang002/', {
        name: "音响2",
        description: "音响2描述",
        icon: getMeetingIconPath('sound2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });
    make.Default.registerObj('twaver.meeting.sound3', 'yinxiang003', './model/meeting/obj/yinxiang003/', {
        name: "音响3",
        description: "音响3描述",
        icon: getMeetingIconPath('sound3.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.guizi1', 'guizi001', './model/meeting/obj/guizi001/', {
        name: "柜子1",
        description: "柜子1描述",
        icon: getMeetingIconPath('guizi1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.zhuozi2', 'zhuozi002', './model/meeting/obj/zhuozi002/', {
        name: "桌子2",
        description: "桌子2描述",
        icon: getMeetingIconPath('zhuozi2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.television2', 'dianshi002', './model/meeting/obj/dianshi002/', {
        name: "电视2",
        description: "电视2描述",
        icon: getMeetingIconPath('television2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.television1', 'dianshi001', './model/meeting/obj/dianshi001/', {
        name: "电视1",
        description: "电视1描述",
        icon: getMeetingIconPath('television1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.computer1', 'diannao001', './model/meeting/obj/diannao001/', {
        name: "电脑",
        description: "电脑描述",
        icon: getMeetingIconPath('computer1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });
    make.Default.registerObj('twaver.meeting.computer2', 'diannao002', './model/meeting/obj/diannao002/', {
        name: "电脑",
        description: "电脑描述",
        icon: getMeetingIconPath('computer2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.printer1', 'dayinji001', './model/meeting/obj/dayinji001/', {
        name: "打印机1",
        description: "打印机001描述",
        icon: getMeetingIconPath('printer1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.printer2', 'dayinji002', './model/meeting/obj/dayinji002/', {
        name: "打印机2",
        description: "打印机002描述",
        icon: getMeetingIconPath('printer2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    }, true);
    make.Default.registerObj('twaver.meeting.projector1', 'touyingyi001', './model/meeting/obj/touyingyi001/', {
        name: "投影仪001",
        description: "投影仪001描述",
        icon: getMeetingIconPath('projector1.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });
    make.Default.registerObj('twaver.meeting.projector2', 'touyingyi002', './model/meeting/obj/touyingyi002/', {
        name: "投影仪002",
        description: "投影仪002描述",
        icon: getMeetingIconPath('projector2.png'),
        category: '办公模型',
        type: 'mono.Element',
        modelDefaultParameters: {}
    });


    var getSceneImagePath = function(image) {
        if (image.indexOf('/') > 0) {
            return image;
        }
        return make.Default.path + 'model/scene/images/' + image;
    };

    var getSceneIconPath = function(icon) {
        if (icon.indexOf('/') > 0) {
            return icon;
        }
        return make.Default.path + 'model/scene/icons/' + icon;
    }

    var getPRParameters = function() {
        return {
            'bid': {
                value: '',
                name: "业务ID",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_CLIENT
            },
            'position': {
                value: [0, 0, 0],
                name: "位置",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },
            'rotation': {
                value: [0, 0, 0],
                name: "旋转角度",
                type: make.Default.PARAMETER_TYPE_ARRAY_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD,
                editable: false,
            },

        }
    }

    var getEarthParameters = function() {
        var result = {
            'radius': {
                value: 500,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'segmentsW': {
                value: 50,
                name: "横切数",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'segmentsH': {
                value: 50,
                name: "纵切数",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'rotation': {
                value: [0, Math.PI, 0],
                name: "旋转角度",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                value: 'world.jpg',
                name: "贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    make.Default.register('twaver.scene.earth', function(json, callback) {
        var radius = json.radius,
            segmentsW = json.segmentsW,
            segmentsH = json.segmentsH;
        rotation = json.rotation || [0, 0, 0];
        var image = getSceneImagePath(json.image);
        var earth = new mono.Sphere(radius, segmentsW, segmentsH);
        earth.s({
            'm.texture.image': image,
            'm.type': 'phong',
        });
        // 地球光晕
        var earthFlare = new mono.Billboard();
        earthFlare.s({
            'm.texture.image': getSceneImagePath('glow.png'),
            'm.transparent': true,
        });
        earthFlare.setScale(1300, 1300, 1);
        earthFlare.setParent(earth);
        earth.setRotation(rotation[0], rotation[1], rotation[2]);
        earth.setClient('type', 'earth');
        // 地球标题
        if (json.title) {
            var params = {
                background: json.background || false,
                color: json.color || 'white',
                font: json.font || '40px "Dialog"'
            }
            var titleHeight = json.titleHeight || 200;
            var earthTitle = mono.Utils.createTextBillboard(json.title, params);
            earthTitle.s({ 'm.transparent': true });
            var scale = earthTitle.getScale();
            earthTitle.setScale(scale.x * 3, scale.y * 3, 1);
            earthTitle.setPositionY(radius + titleHeight);
            earthTitle.setParent(earth);
            earthTitle.setClient('type', 'earthTitle');
        }

        return earth;
    }, {
        name: "地球",
        description: '地球模型，带光润',
        icon: getSceneIconPath('earth.png'),
        category: '场景模型',
        type: 'scene',
        sdkCategory: 'earth',
        modelDefaultParameters: getEarthParameters(),
    });

    make.Default.copy('twaver.scene.earth1', 'twaver.scene.earth', function(json) {
        json.image = getSceneImagePath('map.jpg');
        json.rotation = [0, Math.PI / 180 * 230, 0];
    }, {
        name: '地球1',
        icon: getSceneIconPath('earth1.png'),
    });

    var getSkyBox3Parameters = function() {
        var result = {
            'radius': {
                value: 5000,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                value: 'star_sky.jpg',
                name: "贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'sunImage': {
                value: 'sun.png',
                name: "贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    make.Default.register('twaver.scene.skybox3', function(json, callback) {
        var radius = json.radius;
        image = getSceneImagePath(json.image);
        sunImage = getSceneImagePath(json.sunImage);
        position = json.position || [0, 0, 0];

        var skybox = new mono.Sphere(radius);
        skybox.s({
            'm.texture.image': image,
            'm.side': mono.DoubleSide,
            'm.texture.repeat': new mono.Vec2(14, 7),
        });

        var sun = new mono.Billboard();
        sun.s({
            'm.texture.image': sunImage,
            'm.transparent': true,
            'm.depthTest': false,
        });
        sun.setScale(3000, 1000, 1);
        sun.setPosition(0, 600, -600);
        sun.setParent(skybox);
        skybox.p(position[0], position[1], position[2]);
        return skybox;
    }, {
        name: "天空盒",
        description: '星空类的天空盒',
        icon: getSceneIconPath('keybox.png'),
        category: '场景模型',
        type: 'scene',
        icon: getSceneIconPath('skybox3.png'),
        sdkCategory: 'earthSkybox',
        modelDefaultParameters: getSkyBox3Parameters(),
    });

    var getSkyBoxParameters = function() {
        var result = {
            'radius': {
                value: 3000,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                value: 'skybox_sixblue.jpg',
                name: "贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'floorImage': {
                value: '6.png',
                name: "地面贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    //园区天空盒
    //1. 六面都是天空的天空盒 - sphere + cube
    make.Default.register('twaver.scene.skybox', function(json, callback) {
        var radius = json.radius;
        image = getSceneImagePath(json.image);
        floorImage = getSceneImagePath(json.floorImage);
        position = json.position || [0, 0, 0];

        var skyball = new mono.Sphere(radius);
        skyball.s({
            'm.texture.image': image,
            'm.side': mono.BackSide,
        });
        skyball.setScaleY(0.8);

        var floor = new mono.Cube(radius * 2, 10, radius * 2);
        floor.s({
            'm.texture.image': floorImage,
        });
        floor.setPositionY(-radius * 2 / 3);
        floor.setParent(skyball);
        floor.setClient('type', 'parkSkybox');
        skyball.setClient('type', 'parkSkybox');
        skyball.setPosition(position[0], position[1], position[2]);

        if (callback) callback(skyball);
        return skyball;
    }, {
        name: "天空盒",
        description: "圆球形天空盒",
        category: "场景模型",
        type: 'scene',
        icon: getSceneIconPath('skybox.png'),
        sdkCategory: 'parkSkybox',
        modelDefaultParameters: getSkyBoxParameters(),
    });

    var getSkyBox1Parameters = function() {
        var result = {
            'radius': {
                value: 5000,
                name: "半径",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                value: 'skybox.jpg',
                name: "贴图",
                type: make.Default.PARAMETER_TYPE_IMAGE,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    //沙漠的天空盒
    make.Default.register('twaver.scene.skybox1', function(json, callback) {
        var image = getSceneImagePath(json.image);
        var radius = json.radius;
        var skyball = new mono.Sphere(radius, 30, 30);
        skyball.s({
            'm.texture.image': image,
            'm.side': mono.BackSide,
        });
        var cube = new mono.Cube(radius * 2, radius * 2, radius * 2);
        cube.s({
            'm.visible': false,
        });
        cube.setPositionY(-cube.getHeight() / 2);
        var comboUp = new mono.ComboNode([skyball, cube], ['-']);
        cube.setPositionY(cube.getHeight() / 2);
        skyball.setScaleY(0.1);
        var comboDown = new mono.ComboNode([skyball, cube], ['-']);
        var skybox = new mono.ComboNode([comboUp, comboDown], ['+']);
        var boundingBox = skybox.getBoundingBox();
        skybox.setClient('type', 'parkSkybox');
        if (callback) callback(skybox);
        return skybox;
    }, {
        name: "天空盒",
        description: '天空盒描述',
        category: '场景模型',
        type: 'scene',
        icon: getSceneIconPath('skybox1.png'),
        sdkCategory: 'parkSkybox',
        modelDefaultParameters: getSkyBox1Parameters(),
    });


    var getDataCenterParameters = function() {
        var result = {
            'scaleX': {
                value: 60,
                name: "X轴缩放",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'scaleY': {
                value: 40,
                name: "Y轴缩放",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'image': {
                value: 'pin1.png',
                name: "图片",
                type: make.Default.PARAMETER_TYPE_NUMBER,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        return result;
    }

    make.Default.register('twaver.scene.datacenter', function(json, callback) {
        var position = json.position || [0, 0, 0];
        var x = position[0],
            y = position[1],
            z = position[2];
        var image = getSceneImagePath(json.image),
            scaleX = json.scaleX,
            scaleY = json.scaleY;
        var pin = new mono.Billboard();
        pin.s({
            'm.texture.image': image,
            'm.alignment': mono.BillboardAlignment.bottomCenter,
            'm.depthTest': false,
        });
        pin.setScale(scaleX, scaleY, 1);
        pin.p(x, y, z);
        pin.setClient('type', 'datacenter');
        return pin;
    }, {
        name: "数据中心",
        description: '数据中心描述',
        icon: getSceneIconPath('datacenter.png'),
        category: '场景模型',
        type: 'scene',
        sdkCategory: 'datacenter',
        modelDefaultParameters: getDataCenterParameters(),
    });

    make.Default.copy('twaver.scene.datacenter2', 'twaver.scene.datacenter', { 'image': 'pin2.png' }, { icon: getSceneIconPath('datacenter2.png') });
    make.Default.copy('twaver.scene.datacenter3', 'twaver.scene.datacenter', { 'image': 'pin3.png' }, { icon: getSceneIconPath('datacenter3.png') });

    //---------------园区，大楼----------------//


    var getSceneParameters = function() {
        var params = getSkyBox1Parameters();
        var result = {
            'skyboxId': {
                value: 'twaver.scene.skybox1',
                name: "天空盒ID",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'skyboxRadius': params.radius,
            'skyboxPosition': params.position,
            'skyboxRotation': params.rotation,
            'showLogo': {
                value: true,
                name: '是否显示logo',
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            },
            'showSkybox': {
                value: 'true',
                name: "是否显示天空盒",
                type: make.Default.PARAMETER_TYPE_STRING,
                propertyType: make.Default.PARAMETER_PROPERTY_TYPE_FIELD
            }
        }
        var pr = getPRParameters();
        make.Default.copyProperties(pr, result);
        result.skyboxPosition.value = [0, 1200, 0];
        return result;
    }

    make.Default.registerObj('twaver.scene.tree', 'tree', './model/scene/obj/tree/');

    make.Default.registerObj('twaver.scene.bigtree', 'dashu', './model/scene/obj/shu/', {
        name: "大树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('smalltree.png'),
        sdkCategory: 'park',

    });
    make.Default.registerObj('twaver.scene.smalltree', 'xiaoshu', './model/scene/obj/shu/', {
        name: "小树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('smalltree.png'),
        sdkCategory: 'park',

    });

    make.Default.registerObj('twaver.scene.weilan', 'weiqiang', './model/scene/obj/weiqiang/', {
        name: "围栏",
        description: '围栏描述',
        category: '场景模型',
        type: 'weilan',
        icon: getSceneIconPath('smalltree.png'),
        sdkCategory: 'park',
    });


    // 园区内的摄像头，在电杆上
    make.Default.registerObj('twaver.scene.gardenCamera', 'camera', './model/scene/obj/camera/');
    //园区大门的门禁系统
    make.Default.registerObj('twaver.scene.gate', 'menjin', './model/scene/obj/gate/');

    var getBuildingEvnMap = function(newObject) {
        var envmap = this.getEnvMap("envmap5");
        console.log("AAAA");
        var descendants = newObject.getDescendants();
        descendants.forEach(function(descendant) {
            console.log(descendant.getStyle('m.texture.image'), 'texture');
            descendant.setStyle('m.envmap.image', envmap);
        });
        return newObject;
    }

    make.Default.registerObj('twaver.scene.bigtree2', 'dashu', './model/scene/obj/dashu/', {
        name: "大树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('bigtree.png'),
        sdkCategory: 'park',

    });
    make.Default.registerObj('twaver.scene.tree2', 'guanmu', './model/scene/obj/guanmu/', {
        name: "大树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('bigtree.png'),
        sdkCategory: 'park',

    });
    make.Default.registerObj('twaver.scene.tree3', 'huangshu', './model/scene/obj/huangshu/', {
        name: "黄树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('smalltree.png'),
        sdkCategory: 'park',

    });
    make.Default.registerObj('twaver.scene.smalltree2', 'xiaoshu', './model/scene/obj/xiaoshu/', {
        name: "小树",
        description: '树描述',
        category: '场景模型',
        type: 'tree',
        icon: getSceneIconPath('smalltree.png'),
        sdkCategory: 'park',

    });

    var registerSceneModel = function(showSkybox, skyboxId, skyboxRadius, skyboxPositionY, id, groundId, size, showLogo, logoId, logoPosition, treePos, buildingPos, sdkCategory, cubeRotation) {
        var getCustomSceneParameters = function() {
            var result = getSceneParameters();
            result.showSkybox.value = showSkybox;
            result.skyboxId.value = skyboxId || 'twaver.scene.skybox';
            result.skyboxRadius.value = skyboxRadius;
            result.skyboxPosition.value = [0, skyboxPositionY, 0];
            return result;
        }
        make.Default.register(id, function(json, callback) {
            var position = json.position || [0, 0, 0];
            var x = position[0],
                y = position[1],
                z = position[2];
            var rotation = make.Default.getRsByDs(json.rotation) || [0, 0, 0];
            var scale = json.scale || [1, 1, 1];
            var objs = [groundId];
            var showSkybox = json.showSkybox;
            if (showSkybox) {
                objs.push({
                    id: json.skyboxId,
                    radius: json.skyboxRadius,
                    image: json.skyboxImage,
                    position: json.skyboxPosition,
                    rotation: json.skyboxRotation
                });
            }
            if (showLogo) {
                objs.push({ id: logoId, position: logoPosition });
            }

            var trees = treePos;
            for (var i = 0; i < trees.length; i++) {
                var tree = trees[i];
                var id = tree.id;
                var treeScale = tree.scale || [1, 1, 1];
                var positions = tree.positions;
                var rotations = tree.rotations;
                for (var j = 0; j < positions.length; j++) {
                    if (rotations && rotations.length > 0) var rotation1 = rotations[j];
                    objs.push({ id: id, position: positions[j], scale: treeScale, rotation: rotation1 });
                }
            }

            var cube;
            if (json.dcId) {
                var rot = cubeRotation || [0, 0, 0];
                cube = new mono.Cube(size[0], 0, size[1]);
                cube.s({
                    'top.m.texture.image': '../theme/map/' + json.dcId + '/12.jpg',
                    // 'top.m.texture.flipX': true,
                    // 'top.m.texture.flipY': true,
                    'm.visible': false,
                });
                cube.setClient('type', 'mask');
                cube.setPositionY(350);
                cube.setRotation(rot[0], rot[1], rot[2]);
            }
            var objects = make.Default.load(objs, callback);
            if (objects && objects.length > 0) {
                var first = objects[0],
                    object;
                for (var i = 1; i < objects.length; i++) {
                    object = objects[i];
                    object.setParent(first);
                }
                if (cube) cube.setParent(first);
                first.setPosition(position[0], position[1], position[2]);
                first.setRotation(rotation[0], rotation[1], rotation[2]);
                first.setScale(scale[0], scale[1], scale[2]);
                return first;
            }
            return null;
        }, {
            name: "园区",
            description: '园区描述',
            category: '场景模型',
            type: 'scene',
            async: true,
            buildings: buildingPos,
            sdkCategory: sdkCategory,
            modelDefaultParameters: getCustomSceneParameters(),
        });
    }

    var sceneObj = window.sceneObjects || {};
    for (var i in sceneObj) {
        var scene = sceneObj[i];
        var buildings = scene.buildings;
        if (buildings && buildings.length > 0) {
            for (var j = 0; j < buildings.length; j++) {
                var building = buildings[j];
                make.Default.registerObj(building.id, building.name, building.path);
            }
        }
        var trees = scene.trees;
        if (trees && trees.length > 0) {
            for (var j = 0; j < trees.length; j++) {
                var tree = trees[j];
                make.Default.registerObj(tree.id, tree.name, tree.path);
            }
        }
        var logo = scene.logo;
        if (logo) {
            make.Default.registerObj(logo.id, logo.name, logo.path);
            var logoPosition = logo.position;
            var logoId = logo.id;
        }
        var yuanqu = scene.yuanqu;
        var merged = yuanqu.merged;
        if (merged == false) {
            make.Default.registerObj(yuanqu.id, yuanqu.name, yuanqu.path, {}, false, 0, false);
        } else {
            make.Default.registerObj(yuanqu.id, yuanqu.name, yuanqu.path);
        }
        var groundId = yuanqu.id;
        var size = yuanqu.size;
        var cubeRotation = yuanqu.cubeRotation;

        var showSkybox = scene.showSkybox;
        if (!(showSkybox == false)) showSkybox = true;
        var skyboxId = scene.skyboxId;
        var skyboxRadius = scene.skyboxRadius;
        var skyboxPositionY = scene.skyboxPositionY;
        var treePosition = scene.treePosition;
        var buildingPosition = scene.buildingPosition;

        var sdkCategory = scene.sdkCategory || 'park';
        var showLogo = scene.showLogo;
        if (logo && showLogo != false) showLogo = true;
        registerSceneModel(showSkybox, skyboxId, skyboxRadius, skyboxPositionY, i, groundId, size, showLogo, logoId, logoPosition, treePosition, buildingPosition, sdkCategory, cubeRotation);
    }

})
(window);