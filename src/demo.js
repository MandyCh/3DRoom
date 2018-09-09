export var demo = {
    create2DPath: function(pathData) {
        var path;
        for (var j = 0; j < pathData.length; j++) {
            var point = pathData[j];
            if (path) {
                path.lineTo(point[0], point[1], 0);
            } else {
                path = new mono.Path();
                path.moveTo(point[0], point[1], 0);
            }
        }
        return path;
    },
    create3DPath: function(pathData) {
        var path;
        for (var j = 0; j < pathData.length; j++) {
            var point = pathData[j];
            if (path) {
                path.lineTo(point[0], point[1], point[2]);
            } else {
                path = new mono.Path();
                path.moveTo(point[0], point[1], point[2]);
            }
        }
        return path;
    },
    // createWall: function(path, thick, height, insideColor, outsideColor, topColor) {
    //     var wall = new mono.PathCube(path, thick, height);
    //     wall.s({
    //         'outside.m.color': outsideColor,
    //         'inside.m.type': 'basic',
    //         'inside.m.color': insideColor,
    //         'aside.m.color': outsideColor,
    //         'zside.m.color': outsideColor,
    //         'top.m.color': topColor,
    //         'bottom.m.color': topColor,
    //         'inside.m.lightmap.image': demo.getRes('inside_lightmap.jpg'),
    //         'outside.m.lightmap.image': demo.getRes('outside_lightmap.jpg'),
    //         'aside.m.lightmap.image': demo.getRes('outside_lightmap.jpg'),
    //         'zside.m.lightmap.image': demo.getRes('outside_lightmap.jpg'),
    //     });
    //     return wall;
    // },
    // createPathObject: function(json) {
    //     var translate = json.translate || [0, 0, 0];
    //     var pathWidth = json.width;
    //     var pathHeight = json.height;
    //     var pathData = json.data;
    //     var path = this.create2DPath(pathData);
    //     var pathInsideColor = json.insideColor;
    //     var pathOutsideColor = json.outsideColor;
    //     var pathTopColor = json.topColor;

    //     var object3d = this.createWall(path, pathWidth, pathHeight, pathInsideColor, pathOutsideColor, pathTopColor);
    //     object3d.setPosition(translate[0], translate[1], -translate[2]);
    //     object3d.shadow = json.shadow;

    //     return object3d;
    // },
}