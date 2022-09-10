import * as Scene from "../../Core/Scene";
import * as BABYLON from "@babylonjs/core";

var scaleBtn = document.getElementById("scaleGizmos");
var positionBtn = document.getElementById("positionGizmos");
var rotationBtn = document.getElementById("rotationGizmos");

Scene.getScene().onPointerObservable.add((pointerInfo) => {
  switch (pointerInfo.type) {
    case BABYLON.PointerEventTypes.POINTERDOWN:
        var pickInfo = pointerInfo.pickInfo;
        if(pickInfo.hit && pickInfo.pickedMesh !== null){
          Scene.gizmoManager.attachToMesh(pickInfo.pickedMesh);
          Scene.gizmoManager.scaleGizmoEnabled = false;
          Scene.gizmoManager.rotationGizmoEnabled = false;
          Scene.gizmoManager.positionGizmoEnabled = true;
        }
    break;
  }
});

positionBtn.addEventListener("click",()=>{
  Scene.gizmoManager.scaleGizmoEnabled = false;
  Scene.gizmoManager.rotationGizmoEnabled = false;
  Scene.gizmoManager.positionGizmoEnabled = !Scene.gizmoManager.positionGizmoEnabled;
})

scaleBtn.addEventListener("click",()=>{
  Scene.gizmoManager.positionGizmoEnabled = false;
  Scene.gizmoManager.rotationGizmoEnabled = false;
  Scene.gizmoManager.scaleGizmoEnabled = !Scene.gizmoManager.scaleGizmoEnabled;
})

rotationBtn.addEventListener("click",()=>{
  Scene.gizmoManager.scaleGizmoEnabled = false;
  Scene.gizmoManager.positionGizmoEnabled = false;
  Scene.gizmoManager.rotationGizmoEnabled = !Scene.gizmoManager.rotationGizmoEnabled;
})