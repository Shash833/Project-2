drop database if exists online_ordering;
create database online_ordering;

use online_ordering;

create table user(
    userid int(11) not null auto_increment,
    username varchar(55),
    password varchar(255),
    firstname varchar(55),
    lastname varchar(55),
    usertype varchar(55),
    customerId int(11),
    primary key(userid)
);

create table customer(
    customerId int(11) not null auto_increment,
    firstname varchar(55),
    lastname varchar(55),
    email varchar(55),
    phone int(11),
    orderId int(11),
    primary key (customerId)
);

create table orders(
    orderId int(11) not null auto_increment,
    orderDate datetime,
    customerId int(11),
    quantity int(11),
    pickupDate datetime,
    primary key (orderId),
    foreign key orders(customerId) references customer(customerId)
);

create table item(
    itemId int(11) not null auto_increment,
    name varchar(55),
    price decimal(6,2),
    quantity varchar(55),
    itemCategory varchar(55),
    primary key(itemId)
);

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