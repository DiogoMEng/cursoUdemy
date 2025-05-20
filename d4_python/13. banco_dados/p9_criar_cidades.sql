use wm;
select * from estados;

-- auto_increment - chave sintetica
-- if not exists - não gera erro de duplicate table
create table if not exists cidade	(
	id int unsigned not null auto_increment,
    nome varchar(255) not null,
    estado_id int unsigned not null,
    area decimal(10,2),
    primary key (id),
	foreign key (estado_id) references estados(id)
);

drop table cidade;

-- create table if not exists testes(
	-- id int unsigned not null auto_increment primary key
-- );

-- drop table if exists testes;

