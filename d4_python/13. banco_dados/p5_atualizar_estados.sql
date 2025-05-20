use wm;

update ESTADOS set nome = 'MARANHÃO'
	where sigla = 'MA';
    
select * from estados;
select estados.nome from estados;

update estados set nome = 'Paraná', populacao = 11.32
	where sigla = 'PR';
    
select nome from estados where sigla = 'PR';