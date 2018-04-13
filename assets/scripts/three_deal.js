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
        positions1: [cc.Vec2],//车侧窗
        positions2: [cc.Vec2],//车体
        positions3: [cc.Vec2],//车前窗
        positions4: [cc.Vec2],//车前大轮
        positions5: [cc.Vec2],//车前小轮
        positions6: [cc.Vec2],//车前瓦盖
        positions7: [cc.Vec2],//车横杠
        positions8: [cc.Vec2],//车后大轮
        positions9: [cc.Vec2],//车后小轮
        positions10: [cc.Vec2],//车后瓦盖
        color1:cc.Color,
        color2:cc.Color,
        color3:cc.Color,
        color4:cc.Color,
        color5:cc.Color,
        color6:cc.Color,
        color7:cc.Color,
        color8:cc.Color,
        color9:cc.Color,
        color10:cc.Color,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.positions1 = [new cc.Vec2(410.1226501464844,355.914306640625),new cc.Vec2(447.7985534667969,356.125244140625),new cc.Vec2(460.2165832519531,310.7774658203125),new cc.Vec2(410.3726501464844,308.4571533203125)];
        this.positions2 = [new cc.Vec2(379.77099609375,380.8284912109375),new cc.Vec2(382.23193359375,385.1487731933594),new cc.Vec2(387.6147766113281,387.8323974609375),new cc.Vec2(481.3650817871094,387.2816162109375),new cc.Vec2(485.19317626953125,383.6487731933594),//此处分隔
            new cc.Vec2(484.2205810546875,370.4416809082031),new cc.Vec2(486.0564880371094,356.1682434082031),new cc.Vec2(490.4549865722656,338.56658935546875),new cc.Vec2(499.5565490722656,323.9962463378906),new cc.Vec2(505.8924865722656,313.8360595703125),
            new cc.Vec2(515.1425170898438,303.4297790527344),new cc.Vec2(520.783203125,293.36724853515625),new cc.Vec2(636.5960083007812,293.0117492675781),new cc.Vec2(641.5726318359375,280.3086242675781),new cc.Vec2(643.8968505859375,267.56243896484375),new cc.Vec2(640.5765380859375,254.99209594726562),
            new cc.Vec2(627.474853515625,263.48040771484375),new cc.Vec2(620.2327270507812,263.71478271484375),new cc.Vec2(608.240478515625,263.1991882324219),new cc.Vec2(597.404541015625,259.62884521484375),new cc.Vec2(587.7013549804688,253.2616424560547),new cc.Vec2(581.3810424804688,246.1248779296875),
            new cc.Vec2(579.1701049804688,242.0701904296875),new cc.Vec2(585.7247924804688,235.36312866210938),new cc.Vec2(480.91583251953125,235.72251892089844),new cc.Vec2(479.0252380371094,235.72251892089844),new cc.Vec2(474.49005126953125,250.8944549560547),new cc.Vec2(481.2361755371094,254.7342987060547),
            new cc.Vec2(487.4080810546875,261.16400146484375),new cc.Vec2(481.0916442871094,274.1523132324219),new cc.Vec2(467.9704895019531,285.4961242675781),new cc.Vec2(450.548583984375,293.87896728515625),new cc.Vec2(429.6188049316406,296.73834228515625),new cc.Vec2(413.8023681640625,294.6523742675781)
            ,new cc.Vec2(391.5327453613281,290.15240478515625),new cc.Vec2(378.63427734375,281.26953125),new cc.Vec2(379.77099609375,380.8284902109375),new cc.Vec2(410.1226501464844,355.914306640625),new cc.Vec2(410.3726501464844,308.4571533203125) ,new cc.Vec2(460.2165832519531,310.7774658203125),new cc.Vec2(447.7985534667969,356.125244140625)
            ,new cc.Vec2(410.1226501464844,355.914307640625),new cc.Vec2(379.77099609375,380.8284912109375)];

        this.drawCar(0); 
        // this.schedule(this.drawCar1, 0.1,1);
        // this.schedule(this.drawCar0, 1,1);
    },

    start () {
        var self = this;
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            
            console.log("---on ---"+event.getLocationX()+"---y="+event.getLocationY());
            //如果在圆内
            if(utils.isInner(event.getLocation(),self.positions1)){
                self.fillCar(1,Global.currentColor);
                self.color1 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions2)){
                self.fillCar(2,Global.currentColor);
                self.color2 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions3)){
                self.fillCar(3,Global.currentColor);
                self.color3 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions4)){
                self.fillCar(4,Global.currentColor);
                self.color4 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions5)){
                self.fillCar(5,Global.currentColor);
                self.color5 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions6)){
                self.fillCar(6,Global.currentColor);
                self.color6 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions7)){
                self.fillCar(7,Global.currentColor);
                self.color7 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions8)){
                self.fillCar(8,Global.currentColor);
                self.color8 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions9)){
                self.fillCar(9,Global.currentColor);
                self.color9 = Global.currentColor;
                self.isAllRight();
            }else if(utils.isInner(event.getLocation(),self.positions10)){
                self.fillCar(10,Global.currentColor);
                self.color10 = Global.currentColor;
                self.isAllRight();
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
    // update (dt) {},
    drawCar: function (i,color) {
        // var group = this.addComponent('R.group');

        // 车窗 let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'

        
        

        let pathStrings1 = ['M-19,-5 L-11,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'+
        'M-7,-24 a1,1 0,0 0,-1 -1 L-29,-25 a1,1 0,0 0,-1 1 L-30,15'+
        'M-7,-24 C-7.1,-8 -2,-2 0,0 C2,-7 -5,-24 -7,-24'+
        'M30,22 L30,1 a1,1 0,0 0,-1 -1 L0,0'+
        // 'M30,1 C38,0.8 35,20.7 35,25'+
        'M17,28 C17,18 33,18 33,28 '+
        'M25,25 C28.8,25 32.5,28.7 32.5,32.5 C32.5,36.3 28.8,40 25,40 C21.2,40 17.5,36.3 17.5,32.5 C17.5,28.7 21.2,25 25,25'+
        'M25,30 C26.27,30 27.5,31.23 27.5,32.5 C27.5,33.77 26.27,35 25,35 C23.73,35 22.5,33.77 22.5,32.5 C22.5,31.23 23.73,30 25,30'+
        'M32.5,30 C41.6,29.6 41.6,34.7 32.5,35'+
        // 'M-30,15 C-21.3,8.5 -7,8.8 0,15 C7,15.3 7,21.2 0,18 C-7,11.8 -21.3,11.5 -30,18 C-35.6,22.5 -37.8,15.8 -30,15'+
        'M-15,15 C-8.6,15 -2.5,21.1 -2.5,27.5 C-2.5,33.9 -8.6,40 -15,40 C-21.4,40 -27.5,33.9 -27.5,27.5 C-27.5,21.1 -21.4,15 -15,15'+
        'M-15,25 C-13.73,25 -12.5,26.23 -12.5,27.5 C-12.5,28.77 -13.73,30 -15,30 C-16.27,30 -17.5,28.77 -17.5,27.5 C-17.5,26.23 -16.27,25 -15,25'+
        'M17.5,30 L-3.2,30'+
        'M17.5,35 L-5,35'+
        'M-27,30 L-30,30'+
        'M-25,35 L-30,35'+
        'M-30,30 C-38.6,30 -38.1,35 -30,35'
    ];
       let pathStrings=['M149.581765,130.83259 L148.748421,227.500315 M95.414501,244.167165 L95.414501,245.000508 M149.581763,130.832585 c0,-7.500082 7.500082,-7.500082 7.086623,-8.331241 M155.415161,122.49916 L249.582863,121.665818'+
        'M247.082836,121.665818 c9.166767,-0.833342 9.166767,5.833397 8.753305,5.002239 M292.083331,215.83352 L410.417966,214.166835 M255.416261,124.999188 c-5.833397,48.333865 37.500412,90.00099 37.086949,89.169829 M256.249603,125.83253 c45.833837,38.333755 39.167097,88.334305 38.753634,87.503144'+
        'M181.248778,151.666148 L181.248778,202.500036 M182.08212,200.833355 L232.082672,200.000013 M182.082121,153.332833 L218.749191,152.49949 M218.749191,152.49949 L232.082671,200.000013 M407.084596,213.333493c15.000165,27.500302 2.500027,43.33381 2.086561,42.502648'+
        'M416.334389,289.16766 A28,28 0,0 1,360.334389 289.16766 M416.334389,289.16766 A28,28 0,0 0,360.334389 289.16766'+
        'M396.334389,289.16766 A8,8 0,0 1,380.334389 289.16766 M396.334389,289.16766 A8,8 0,0 0,380.334389 289.16766'+
        'M248.748971,277.917537 A50,50 0,0 1,148.748971 277.917537 M248.748971,277.917537 A50,50 0,0 0,148.748971 277.917537 '+
        'M208.748971,277.917537 A10,10 0,0 1,188.748971 277.917537 M208.748971,277.917537 A10,10 0,0 0,188.748971 277.917537 '+
        'M250.082891,277.500865 L361.250758,278.334208 M249.249548,287.500975 L359.584073,288.334318'+
        'M132.914913,257.500645 c4.166712,-24.166932 30.00033,-38.333755 30.00033,-36.66707 M162.915244,220.000233 c44.367734,-12.500142 50.821222,-5.833399 50.420987,-6.664561'+
        'M213.749136,213.333493 c37.500412,7.500082 45.833837,35.000385 45.420375,34.169223'+
        'M132.914914,252.500592 c4.094556,19.434267 18.425501,12.146417 17.917627,10.934953'+
        'M258.749631,246.667193 c-1.666685,10.833452 -14.166822,9.166767 -14.580284,8.335605'+
        'M351.250644,265.834067 c35.949718,-38.734158 60.914799,-9.390099 60.419338,-10.56079 M407.917938,250.833904 c21.045967,10.294902 16.615237,29.597843 16.065655,28.314347'+
        'M350.417295,265.000731 c0,11.310178 14.036847,13.195207 12.876111,11.315109'+
        'M425.418131,277.500865 c-3.33337,8.333425 -10.833452,1.666685 -11.246919,0.835522'
    ];

            // let i = 0;
        let self = this;
        // console.log("--------------------3-----"+i);
        function animate() {
            if(i >= pathStrings.length){
                return 0;
            }
            // var path = group.addPath();
            let path = self.addComponent('R.path');
            // console.log("--------------------2-----"+i);
            path.strokeColor = "#5E5D5A";
            path.lineWidth = 2;
            // if(color !== undefined){
            //     path.fillColor = color;
            // }
            // if(i%2 === 0){
            //     path.fillColor = '#0000FF';
            // }else{
            //     path.fillColor = '#00FF00';
            // }
            // path.fillColor = '#0000FF';
            // path.showHandles = true;
            // console.log("---------------------1----"+self.path+"--"+path);

            // path.scale = cc.v2(0.3, -0.3);
            path.scale = cc.v2(1, -1);

            self.path = path;
            // console.log("---------------------4----"+i);
            let pathString = pathStrings[i];
            path.path(pathString);

            if(i===0){
                path.center(0, 0);
            }else if(i===1){
                path.center(0, 0);
            }else if(i===2){
                path.center(0, 0);
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

    fillCar: function (i,color) {
        // var group = this.addComponent('R.group');

        // 车窗 let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'

        
        
        let pathStrings = ['M410.1226501464844,355.914306640625 L447.7985534667969,356.125244140625 460.2165832519531,310.7774658203125 410.3726501464844,308.4571533203125 410.1226501464844,355.914306640625',
        // 'M410.1226501464844,355.914306640625 L410.3726501464844,308.4571533203125 460.2165832519531,310.7774658203125 447.7985534667969,356.125244140625 410.1226501464844,355.914316640625 379.77099609375,380.8284912109375 '+
        // '382.23193359375,385.1487731933594 387.6147766113281,387.8323974609375 481.3650817871094,387.2816162109375 485.19317626953125,383.6487731933594 484.2205810546875,370.4416809082031 486.0564880371094,356.1682434082031 490.4549865722656,338.56658935546875 499.5565490722656,323.9962463378906'+
        // 'M505.8924865722656,313.8360595703125 515.1425170898438,303.4297790527344 520.783203125,293.36724853515625 636.5960083007812,293.0117492675781 641.5726318359375,280.3086242675781 643.8968505859375,267.56243896484375 640.5765380859375,254.99209594726562'+ 
        //  'M627.474853515625,263.48040771484375 620.2327270507812,263.71478271484375 608.240478515625,263.1991882324219 597.404541015625,259.62884521484375 587.7013549804688,253.2616424560547 581.3810424804688,246.1248779296875'+
        //  'M579.1701049804688,242.0701904296875 585.7247924804688,235.36312866210938 480.91583251953125,235.72251892089844 479.0252380371094,235.72251892089844 474.49005126953125,250.8944549560547 481.2361755371094,254.7342987060547'+
        //  'M487.4080810546875,261.16400146484375 481.0916442871094,274.1523132324219 467.9704895019531,285.4961242675781 450.548583984375,293.87896728515625 429.6188049316406,296.73834228515625 413.8023681640625,294.6523742675781'+
        //   'M391.5327453613281,290.15240478515625 378.63427734375,281.26953125 '
        'M410.1226501464844,355.914306640625 L410.3726501464844,308.4571533203125 378.63427734375,281.26953125 379.77099609375,380.8284912109375 410.1226501464844,355.914306640625'
        ];


            // let i = 0;
        let self = this;
        console.log("--------------------fillCar-----"+i+'--'+color);
        // function animate() {
            if(i > pathStrings.length){
                return 0;
            }
            // var path = group.addPath();
            let path = self.addComponent('R.path');
            path.strokeColor = '#00000000';
            // path.strokeColor = '#0000FF';
            path.lineWidth = 0.1;
            if(color !== undefined){
                path.fillColor = color;
            }
            // path.fillColor = '#0000FF';
            // path.showHandles = true;

            path.scale = cc.v2(1, 1);

            self.path = path;
            let pathString = pathStrings[i-1];
            path.path(pathString);

            if(i===1){
                path.center(-55, 48);
            }else if(i===2){
                path.center(-95, 48);
            // }else if(i===2){
            //     path.center(-40, 0);
            }
            

            i = ++i % pathStrings.length;

            self.time = 0;
            self.pathLength = path.getTotalLength();
           
            path.dashOffset = self.pathLength;
            path.dashArray = [self.pathLength];
        // }
        // animate();
    },
    isAllRight: function(){
        // if(!this.innerColor.equals(cc.Color.BLACK) && !this.outerColor1.equals(cc.Color.BLACK)
        // && !this.outerColor2.equals(cc.Color.BLACK)
        // && !this.outerColor3.equals(cc.Color.BLACK)
        // && !this.outerColor4.equals(cc.Color.BLACK) 
        //    && !this.innerColor.equals(this.outerColor1)
        //    && !this.innerColor.equals(this.outerColor2)
        //    && !this.innerColor.equals(this.outerColor3)
        //    && !this.innerColor.equals(this.outerColor4)
        //    && !this.outerColor1.equals(this.outerColor2)
        //    && !this.outerColor1.equals(this.outerColor4)
        //    && !this.outerColor2.equals(this.outerColor3)
        //    && !this.outerColor4.equals(this.outerColor3)){
        //     cc.director.loadScene("gameover");
        //    }
    },
});
