import { Component } from "../Component";
import { GameObject } from "../GameObject";
import { MeshType } from "./MeshType";
import * as BABYLON from "@babylonjs/core"

export class MeshComponent extends Component{
  

  protected mesh: any;
  protected gameObject: GameObject;
  
  private scene: BABYLON.Scene;

  public meshType: MeshType;
  public meshName: string;
  public color: string = "";

  constructor(gameObject: GameObject, name: string, scene: BABYLON.Scene, meshType: MeshType){
    super(name, gameObject);
    this.meshType = meshType;
    this.gameObject = gameObject;
    this.meshName = name;
    this.scene = scene;

    this.createMesh(meshType);

    this.scene.registerBeforeRender(()=>{
      // this.gameObject.transform.changeValueEveryFrame(this.getMesh().position, this.getMesh().rotation, this.getMesh().scaling)
      this.gameObject.transform.position.x = this.getMesh().position.x;
      this.gameObject.transform.position.y = this.getMesh().position.y;
      this.gameObject.transform.position.z = this.getMesh().position.z;
    });
  }

  private createMesh(value){
    switch (value) {
      case MeshType.BOX:
        this.mesh = BABYLON.MeshBuilder.CreateBox(this.meshName, {}, this.scene);
        break;
      case MeshType.CAPSULE:
        this.mesh = BABYLON.MeshBuilder.CreateCapsule(this.meshName, null, this.scene);
        break;
      case MeshType.CYLINDER:
        this.mesh = BABYLON.MeshBuilder.CreateCylinder(this.meshName, {}, this.scene);
        break;
      case MeshType.DISC:
        this.mesh = BABYLON.MeshBuilder.CreateDisc(this.meshName, {}, this.scene);
        break;
      case MeshType.GROUND:
        this.mesh = BABYLON.MeshBuilder.CreateGround(this.meshName, {}, this.scene);
        break;
      case MeshType.PLANE:
        this.mesh = BABYLON.MeshBuilder.CreatePlane(this.meshName, {}, this.scene);
        break;
      case MeshType.SPHERE:
        this.mesh = BABYLON.MeshBuilder.CreateSphere(this.meshName, {}, this.scene);
        break;
      case MeshType.TILED_BOX:
        this.mesh = BABYLON.MeshBuilder.CreateTiledBox(this.meshName, null, this.scene);
        break;
      case MeshType.TILED_PLANE:
        this.mesh = BABYLON.MeshBuilder.CreateTiledPlane(this.meshName, {}, this.scene);
        break;
      case MeshType.TORUS:
        this.mesh = BABYLON.MeshBuilder.CreateTorus(this.meshName, {}, this.scene);
        break;
      case MeshType.TORUS_KNOT:
        this.mesh = BABYLON.MeshBuilder.CreateTorusKnot(this.meshName, {}, this.scene);
        break;
    }

  }

  public getMesh(): BABYLON.Mesh{
    return this.mesh;
  }

  public dispose() {
    this.mesh.dispose();
  }

  

}
