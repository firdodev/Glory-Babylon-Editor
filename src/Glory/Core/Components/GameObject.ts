import * as Scene from "../Scene";
import { ComponentList } from "./ComponentList";

export class GameObject extends ComponentList{
  private scene;
  private name: string;

  constructor(name:string, scene){
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
    this.addComponents(componentType);
  }

  public getComponents(){
    return this.components;
  }

  public dispose(){
    Scene.removeObject(this);
  }
}