use wm;

select * from estados;
delete from estados 
	where sigla = 'ne';
    
delete from estados
	where id >= 1000;