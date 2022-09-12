import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";


import * as Glory from "./Glory/index";


export class App {
    

    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.getElementById("gameView");
        
        Glory.init(canvas);
        const scene = Glory.getScene();
        const engine = Glory.getEngine();

        var camera = new Glory.Camera(scene, Glory.CameraType.ARCROTATECAMERA);
        camera.getCamera().attachControl(canvas, true);

        var light1: BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        light1.intensity = 3;

        // //position camera on the corder of the ground
        camera.getCamera().setPosition(new BABYLON.Vector3(0, 2, -5));
        
        let obj2 = new Glory.GameObject("ob1", scene);
        const obj2Mesh = new Glory.MeshComponent(obj2, "obj2Mesh", scene, Glory.MeshType.TORUS);
        obj2.addComponent(obj2Mesh);
        // console.log("Components: ", obj2.components);
        
        let obj3 = new Glory.GameObject("ob2", scene);
        obj3.transform.position.x = 2;
        const obj3Mesh = new Glory.MeshComponent(obj3, "obj3Mesh", scene, Glory.MeshType.BOX);
        obj3.addComponent(obj3Mesh);
        // console.log("Components: ", obj2.components);

        
        // camera.setTarget(obj2Mesh.getMesh());

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

