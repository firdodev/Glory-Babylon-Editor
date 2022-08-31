import { Component } from "../Component";
import { GameObject } from "../GameObject";
import { MeshType } from "./MeshType";
import * as BABYLON from "@babylonjs/core"

import * as Editor from "../../../Editor/index";

export class MeshComponent extends Component{
  

  protected mesh: any;
  protected gameObject: GameObject;
  
  private scene: BABYLON.Scene;

  public meshType: MeshType;
  public meshName: string;
  public transform = {
    position: new BABYLON.Vector3,
    rotation: new BABYLON.Vector3
  };

  constructor(gameObject: GameObject, name: string, scene: BABYLON.Scene, meshType: MeshType){
    super(name, gameObject);
    this.meshType = meshType;
    this.gameObject = gameObject;
    this.meshName = name;
    this.scene = scene;

    this.createMesh(meshType);
  
    

    this.scene.onBeforeRenderObservable.add(()=>{
      // this.mesh.rotation = this.transform.rotation;
      // this.mesh.position = this.transform.position;

      if(Editor.posInputX != undefined){
        this.transform.position.x = Editor.posInputX.value;
        this.transform.position.y = Editor.posInputY.value;
        this.transform.position.z = Editor.posInputZ.value;
  
        this.transform.rotation.x = Editor.rotInputX.value;
        this.transform.rotation.y = Editor.rotInputY.value;
        this.transform.rotation.z = Editor.rotInputZ.value;

        this.mesh.rotation = this.transform.rotation;
        this.mesh.position = this.transform.position;
      }
    });
  }

  private createMesh(value){
    switch (value) {
      case MeshType.BOX:
        this.mesh = BABYLON.MeshBuilder.CreateBox("box", {}, this.scene);
        break;
      case MeshType.CAPSULE:
        this.mesh = BABYLON.MeshBuilder.CreateCapsule("capsule", null, this.scene);
        break;
      case MeshType.CYLINDER:
        this.mesh = BABYLON.MeshBuilder.CreateCylinder("cylinder", {}, this.scene);
        break;
      case MeshType.DISC:
        this.mesh = BABYLON.MeshBuilder.CreateDisc("disc", {}, this.scene);
        break;
      case MeshType.GROUND:
        this.mesh = BABYLON.MeshBuilder.CreateGround("ground", {}, this.scene);
        break;
      case MeshType.PLANE:
        this.mesh = BABYLON.MeshBuilder.CreatePlane("plane", {}, this.scene);
        break;
      case MeshType.SPHERE:
        this.mesh = BABYLON.MeshBuilder.CreateSphere("sphere", {}, this.scene);
        break;
      case MeshType.TILED_BOX:
        this.mesh = BABYLON.MeshBuilder.CreateTiledBox("tiledBox", null, this.scene);
        break;
      case MeshType.TILED_PLANE:
        this.mesh = BABYLON.MeshBuilder.CreateTiledPlane("tiledPLane", {}, this.scene);
        break;
      case MeshType.TORUS:
        this.mesh = BABYLON.MeshBuilder.CreateTorus("torus", {}, this.scene);
        break;
      case MeshType.TORUS_KNOT:
        this.mesh = BABYLON.MeshBuilder.CreateTorusKnot("torusKnot", {}, this.scene);
        break;
    }

  }

  public dispose() {
    this.mesh.dispose();
  }

  

}