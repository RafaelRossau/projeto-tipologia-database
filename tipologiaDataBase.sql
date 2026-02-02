create database Tipologia;
use Tipologia;

create table Personagens(
id int primary key auto_increment,
nome varchar(50) not null,
mbti char(4) not null,
anagrama varchar(50) not null,
subtipo varchar(20) not null,
tritipo char(3) not null,
temperamento varchar(21) not null,
big_five char(5) not null,
alinhamento varchar(20) not null
);
create table img(
id int,
foreign key(id) references Personagens(id),
foto LONGBLOB not null
);
drop table Personagens;
