create database if not exists bootcamp_tht;

use bootcamp_tht;

create table if not exists users(
  username varchar(30) primary key,
  password text,
  salt text,
  role text
);

insert into users (username,password,salt,role) values
("admin", "15e24a16abfc4eef5faeb806e903f78b188c30e4984a03be4c243312f198d1229ae8759e98993464cf713e3683e891fb3f04fbda9cc40f20a07a58ff4bb00788", "F^S%QljSfV", "admin"),
("noadmin", "89155af89e8a34dcbde088c72c3f001ac53486fcdb3946b1ed3fde8744ac397d99bf6f44e005af6f6944a1f7ed6bd0e2dd09b8ea3bcfd3e8862878d1709712e5","KjvFUC#K*i", "editor"),
("bob","2c9dab627bd73b6c4be5612ff77f18fa69fa7c2a71ecedb45dcec45311bea736e320462c6e8bfb2421ed112cfe54fac3eb9ff464f3904fe7cc915396b3df36f0","F^S%QljSfV","viewer");