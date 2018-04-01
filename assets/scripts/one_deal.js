// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var utils = require('./utils/CommonUtils');

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
        // this.schedule(this.leftDraw, 0.1,1);
        // this.drawBike(1);
    },


    start() {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            
            console.log("---on ---"+event.getLocationX()+"---y="+event.getLocationY());
            console.log("--isIn?="+utils.isInner(event.getLocation(),self.leftPositions));
            //如果在左半圆
            if(utils.isInner(event.getLocation(),self.leftPositions)){
                self.drawBike(2,Global.currentColor);
                self.leftColor = Global.currentColor;
                console.log("--self.rightColor--"+self.leftColor+"---"+self.rightColor);
                if(!self.leftColor.equals(cc.Color.BLACK) && !self.rightColor.equals(cc.Color.BLACK) 
                   && !self.leftColor.equals(self.rightColor)){
                       console.log("----can gogogo------------------");
                       cc.director.loadScene("play_two");
                   }
            }else if(utils.isInner(event.getLocation(),self.rightPositions)){
                self.drawBike(1,Global.currentColor);
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


        let pathStrings = ['M0,-20 C11.04,-20 20,-11.04 20,0 C20,11.05 11.05,20 0,20 C-11.04,20 -20,11.04 -20,0 C-20,-11.04 -11.04,-20 0,-20 L0,-20,0,20',
        'M0,-20 C11.04,-20 20,-11.04 20,0 C20,11.05 11.05,20 0,20 L0,20,0,-20',
        'M0,20 C-11.04,20 -20,11.04 -20,0 C-20,-11.04 -11.04,-20 0,-20'];
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
            path.strokeColor = "#5E5D5A";
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
                path.center(0, 0);
            }else if(i===1){
                path.center(40, 0);
            }else if(i===2){
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

});
