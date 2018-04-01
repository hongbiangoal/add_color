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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.drawCar(0);
    },

    start () {
        // cc.director.loadScene("gameover");
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

        
        
        let pathStrings = ['M-19,-5 L-12,-5 a1,1 0,0 0,1 -1 L-15,-19 a1,1 0,0 0,-1 -1 L-19,-20 a1,1 0,0 0,-1 1 L-20,-6 a1,1 0,0 0,1 1'
        ];
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
});
