/**
 * A simple calculator with basic arithmetic operations
 */
export class Calculator {
  /**
   * Add two numbers
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Subtract two numbers
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Multiply two numbers
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Divide two numbers
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }

  /**
   * Calculate the power of a number
   */
  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  /**
   * Calculate the square root of a number
   */
  squareRoot(number: number): number {
    if (number < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(number);
  }

  /**
   * Calculate the factorial of a number
   */
  factorial(n: number): number {
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  /**
   * Check if a number is prime
   */
  isPrime(n: number): boolean {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

