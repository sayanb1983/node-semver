var semver = require('./semver')

var ranges = [
    '1.1.1-123',
    '1.1.1',
    '1.1.2',
    '2.0.0',
    '1.1.0'
]

console.log(semver.maxSatisfying (ranges, '~1'));
console.log(semver.minSatisfying (ranges, '~1'));

console.log('\n');

console.log( semver.maxSatisfying (ranges, '~1.1.x'));
console.log( semver.minSatisfying (ranges, '~1.1.x'));

console.log('\n');

console.log( semver.maxSatisfying (ranges, '<=2.0.0'));
console.log( semver.minSatisfying (ranges, '<=2.0.0'));

console.log('\n');

console.log( semver.maxSatisfying (ranges, '>=1.1.2'));
console.log( semver.minSatisfying (ranges, '>=1.1.2'));

