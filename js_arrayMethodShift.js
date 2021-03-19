'use strict';

numbers.shift = function() {
  if (this.length === 0) {
    return undefined;
  }

  const removeElement = this[0];

  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }

  this.length -= 1;

  return removeElement;
};