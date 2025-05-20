// ### CRIANDO OBJETO POR INFERÊNCIA ###
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// ### COM TIPO ###
const objetoB: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

const objetoC: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};
