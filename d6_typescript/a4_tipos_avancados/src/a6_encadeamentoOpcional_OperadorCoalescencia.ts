type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
}

const documento: Documento = {
    titulo: 'titulo',
    texto: 'O texto',
}

// ### ENCADEAMENTO OPCIONAL ###0
console.log(documento.data?.toDateString())

// ### OPERADOR DE COALESCÊNCIA NULA ###
console.log(documento.data?.toDateString() ?? 'valor nulo ou vazio');
