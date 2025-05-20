-- valor auto incrementado - auto_increment
-- não aceita signos - unsigned
-- valor escolhido a partir de uma lista de valores permitidos (string) - enum
-- decimal (digitos, qtd de pontos flutuantes)
-- não aceita duplicidade - unique key
use wm;

show databases;

create table Estados (
	id int unsigned not null auto_increment,
    nome varchar(45) not null,
    sigla varchar(2) not null,
    regiao enum('norte', 'nordeste', 'centro-oeste', 'sudeste', 'sul') not null,
    populacao decimal(5,2) not null,
    primary key (id),
    unique key (nome),
    unique key (sigla)
);