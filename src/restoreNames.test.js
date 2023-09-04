'use strict';

const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

const resultUsers = [
  {
    firstName: 'Jack',
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    firstName: 'Mike',
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be a declared', () => {
    expect(restoreNames).toBeInstanceOf(Function);
  });

  it('should modify the array but does not return anything', () => {
    const result = restoreNames(users);

    expect(result).not.toBeDefined();
  });

  it('should return correct firstName if it was undefined', () => {
    restoreNames(users);

    expect(users[0].firstName).toBe(resultUsers[0].firstName);
  });

  it('should restore firstName if it didn\'t exist', () => {
    restoreNames(users);

    expect(users[1].firstName).toBe(resultUsers[1].firstName);
  });
});
