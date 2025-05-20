use wm;

-- unique key - não aceito duplicação

create table if not exists PREFEITOS(
	ID int unsigned not null auto_increment,
    NOME varchar(255) not null,
    CIDADE_ID int unsigned,
    primary key (id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidade(id)
);