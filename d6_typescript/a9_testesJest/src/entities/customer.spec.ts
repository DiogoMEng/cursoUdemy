import { IndividualCustomer, EnterpriseCustomer } from './Customer';

const createIndividualCustomer = (
  firstname: string,
  lastname: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastname, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Discount', () => {
  it('should have firstName, lastName and CPF', () => {
    const sut = createIndividualCustomer('Diogo', 'Dias', '111.111.111-11');

    expect(sut).toHaveProperty('firstname', 'Diogo');
    expect(sut).toHaveProperty('lastname', 'Dias');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Diogo', 'Dias', '111.111.111-11');

    expect(sut.getName()).toBe('Diogo Dias');
  });
});

describe('Discount', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');

    expect(sut).toHaveProperty('name', 'Udemy');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');

    expect(sut.getName()).toBe('Udemy');
  });
});
