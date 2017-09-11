# qc-to_immutable_date

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

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


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-to_immutable_date/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-to_immutable_date?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-to_immutable_date.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-to_immutable_date
[license-image]: http://img.shields.io/npm/l/qc-to_immutable_date.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-to_immutable_date
[npm-badge-png]: https://nodei.co/npm/qc-to_immutable_date.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-to_immutable_date.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-to_immutable_date
