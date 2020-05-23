insert into user(userid,username,password,firstname,lastname,usertype,customerId)
values (1,"luta_atul@hotmail.com","aaa","Atul","Mahajan","registered",1),
(2,"sasha@hotmail.com","aaa","Sasha","Sasha","registered",2),
(3,"N/A",null,"ABC","XYZ","guest",3);

insert into customer(customerId,firstname,lastname,email,phone)
values(1,"Atul","Mahajan","luta_atul@hotmail.com","0433333333"),
(2,"Sasha","Sasha","sasha@hotmail.com","0422222222"),
(3,"Boot","Camp","bootcamp@hotmail.com","0444444444");

insert into orders(orderId,orderDate,customerId,quantity,pickupDate)
values(1,"2020-05-19 07:18:20",1,12,"2020-05-19 09:18:20"),
(2,"2020-05-19 07:30:20",2,9,"2020-05-19 09:30:20"),
(3,"2020-05-19 07:18:20",1,8,"2020-05-19 09:42:20"),
(4,"2020-05-19 08:30:20",3,2,"2020-05-19 10:30:20");

insert into item(itemId,name,price,quantity,itemCategory)
values(1,"Dumplings",12,"5 pieces","Starter"),
(2,"Bubble Tea",8,"Large","Beverages"),
(3,"Chicken Curry",15,"Served in a bowl with Rice","Main course"),
(4,"Chips",6,"Large size","Starter"),
(5,"Salad",8,"Large made fresh everyday","Beverages"),
(6,"Soft Drniks",4,"500 ml","Main course");

insert into orderItem(orderItemid,quantity,price,itemId,orderId)
values(1,3,9,2,1),
(2,2,24,1,1),
(3,3,24,3,2),
(4,3,9,2,1),
(5,2,24,1,1),
(6,2,24,3,1),
(7,3,9,2,2),
(8,3,36,1,2),
(9,3,24,3,3),
(10,3,9,2,3),
(11,2,24,1,3),
(12,2,24,1,4);
