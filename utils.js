/**
 * Pads zeros to left of the input value until its length is satisfied.
 *
 * @param {String|Number} s
 * @param {Number} length
 *
 * @return {String}
 */
exports.pad0 = (s, length = 3) => {
  if (typeof s !== 'string') {
    s = s.toString();
  }
  for (let i = 0; i < length - s.length; i++) {
    s = '0' + s;
  }
  return s;
};
