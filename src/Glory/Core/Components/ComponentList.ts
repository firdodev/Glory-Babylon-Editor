import { Component } from "./Component";

export class ComponentList{
  components: Array<Component>;

  constructor(){
    this.components = new Array<Component>();
  }

  addComponents(componentType: Component){
    this.components.push(componentType);
  }

  removeComponentByName(name:String){
    for(let index in this.components){
      if(this.components[index].name === name){
        this.components.splice(Number(index), 1);
      }
    }
  }
}