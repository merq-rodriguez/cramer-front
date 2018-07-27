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
    public determinat : number;

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
        this.determinat = this.Det();
    }
  

    getMatrix(){
        console.log(`${this.x1} ${this.y1} ${this.z1}\n
                    ${this.x2}  ${this.y2} ${this.z2}\n
                    ${this.x3}  ${this.y3} ${this.z3}
        `);
    }

    printVariables(){
        console.log(`x1 -> ${this.x1} \nx2 -> ${this.x2}\nx3 -> ${this.x3}\ny1 -> ${this.y1} \ny2 -> ${this.y2}\ny3 -> ${this.y3}\nz1 -> ${this.z1} \nz2 -> ${this.z2}\nz3 -> ${this.z3}\nR1 -> ${this.result1} \nR2 -> ${this.result2}\nR3 -> ${this.result3}\n` );
    }

    

    public Det(){
        let xone = this.x1;
        let Aone = this.A1();
        let yone = this.y1;
        let Atwo = this.A2();
        let zone = this.z1;
        let Athree = this.A3();
        let det = xone * Aone - yone * Atwo + zone * Athree;        
        //let det = this.x1 * this.A1() - this.y1 * this.A2() + this.z1 * this.A3();
        return det;
    }

    public X(){
        let A1 = this.result1 * (this.y2 * this.z3 - this.y3 * this.z2);
        let A2 = this.y1 * (this.result2 * this.z3 - this.result3 * this.z2);
        let A3 = this.z1 * (this.result2 * this.y3 - this.result3 * this.y2);
        let D = A1 - A2 + A3;
        return D / this.determinat;
    }
    public Y(){

        let A1 = this.x1 * (this.result2 * this.z3 - this.result3 * this.z2);
        let A2 = this.result1 * (this.x2 * this.z3 - this.x3 * this.z2);
        let A3 = this.z1 * (this.x2 * this.result3 - this.x3 * this.result2);
        let D = A1 - A2 + A3 ;
        return D / this.determinat;
    }
    public Z(){
        let A1 = this.x1 * (this.y2 * this.result3 - this.y3 * this.result2);
        let A2 = this.y1 * (this.x2 * this.result3 - this.x3 * this.result2);
        let A3 = this.result1 * (this.x2 * this.y3 - this.x3 * this.y2);
        let D = A1 - A2  + A3 ;
        return D / this.determinat;
    }

    public A1(){
        let a1 = ( this.y2 * this.z3 - this.y3 * this.z2 );
        return  this.redondeo(a1,2);
    }

    public A2(){
        let a2 = this.redondeo((this.x2 * this.z3 - this.x3 * this.z2), 2); 
        return this.redondeo(a2, 2);
    }

    public A3(){
        let a3 = (this.x2 * this.y3 - this.x3 * this.y2);
        return  this.redondeo(a3, 2);
    }


    public redondeo(numero, decimales)
    {
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
    return resultado;
    }

}










