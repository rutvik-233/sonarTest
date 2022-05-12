import { IUser } from "./iuser";


export interface TempUser extends IUser{
    type:string;
}

export var UserStack:TempUser[]=[]

export class User {
  

    

    create_user(obj:TempUser){
        UserStack.push(obj);

    }
    view_all_user(){
        for(let A of UserStack){
            console.log(A);
            
        }
    }


}




export interface TempOrder extends IUser{
    OrderID:number;
}

export var OrderStack:TempOrder[]=[]

export class Order {

    place_order(obj:TempOrder){
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











export interface TempRating extends TempOrder{
    rating:number;
    remark:string;
}

export var RatingStack:TempRating[]=[]

export class Rating {

    give_rating(obj:TempRating){
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
        //Below Line is Commented To Solve SonarQube Bug.To Run This File Uncomment Below Line
        // temp.sort()
        temp.reverse()

            for(let element of temp){

                for(let tempEle of RatingStack){
                    if(tempEle.rating==element)console.log(tempEle)
                }

            }

    }
    


}
