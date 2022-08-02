import * as BABYLON from '@babylonjs/core';
import { Component } from './Components';

export default class MeshComponent {
    private scene;
    private mesh;

    constructor(scene, mesh: string, name){
        this.scene = scene;
        this.createMesh(mesh, name);
    }

    private createMesh(mesh: string, name){
        switch(mesh){
            case "BOX":
                return this.mesh = BABYLON.MeshBuilder.CreateBox(name, {width: 1, height: 1, depth: 1}, this.scene);
            case "SPHERE":
                return this.mesh = BABYLON.MeshBuilder.CreateSphere(name, {diameter: 1}, this.scene);
            case "CYLINDER":
                return this.mesh = BABYLON.MeshBuilder.CreateCylinder(name, {diameter: 1, height: 1}, this.scene);
            case "TORUS":
                return this.mesh = BABYLON.MeshBuilder.CreateTorus(name, {diameter: 1, thickness: 0.5}, this.scene);
            case "GROUND":
                return this.mesh = BABYLON.MeshBuilder.CreateGround(name, {width: 10, height: 10}, this.scene);
            case "PLANE":
                return this.mesh = BABYLON.MeshBuilder.CreatePlane(name, {width: 10, height: 10}, this.scene);
            default:
                console.error("This mesh does not exist, please specify a valid mesh");
            break;
        }
    }

    public scale(scale: BABYLON.Vector3){
        this.mesh.scaling = scale;
    }

    public material(material: BABYLON.Material){
        this.mesh.material = material;
    }

    public getMesh(){
        return this.mesh;
    }


}