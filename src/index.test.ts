
import { ImmutableDate } from 'qc-immutable_date';

import { to_immutable_date, toImmutableDate } from './index';

describe('qc-to_immutable_date', () => {

  describe('`toImmutableDate`', () => {

    it('should be a function', () => {
      expect(typeof toImmutableDate).toBe('function');
    });

    it('called with no arguments should return default default value', () => {
      expect(toImmutableDate()).toBeNull();
    });

    it('called with `arguments` should return default default value', function () {
      expect(toImmutableDate(arguments)).toBeNull();
    });

    it('called with `undefined` input should return default value', () => {
      expect(toImmutableDate(undefined)).toBeNull();
      expect(toImmutableDate(undefined, { def: null })).toBeNull();
      expect(toImmutableDate(undefined, { def: undefined })).toBeUndefined();
    });

    it('called with `null` input should return default value', () => {
      expect(toImmutableDate(null)).toBeNull();
      expect(toImmutableDate(null, { def: null })).toBeNull();
      expect(toImmutableDate(null, { def: undefined })).toBeUndefined();
    });

    it('called with `NaN` should return default default value', () => {
      expect(toImmutableDate(NaN)).toBeNull();
    });

    it('called with `false` input should return default value', () => {
      expect(toImmutableDate(false)).toBeNull();
      expect(toImmutableDate(false, { def: null })).toBeNull();
      expect(toImmutableDate(false, { def: undefined })).toBeUndefined();
    });

    it('called with `true` input should return default value', () => {
      expect(toImmutableDate(true)).toBeNull();
      expect(toImmutableDate(true, { def: null })).toBeNull();
      expect(toImmutableDate(true, { def: undefined })).toBeUndefined();
    });

    it('called with `-Infinity` should return default value', () => {
      expect(toImmutableDate(-Infinity)).toBeNull();
      expect(toImmutableDate(-Infinity, { def: null })).toBeNull();
      expect(toImmutableDate(-Infinity, { def: undefined })).toBeUndefined();
    });

    it('called with `Infinity` should return default value', () => {
      expect(toImmutableDate(Infinity)).toBeNull();
      expect(toImmutableDate(Infinity, { def: null })).toBeNull();
      expect(toImmutableDate(Infinity, { def: undefined })).toBeUndefined();
    });

    it('called with empty string input should return default value', () => {
      expect(toImmutableDate('')).toBeNull();
      expect(toImmutableDate('', { def: null })).toBeNull();
      expect(toImmutableDate('', { def: undefined })).toBeUndefined();
    });

    it('called with an `ImmutableDate` instance input should return the `ImmutableDate` instance', () => {
      let input: any, output: any;

      input = new ImmutableDate(new Date()),
      output = toImmutableDate(input);
      expect(output).toBe(input);
    });

    it('called with date input should return an `ImmutableDate` instance representing the same date', () => {
      let input: any, output: any;

      input = new Date(946684800000),
      output = toImmutableDate(input);
      expect(output).toBeInstanceOf(ImmutableDate);
      expect(output.getTime()).toBe(input.getTime());
    });

    it('called with an object with a `toDate` function input should return an `ImmutableDate` instance representing the same date', () => {
      let input: any, output: any;

      input = new Date();
      output = toImmutableDate(input, {});
      expect(output.getTime()).toBe(input.getTime());

      input = { toDate: function () { return 946684800000; } };
      output = toImmutableDate(input);
      expect(output).toBeInstanceOf(ImmutableDate);
      expect(output.getTime()).toBe(946684800000);
    });

    it('called with a number input should return an `ImmutableDate` instance representing the same date', () => {
      let input: any, output: any;

      input = 946684800000;
      output = toImmutableDate(input);
      expect(output).toBeInstanceOf(ImmutableDate);
      expect(output.getTime()).toBe(946684800000);
    });

  });

  describe('`to_immutable_date`', () => {

    it('should be a function', () => {
      expect(typeof to_immutable_date).toBe('function');
    });

    it('should be an alias of `toDate`', () => {
      expect(to_immutable_date).toBe(to_immutable_date);
    });

  });

});
