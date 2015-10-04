import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstname: i => faker.name.firstName(i),
  lastname: i => faker.name.lastName(i),
  location: i => `${faker.address.city(1, i)}, ${faker.address.stateAbbr(i)}`,
  message: i => faker.hacker.phrase(i)
});
