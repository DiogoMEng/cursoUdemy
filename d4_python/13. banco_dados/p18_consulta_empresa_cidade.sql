use wm;

select e.nome, c.nome from empresa e, empresas_unidades eu, cidade c
	where e.id = eu.empresa_id and c.id = eu.cidade_id;