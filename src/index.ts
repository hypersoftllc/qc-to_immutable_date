
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
 * toImmutableDate(946684800000);             // Date on 2000-01-01T00:00:00.000 UTC
 * // An ImmutableDate representing the same time as the date input
 * toImmutableDate(new Date());
 * toImmutableDate(new ImmutableDate(...));   // The ImmutableDate input
 *
 * // Returns the ImmutableDate created from the number returned from `toDate`.
 * toImmutableDate({ toDate() { return 946684800000; } });
 * 
 * // Returns the ImmutableDate returned from `toDate`.
 * toImmutableDate({ toDate() { return new Date(); } });
 * 
 * toImmutableDate(<not-date-like>);                  // The not-date-like input
 * toImmutableDate(<not-date-like>, undefined);       // The not-date-like input
 * toImmutableDate(<not-date-like>, null);            // `null`
 * toImmutableDate(<not-date-like>, 0);               // `0`
 * toImmutableDate(<not-date-like>, new Date());      // The new Date
 * toImmutableDate(<not-date-like>, { def: {...} });  // The `{...}` object
 * ```
 * 
 * @param {*=} input - The value to be converted to an
 *   `ImmutableDate` instance.
 * @param {*=|{ def: *}} [def=undefined] - The default value to return if
 *   unable to convert.  This is allowed to be of any data type.  This may also
 *   be an object with a `def` property.  To return an object as a default value,
 *   then wrap it in an object with a `def` property set to the object that is to
 *   be used as the default value.  A default value resolving to `undefined`
 *   means return the input when not convertible.
 *
 * @returns {(Date|*)} The input converted to an `ImmutableDate` or the default
 *   value if unable to convert.
 */
function toImmutableDate(input?: any, def?: any | { def: any }): any {
  let coercedInput: any, output: any;

  if (input instanceof ImmutableDate) {
    output = input;
  }
  else {
    coercedInput = input;
    // If input has a `toDate` function, then attempt to convert to coerce to a date-like object.
    if (input && typeof input.toDate === 'function') {
      coercedInput = input.toDate();
    }

    if (coercedInput instanceof ImmutableDate) {
      output = coercedInput;
    }
    else if (coercedInput instanceof Date) {
      output = new ImmutableDate(coercedInput);
    }
    else {
      coercedInput = toDate(input);
      if (coercedInput instanceof Date) {
        output = new ImmutableDate(coercedInput);
      }
      else {
        // Resolve default value:
        if (typeof def == 'object' && def !== null && def.hasOwnProperty('def')) {
          def = def.def;
        }
        else {
          def = def;
        }
        if (def === undefined) {
          def = input;
        }
  
        output = def;
      }  
    }
  }

  return output;
}


/**
 * Like `toImmutableDate` but returns `null` if input is not convertible to an
 * `ImmutableDate`.
 */
function toImmutableDateOrNull(input?: any) {
  return toImmutableDate(input, null);
}

// ==========================================================================
export { toImmutableDate, toImmutableDateOrNull };
