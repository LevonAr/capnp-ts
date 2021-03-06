/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from "capnp-ts";
import { ObjectSize as __O, Struct as __S } from 'capnp-ts';
export const _capnpFileId = "b597bf4897e54f89";
export enum Person_PhoneNumber_Type {
    MOBILE,
    HOME,
    WORK
}
export class Person_PhoneNumber extends __S {
    static readonly Type = Person_PhoneNumber_Type;
    static readonly _capnp = { displayName: "PhoneNumber", id: "cba8ed6b45001ccc", size: new __O(8, 1) };
    getNumber(): string { return __S.getText(0, this); }
    setNumber(value: string): void { __S.setText(0, value, this); }
    getType(): Person_PhoneNumber_Type { return __S.getUint16(0, this); }
    setType(value: Person_PhoneNumber_Type): void { __S.setUint16(0, value, this); }
    toString(): string { return "Person_PhoneNumber_" + super.toString(); }
}
export enum Person_Employment_Which {
    UNEMPLOYED = 0,
    EMPLOYER = 1,
    SCHOOL = 2,
    SELF_EMPLOYED = 3
}
export class Person_Employment extends __S {
    static readonly UNEMPLOYED = Person_Employment_Which.UNEMPLOYED;
    static readonly EMPLOYER = Person_Employment_Which.EMPLOYER;
    static readonly SCHOOL = Person_Employment_Which.SCHOOL;
    static readonly SELF_EMPLOYED = Person_Employment_Which.SELF_EMPLOYED;
    static readonly _capnp = { displayName: "employment", id: "927f49708287c3b6", size: new __O(8, 4) };
    isUnemployed(): boolean { return __S.getUint16(4, this) === 0; }
    setUnemployed(): void { __S.setUint16(4, 0, this); }
    getEmployer(): string {
        __S.testWhich("employer", __S.getUint16(4, this), 1, this);
        return __S.getText(3, this);
    }
    isEmployer(): boolean { return __S.getUint16(4, this) === 1; }
    setEmployer(value: string): void {
        __S.setUint16(4, 1, this);
        __S.setText(3, value, this);
    }
    getSchool(): string {
        __S.testWhich("school", __S.getUint16(4, this), 2, this);
        return __S.getText(3, this);
    }
    isSchool(): boolean { return __S.getUint16(4, this) === 2; }
    setSchool(value: string): void {
        __S.setUint16(4, 2, this);
        __S.setText(3, value, this);
    }
    isSelfEmployed(): boolean { return __S.getUint16(4, this) === 3; }
    setSelfEmployed(): void { __S.setUint16(4, 3, this); }
    toString(): string { return "Person_Employment_" + super.toString(); }
    which(): Person_Employment_Which { return __S.getUint16(4, this); }
}
export class Person extends __S {
    static readonly PhoneNumber = Person_PhoneNumber;
    static readonly _capnp = { displayName: "Person", id: "efbbc4e996f07104", size: new __O(8, 4) };
    static _Phones: capnp.ListCtor<Person_PhoneNumber>;
    getId(): number { return __S.getUint32(0, this); }
    setId(value: number): void { __S.setUint32(0, value, this); }
    getName(): string { return __S.getText(0, this); }
    setName(value: string): void { __S.setText(0, value, this); }
    getEmail(): string { return __S.getText(1, this); }
    setEmail(value: string): void { __S.setText(1, value, this); }
    adoptPhones(value: capnp.Orphan<capnp.List<Person_PhoneNumber>>): void { __S.adopt(value, __S.getPointer(2, this)); }
    disownPhones(): capnp.Orphan<capnp.List<Person_PhoneNumber>> { return __S.disown(this.getPhones()); }
    getPhones(): capnp.List<Person_PhoneNumber> { return __S.getList(2, Person._Phones, this); }
    hasPhones(): boolean { return !__S.isNull(__S.getPointer(2, this)); }
    initPhones(length: number): capnp.List<Person_PhoneNumber> { return __S.initList(2, Person._Phones, length, this); }
    setPhones(value: capnp.List<Person_PhoneNumber>): void { __S.copyFrom(value, __S.getPointer(2, this)); }
    getEmployment(): Person_Employment { return __S.getAs(Person_Employment, this); }
    initEmployment(): Person_Employment { return __S.getAs(Person_Employment, this); }
    toString(): string { return "Person_" + super.toString(); }
}
export class AddressBook extends __S {
    static readonly _capnp = { displayName: "AddressBook", id: "f724540a01e98224", size: new __O(0, 1) };
    static _People: capnp.ListCtor<Person>;
    adoptPeople(value: capnp.Orphan<capnp.List<Person>>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownPeople(): capnp.Orphan<capnp.List<Person>> { return __S.disown(this.getPeople()); }
    getPeople(): capnp.List<Person> { return __S.getList(0, AddressBook._People, this); }
    hasPeople(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    initPeople(length: number): capnp.List<Person> { return __S.initList(0, AddressBook._People, length, this); }
    setPeople(value: capnp.List<Person>): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "AddressBook_" + super.toString(); }
}
Person._Phones = capnp.CompositeList(Person_PhoneNumber);
AddressBook._People = capnp.CompositeList(Person);
