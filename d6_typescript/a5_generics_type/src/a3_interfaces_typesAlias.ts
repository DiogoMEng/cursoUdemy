interface ProtocolPerson<T = string, U = any> {
    name: T,
    surname: T,
    age: U
}

const student: ProtocolPerson<string, number> = {
    name: 'Diogo',
    surname: 'Mello',
    age: 21
}
