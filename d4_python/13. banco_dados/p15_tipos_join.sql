use wm;

-- left - tras a inteseção + lado esquerdo
-- inner - somente a interseção
-- right - interseção + lado direito
select * from cidade c inner join prefeitos p on c.id = p.cidade_id;
select * from cidade c left join prefeitos p on c.id = p.cidade_id;
select * from cidade c right join prefeitos p on c.id = p.cidade_id;
select * from cidade c left outer join prefeitos p on c.id = p.cidade_id;


-- union - união de consultas 
select * from cidade c left join prefeitos p on c.id = p.cidade_id
union
select * from cidade c right join prefeitos p on c.id = p.cidade_id;