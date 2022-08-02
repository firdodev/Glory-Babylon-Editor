import * as BABYLON from '@babylonjs/core';


export class ThirdPersonCamera{
    private scene;

    constructor(scene){
        this.scene = scene;
    }

    //Create a third person camera
    public createFollowCamera(target: BABYLON.Mesh){
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, target.position, this.scene);
        camera.attachControl(this.scene.getEngine().getRenderingCanvas(), true);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.setPosition(new BABYLON.Vector3(0, 2, -5));
    }


}