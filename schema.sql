drop database if exists online_ordering;
create database online_ordering;

use online_ordering;

create table user(
    userid int(11) not null auto_increment,
    username varchar(55),
    password varchar(55),
    firstname varchar(55),
    lastname varchar(55),
    usertype varchar(55),
    customerId int(11),
    primary key(userid)
);

insert into user(userid,username,password,firstname,lastname,usertype,customerId)
values (1,"luta_atul@hotmail.com","aaa","Atul","Mahajan","registered",1),
(2,"eva_atul@hotmail.com","aaa","Atul","Mahajan","registered",2),
(3,"N/A",null,"Atson","Mahajan","guest",3);

create table customer(
    customerId int(11) not null auto_increment,
    firstname varchar(55),
    lastname varchar(55),
    email varchar(55),
    phone int(11),
    primary key (customerId)
);

insert into customer(customerId,firstname,lastname,email,phone)
values(1,"Atul","Mahajan","luta_atul@hotmail.com","0425755351"),
(2,"Eva","Mahajan","luta_atul@hotmail.com","0425755351"),
(3,"Atson","Mahajan","luta_atul@hotmail.com","0425755351");

create table orders(
    orderId int(11) not null auto_increment,
    orderDate datetime,
    customerId int(11),
    quantity int(11),
    pickupDate datetime,
    primary key (orderId),
    foreign key orders(customerId) references customer(customerId)
);

insert into orders(orderId,orderDate,customerId,quantity,pickupDate)
values(1,"2020-05-19 07:18:20",1,12,"2020-05-19 09:18:20"),
(2,"2020-05-19 07:30:20",2,9,"2020-05-19 09:30:20"),
(3,"2020-05-19 07:18:20",1,8,"2020-05-19 09:42:20"),
(4,"2020-05-19 08:30:20",3,2,"2020-05-19 10:30:20");

create table item(
    itemId int(11) not null auto_increment,
    name varchar(55),
    price decimal(6,2),
    quantity varchar(55),
    itemCategory varchar(55),
    primary key(itemId)
);

insert into item(itemId,name,price,quantity,itemCategory)
values(1,"Cheesy Sticks",12,"5 sticks","Starter"),
(2,"Coffee",3,"Small","Beverages"),
(3,"Chana Samosa",8,"2 Samosas with chana","Main course");

create table orderItem(
    orderItemid int(11) not null auto_increment,
    quantity int(11),
    price decimal(6,2),
    itemId int(11),
    orderId int(11),
    primary key (orderItemid),
    foreign key (itemId) references item(itemId),
    foreign key (orderId) references orders(orderId)
);

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






-- drop database if exists online_ordering;
-- create database online_ordering;

-- use online_ordering;

-- create table user(
--     userid int(11) not null auto_increment,
--     username varchar(55),
--     password varchar(55),
--     firstname varchar(55),
--     lastname varchar(55),
--     usertype varchar(55),
--     customerId int(11),
--     primary key(userid)
-- );

-- insert into user(userid,username,password,firstname,lastname,usertype,customerId)
-- values (1,"luta_atul@hotmail.com","aaa","Atul","Mahajan","registered",1),
-- (2,"eva_atul@hotmail.com","aaa","Atul","Mahajan","registered",2),
-- (3,"N/A",null,"Atson","Mahajan","guest",3);

-- create table orders(
--     orderId int(11) not null auto_increment,
--     orderDate datetime,
--     customerId int(11),
--     quantity int(11),
--     pickupDate datetime,
--     primary key (orderId)
-- );

-- insert into orders(orderId,orderDate,customerId,quantity,pickupDate)
-- values(1,"2020-05-19 07:18:20",1,12,"2020-05-19 09:18:20"),
-- (2,"2020-05-19 07:30:20",2,9,"2020-05-19 09:30:20"),
-- (3,"2020-05-19 07:18:20",1,8,"2020-05-19 09:42:20"),
-- (4,"2020-05-19 08:30:20",3,2,"2020-05-19 10:30:20");

-- create table item(
--     itemId int(11) not null auto_increment,
--     name varchar(55),
--     price decimal(6,2),
--     quantity varchar(55),
--     itemCategory varchar(55),
--     primary key(itemId)
-- );

-- insert into item(itemId,name,price,quantity,itemCategory)
-- values(1,"Cheesy Sticks",12,"5 sticks","Starter"),
-- (2,"Coffee",3,"Small","Beverages"),
-- (3,"Chana Samosa",8,"2 Samosas with chana","Main course");

-- create table orderItem(
--     orderItemid int(11) not null auto_increment,
--     quantity int(11),
--     price decimal(6,2),
--     itemId int(11),
--     orderId int(11),
--     primary key (orderItemid),
--     foreign key (itemId) references item(itemId),
--     foreign key (orderId) references orders(orderId)
-- );

-- insert into orderItem(orderItemid,quantity,price,itemId,orderId)
-- values(1,3,9,2,1),
-- (2,2,24,1,1),
-- (3,3,24,3,2),
-- (4,3,9,2,1),
-- (5,2,24,1,1),
-- (6,2,24,3,1),
-- (7,3,9,2,2),
-- (8,3,36,1,2),
-- (9,3,24,3,3),
-- (10,3,9,2,3),
-- (11,2,24,1,3),
-- (12,2,24,1,4);

-- create table customer(
--     customerId int(11) not null auto_increment,
--     firstname varchar(55),
--     lastname varchar(55),
--     email varchar(55),
--     phone int(11),
--     orderId int(11),
--     primary key (customerId),
--     foreign key (orderId) references orders(orderId)
-- );

-- insert into customer(customerId,firstname,lastname,email,phone,orderId)
-- values(1,"Atul","Mahajan","luta_atul@hotmail.com","0425755351",1),
-- (2,"Eva","Mahajan","luta_atul@hotmail.com","0425755351",2),
-- (3,"Atson","Mahajan","luta_atul@hotmail.com","0425755351",3);



-- drop database if exists online_ordering;
-- create database online_ordering;

-- use online_ordering;

-- create table user(
--     userid int(11) not null auto_increment,
--     username varchar(55),
--     password varchar(55),
--     firstname varchar(55),
--     lastname varchar(55),
--     usertypeId varchar(55),
--     primary key(userid)
-- );

-- create table userType(
--     usertypeId int(11) not null auto_increment,
--     usertype varchar(55),
--     customerId int(11),
--     primary key(usertypeId)
--     foreign key usertypeId references user(usertypeId)
-- );

-- create table item(
--     itemId int(11) not null auto_increment,
--     name varchar(55),
--     price decimal(6,2),
--     quantity varchar(55),
--     itemCategory varchar(55),
--     primary key(itemId)
-- );

-- create table orderItem(
--     orderItemid int(11) not null auto_increment,
--     quantity int(11),
--     price decimal(6,2),
--     itemId int(11),
--     orderId int(11),
--     primary key (orderItemid)
--     foreign key itemId references item(itemId)
--     foreign key orderId references order(orderId)
-- );

-- create table order(
--     orderId int(11) not null auto_increment,
--     orderDate date,
--     customerId int(11),
--     quantity int(11),
--     pickupDate date,
--     primary key (orderId)
--     foreign key customerId references customer(customerId)
-- );

-- create table customer(
--     customerId int(11) not null auto_increment,
--     firstname varchar(55),
--     lastname varchar(55),
--     email varchar(55),
--     phone int(11),
--     orderId int(11),
--     primary key (customerId),
--     foreign key orderId references order(orderId) 
-- );

