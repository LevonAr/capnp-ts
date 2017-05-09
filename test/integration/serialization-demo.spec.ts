/**
 * @author jdiaz5513
 */

import tap from '../util/tap';

import * as capnp from '../../lib';
import {AddressBook, Person} from './serialization-demo';

const EXPECTED_OUT = [
  0x00, 0x00, 0x00, 0x00,
  0x23, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00,
  0x05, 0x00, 0x00, 0x00, 0x57, 0x00, 0x00, 0x00,
  0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x04, 0x00,
  0xc8, 0x01, 0x00, 0x00, 0x02, 0x00, 0x00, 0x00,
  0x21, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00,
  0x21, 0x00, 0x00, 0x00, 0x92, 0x00, 0x00, 0x00,
  0x2d, 0x00, 0x00, 0x00, 0x17, 0x00, 0x00, 0x00,
  0x39, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
  0xc8, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x35, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
  0x35, 0x00, 0x00, 0x00, 0x82, 0x00, 0x00, 0x00,
  0x3d, 0x00, 0x00, 0x00, 0x27, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x41, 0x6c, 0x69, 0x63, 0x65, 0x00, 0x00, 0x00,
  0x61, 0x6c, 0x69, 0x63, 0x65, 0x40, 0x65, 0x78,
  0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x63, 0x6f,
  0x6d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x04, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x01, 0x00, 0x00, 0x00, 0x4a, 0x00, 0x00, 0x00,
  0x35, 0x35, 0x35, 0x2d, 0x31, 0x32, 0x31, 0x32,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x4d, 0x49, 0x54, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x42, 0x6f, 0x62, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x62, 0x6f, 0x62, 0x40, 0x65, 0x78, 0x61, 0x6d,
  0x70, 0x6c, 0x65, 0x2e, 0x63, 0x6f, 0x6d, 0x00,
  0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00,
  0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x09, 0x00, 0x00, 0x00, 0x4a, 0x00, 0x00, 0x00,
  0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x09, 0x00, 0x00, 0x00, 0x4a, 0x00, 0x00, 0x00,
  0x35, 0x35, 0x35, 0x2d, 0x34, 0x35, 0x36, 0x37,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x35, 0x35, 0x35, 0x2d, 0x37, 0x36, 0x35, 0x34,
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
];

tap.test('write address book', (t) => {

  const message = new capnp.Message();
  const addressBook = message.initRoot(AddressBook);

  t.type(addressBook, AddressBook);

  const people = addressBook.initPeople(2);

  t.type(people, capnp.CompositeList);

  const alice = people.get(0);

  t.type(alice, Person);

  alice.setId(456);
  alice.setName('Alice');
  alice.setEmail('alice@example.com');

  t.comment('should not crash while calling setters');

  const alicePhones = alice.initPhones(1);

  t.type(alicePhones, capnp.CompositeList);

  alicePhones.get(0).setNumber('555-1212');
  alicePhones.get(0).setType(Person.PhoneNumber.Type.MOBILE);

  t.comment('should not crash while chaining getter calls');

  alice.getEmployment().setSchool('MIT');

  t.comment('should not crash while accessing groups and unions');

  const bob = people.get(1);

  t.type(bob, Person);

  bob.setId(456);
  bob.setName('Bob');
  bob.setEmail('bob@example.com');

  t.comment('should not crash while calling setters on composite struct with nonzero index');

  const bobPhones = bob.initPhones(2);

  t.type(bobPhones, capnp.CompositeList);

  bobPhones.get(0).setNumber('555-4567');
  bobPhones.get(0).setType(Person.PhoneNumber.Type.HOME);
  bobPhones.get(1).setNumber('555-7654');
  bobPhones.get(1).setType(Person.PhoneNumber.Type.WORK);

  t.comment('should not crash while chaining getters');

  bob.getEmployment().setUnemployed();

  t.comment('should not crash while setting void union');

  const out = message.writeToArrayBuffer();

  t.strictSame(Array.prototype.slice.call(new Uint8Array(out)), EXPECTED_OUT);

  t.end();

});
