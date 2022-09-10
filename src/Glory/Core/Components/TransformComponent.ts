import { Component } from "./Component";
import { GameObject } from "./GameObject";

import * as BABYLON from "@babylonjs/core";
import { MeshComponent } from "./Mesh/MeshComponent";

export class TransformComponent extends Component{
  
  public position = {x: 0, y: 0, z: 0};
  public rotation = {x: 0, y: 0, z: 0};
  public scale = {x: 1, y: 1, z: 1};

  private gameobject: GameObject;


  constructor(gameObject: GameObject){
    super("Transform", gameObject);
    
    this.gameobject = gameObject;

    this.position = {x: 0, y: 0, z: 0};
    this.rotation = {x: 0, y: 0, z: 0};
    this.scale = {x: 1, y: 1, z: 1};
  }

  checkValueChange(){
    const keys = ["position", "rotation", "scale"];

    // ------ Position ------ 
    var input = document.getElementById(`${keys[0]}x`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.position.x = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().position.x = this.position.x;
      });
    }
    input = document.getElementById(`${keys[0]}y`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.position.y = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().position.y = this.position.y;
      });
    }
    input = document.getElementById(`${keys[0]}z`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.position.z = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().position.z = this.position.z;
      });
    }
    // ------------------------


    // ------ Rotation ------ 
    input = document.getElementById(`${keys[1]}x`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.rotation.x = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().rotation.x = this.rotation.x;
      });
    }
    input = document.getElementById(`${keys[1]}y`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.rotation.y = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().rotation.y = this.rotation.y;
      });
    }
    input = document.getElementById(`${keys[1]}z`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.rotation.z = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().rotation.z = this.rotation.z;
      });
    }
    // ------------------------

    // ------ Scale ------ 
    input = document.getElementById(`${keys[2]}x`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.scale.x = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().scaling.x = this.scale.x;
      });
    }
    input = document.getElementById(`${keys[2]}y`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.scale.y = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().scaling.y = this.scale.y;
      });
    }
    input = document.getElementById(`${keys[2]}z`);
    if(input){
      input.addEventListener("change", (ev: any) => {
        this.scale.z = ev.target.value;
        (this.gameobject.getComponentByType(MeshComponent) as MeshComponent).getMesh().scaling.z = this.scale.z;
      });
    }
    // ------------------------
  }

  changeValueEveryFrame(position: BABYLON.Vector3, rotation: BABYLON.Vector3, scale: BABYLON.Vector3){
    const keys = ["position", "rotation", "scale"];

    // ------ Position ------ 
    var input = document.getElementById(`${keys[0]}x`);
    if(input)
      input.value = position.x;
    input = document.getElementById(`${keys[0]}y`);
    if(input)
    input.value = position.y;
    input = document.getElementById(`${keys[0]}z`);
    if(input)
    input.value = position.z;
    // ------------------------


    // ------ Rotation ------ 
    input = document.getElementById(`${keys[1]}x`);
    if(input)
    input.value = rotation.x;
    input = document.getElementById(`${keys[1]}y`);
    if(input)
    input.value = rotation.y;
    input = document.getElementById(`${keys[1]}z`);
    if(input)
    input.value = rotation.z;

    // ------------------------

    // ------ Scale ------ 
    input = document.getElementById(`${keys[2]}x`);
    if(input)
    input.value = scale.x;
    input = document.getElementById(`${keys[2]}y`);
    if(input)
    input.value = scale.y;
    input = document.getElementById(`${keys[2]}z`);
    if(input)
    input.value = scale.z;

    // ------------------------
  }

}
