use wm;
select * from estados;
select * from cidade;


insert into cidade (nome, area, estado_id)
	values('Campinas', 795, 25);

insert into cidade (nome, area, estado_id)
	values('Niterio', 133.9, 19);
    
insert into cidade(nome, area, estado_id)
	values('Caruaru', 920.6, (select id from estados where sigla = 'PE'));
    
insert into cidade
	(nome, area, estado_id)
    values('Juaneiro do Norte', 248.2, (select id from estados where sigla = 'CE'))