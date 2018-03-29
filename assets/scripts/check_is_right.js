// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        // penColorR: 0,
        // penColorG: 0,
        // penColorB: 255,
        isError: false,
        // path:{
        //     default:undefined,
        //     type: R.path
        // }
        // i: 0,
        leftPositions: [cc.Vec2],
        rightPositions: [cc.Vec2],
        leftColor:cc.Color,
        rightColor:cc.Color,
    },


    onLoad() {
        console.log("---1 ---");
        this.leftPositions = [new cc.Vec2(567,340),new cc.Vec2(551,337),new cc.Vec2(539,334),new cc.Vec2(525,328),new cc.Vec2(518,322),new cc.Vec2(508,314),new cc.Vec2(500,304),new cc.Vec2(494,292),new cc.Vec2(490,280),new cc.Vec2(489,264),new cc.Vec2(489,247),new cc.Vec2(495,235),new cc.Vec2(500,222),new cc.Vec2(505,214),new cc.Vec2(515,202),new cc.Vec2(525,193),new cc.Vec2(535,188),new cc.Vec2(551,183),new cc.Vec2(558,183),new cc.Vec2(567,180)];
        // this.leftPositions = [new cc.Vec2(567,340),new cc.Vec2(551,337)];
        this.rightPositions = [new cc.Vec2(567,340),new cc.Vec2(589,337),new cc.Vec2(611,328),new cc.Vec2(623,320),new cc.Vec2(634,305),new cc.Vec2(643,289),new cc.Vec2(648,270),new cc.Vec2(648,250),new cc.Vec2(643,233),new cc.Vec2(638,222),new cc.Vec2(627,208),new cc.Vec2(616,200),new cc.Vec2(596,188),new cc.Vec2(579,182),new cc.Vec2(567,180)];
        var sss = Global.currentColor;
        this.drawBike(0);
        this.schedule(this.leftDraw, 0.1,1);
        // this.drawBike(1);
    },


    start() {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            
            console.log("---on ---"+event.getLocationX()+"---y="+event.getLocationY());
            console.log("--isIn?="+self.checkRight(event.getLocation(),self.leftPositions));
            //如果在左半圆
            if(self.checkRight(event.getLocation(),self.leftPositions)){
                self.drawBike(1,Global.currentColor);
                self.leftColor = Global.currentColor;
                console.log("--self.rightColor--"+self.leftColor+"---"+self.rightColor);
                if(!self.leftColor.equals(cc.Color.BLACK) && !self.rightColor.equals(cc.Color.BLACK) 
                   && !self.leftColor.equals(self.rightColor)){
                       console.log("----can gogogo------------------");
                       cc.director.loadScene("play_two");
                   }
            }else if(self.checkRight(event.getLocation(),self.rightPositions)){
                self.drawBike(0,Global.currentColor);
                self.rightColor = Global.currentColor;
                if(!self.leftColor.equals(cc.Color.BLACK) && !self.rightColor.equals(cc.Color.BLACK) 
                   && !self.leftColor.equals(self.rightColor)){
                       console.log("----can gogogo------------------");
                       cc.director.loadScene("play_two");
                   }
            }
        });
        
    },
    update(dt) {
        this.time += dt;
        let percent = this.time / this.duration;
        if (percent > 1) {
            return;
        }
        this.path.dashOffset = this.pathLength * (1 - percent);
        this.path._dirty = true;
    },

    drawBike: function (i,color) {
        // var group = this.addComponent('R.group');


        // let pathStrings = ['M30.695,60.841 C30.695,60.841 22.536,74.203 8.537,67.203 C-1.234,62.317 -2.748,46.789 9.105,39.593 C25.013,29.934 37.398,56.183 31.035,55.387', 'M24.672,54.591 C24.672,54.591 15.81,54.705 18.195,50.159 C20.58,45.615 26.263,35.274 32.853,33.457 C39.443,31.639 56.733,31.306 54.895,34.593 C52.737,38.456 36.715,59.477 37.17,54.931 C37.624,50.387 48.305,29.822 42.056,27.207 C35.806,24.593 23.875,25.389 21.83,20.162 C19.784,14.935 28.207,3.159 39.669,4.709 C52.281,6.413 51.146,10.959 54.668,14.254 C58.19,17.55 66.144,11.3 61.826,5.504 C57.508,-0.289 49.894,-2.45 50.236,6.527 C50.578,15.504 47.396,28.003 52.281,28.684 C57.167,29.366 66.824,31.183 68.302,27.547 C69.779,23.911 60.803,21.07 60.12,32.775 C59.438,44.478 67.507,33.002 76.597,44.023 C85.687,55.044 78.626,66.354 69.779,69.134 C61.826,71.634 54.195,66.827 50.804,60.044 C46.031,50.499 55.12,29.706 64.894,54.249'];
        let pathStrings = ['M0,-20 C11.04,-20 20,-11.04 20,0 C20,11.05 11.05,20 0,20 L0,20,0,-20','M0,20 C-11.04,20 -20,11.04 -20,0 C-20,-11.04 -11.04,-20 0,-20'];
            // let i = 0;
        let self = this;
        console.log("--------------------3-----"+i);
        function animate() {
            if(i >= pathStrings.length){
                return 0;
            }
            // var path = group.addPath();
            let path = self.addComponent('R.path');
            console.log("--------------------2-----"+i);
            path.strokeColor = cc.Color.BLACK;
            path.lineWidth = 2;
            if(color !== undefined){
                path.fillColor = color;
            }
            // path.fillColor = '#0000FF';
            // path.showHandles = true;
            console.log("---------------------1----"+self.path+"--"+path);

            path.scale = cc.v2(4, -4);

            self.path = path;
            console.log("---------------------4----"+i);
            let pathString = pathStrings[i];
            path.path(pathString);

            if(i===0){
                path.center(40, 0);
            }else{
                path.center(-40, 0);
            }
            

            i = ++i % pathStrings.length;

            self.time = 0;
            self.pathLength = path.getTotalLength();
           
            path.dashOffset = self.pathLength;
            path.dashArray = [self.pathLength];
        }

        animate();
        // this.schedule(animate, 1,1);

    },

    leftDraw: function(){
        this.drawBike(1);
    },
    /**
    * @description 射线法判断点是否在多边形内部
    * @param {Object} p 待判断的点，格式：{ x: X坐标, y: Y坐标 }
    * @param {Array} poly 多边形顶点，数组成员的格式同 p
    * @return {String} 点 p 和多边形 poly 的几何关系
    */
    checkRight: function (p, poly) {
        var px = p.x,
            py = p.y,
            flag = false

        for (var i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
            var sx = poly[i].x,
                sy = poly[i].y,
                tx = poly[j].x,
                ty = poly[j].y

            // 点与多边形顶点重合
            if ((sx === px && sy === py) || (tx === px && ty === py)) {
                return true;
            }

            // 判断线段两端点是否在射线两侧
            if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
                // 线段上与射线 Y 坐标相同的点的 X 坐标
                var x = sx + (py - sy) * (tx - sx) / (ty - sy)

                // 点在多边形的边上
                if (x === px) {
                    return true;
                }

                // 射线穿过多边形的边界
                if (x > px) {
                    flag = !flag
                }
            }
        }

        // 射线穿过多边形边界的次数为奇数时点在多边形内
        return flag
    }

});
