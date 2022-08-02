import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";

import { World } from "./world";
import { Client } from "./Multiplayer/client/client";
import { ThirdPersonCamera } from "./ThirdPersonCamera";
import * as Glory from "./Glory";

export class App {
    public world: World;
    public camera: ThirdPersonCamera;
    public inputManager: Glory.InputManager;

    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new BABYLON.Engine(canvas, true);
        var scene = new BABYLON.Scene(engine);

        var camera: BABYLON.ArcRotateCamera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        var light1: BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        light1.intensity = 3;

        // //position camera on the corder of the ground
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.setPosition(new BABYLON.Vector3(0, 2, -5));

        this.inputManager = new Glory.InputManager();
        this.world = new World(scene, this.inputManager, engine);
        this.camera = new ThirdPersonCamera(scene);
        
        // this.camera.createFollowCamera(this.world.players[0].getMesh());

        

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            this.inputManager.init(ev);
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.keyCode === 73) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }

            console.log("Key :", this.inputManager.getKey());
            console.log("Horizontal: " + this.inputManager.Horizontal());
            console.log("Vertical: " + this.inputManager.Vertical());
        });

        window.addEventListener("keyup", (ev) => {
            this.inputManager.reset();
        });
        
        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
            engine.resize();

            this.world.Update();
        });
    }
}
new App();

