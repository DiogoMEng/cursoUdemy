use wm;

-- order by - ordena os dados
-- desc - ordena de forma descrescente 
-- where - metodo de filtragem 
-- modo de seleção de tabelas 
select * from ESTADOS;
select nome, sigla from ESTADOS;
select sigla, nome as 'nome do estado' from estados
-- filtrando os dados 
	where regiao = 'sul';
    
select nome, regiao from estados
	where populacao >= 10
-- ordenando do maior para o menor 
	order by populacao;