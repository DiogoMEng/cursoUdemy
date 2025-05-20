from datetime import datetime, timedelta


class Projeto:
    def __init__(self, nome):
        self.nome = nome
        self.tarefas = []

    def __iter__(self):
        return self.tarefas.__iter__()
    # metodo privado, representação _nomeMetodo_
    # privada

    def _add_tarefa(self, tarefa, **kwargs):
        self.tarefas.append(tarefa)
    # privada

    def _add_nova_tarefa(self, descricao, **kwargs):
        self.tarefas.append(Tarefa(descricao, kwargs.get('vencimento', None)))

    def add(self, tarefa, vencimento=None, **kwargs):
        # isinstance - testa se faz parte de uma class
        funcao_escolhida = self._add_tarefa if isinstance(tarefa, Tarefa) \
            else self._add_nova_tarefa
        kwargs['vencimento'] = vencimento
        funcao_escolhida(tarefa, **kwargs)

    def pendentes(self):
        return [tarefa for tarefa in self.tarefas if not tarefa.feito]

    def procurar(self, descricao):
        return [tarefa for tarefa in self.tarefas
                if tarefa.descricao == descricao][0]

    def __str__(self):
        return f'{self.nome} ({len(self.pendentes())} tarefas pendentes)'


class Tarefa:
    def __init__(self, descricao, vencimento=None):
        self.descricao = descricao
        self.feito = False
        self.criacao = datetime.now()
        self.vencimento = vencimento

    def concluir(self):
        self.feito = True

    def __str__(self):
        status = []
        if self.feito:
            status.append('concluída')
        elif self.vencimento:
            if datetime.now() > self.vencimento:
                status.append('vencida')
            else:

                dias = (self.vencimento - datetime.now()).days
                status.append(f'vence em {dias} dias')
        return f'{self.descricao} ' + ' '.join(status)


class TarefaRecorrente(Tarefa):
    def __init__(self, descricao, vencimento, dias=7):

        super().__init__(descricao, vencimento)
        self.dias = dias

    def concluir(self):
        super().concluir()
        novo_vencimento = datetime.now() + timedelta(days=self.dias)
        return TarefaRecorrente(self.descricao, novo_vencimento, self.dias)


def main():
    casa = Projeto('casa')
    casa.add('passar roupa', datetime.now() + timedelta(days=3, minutes=12))
    casa.add('lavar prato', datetime.now())
    casa.add(TarefaRecorrente('trocas lençóis', datetime.now(), 7))
    casa.add(casa.procurar('trocas lençóis').concluir())
    print(casa)

    casa.procurar('lavar prato').concluir()
    for tarefa in casa:
        print(f'- {tarefa}')

    print(casa)

    mercado = Projeto('compras no mercado')
    mercado.add('fruta')
    mercado.add('carne')
    mercado.add('tomate')

    print(mercado)

    comprar_carne = mercado.procurar('carne')
    comprar_carne.concluir()
    for tarefa in mercado:
        print(f'- {tarefa}')

    print(mercado)


if __name__ == '__main__':
    main()
