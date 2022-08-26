import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";


import * as Glory from "./Glory/index";


export class App {
    

    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);
        
        Glory.init(canvas);
        const scene = Glory.getScene();
        const engine = Glory.getEngine();

        var camera: BABYLON.ArcRotateCamera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light1: BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        light1.intensity = 3;

        // //position camera on the corder of the ground
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.setPosition(new BABYLON.Vector3(0, 2, -5));
        
        //DONE: Game Object create and dispose
        // const obj1 = new Glory.GameObject("obj1", scene);
        // console.log("Before Objects: ", Glory.getGameObjects());
        // obj1.dispose();
        // console.log("After objects: ", Glory.getGameObjects());

        let obj2 = new Glory.GameObject("ob1", scene);
        const obj2Mesh = new Glory.MeshComponent(obj2, "obj2Mesh");
        obj2.addComponent(obj2Mesh);
        console.log("Components: ", obj2.components);
        obj2.dispose();
        console.log(obj2);
        // console.log(obj2Mesh.createMesh());
        
        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
            engine.resize();
        });
    }
}
new App();

