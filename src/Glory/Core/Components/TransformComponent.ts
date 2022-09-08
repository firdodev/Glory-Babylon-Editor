import { Component } from "./Component";
import { GameObject } from "./GameObject";

import * as BABYLON from "@babylonjs/core";

export class TransformComponent extends Component{
  
  public position: BABYLON.Vector3;
  public rotation: BABYLON.Vector3;
  public scale: BABYLON.Vector3;


  constructor(gameObject: GameObject){
    super("Transform", gameObject);


    this.position = BABYLON.Vector3.Zero();
    this.rotation = BABYLON.Vector3.Zero();
    this.scale = BABYLON.Vector3.Zero();

  }
}
