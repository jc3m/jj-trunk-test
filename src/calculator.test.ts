import { describe, it, expect, beforeEach } from 'vitest';
import { Calculator } from './calculator.js';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Basic arithmetic operations', () => {
    it('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(10, 20)).toBe(30);
      expect(calculator.add(0, 5)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
      expect(calculator.add(-5, 3)).toBe(-2);
      expect(calculator.add(5, -3)).toBe(2);
    });

    it('should subtract two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(10, 15)).toBe(-5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    it('should multiply two numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it('should divide two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(15, 3)).toBe(5);
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => calculator.divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Advanced operations', () => {
    it('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 2)).toBe(25);
      expect(calculator.power(3, 0)).toBe(1);
    });

    it('should calculate square root correctly', () => {
      expect(calculator.squareRoot(9)).toBe(3);
      expect(calculator.squareRoot(16)).toBe(4);
      expect(calculator.squareRoot(0)).toBe(0);
    });

    it('should throw error for negative square root', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
      expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });

    it('should calculate factorial correctly', () => {
      expect(calculator.factorial(0)).toBe(1);
      expect(calculator.factorial(1)).toBe(1);
      expect(calculator.factorial(5)).toBe(120);
      expect(calculator.factorial(3)).toBe(6);
    });

    it('should throw error for negative factorial', () => {
      expect(() => calculator.factorial(-1)).toThrow('Factorial is not defined for negative numbers');
      expect(() => calculator.factorial(-5)).toThrow('Factorial is not defined for negative numbers');
    });

    it('should identify prime numbers correctly', () => {
      expect(calculator.isPrime(2)).toBe(true);
      expect(calculator.isPrime(3)).toBe(true);
      expect(calculator.isPrime(5)).toBe(true);
      expect(calculator.isPrime(7)).toBe(true);
      expect(calculator.isPrime(11)).toBe(true);
    });

    it('should identify non-prime numbers correctly', () => {
      expect(calculator.isPrime(1)).toBe(false);
      expect(calculator.isPrime(4)).toBe(false);
      expect(calculator.isPrime(6)).toBe(false);
      expect(calculator.isPrime(8)).toBe(false);
      expect(calculator.isPrime(9)).toBe(false);
      expect(calculator.isPrime(15)).toBe(false);
    });
  });

  describe('Edge cases', () => {
    it('should handle decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
      expect(calculator.multiply(2.5, 4)).toBe(10);
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    it('should handle very large numbers', () => {
      expect(calculator.add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });

    it('should handle zero correctly', () => {
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
      expect(calculator.power(5, 0)).toBe(1);
    });
  });
});

