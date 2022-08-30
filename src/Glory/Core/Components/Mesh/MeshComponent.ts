import { Component } from "../Component";
import { GameObject } from "../GameObject";
import * as BABYLON from "@babylonjs/core"

export class MeshComponent extends Component{
  protected mesh: any;

  public meshName: String;
  public transform = {
    position: new BABYLON.Vector3,
    rotation: new BABYLON.Vector3
  };

  constructor(gameObject: GameObject, name: String, scene: BABYLON.Scene){
    super(name, gameObject);
    this.meshName = name;

    this.createMesh();
  
    this.transform = {
      
    }
  }

  createMesh(){
    this.mesh = BABYLON.MeshBuilder.CreateBox("kot");
  }

  public dispose() {
    this.mesh.dispose();
  }



}