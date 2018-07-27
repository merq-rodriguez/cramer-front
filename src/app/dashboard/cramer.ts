export class Cramer{
    public x1 : number;
    public x2 : number;
    public x3 : number;
    public y1 : number;
    public y2 : number;
    public y3 : number;
    public z1 : number;
    public z2 : number;
    public z3 : number;
    public result1 : number;
    public result2 : number;
    public result3 : number;
    

    constructor(
        x1 : number, x2 : number, x3 : number,
        y1 : number, y2 : number, y3 : number,
        z1 : number, z2 : number, z3 : number,
        result1 : number, result2 : number, result3 : number
    ){
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;

        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        
        this.z1 = z1;
        this.z2 = z2;
        this.z3 = z3;
        
        this.result1 = result1;
        this.result2 = result2;
        this.result3 = result3;
    }
    //Determinante del sistema
    public DetSystem(){
        let fromAbove : number;
        let  fromBelow : number;
        fromAbove = (this.x1 * this.y2 * this.z3) + (this.y1 * this.z2 * this.x3) + (this.z1 * this.x2 * this.y3);
        fromBelow = (this.y1 * this.x2 * this.z3) + (this.x1 * this.z2 * this.y3) + (this.z1 * this.y2 * this.x3);
        return (fromAbove -fromBelow);
    }

    getMatrix(){
        console.log(`${this.x1}  ${this.y1} ${this.z1}\n${this.x2}  ${this.y2} ${this.z2}\n${this.x3}  ${this.y3} ${this.z3}
        `);
    }



    public DetX(){
        let fromLeft : number;
        let  fromRight : number;
        fromLeft = (this.result1 * this.y2 * this.z3) + (this.y1 * this.z2 * this.result3) + (this.z1 * this.result2 * this.y3);
        fromRight = (this.y1 * this.result2 * this.z3) + (this.result1 * this.z2 * this.y3) + (this.z1 * this.y2 * this.result3);
        return fromLeft - fromRight;
    }

    public DetY(){
        let fromAbove : number;
        let  fromBelow : number;
        fromAbove = (this.x1 * this.result2 * this.z3) + (this.x2 * this.result3 * this.z1) + (this.x3 * this.result1 * this.z2);
        fromBelow = (this.z1 * this.result2 * this.x3) + (this.z2 * this.result3 * this.x1) + (this.z3 * this.result1 * this.x2);
        return fromAbove - fromBelow;
    }

    public DetZ(){
        let fromLeft : number;
        let  fromRight : number;
        fromLeft = (this.x1 * this.y2 * this.result3) + (this.y1 * this.result2 * this.x3) + (this.result1 * this.x2 * this.y3);
        fromRight = (this.y1 * this.x2 * this.result3) + (this.x1 * this.result2 * this.y3) + (this.result1 * this.y2 * this.x3);
        return fromLeft - fromRight;
    }
}

let cramer = new Cramer(
    1, 5, 4,
    -3, 6, -1, 
    2, -1, 3,
    -3, 13, 8 
);

let ds = cramer.DetSystem();
let dx = cramer.DetX();
let dy = cramer.DetY();
let dz = cramer.DetZ();
console.log("Determinante de sistema: "+ds);
console.log("Determinante de X: "+dx);
console.log("Determinante de Y: "+dy);
console.log("Determinante de Z: "+dz);

console.log("X: "+dx/ds);
console.log("Y: "+dy/ds);
console.log("Z: "+dz/ds); 









