''' função next - retorna o proximo item em um iterator

generator
    - consome menor memorio do que o listcomprehension
    - dados sobre demanda'''
generator = (i ** 2 for i in range(10) if i % 2 == 0)
for i in generator:
    print(i)
