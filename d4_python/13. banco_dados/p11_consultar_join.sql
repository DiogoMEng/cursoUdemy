-- inner join - junção interna/pedido de junção
-- on - sobre 
select * from estados e, cidade c where e.id = c.estado_id;

select e.nome, regiao, c.nome, area from estados e, cidade c where e.id = c.estado_id;

select c.nome, e.nome, regiao, area from estados e inner join cidade c on e.id = c.estado_id;