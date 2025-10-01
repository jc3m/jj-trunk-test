# Calculator App

A simple TypeScript calculator application with comprehensive testing using Vitest and GitHub Actions CI/CD.

## Features

- Basic arithmetic operations (add, subtract, multiply, divide)
- Advanced mathematical functions (power, square root, factorial)
- Prime number checking
- Comprehensive test coverage
- TypeScript support
- GitHub Actions CI/CD pipeline
- **pnpm** package manager for fast, efficient dependency management

## Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd jj-trunk-test
```

2. Install dependencies with pnpm:
```bash
pnpm install
```

Or with npm:
```bash
npm install
```

### Development

1. Build the project:
```bash
pnpm run build
```

2. Run tests:
```bash
pnpm test
```

3. Run tests in watch mode:
```bash
pnpm run test:watch
```

4. Run tests with coverage:
```bash
pnpm run test:coverage
```

5. Run tests once (for CI):
```bash
pnpm run test:run
```

## Usage

```typescript
import { Calculator } from './src/calculator.js';

const calc = new Calculator();

// Basic operations
console.log(calc.add(2, 3));        // 5
console.log(calc.subtract(10, 4));  // 6
console.log(calc.multiply(3, 4));  // 12
console.log(calc.divide(15, 3));    // 5

// Advanced operations
console.log(calc.power(2, 3));     // 8
console.log(calc.squareRoot(16));  // 4
console.log(calc.factorial(5));    // 120
console.log(calc.isPrime(17));     // true
```

## Testing

The project uses Vitest for testing with comprehensive coverage:

- **Basic arithmetic operations**: Addition, subtraction, multiplication, division
- **Error handling**: Division by zero, negative square roots, invalid factorials
- **Edge cases**: Decimal numbers, large numbers, zero handling
- **Advanced functions**: Power, square root, factorial, prime checking

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests once (for CI)
pnpm run test:run

# Run tests with coverage
pnpm run test:coverage

# Run tests in watch mode
pnpm run test:watch
```

## Breaking Tests (For Testing CI)

To easily break the tests and see the CI pipeline in action, you can:

1. **Modify a test expectation**:
   ```typescript
   // In src/calculator.test.ts, change:
   expect(calculator.add(2, 3)).toBe(5);
   // To:
   expect(calculator.add(2, 3)).toBe(6);
   ```

2. **Introduce a bug in the calculator**:
   ```typescript
   // In src/calculator.ts, change:
   add(a: number, b: number): number {
     return a + b;
   }
   // To:
   add(a: number, b: number): number {
     return a + b + 1; // This will break tests
   }
   ```

3. **Add a failing test**:
   ```typescript
   it('should fail intentionally', () => {
     expect(calculator.add(1, 1)).toBe(3); // This will fail
   });
   ```

## CI/CD

The project includes GitHub Actions workflow that:

- Runs on Node.js versions 18, 20, and 21
- Uses **pnpm** for fast dependency management
- Triggers on push and pull requests to main/develop branches
- Compiles TypeScript
- Runs all tests
- Generates coverage reports
- Includes pnpm store caching for faster builds

## Project Structure

```
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI workflow
├── src/
│   ├── calculator.ts           # Main calculator class
│   ├── calculator.test.ts      # Test suite
│   └── index.ts               # Entry point
├── dist/                      # Compiled JavaScript (generated)
├── coverage/                  # Coverage reports (generated)
├── package.json
├── pnpm-lock.yaml            # pnpm lockfile
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

## Scripts

- `pnpm run build` - Compile TypeScript to JavaScript
- `pnpm test` - Run tests in watch mode
- `pnpm run test:run` - Run tests once
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm run test:coverage` - Run tests with coverage
- `pnpm run dev` - Watch mode for TypeScript compilation

## Why pnpm?

This project uses **pnpm** instead of npm for several advantages:

- **Faster installs**: pnpm is typically 2-3x faster than npm
- **Disk space efficient**: Uses hard links and symlinks to avoid duplicating packages
- **Strict dependency resolution**: Prevents phantom dependencies
- **Better monorepo support**: Excellent workspace management
- **Compatible**: Works with existing npm workflows

## License

MIT
