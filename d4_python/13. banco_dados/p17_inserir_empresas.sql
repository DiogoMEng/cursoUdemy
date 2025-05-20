use wm;

insert into EMPRESA (nome, cnpj)
	values ('Bradesco', 92477683000190),
		('Vale', 23489310000117),
        ('Cielo', 59863621000141);
        
alter table EMPRESA modify CNPJ varchar(16);

-- desc - descreve o conteudo da tabela
desc EMPRESA;

insert into EMPRESAS_UNIDADES (EMPRESA_ID, CIDADE_ID, SEDE)
	values (1, 1, 0), (1, 2, 0), (2, 1, 0), (2, 2, 1);