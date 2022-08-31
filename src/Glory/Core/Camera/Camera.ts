import * as BABYLON from "@babylonjs/core";
import { CameraType } from "./CameraType";

export class Camera{
  protected camera;

  private cameraType: CameraType;
  private scene;

  constructor(scene: BABYLON.Scene, cameraType: CameraType){
    this.scene = scene;
    this.cameraType = cameraType;

    this.createCamera(this.cameraType);
  }

  createCamera(cameraType){
    switch (cameraType) {
      case CameraType.ARCROTATECAMERA:
        this.camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this.scene);
        break;
      case CameraType.FOLLOWCAMERA:
        this.camera = new BABYLON.FollowCamera("FollowCamera", BABYLON.Vector3.Zero(), this.scene);
        break;
    }
  }

  public setTarget(target: BABYLON.Vector3 | BABYLON.AbstractMesh | BABYLON.Mesh){
    this.camera.setTarget(target);
  }

  public getCamera(){
    if(this.camera instanceof BABYLON.ArcRotateCamera){
      return (this.camera as BABYLON.ArcRotateCamera);
    }
  }
}