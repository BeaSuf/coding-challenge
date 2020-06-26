# Coding Challenge

Language: Javascript

This coding challenge is written in Node.js (<https://nodejs.org/en/>) and using jest (<https://jestjs.io/>) for TDD.

***

## Installation

Environment: Built on Ubuntu 18.04.4 using node -v 13.11.0 and npm -v 6.14.5

**Clone** this Repo
> $ git clone https://github.com/BeaSuf/coding-challenge.git

**cd** to the root directory of the package
> $ cd avg-cubic-weight

Run **npm install** to install the dependencies
> $ npm install

***

## Usage

Run the application from the root directory with following options:

> $ npm start

## Output

This is a CLI application and the output will be shown in the terminal.
***

## Testing

Test by running **npm test** or **npm run watch** (jest/jest-watcher) <https://jestjs.io/>
> $ npm test

> $ npm run watch

Terminal output may look like following:

 >PASS  tests/utils.spec.js
 > Cubic Weight
 >   ✓ should return 6.75 when dimentions are length: 45cm, height: 20cm, width: 30cm (2 ms)
 > Average Cubic Weight
 >   ✓ should return an average of 6.00 when there are 3 parcels with [6.00, 5.00, 7.00] cubic dimentions
 > Get Data
 >   ✓ should return an object with "objects" property (51 ms)

>Test Suites: 1 passed, 1 total
>Tests:       3 passed, 3 total
>Snapshots:   0 total
>Time:        0.325 s, estimated 1 s
>Ran all test suites.

***

### Assumptions

- All dimensions are provided in centimetres.
- All weights are provided in grams.
