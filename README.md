# qc-to_immutable_date

A simple JavaScript utility to convert various values to an `ImmutableDate`.


## Installation

```sh
npm install --save qc-to_immutable_date
```

or

```sh
yarn add qc-to_immutable_date
```


## Example Usage

```js
import { toImmutableDate, toImmutableDateOrNull } from 'qc-to_immutable_date';

toImmutableDate(946684800000);   // Date on 2000-01-01T00:00:00.000 UTC
toImmutableDate(new Date());     // The Date input

// Returns the Date created from the number returned from `toDate`.
toImmutableDate({ toDate() { return 946684800000; } });

// Returns the Date returned from `toDate`.
toImmutableDate({ toDate() { return new Date(); } });

toImmutableDate(<not-date-like>);                   // The not-date-like input
toImmutableDate(<not-date-like>, undefined);        // The not-date-like input
toImmutableDate(<not-date-like>, null);             // `null`
toImmutableDate(<not-date-like>, 0);                // `0`
toImmutableDate(<not-date-like>, new Date());       // The new Date
toImmutableDate(<not-date-like>, { def: {...} });   // The `{...}` object
toImmutableDateOrNull(<not-date-like>);             // `null`
toImmutableDateOrNull(<date-like>);                 // The Date
```
