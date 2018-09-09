import { cardjson, jsonObject, line, railInfo } from './carddata.js';
import { demo } from './demo.js';
console.log(demo);
console.log(line);


init();
var network;

function init(htmlElementId) {
    make.Default.path = '../'; //指定模型库的目录
    network = new mono.Network3D(); //创建3D显示视图
    var box = network.getDataBox(); //创建容器

    //镜头shezhi
    var camera = new mono.PerspectiveCamera(30, 1.5, 30, 30000); //新建镜头对象
    // var camera = network.getCamera();获取network镜头对象
    // camera.setPosition(-4000, 3000, -6000);//镜头位置
    camera.setPosition(4000, 3000, 6000); //镜头位置
    camera.lookAt(new mono.Vec3(0, 0, 0)); //设置镜头焦点
    network.setCamera(camera);
    // 交互设置
    var interaction = network.getDefaultInteraction();
    interaction.maxDistance = 20000;
    interaction.minDistance = 30;
    interaction.zoomSpeed = 3;
    interaction.panSpeed = 0.2;

    //获取包含底层、network和底层画布的div元素
    document.getElementById('main').appendChild(network.getRootView());
    //自动根据窗口大小调整network的大小
    mono.Utils.autoAdjustNetworkBounds(network, document.documentElement, 'clientWidth', 'clientHeight');

    //光源设置
    var pointLight = new mono.PointLight(0xFFFFFF, 0.1);
    pointLight.setPosition(8000, 8000, 8000);
    box.add(pointLight);
    box.add(new mono.AmbientLight('white')); //光源颜色

    network.setShowFps(true);
    /**
     * 找到第一个点击的对象
     */
    var findFirstObjectByMouse = function(network, e) {
        var objects = network.getElementsByMouseEvent(e);
        if (objects.length) {
            for (var i = 0; i < objects.length; i++) {
                var first = objects[i];
                var object3d = first.element;
                if (!(object3d instanceof mono.Billboard)) {
                    return first;
                }
            }
        }
        return null;
    }

    /**
     * 镜头移动切换
     */
    var animateCamera = function(camera, interaction, oldPoint, newPoint, onDone) {
        var offset = camera.getPosition().sub(camera.getTarget());
        var animation = new twaver.Animate({
            from: 0,
            to: 1,
            dur: 500,
            easing: 'easeBoth',
            onUpdata: function(value) {
                var x = oldPoint.x + (newPoint.x - oldPoint.x) * value;
                var y = oldPoint.y + (newPoint.y - oldPoint.y) * value;
                var z = oldPoint.z + (newPoint.z - oldPoint.z) * value;
                var target = new mono.Vec3(x, y, z);
                camera.lookAt(target);
                interaction.target = target;
                var position = new mono.Vec3().addVectors(offset, target);
                camera.setCamera(position);
            }
        })
        animation.onDone = onDone;
        animation.play();
    };

    /**
     * 双击找到第一个目标物体，切换动画
     */
    //获取network顶层dom元素
    network.getRootView().addEventListener('dblclick', function(e) {
        var firstClickObject = findFirstObjectByMouse(network, e);
        if (firstClickObject) {
            var element = firstClickObject.element;
            var oldPoint = camera.t();
            var newPoint = firstClickObject.point;
            var interaction = network.getDefaultInteraction()
            if (element.getClient('animation')) {
                make.Default.playAnimation(element, element.getClient('animation'));
            } else {
                animateCamera(camera, interaction, oldPoint, newPoint);
            }
        }
    });

    //显示坐标轴
    network.setShowAxis(true);
    network.setShowAxisText(true);


    //加载json数据
    var object3ds = make.Default.load(jsonObject);
    for (var i = 0; i < object3ds.length; i++) {
        var obj = object3ds[i];
        network.getDataBox().addByDescendant(obj); //添加数据
    }


    //接待桌
    make.Default.load('twaver.meeting.receptionDesk', function(objects) {
        objects.setPosition(700, 60, -800);
        network.getDataBox().addByDescendant(objects);
    })

    //灭火器
    make.Default.load('twaver.idc.fire', function(objects) {
        objects.setPosition(-50, 40, -950);
        network.getDataBox().addByDescendant(objects);
    })

    //空调
    var object3d = make.Default.load('twaver.idc.airCondition');
    object3d.setPosition(-800, object3d.getHeight() / 2, -900)
    network.getDataBox().addByDescendant(object3d);

    //ups 
    var object3d = make.Default.load('twaver.idc.ups');
    object3d.setPosition(-200, object3d.getHeight() / 2, -900)
    network.getDataBox().addByDescendant(object3d);

    //机柜 
    var rackNumber = 20;
    var rackWidth = 71;
    // if (severity) {
    //     var alarm = new mono.Alarm(newRack.getId(), newRack.getId(), severity);
    //     newRack.setStyle('alarm.billboard.vertical', true);
    //     newRack.alarm = alarm;
    //     box.getAlarmBox().add(alarm);
    // }
    for (var i = 0; i < rackNumber; i++) {
        var equip = make.Default.load({
            'id': 'twaver.idc.rack200',
            'label': (function() {
                var label = 'A';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1)
                return label;
            })(i)
        }); //equip is comboNode

        var equip_1 = make.Default.load({
            'id': 'twaver.idc.rack200',
            'severity': 'mono.AlarmSeverity.CRITICAL',
            'label': (function() {
                var label = 'B';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1)
                return label;
            })(i)
        });

        var equip_2 = make.Default.load({
            'id': 'twaver.idc.rack200',
            'label': (function() {
                var label = 'C';
                if (i < 9) {
                    label += '0';
                }
                label += (i + 1);
                return label;
            })(i)
        });

        equip.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 - 500 + i * rackWidth / 2);
        equip_1.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 + 500 + i * rackWidth / 2);
        equip_2.setPositionX(-rackNumber / 4 * rackWidth + rackWidth / 2 - 500 + i * rackWidth / 2);

        equip.setPositionY(100);
        equip_1.setPositionY(100);
        equip_2.setPositionY(100);
        var start = -rackNumber / 4 * rackWidth + 35
        var gap = rackWidth - 50;
        if (i % 2 == 0) {
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, -400, cardjson);
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) + 500, 0, 400, cardjson);
            creatorComboDevices(start + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, 400, cardjson);
            equip.setPositionZ(-400);
            equip_1.setPositionZ(400);
            equip_2.setPositionZ(400);
        } else {
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, -600, cardjson);
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) + 500, 0, 600, cardjson);
            creatorComboDevices(start - 35 + (50 + i / 2 * gap + (i / 2 - 1) * 50) - 500, 0, 600, cardjson);
            equip.setPositionX(equip.getX() - 35);
            equip_1.setPositionX(equip_1.getX() - 35);
            equip_2.setPositionX(equip_2.getX() - 35);
            equip.setPositionZ(-600);
            equip_1.setPositionZ(600);
            equip_2.setPositionZ(600);
        }

        network.getDataBox().addByDescendant(equip);
        network.getDataBox().addByDescendant(equip_1);
        network.getDataBox().addByDescendant(equip_2);
    }

    function creatorCards(x, y, z) {
        var cardNums = 10; //机柜宽度60-10除以卡板宽度5 ,卡板高度为50
        for (var i = 0; i < cardNums; i++) {
            var card = make.Default.load({ id: "twaver.idc.card" });
            card.setPositionX(x + (i * 5) - 22.5);
            card.setPositionY(y + 25);
            card.setPositionZ(z + 25);
            network.getDataBox().addByDescendant(card);
        }
    }


    function creatorNetWorkDevices(x, y, z, json) {
        var udevice = make.Default.load(json);
        var d = 4.445; //每u之间的差值
        var a1 = 4.445; //1u设备的高度

        for (var i = 0; i < udevice.length; i++) {
            var u = udevice[i];
            var n = i + 1;
            var sn = n * a1 + n * (n - 1) * d / 2; //等差数列求和
            u.setPositionX(x)
            u.setPositionY(50 + y + sn);
            u.setPositionZ(z)
            network.getDataBox().addByDescendant(u); //添加数据
            // console.log(u)
        }
    }

    function creatorComboDevices(x, y, z, json) {
        creatorCards(x, y, z);
        creatorNetWorkDevices(x, y, z, json)
    }


    var path1 = demo.create3DPath(line[0].data);
    var path2 = demo.create3DPath(line[1].data);
    var cable1 = new mono.PathNode(path1, 500, 2, 100);
    cable1.s({
        'm.type': 'phong',
        'm.specularStrength': 30,
        'm.color': line[0].color,
        'm.ambient': line[0].color,
        'm.texture.image': '../res/images/flow.jpg',
        'm.texture.repeat': new mono.Vec2(200, 1),
    });
    var cable2 = new mono.PathNode(path2, 200, 2);
    cable2.s({
        'm.type': 'phong',
        'm.specularStrength': 30,
        'm.color': line[1].color,
        'm.ambient': line[1].color,
        'm.texture.image': '../res/images/flow.jpg',
        'm.texture.repeat': new mono.Vec2(200, 1),
    });
    box.add(cable1);
    box.add(cable2);

    // var rail = demo.createPathObject(railInfo);
    // rail.s({
    //     'm.texture.image': '../res/images/rail.png',
    //     'm.type': 'phong',
    //     'm.transparent': true,
    //     'm.color': '#CEECF5',
    //     'm.ambient': '#CEECF5',
    //     'aside.m.visible': false,
    //     'zside.m.visible': false,
    //     'm.specularStrength': 50,
    // });
    // rail.setPositionY(263);
    // box.add(rail);


}