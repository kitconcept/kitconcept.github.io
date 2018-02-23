import React from 'react';

const format_number = number => {
  if (
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined'
  ) {
    return number.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
    });
  }
  return number;
};

export { format_number };
