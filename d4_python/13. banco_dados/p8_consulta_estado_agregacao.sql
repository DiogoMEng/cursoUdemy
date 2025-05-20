-- group by - agrupamento de dados
-- avg - média da população
select 
	regiao as 'Região',
    sum(populacao) as total
from estados group by regiao order by total desc; 

select 
    sum(populacao) as total
from estados; 

select 
    avg(populacao) as total
from estados;
