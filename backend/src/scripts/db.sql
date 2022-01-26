create database if  not exists tasksdb;

use tasksdb;

create table if not exists tasks(
    id int not null auto_increment, 
    title varchar(100) not null, 
    description text, 
    primary key (id)
);

insert into tasks (title, description) values
    ('task 1', 'some description'),
    ('task 2', 'some description 2');