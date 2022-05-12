import { Order, User,Rating } from "./user";
//User Added
var User1 = new User();
User1.create_user({
    userID: 1,
    UserName: 'RutviK',
    type: 'user',

});

User1.create_user({
    userID: 2,
    UserName: 'Keval',
    type: 'user',

});

User1.create_user({
    userID: 3,
    UserName: 'Sunil',
    type: 'user',

});

User1.create_user({
    userID: 4,
    UserName: 'Vishnu',
    type: 'user',

});


console.log("-------------view_all_applicant-------------");
User1.view_all_user();
console.log('-------------view_all_applicant-------------\n\n');



//Order Placed

var Order1 = new Order();
Order1.place_order({
    userID: 1,
    UserName:'RutviK',
    OrderID: 44221,

});
Order1.place_order({
    userID: 2,
    UserName:'Keval',
    OrderID: 44223,

});

Order1.place_order({
    userID: 3,
    UserName: 'Sunil',
    OrderID: 44222,

});
Order1.place_order({
    userID: 4,
    UserName: 'Vishnu',
    OrderID: 44224,

});


console.log("-------------view_all_order()-------------");
Order1.view_all_order();
console.log('-------------view_all_order()-------------\n\n');


console.log("-------------view_by_id_order(1)-------------");
Order1.view_by_id_order(1);
console.log('-------------view_by_id_order(1)-------------\n\n');


console.log("-------------view_by_id_order(2)-------------");
Order1.view_by_id_order(2);
console.log('-------------view_by_id_order(2)-------------\n\n');




//Rating

var Rating1 = new Rating();
Rating1.give_rating({
    userID: 1,
    UserName: 'RutviK',
    OrderID:44221,
    rating: 1,
    remark:"Worst Service"

});

Rating1.give_rating({
    userID: 2,
    UserName: 'Keval',
    OrderID:44223,
    rating: 2,
    remark:"Good Service"

});

Rating1.give_rating({
    userID: 3,
    UserName: 'Sunil',
    OrderID:44222,
    rating: 3,
    remark:"Bad Service"

});

Rating1.give_rating({
    userID: 4,
    UserName: 'Vishnu',
    OrderID:44224,
    rating: 5,
    remark:"Best Service"

});


console.log("-------------view_all_rating()-------------");
Rating1.view_all_rating();
console.log('-------------view_all_rating()-------------\n\n');


console.log("-------------rating_less_then3()-------------");
Rating1.rating_less_then3();
console.log('-------------rating_less_then3()-------------\n\n');


console.log("-------------rating_5()-------------");
Rating1.rating_5();
console.log('-------------rating_5()-------------\n\n');


console.log("-------------view_by_username()-------------");
Order1.view_by_username();
console.log('-------------view_by_username()-------------\n\n');

console.log("-------------view_by_rating-------------");
Rating1.view_by_rating();
console.log('-------------view_by_rating-------------\n\n');

