bloco_atrs = ('bloco_accesskey', 'bloco_id')
ul_atrs = ('ul_id', 'ul_style')


def get_atrs(informados, suportados):
    # primeira expressão determina a chave e a segundo o valor
    return ''.join(f'{k.split("_")[-1]}="{v}"'
                   for k, v in informados.items() if k in suportados)

# uso de parametros nomeados variados - **novos_atrs


def tagBloco(conteudo, *args, classe='success', inline=False, **novos_atrs):
    tag = 'span' if inline else 'div'
    html = conteudo if not callable(conteudo) else conteudo(*args,
                                                            **novos_atrs)
    atributos = get_atrs(novos_atrs, bloco_atrs)
    return f'<{tag} {atributos} class="{classe}">{html}</{tag}>'


def tag_listas(*itens, **novos_atrs):
    lista = ''.join((f'<li>{item}</li>' for item in itens))
    return f'<ul{get_atrs(novos_atrs, ul_atrs)}>{lista}</ul>'


if __name__ == '__main__':
    print(tagBloco('bloco'))
    print(tagBloco('inline e classe', classe='info', inline=True))
    print(tagBloco('inline', inline=True))
    print(tagBloco(inline=True, conteudo='inline'))
    print(tagBloco('falhou', classe='error'))
    print(tagBloco(tag_listas('item 1', 'item 2'), classe='info'))
    print(tagBloco(tag_listas, 'sábado', 'domingo',
                   classe='info', inline=True))
    print(tagBloco(tag_listas, 'sabádo', 'domingo', classe='info',
                   bloco_accesskey='m', bloco_id='conteudo', ul_id='lista'))
