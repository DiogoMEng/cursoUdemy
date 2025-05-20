export function joinObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
    return {
        ...obj1, ...obj2
    };
}

const obj1 = {chave1: 'valor 1'};
const obj2 = {chave2: 'valor 2'};

const join = joinObjects(obj1, obj2);
