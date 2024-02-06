// * fake data's
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    // profile: faker.image.avatar(),
    CustomerID: faker.datatype.number(40),
    CustomerName: faker.person.lastName(),
    CustomerType: faker.person.lastName(),
    MobileNo: faker.datatype.number(1000),
    EmailAddress: faker.datatype.number(100),
    MembershipType:faker.datatype.number(100),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});


// firstName
// lastName:
// age: fake
// visits: f
// progress: