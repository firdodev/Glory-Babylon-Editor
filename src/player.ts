import * as BABYLON from "@babylonjs/core";
import * as Utils from "./Utils";
import * as Glory from "./Glory";

export class Player{

    private scene;
    private player: Glory.GameObject;

    constructor(scene, width, height, depth, position: BABYLON.Vector3){
        this.scene = scene;

        this.createPlayer(width, height, depth, position);
    }

    public createPlayer(width, height, depth, position: BABYLON.Vector3){
        this.player = new Glory.GameObject(this.scene, new Glory.MeshComponent(this.scene, "BOX", "player"));
        this.player.getMeshComponent().scale(new BABYLON.Vector3(width, height, depth));
        this.player.getMeshComponent().material(Utils.colorMaterial(new BABYLON.Color3(0.3, 0, 0)));
        this.player.transform().position = position;
        return this.player;
    }

    public getMesh(){
        return this.player.getMesh();
    }

    public getGameObject(): Glory.GameObject{
        return this.player;
    }
}