from locale import setlocale, LC_ALL
from calendar import mdays, month_name
from functools import reduce

# portugues Brasil
setlocale(LC_ALL, 'pt_BR')


def mes_31Dias(mes): return mdays[mes] == 31


def get_nome_mes(mes): return month_name[mes]


def juntar_meses(todos, nome_mes): return f'{todos}\n- {nome_mes}'


print(reduce(juntar_meses,
             map(get_nome_mes, filter(mes_31Dias, range(1, 13))),
             'Meses com 31 dias'))
