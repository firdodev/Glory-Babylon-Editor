import * as Scene from "../Scene";
import { ComponentList } from "./ComponentList";

export class GameObject extends ComponentList{
  private scene;
  private name: String;

  constructor(name:String, scene){
    super();
    this.name = name;
    this.scene = scene;

    this.init();
  }

  init(){
    Scene.addObject(this);
  }

  public getScene(){
    return this.scene;
  }

  public getName(){
    return this.name;
  }

  public addComponent(componentType){
    this.addComponents(componentType)
  }

  public dispose(){
    for(let index in this.components){
      this.components[index].dispose();
      this.components.splice(Number(index),this.components.length);
    }
    Scene.removeObject(this);
  }
}