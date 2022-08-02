import * as BABYLON from '@babylonjs/core';


export function colorMaterial(color: BABYLON.Color3) : BABYLON.StandardMaterial {
    var material = new BABYLON.StandardMaterial("color", this.scene);
    material.diffuseColor = color;
    material.freeze();
    return material;
}

export function random(min: number, max: number) : number {
    return Math.random() * (max - min) + min;
}