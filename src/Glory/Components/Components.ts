import GameObject from "./GameObject";

export class Component{

    private _compoenents = [];
    constructor() {
        
    }

    public addComponent(component: Component){
        this._compoenents.push(component);
    }

    public getComponents(){
        return this._compoenents;
    }
}