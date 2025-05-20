use wm;

create table if not exists EMPRESA (
	ID int unsigned not null auto_increment,
    NOME varchar(255) not null,
    CNPJ int unsigned,
    primary key (ID),
	unique key (CNPJ)
);

-- cidades_empresas
-- tinyint - apresenta um unico valor 

create table if not exists EMPRESAS_UNIDADES (
	EMPRESA_ID int unsigned not null,
    CIDADE_ID int unsigned not null,
    SEDE tinyint(1) not null,
    primary key (EMPRESA_ID, CIDADE_ID)
);

select * from empresas_unidades;