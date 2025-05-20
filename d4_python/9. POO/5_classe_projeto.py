from datetime import datetime


class Projeto:
    def __init__(self, nome):
        self.nome = nome
        self.tarefas = []

    def add(self, descricao):
        self.tarefas.append(Tarefa(descricao))

    def pendentes(self):
        return [tarefa for tarefa in self.tarefas if not tarefa.feito]

    def procurar(self, descricao):
        # possivel index error
        return [tarefa for tarefa in self.tarefas
                if tarefa.descricao == descricao][0]

    def __str__(self):
        return f'{self.nome} ({len(self.pendentes())} tarefas pendentes)'


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
    casa = Projeto('casa')
    casa.add('passar roupa')
    casa.add('lavar prato')
    print(casa)

    casa.procurar('lavar prato').concluir()
    for tarefa in casa.tarefas:
        print(f'- {tarefa}')

    print(casa)

    mercado = Projeto('compras no mercado')
    mercado.add('fruta')
    mercado.add('carne')
    mercado.add('tomate')

    print(mercado)

    comprar_carne = mercado.procurar('carne')
    comprar_carne.concluir()
    for tarefa in mercado.tarefas:
        print(f'- {tarefa}')

    print(mercado)


if __name__ == '__main__':
    main()
