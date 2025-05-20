use wm;

insert into estados (id, nome, sigla, regiao, populacao)
	values (1000, 'novo', 'nv', 'Sul', 2.54);
    
insert into estados (nome, sigla, regiao, populacao)
	values('novo estado', 'ne', 'Norte', 2.51);
    
select * from estados;