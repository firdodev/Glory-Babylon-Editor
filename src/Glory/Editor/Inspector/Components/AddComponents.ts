import { GameObject } from "../../../Core/Components/GameObject";
import { MeshComponent } from "../../../Core/Components/Mesh/MeshComponent";

const ul = document.getElementById("inspector");
var allComponent = document.getElementById("inspector").getElementsByTagName("li");

export var posInputX;
export var posInputY;
export var posInputZ;
export var rotInputX;
export var rotInputY;
export var rotInputZ;

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
  for(let i in gameObject.components[index]){
    if(i == "transform"){
      li.appendChild(document.createTextNode(i + ": "));
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createTextNode("Position: "));
      li.appendChild(document.createElement("br"));
      posInputX = li.appendChild(document.createElement("input"));
      posInputX.setAttribute("type", "number");
      posInputX.setAttribute("id", "posInputX");
      posInputX.value = `${(gameObject.components[index] as MeshComponent).transform.position.x}`
      posInputY = li.appendChild(document.createElement("input"));
      posInputY.setAttribute("type", "number");
      posInputY.setAttribute("id", "posInputY");
      posInputY.value = `${(gameObject.components[index] as MeshComponent).transform.position.y}`
      posInputZ = li.appendChild(document.createElement("input"));
      posInputZ.setAttribute("type", "number");
      posInputX.setAttribute("id", "posInputZ");
      posInputZ.value = `${(gameObject.components[index] as MeshComponent).transform.position.z}`

      li.appendChild(document.createTextNode("Rotation: "));
      li.appendChild(document.createElement("br"));
      rotInputX = li.appendChild(document.createElement("input"));
      rotInputX.setAttribute("type", "number");
      rotInputX.setAttribute("id", "rotInputX");
      rotInputX.value = `${(gameObject.components[index] as MeshComponent).transform.rotation.x}`
      rotInputY = li.appendChild(document.createElement("input"));
      rotInputY.setAttribute("type", "number");
      rotInputY.setAttribute("id", "rotInputY");
      rotInputY.value = `${(gameObject.components[index] as MeshComponent).transform.rotation.y}`
      rotInputZ = li.appendChild(document.createElement("input"));
      rotInputZ.setAttribute("type", "number");
      rotInputZ.setAttribute("id", "rotInputZ");
      rotInputZ.value = `${(gameObject.components[index] as MeshComponent).transform.rotation.z}`

    }
  }
  for(let i in gameObject.components[index]){
    if(!(gameObject[i] instanceof Object) && gameObject[i] !== undefined){
      if(i !== "name"){
        li.appendChild(document.createElement("br"));
        li.appendChild(document.createTextNode(i + ": " + gameObject[i]));
        li.appendChild(document.createElement("br"));
      }
    }
  }
}