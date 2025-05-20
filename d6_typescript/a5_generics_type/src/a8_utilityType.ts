const objeto: Record<string, string | number> = {
    name: "diogo",
    age: 21
}

type PersonProtocol = {
    name?: "diogo",
    age?: 21
}

type PersonRequired = Required<PersonProtocol>;

type PersonPick = Pick<PersonRequired, 'name' | 'age'>

const objeto2: PersonRequired = {
    name: "diogo",
    age: 21
}

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipeExclude = Exclude<ABC, CDE>;
type TipeExtract = Extract<ABC, CDE>;
