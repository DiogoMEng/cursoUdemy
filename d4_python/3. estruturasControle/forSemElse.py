# deve ser priorizado constantes com letra maiusculas

PALAVRAS_PROIBIDAS = ('futebol', 'religião', 'política')

textos = [
    'João gosta de futebol e política',
    'a praia foi divertida',
]
# split: faz os espaços em branco
for texto in textos:
    found = False  # case nenhuma palavra for encontrada, o valor sera falso
    for palavra in texto.lower().split():  # laça em cada uma das palavras
        if palavra in PALAVRAS_PROIBIDAS:
            print('texto possui uma palavra proibida: ', palavra)
            found = True
            break

    if not found:
        print('texto autorizado: ', texto)
