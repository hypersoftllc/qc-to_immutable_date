
import { toDate } from 'qc-to_date';
import { ImmutableDate } from 'qc-immutable_date';

// ==========================================================================
/**
 * Converts a date-like object to an `ImmutableDate`.  Four date-like objects
 * are recognized.
 *
 * 1. An `ImmutableDate` instance.  It gets returned without modification.
 * 2. A `Date` instance.  It is used to construct a new `ImmutableDate`.
 * 3. A number.  It will be interpreted as the number of milliseconds from the
 *    UNIX epoch.
 * 4. An object with a property named `toDate` that is a function which returns
 *    a `Date` instance when called with no arguments.  A Moment instance from
 *    the Moment library is an example of such an object.
 *
 * Example Usage:
 *
 * ```js
 * let date;
 * date = toImmutableDate(new Date()); // options don't matter.
 * date = toImmutableDate(1234567890); // options don't matter.
 * ```
 *
 * @param {(ImmutableDate|Date|number)} input - The value to convert to an
 *   `ImmutableDate` instance.
 * @param {Object} [options] - The options to use when parsing.
 * @param {*} [options.def=null] - The default value to return if unable to
 *   convert.
 *
 * @returns {(Date|*)} The input converted to an `ImmutableDate` or the default
 *   value if unable to convert.
 */
function toImmutableDate(input?: any, opts?: { def?: any }): any {
  let coersedInput: any, defValue: any, output: any, typeOfInput: string;

  opts = opts || {};

  if (input instanceof ImmutableDate) {
    output = input;
  }
  else {
    coersedInput = toDate(input);
    if (coersedInput instanceof Date) {
      output = new ImmutableDate(coersedInput);
    }
  }

  if (!(output instanceof ImmutableDate)) {
    defValue = opts.hasOwnProperty('def') ? opts.def : null;
    output = defValue;
  }
  return output;
}


// ==========================================================================
export { toImmutableDate, toImmutableDate as to_immutable_date };
