import * as BABYLON from '@babylonjs/core';
import { Component } from './Components';
import MeshComponent from './MeshComponent';


export default class GameObject{
    private scene;
    private mesh: MeshComponent;
    private components: Component;
    
    constructor(scene, mesh: MeshComponent){
        this.scene = scene;
        this.mesh = mesh;
        this.components = new Component();
    }

    public getMesh(){
        return this.mesh.getMesh();
    }

    public getMeshComponent(){
        return this.mesh;
    }

    public transform = () => {
        return {
            position: this.getMesh().position,
            rotation: this.getMesh().rotation,
            scaling: this.getMesh().scaling
        }
    }

    public assignComponent(component: Component){
        this.components.addComponent(component);
    }

    public getComponents(){
        return this.components.getComponents();
    }
}