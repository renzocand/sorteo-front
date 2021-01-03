export class Cliente{
    constructor(
        public nombre:string = null,
        public dni:string = null,
        public cntRifas:number = 1,
        public ciudad:string = null
    ){}
}
export class RegistroClientesRq{
    constructor(
        public nombre:string,
        public dni:number,
        public cntRifas:number,
        public ciudad:string,
    ){}
}