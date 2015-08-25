/**
 * Created by faide on 8/24/2015.
 */

export const hex = function(vals, precision = 2) {
  'use strict';
  let str = '';
  if (Array.isArray(vals)) {
    while (vals.length) {
      str += vals.shift().toString(16);
    }
  } else {
    str = vals.toString(16);
  }

  let returnStr = '0x';
  for (let i = str.length; i < precision; i += 1) {
    returnStr += '0';
  }

  returnStr += str;

  return returnStr;
};
