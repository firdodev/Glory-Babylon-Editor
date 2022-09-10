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
    showAllPublicVariables(gameObject, li, i);
    ul.appendChild(li);
    gameObject.transform.checkValueChange();
  }
}

function showAllPublicVariables(gameObject: GameObject, li: HTMLLIElement, index){
  // console.clear();

  const keys = ["position", "rotation", "scale", "color"];

  for(let i in gameObject.components[index]){
    const value = gameObject.components[index][i];
    // console.log(i, value); 
    if(keys.includes(i)){
      li.appendChild(document.createTextNode(`${i}`.toUpperCase()));
      for(let j in value){
        createNewLine(li);
        li.appendChild(document.createTextNode(`${j}`));
        let input = li.appendChild(document.createElement("input"));
        input.setAttribute("id", `${i}${j}`);
        input.setAttribute("type", "number");
        input.value = value[j];
      }
      createNewLine(li);
    }else{
      if(i !== "name" && !(value instanceof Object)){
        createNewLine(li);
        li.appendChild(document.createTextNode(`${i} , ${value}`.toUpperCase()));
      }
    }
  }
}

function createNewLine(element?){
  return element.appendChild(document.createElement("br"));
}
