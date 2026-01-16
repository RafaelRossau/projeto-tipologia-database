create database Tipologia;
use Tipologia;

create table Personagens(
id int primary key,
foto varchar(100) not null,
nome varchar(50) not null,
mbti char(4) not null,
anagrama varchar(50) not null,
subtipo varchar(20) not null,
tritipo char(3) not null,
temperamento varchar(20) not null,
big_five char(5) not null,
alinhamento varchar(20) not null
);
