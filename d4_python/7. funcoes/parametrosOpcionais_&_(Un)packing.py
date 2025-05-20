def tagBloco(conteudo, *args, classe='success', inline=False):
    tag = 'span' if inline else 'div'
    html = conteudo if not callable(conteudo) else conteudo(*args)
    return f'<{tag} class="{classe}">{html}</{tag}>'

# join -método é usado para especificar os elementos de
# uma sequência de caracteres para gerar uma nova seqüência
# de conexão.


def tag_listas(*itens):
    lista = ''.join((f'<li>{item}</li>' for item in itens))
    return f'<ul>{lista}</ul>'


if __name__ == '__main__':
    print(tagBloco('bloco'))
    print(tagBloco('inline e classe', classe='info', inline=True))
    print(tagBloco('inline', inline=True))
    print(tagBloco(inline=True, conteudo='inline'))
    print(tagBloco('falhou', classe='error'))
    print(tagBloco(tag_listas('item 1', 'item 2'), classe='info'))
    print(tagBloco(tag_listas, 'sábado', 'domingo',
                   classe='info', inline=True))

# não pode ser usados parametros posicionais depois de
# parametros nomeados
