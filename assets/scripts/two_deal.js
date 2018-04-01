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
        innerPositions: [cc.Vec2],
        outerPositions1: [cc.Vec2],
        outerPositions2: [cc.Vec2],
        outerPositions3: [cc.Vec2],
        outerPositions4: [cc.Vec2],
        innerColor:cc.Color,
        outerColor1:cc.Color,
        outerColor2:cc.Color,
        outerColor3:cc.Color,
        outerColor4:cc.Color,
    },


    onLoad() {
        console.log("---1 ---");
        this.innerPositions = [new cc.Vec2(576,359),new cc.Vec2(608,352),new cc.Vec2(627,341),new cc.Vec2(647,317),new cc.Vec2(656,295),new cc.Vec2(657,276),new cc.Vec2(654,257),new cc.Vec2(646,235),new cc.Vec2(635,222),new cc.Vec2(617,208),new cc.Vec2(596,201),new cc.Vec2(576,197),new cc.Vec2(555,201),new cc.Vec2(538,209),new cc.Vec2(521,220),new cc.Vec2(512,233),new cc.Vec2(501,244),new cc.Vec2(499,261),new cc.Vec2(497,276),new cc.Vec2(499,297),new cc.Vec2(508,316),new cc.Vec2(521,334),new cc.Vec2(539,344),new cc.Vec2(558,356),new cc.Vec2(577,259)];
        // this.leftPositions = [new cc.Vec2(567,340),new cc.Vec2(551,337)];
        this.outerPositions1 = [new cc.Vec2(577,197),new cc.Vec2(609,203),new cc.Vec2(631,219),new cc.Vec2(647,237),new cc.Vec2(656,259),new cc.Vec2(657,278),new cc.Vec2(736,278),new cc.Vec2(733,251),new cc.Vec2(727,227),new cc.Vec2(717,202),new cc.Vec2(704,180),new cc.Vec2(685,156),new cc.Vec2(662,143),new cc.Vec2(640,128),new cc.Vec2(604,122),new cc.Vec2(577,119)];
        this.outerPositions2 = [new cc.Vec2(656,278),new cc.Vec2(654,301),new cc.Vec2(644,320),new cc.Vec2(627,340),new cc.Vec2(611,349),new cc.Vec2(591,357),new cc.Vec2(577,360),new cc.Vec2(577,438),new cc.Vec2(609,434),new cc.Vec2(634,427),new cc.Vec2(656,416),new cc.Vec2(680,400),new cc.Vec2(704,375),new cc.Vec2(718,354),new cc.Vec2(729,327),new cc.Vec2(734,303),new cc.Vec2(736,278),new cc.Vec2(657,279)];
        this.outerPositions3 = [new cc.Vec2(577,359),new cc.Vec2(547,353),new cc.Vec2(523,338),new cc.Vec2(510,325),new cc.Vec2(500,301),new cc.Vec2(496,278),new cc.Vec2(417,277),new cc.Vec2(420,310),new cc.Vec2(432,341),new cc.Vec2(446,373),new cc.Vec2(468,393),new cc.Vec2(490,408),new cc.Vec2(518,425),new cc.Vec2(548,434),new cc.Vec2(577,438),new cc.Vec2(577,360)];
        this.outerPositions4 = [new cc.Vec2(496,276),new cc.Vec2(499,254),new cc.Vec2(509,237),new cc.Vec2(525,218),new cc.Vec2(546,203),new cc.Vec2(577,196),new cc.Vec2(577,118),new cc.Vec2(544,119),new cc.Vec2(507,133),new cc.Vec2(476,151),new cc.Vec2(448,183),new cc.Vec2(431,208),new cc.Vec2(424,237),new cc.Vec2(418,259),new cc.Vec2(417,277),new cc.Vec2(496,277)];
 
        
        var sss = Global.currentColor;
        this.drawBike(0);
        // this.schedule(this.leftDraw1, 0.1,1);
        // this.schedule(this.leftDraw2, 0.2,1);
        // this.schedule(this.leftDraw3, 0.3,1);
        // this.schedule(this.leftDraw4, 0.4,1);
        // this.drawBike(1);
    },


    start() {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            
            console.log("---on ---"+event.getLocationX()+"---y="+event.getLocationY());
            //如果在圆内
            if(utils.isInner(event.getLocation(),self.innerPositions)){
                self.drawBike(1,Global.currentColor);
                self.innerColor = Global.currentColor;
                self.isAllRight();
                // if(!self.innerColor.equals(cc.Color.BLACK) && !self.outerColor1.equals(cc.Color.BLACK)
                // && !self.outerColor2.equals(cc.Color.BLACK)
                // && !self.outerColor3.equals(cc.Color.BLACK)
                // && !self.outerColor4.equals(cc.Color.BLACK) 
                //    && !self.innerColor.equals(self.outerColor1)
                //    && !self.innerColor.equals(self.outerColor2)
                //    && !self.innerColor.equals(self.outerColor3)
                //    && !self.innerColor.equals(self.outerColor4)){
                //        console.log("----can gogogo------------------");
                //        cc.director.loadScene("welcome");
                //    }
            }else if(utils.isInner(event.getLocation(),self.outerPositions1)){
                self.drawBike(2,Global.currentColor);
                self.outerColor1 = Global.currentColor;
                self.isAllRight();
                // if(!self.innerColor.equals(cc.Color.BLACK) && !self.outerColor1.equals(cc.Color.BLACK)
                // && !self.outerColor2.equals(cc.Color.BLACK)
                // && !self.outerColor3.equals(cc.Color.BLACK)
                // && !self.outerColor4.equals(cc.Color.BLACK) 
                //    && !self.innerColor.equals(self.outerColor1)
                //    && !self.outerColor1.equals(self.outerColor2)
                //    && !self.outerColor1.equals(self.outerColor4)){
                //        console.log("----can gogogo------------------");
                //        cc.director.loadScene("welcome");
                //    }
            }else if(utils.isInner(event.getLocation(),self.outerPositions2)){
                self.drawBike(3,Global.currentColor);
                self.outerColor2 = Global.currentColor;
                self.isAllRight();
                // if(!self.innerColor.equals(cc.Color.BLACK) && !self.outerColor1.equals(cc.Color.BLACK)
                // && !self.outerColor2.equals(cc.Color.BLACK)
                // && !self.outerColor3.equals(cc.Color.BLACK)
                // && !self.outerColor4.equals(cc.Color.BLACK) 
                //    && !self.innerColor.equals(self.outerColor2)
                //    && !self.outerColor1.equals(self.outerColor2)
                //    && !self.outerColor2.equals(self.outerColor3)){
                //        console.log("----can gogogo------------------");
                //        cc.director.loadScene("welcome");
                //    }
            }else if(utils.isInner(event.getLocation(),self.outerPositions3)){
                self.drawBike(4,Global.currentColor);
                self.outerColor3 = Global.currentColor;
                self.isAllRight();
                // if(!self.innerColor.equals(cc.Color.BLACK) && !self.outerColor1.equals(cc.Color.BLACK)
                // && !self.outerColor2.equals(cc.Color.BLACK)
                // && !self.outerColor3.equals(cc.Color.BLACK)
                // && !self.outerColor4.equals(cc.Color.BLACK) 
                //    && !self.innerColor.equals(self.outerColor3)
                //    && !self.outerColor3.equals(self.outerColor4)
                //    && !self.outerColor2.equals(self.outerColor3)){
                //        console.log("----can gogogo------------------");
                //        cc.director.loadScene("welcome");
                //    }
            }else if(utils.isInner(event.getLocation(),self.outerPositions4)){
                self.drawBike(5,Global.currentColor);
                self.outerColor4 = Global.currentColor;
                self.isAllRight();
                // if(!self.innerColor.equals(cc.Color.BLACK) && !self.outerColor1.equals(cc.Color.BLACK)
                // && !self.outerColor2.equals(cc.Color.BLACK)
                // && !self.outerColor3.equals(cc.Color.BLACK)
                // && !self.outerColor4.equals(cc.Color.BLACK) 
                //    && !self.innerColor.equals(self.outerColor4)
                //    && !self.outerColor3.equals(self.outerColor4)
                //    && !self.outerColor1.equals(self.outerColor4)){
                //        console.log("----can gogogo------------------");
                //        cc.director.loadScene("welcome");
                //    }
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

    isAllRight: function(){
        if(!this.innerColor.equals(cc.Color.BLACK) && !this.outerColor1.equals(cc.Color.BLACK)
        && !this.outerColor2.equals(cc.Color.BLACK)
        && !this.outerColor3.equals(cc.Color.BLACK)
        && !this.outerColor4.equals(cc.Color.BLACK) 
           && !this.innerColor.equals(this.outerColor1)
           && !this.innerColor.equals(this.outerColor2)
           && !this.innerColor.equals(this.outerColor3)
           && !this.innerColor.equals(this.outerColor4)
           && !this.outerColor1.equals(this.outerColor2)
           && !this.outerColor1.equals(this.outerColor4)
           && !this.outerColor2.equals(this.outerColor3)
           && !this.outerColor4.equals(this.outerColor3)){
            cc.director.loadScene("play_three");
           }
    },
    drawBike: function (i,color) {
        // var group = this.addComponent('R.group');


        // let pathStrings = ['M30.695,60.841 C30.695,60.841 22.536,74.203 8.537,67.203 C-1.234,62.317 -2.748,46.789 9.105,39.593 C25.013,29.934 37.398,56.183 31.035,55.387', 'M24.672,54.591 C24.672,54.591 15.81,54.705 18.195,50.159 C20.58,45.615 26.263,35.274 32.853,33.457 C39.443,31.639 56.733,31.306 54.895,34.593 C52.737,38.456 36.715,59.477 37.17,54.931 C37.624,50.387 48.305,29.822 42.056,27.207 C35.806,24.593 23.875,25.389 21.83,20.162 C19.784,14.935 28.207,3.159 39.669,4.709 C52.281,6.413 51.146,10.959 54.668,14.254 C58.19,17.55 66.144,11.3 61.826,5.504 C57.508,-0.289 49.894,-2.45 50.236,6.527 C50.578,15.504 47.396,28.003 52.281,28.684 C57.167,29.366 66.824,31.183 68.302,27.547 C69.779,23.911 60.803,21.07 60.12,32.775 C59.438,44.478 67.507,33.002 76.597,44.023 C85.687,55.044 78.626,66.354 69.779,69.134 C61.826,71.634 54.195,66.827 50.804,60.044 C46.031,50.499 55.12,29.706 64.894,54.249'];
        let pathStrings = [
            'M0,-20 C11.04,-20 20,-11.04 20,0 C20,11.05 11.05,20 0,20 C-11.04,20 -20,11.04 -20,0 C-20,-11.04 -11.04,-20 0,-20 M0,-20 C11.04,-20 20,-11.04 20,0 L20,0 40,0 C40,-22.08 22.08,-40 0,-40 L0,-40 0,-20 M20,0 C20,11.04 11.04,20 0,20 L0,20 0,40 C22.08,40 40,22.08 40,0 L40,0 20,0 M0,20 C-11.04,20 -20,11.04 -20,0 L-20,0 -40,0 C-40,22.08 -22.08,40 0,40 L0,40 0,20 M-20,0 C-20,-11.04 -11.04,-20 0,-20 L0,-20 0,-40 C-22.08,-40 -40,-22.08 -40,0 L-40,0 -20,0',
        'M0,-20 C11.04,-20 20,-11.04 20,0 C20,11.05 11.05,20 0,20 C-11.04,20 -20,11.04 -20,0 C-20,-11.04 -11.04,-20 0,-20',
        'M0,-20 C11.04,-20 20,-11.04 20,0 L20,0 40,0 C40,-22.08 22.08,-40 0,-40 L0,-40 0,-20',
        'M0,-20 C11.04,-20 20,-11.04 20,0 L20,0 40,0 C40,-22.08 22.08,-40 0,-40 L0,-40 0,-20',
        'M0,-20 C11.04,-20 20,-11.04 20,0 L20,0 40,0 C40,-22.08 22.08,-40 0,-40 L0,-40 0,-20',
        'M0,-20 C11.04,-20 20,-11.04 20,0 L20,0 40,0 C40,-22.08 22.08,-40 0,-40 L0,-40 0,-20'];
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
            }if(i===1){
                path.center(0, 0);
            }else if(i===2){
                path.rotation = 90;
                path.center(80, -80);
            }else if(i===3){
                path.rotation = 0;
                path.center(80, 80);
            }else if(i===4){
                path.rotation = -90;
                path.center(-80, 80);
            }else if(i===5){
                path.rotation = 180;
                path.center(-80, -80);
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

    leftDraw1: function(){
        this.drawBike(1);
    },
    leftDraw2: function(){
        this.drawBike(2);
    },
    leftDraw3: function(){
        this.drawBike(3);
    },
    leftDraw4: function(){
        this.drawBike(4);
    },
});
