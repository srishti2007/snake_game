class Food extends Snake {
    constructor(x, y){
        super(x, y, 20, 20);
    }
    display(){
        fill ("red");
        super.display();
    }
}