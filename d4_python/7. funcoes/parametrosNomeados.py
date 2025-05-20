'''
classe e inline - apresentam valores padrões
'''


def tagBloco(texto, classe='success', inline=False):
    tag = 'span' if inline else 'div'
    return f'<{tag} class="{classe}">{texto}</{tag}>'


if __name__ == '__main__':
    print(tagBloco('bloco'))
    print(tagBloco('inline e classe', 'info', True))
    print(tagBloco('inline', inline=True))
    print(tagBloco('falhou', classe='error'))
