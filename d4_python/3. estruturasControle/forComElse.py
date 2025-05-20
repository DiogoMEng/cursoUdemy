# deve ser priorizado constantes com letra maiusculas

PALAVRAS_PROIBIDAS = ('futebol', 'religião', 'política')

textos = [
    'João gosta de futebol e política',
    'a praia foi divertida',
]
# split: quebra a texto em palavras
# lower> colocar as palavras em letras minusculas 
for texto in textos:
    for palavra in texto.lower().split():  # laça em cada uma das palavras
        if palavra in PALAVRAS_PROIBIDAS:
            print('texto possui uma palavra proibida: ', palavra)
            break

    else:
        print('texto autorizado: ', texto)
