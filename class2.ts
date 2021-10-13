class Point{

    constructor(private A?: number,private B?: number){
    }
    draw(){
        console.log('A:' + this.A +',B:' +this.B);
        
    }
    get A(){
        return this.A
    }

    set A(value){
        if(value<0){
            throw new Error('value can not be less than 0.')
        }
    }

}
let point = new Point(1,2);
let A = point.A;
point.A =10;
point.draw();
