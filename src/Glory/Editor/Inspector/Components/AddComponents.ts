import { GameObject } from "../../../Core/Components/GameObject";
import { MeshComponent } from "../../../Core/Components/Mesh/MeshComponent";

import * as BABYLON from "@babylonjs/core"
import { TransformComponent } from "../../../Core/Components/TransformComponent";


const ul = document.getElementById("inspector");
var allComponent = document.getElementById("inspector").getElementsByTagName("li");


export function AddComponents(gameObject: GameObject){
  if(allComponent.length > 0){
    for(let i = 0; i < allComponent.length; i++){
      allComponent[i].remove();
    }
  }
  const li = document.createElement("li");
  for(let i = 0; i < gameObject.components.length; i++){
    li.appendChild(document.createElement("h5")).innerHTML = gameObject.components[i].name;
    li.appendChild(document.createElement("br"));
    showAllPublicVariables(gameObject, li, i);
    ul.appendChild(li);
  }
}

function showAllPublicVariables(gameObject: GameObject, li: HTMLLIElement, index){
  // console.clear();

  const keys = ["position", "rotation", "scale"];

  for(let i in gameObject.components[index]){
    const value = gameObject.components[index][i];
    console.log(i, value); 
    if(keys.includes(i)){
      console.log(value._x, value._y, value._z);
    }
  }
}
