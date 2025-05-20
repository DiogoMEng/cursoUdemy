PALAVRAS_PROIBIDAS = {'futebol', 'política', 'religião'}

textos = [
    'joão gosta de futebol e política',
    'a praia foi divertida'
]

for texto in textos:
    intersencao = PALAVRAS_PROIBIDAS.intersection(set(texto.lower().split()))
    if intersencao:
        print('texto possui palavras proibidas: ', intersencao)
    else:
        print('texto autorizado: ', texto)
