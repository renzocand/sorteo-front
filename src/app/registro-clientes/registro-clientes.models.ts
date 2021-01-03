export class Cliente{
    constructor(
        public nombre:string = null,
        public dni:string = null,
        public cntRifas:number = 1,
        public departamento:string = null,
        public provincia:string = null,
        public distrito:string = null
    ){}
}
export class RegistroClientesRq{
    constructor(
        public nombre:string,
        public dni:number,
        public cntRifas:number,
        public departamento:string,
        public provincia:string,
        public distrito:string
    ){}
}