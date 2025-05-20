def tagBloco(conteudo, classe='success', inline=False):
    tag = 'span' if inline else 'div'
    return f'<{tag} class="{classe}">{conteudo}</{tag}>'

# join -método é usado para especificar os elementos de
# uma sequência de caracteres para gerar uma nova seqüência
# de conexão.


def tag_listas(*itens):
    lista = ''.join((f'<li>{item}</li>' for item in itens))
    return f'<ul>{lista}</ul>'


if __name__ == '__main__':
    print(tagBloco('bloco'))
    print(tagBloco('inline e classe', 'info', True))
    print(tagBloco('inline', inline=True))
    print(tagBloco(inline=True, conteudo='inline'))
    print(tagBloco('falhou', classe='error'))
    print(tagBloco(tag_listas('item 1', 'item 2'), classe='info'))
