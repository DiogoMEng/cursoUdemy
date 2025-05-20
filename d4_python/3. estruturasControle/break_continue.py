for x in range(1, 11):  # range: conta de 1 até 10
    if x % 2 == 0:
        continue  # interrompe a iteração(repetição), e vai pra proxima
    print(x)

for x in range(1, 11):
    if x == 5:
        break  # sai da laço for, quando o valor for verdadeiro
    print(x)

print('fim!')
