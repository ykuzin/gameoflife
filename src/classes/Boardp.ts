import {Cell} from "./Cell";




export class Boardp {
    private Board: Cell[][];

    public constructor(prob: number) {
        this.Board = new Array<Array<Cell>>();
        for (let i = 0; i < 10; i++) {
           let row: Cell[] = new Array<Cell>();
            for (let j = 0; j < 10; j++) {
                if (Math.random() > prob) {
                    row.push(new Cell(true));
                } else {
                    row.push(new Cell(false));
                }
            }
         this.Board.push(row);
        }
    }

    public updateOne(x:number , y:number):number{
        let sum: number = 0;
        if (x-1 >= 0 ) {
            if(y-1>=0) {
                if (Number(this.Board[x - 1][y - 1].getState())) {
                    sum++;
                }
            }
            if (Number(this.Board[x - 1][y].getState())) {
                sum++;
            }
            if(y+1<=9) {
                if (Number(this.Board[x - 1][y + 1].getState())) {
                    sum++;
                }
            }
        }
        if(y-1>=0) {
            if (Number(this.Board[x][y - 1].getState())) {
                sum++;
            }
        }
        if(y+1<=9 ) {
            if (Number(this.Board[x][y + 1].getState())) {
                sum++;
            }
        }

         if(x+1<=9 ){
           if(y-1>=0){
             if (Number(this.Board[x + 1][y - 1].getState())) {
                 sum++;
             }}
            if (Number(this.Board[x + 1][y].getState())) {
                sum++;
            }
            if(y+1<=9) {
                if (Number(this.Board[x + 1][y + 1].getState())) {
                    sum++;
                }
            }
            }

         return sum;
      }


    public sdohnet_li(): void {

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let x = this.updateOne(i ,j);
                if(x==3){
                    this.Board[i][j].setNewState(true);
                }else if(x==2){

                }else if(x<2 || x>3){
                    this.Board[i][j].setNewState(false);
                }


            }

        }
    }
    public update_conf():void{
        let stroka:string ="";
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
               this.Board[i][j].updateState();
               stroka +=String(Number(this.Board[i][j].getState()));
               stroka +=" ";
            }
            console.log(stroka);
            stroka = "";
        }
    }




}


