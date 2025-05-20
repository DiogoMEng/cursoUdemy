#  **kwargs
# packing
def resultado_f1(**podium):  # retorno de um dicionario
    for posicao, piloto in podium.items():
        print(f'{posicao} -> {piloto}')


if __name__ == '__main__':
    resultado_f1(primeiro='L. Hamilton',
                 segundo='M. Verstappen',
                 terceiro='S. Vettel')

# Unpacking


def resultado_f1(primeiro, segundo, terceiro):
    print(f'1) {primeiro}')
    print(f'2) {segundo}')
    print(f'3) {terceiro}')


if __name__ == '__main__':
    podium = {'primeiro': 'L. Hamilton',
              'segundo': 'M. Verstappen',
              'terceiro': 'S. Vettel'}
    resultado_f1(**podium)
