drop database if exists `reactmysql`;
create database `reactmysql`;
use `reactmysql`;
drop table if exists User;
create table User(id int unique, username varchar(50), password varchar(50), email varchar(50), primary key(id));