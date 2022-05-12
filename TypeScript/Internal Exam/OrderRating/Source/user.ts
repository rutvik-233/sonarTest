import { IUser } from "./iuser";


export interface tempUser extends IUser{
    type:string;
}

export var UserStack:tempUser[]=[]

export class User {
  

    

    create_user(obj:tempUser){
        UserStack.push(obj);

    }
    view_all_user(){
        for(let A of UserStack){
            console.log(A);
            
        }
    }


}




export interface tempOrder extends IUser{
    OrderID:number;
}

export var OrderStack:tempOrder[]=[]

export class Order {

    place_order(obj:tempOrder){
        OrderStack.push(obj);

    }
    view_all_order(){
        for(let A of OrderStack){
            console.log(A);
            
        }
    }
    view_by_id_order(id:number){

        for(let A of OrderStack){
            if(A.userID==id)console.log(A);}
        
    }

    view_by_username(){
        var temp=[]

        for(let ele of OrderStack){
            temp.push(ele.UserName)
        }

        temp.sort()

            for(let element of temp){

                for(let tempEle of OrderStack){
                    if(tempEle.UserName==element)console.log(tempEle)
                }

            }

    }




}











export interface tempRating extends tempOrder{
    rating:number;
    remark:string;
}

export var RatingStack:tempRating[]=[]

export class Rating {

    give_rating(obj:tempRating){
        RatingStack.push(obj);

    }
    view_all_rating(){
        for(let A of RatingStack){
            console.log(A);
            
        }
    }
    rating_less_then3(){

        var output: [string, string][];
        output=[]
        for(let A of RatingStack){
            if(A.rating<3)
            {
                output.push([`Name=${A.UserName}`,`Rating=${A.rating}`])
            }
           
            }
            console.log(output);
    }


    rating_5(){

        var outputMap= new Map();
        
        for(let A of RatingStack){
            if(A.rating==5)
            {
                outputMap.set(`Name=${A.UserName}`,`Rating=${A.rating}`)
            }
            }
        for (var entry of outputMap.entries()){
             console.log(entry)
             }
    }

    
    view_by_rating(){
        var temp=[]

        for(let ele of RatingStack){
            temp.push(ele.rating)
        }

        // temp.sort()
        temp.reverse()

            for(let element of temp){

                for(let tempEle of RatingStack){
                    if(tempEle.rating==element)console.log(tempEle)
                }

            }

    }
    


}
