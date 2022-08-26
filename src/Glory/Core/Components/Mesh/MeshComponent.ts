import { Component } from "../Component";
import { GameObject } from "../GameObject";
import * as BABYLON from "@babylonjs/core"

export class MeshComponent extends Component{
  protected mesh: any;

  public position: BABYLON.Vector3;
  public rotation: BABYLON.Vector3;

  public meshName: String;

  constructor(gameObject: GameObject, name: String){
    super(name, gameObject);
    this.meshName = name;

    this.createMesh();
  }

  createMesh(){
    this.mesh = BABYLON.MeshBuilder.CreateBox("kot");
  }

  public dispose() {
    this.mesh.dispose();
  }
}