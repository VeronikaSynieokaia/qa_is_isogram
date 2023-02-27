'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof isIsogram('a'))
      .toBe('boolean');
  });

  it('should return true if entered string has 1 letter', () => {
    expect(isIsogram('a'))
      .toBeTruthy();
  });

  it('should return true if entered string has 2 different letters', () => {
    expect(isIsogram('ab'))
      .toBeTruthy();
  });

  it('should return false if entered string has 2 same letters', () => {
    expect(isIsogram('aa'))
      .toBeFalsy();
  });

  it('should return true if entered string has letters from other languages',
    () => {
      expect(isIsogram('aПРО'))
        .toBeTruthy();
    });
});
