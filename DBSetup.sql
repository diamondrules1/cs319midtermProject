drop database if exists `reactmysql`;
create database `reactmysql`;
use `reactmysql`;
drop table if exists Card;
create table Card(cid int unique, cardname varchar(50), price double, rarity varchar(20), cardSet varchar(50), description varchar(200), quantity int, primary key (cid));