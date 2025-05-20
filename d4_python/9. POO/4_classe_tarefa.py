from datetime import datetime


class Tarefa:
    def __init__(self, descricao):
        self.descricao = descricao
        self.feito = False
        # modulo now() passa a data atual
        self.criacao = datetime.now()

    def concluir(self):
        self.feito = True

    def __str__(self):
        return self.descricao + (' (concluida)' if self.feito else '')


def main():
    casa = []
    casa.append(Tarefa('passar roupa'))
    casa.append(Tarefa('lavar prato'))

    [tarefa.concluir() for tarefa in casa if tarefa.descricao == 'lavar prato']
    for tarefa in casa:
        print(f'- {tarefa}')


if __name__ == '__main__':
    main()
