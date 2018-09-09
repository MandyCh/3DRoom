export var jsonObject = [
    { "id": "twaver.idc.floor", "data": [-1300, 1200, 1300, 1200, 1300, -1200, -1300, -1200, -1300, 1200] },
    { "id": "twaver.idc.glassWall2", "data": [-1300, -1200, -1300, 1200] },
    { "id": "twaver.idc.glassWall2", "data": [1300, 1200, 1300, -1200] },
    { "id": "twaver.idc.camera", "position": [-950, 250, -950] },
    {
        "id": "twaver.idc.wall2",
        "objectId": "JsonObject3836721F8BEA42F68660BE7CDD54EA10",
        'width': 2000,
        "height": 260,
        "position": [0, 0, 0],
        "depth": 2000,
        "data": [
            [-1000, -1000],
            [0, -1000],
            [0, 0],
            [1000, 0],
            [1000, 1000],
            [-1000, 1000]
        ],
        "children": [{
                "id": "twaver.idc.door",
                "position": [-800, 0, 1000],
                "width": 205,
            },

        ]
    },
    {
        "id": "twaver.idc.tv",
        "position": [-500, 156, 1020],
        "width": 205,
        "height": 200,
        "image": "tv.jpg",
    },
    {
        "id": "twaver.idc.plant",
        "position": [-1100, 60, 600],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [-1100, 60, -100],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [-1100, 60, -700],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [1100, 60, 300],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [1100, 60, 700],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [100, 60, -300],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.plant",
        "position": [100, 60, -700],
        "width": 30, //宽
        "height": 30, //高
        "picture": "plant.png", //贴图
    },
    {
        "id": "twaver.idc.post",
        "position": [50, 180, 15],
        "width": 70, //宽
        "height": 120, //高
        "image": "post.jpg", //贴图
    },
];

export var cardjson = [
    { id: 'twaver.idc.equipment1' },
    { id: 'twaver.idc.equipment2' },
    { id: 'twaver.idc.equipment3' },
    { id: 'twaver.idc.equipment4' },
    { id: 'twaver.idc.equipment5' },
    { id: 'twaver.idc.equipment6' },
]

export var line = [{
    color: '#ED5A00',
    y: 10,
    flow: 0.05,
    data: [
        [-250, 150, -400],
        [-250, 150, -300],
        [-250, 210, -300],
        [-250, 210, -400],
        [-250, 270, -400],
        [-676, 270, -400],
        [-676, 270, 400],
        [676, 270, 400],
        [676, 210, 400],
        [676, 210, 500],
        [676, 150, 500],
        [676, 150, 400],
    ]
}, {
    color: '#21CD43',
    y: 10,
    flow: -0.05,
    data: [
        [-250 + 6, 150, -400],
        [-250 + 6, 150, -300],
        [-250 + 6, 210, -300],
        [-250 + 6, 210, -400 + 6],
        [-250 + 6, 270, -400 + 6],
        [-676 + 6, 270, -400 + 6],
        [-676 + 6, 270, 400 - 6],
        [676 + 6, 270, 400 - 6],
        [676 + 6, 210, 400 - 6],
        [676 + 6, 210, 500],
        [676 + 6, 150, 500],
        [676 + 6, 150, 400],
    ]
}]

export var railInfo = {
    type: 'rail',
    data: [
        [-180, 250],
        [-400, 250],
        [-400, -250],
        [400, -250]
    ],
}