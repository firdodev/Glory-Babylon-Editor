import * as BABYLON from "@babylonjs/core";
import { Component } from "./Components";

export default class CharacterController extends Component{
    private scene;

    //Properties
    public target: BABYLON.Mesh;
    public _isGrounded;


    constructor(scene: BABYLON.Scene, target: BABYLON.Mesh){
        super();
        this.scene = scene;
        this.target = target;
    }

    public isGrounded(){
        var ray = new BABYLON.Ray(this.target.position, BABYLON.Vector3.Down());
        var hit = this.scene.pickWithRay(ray, (mesh) => {
            return mesh.isPickable;
        }
        );
        if(hit.pickedMesh){
            this._isGrounded = true;
        }
        else{
            this._isGrounded = false;
        }
    }

    public move(direction: BABYLON.Vector3){
        this.target.position.addInPlace(direction);
    }

    public jump(){
        if(this._isGrounded){
            this.target.position.y += 1;
        }
    }

    public getMesh(){
        return this.target;
    }

    public getPosition(){
        return this.target.position;
    }

    public getRotation(){
        return this.target.rotation;
    }
}