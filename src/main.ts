export function evenOrOdd(n: number): Is {
  if (!Number.isInteger(n)) {
    throw new TypeError(`Expected an integer, got ${n}`);
  }
  if( n % 2 === 0) {
    return Is.Even;
  }
  
  return Is.Odd;
}

export enum Is {
    Even,
    Odd
}