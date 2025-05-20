use wm;

select * from cidade;

insert into prefeitos (NOME, CIDADE_ID)
	values ('Rodrigo Neves', 2),
		('Raquel Lyra', 3),
		('Zenaldo Coutinho', null);
        
insert into prefeitos (NOME, CIDADE_ID)
	values('Rafael Greca', null);