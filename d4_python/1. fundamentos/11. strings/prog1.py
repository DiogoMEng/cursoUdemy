nome = 'diogo dias mello'
print(nome)

print(nome[6])

print("marca d'agua" == 'marca d\'agua')

doc = """diogo 
tatiana dias coelho
carol dos santos coelho"""

print(doc)

# parte 2
nome = 'tatiana dias'
print(nome[0])
print(nome[4:])  # conta aparti do espaço 4
print(nome[:4])
print(nome[3:5])

nome1 = 'diogo dias mello'
print(nome1[::3])  # stap

# parte 3

# operador membro

nome2 = 'Cristian da Silva Cassulo de Mello'
print('s' in nome2)
print('Cris' not in nome2)

print(len(nome2))

print(nome2.lower())  # função lower: transformar frase ou palavra em minuscula
print(nome2.upper())  # função upper: transformae frase ou palavra em maiuscula
print(nome2.split())  # função split: quebra de frase em todos os espaços

# parte 4

a = '123'
b = ' diogo 19'

print(a + b)
print(a.__add__(b))

print(str.__add__(a, b))
