import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class FibonacciApp {
    numTerms: number;
    results: number[] = [];
    pairs: [number, number][] = []

    constructor (numTerms: number) {
        this.numTerms = numTerms;
    }

    validate(): void {
        if (this.numTerms < 0) {
            throw new Error("The number cannot be negative");
        }
        if (Number.isNaN(this.numTerms)) {
            throw new Error("Input needs to be a number");
        }
    }

    displayInfo(): void {
        console.log("Number of terms:", this.numTerms);
    }

    fibonacci(n:number): number {
        if (n === 0){
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2); 
    } 

    generate(): void {
        for (let i = 0; i < this.numTerms; i++) {
            let value = this.fibonacci(i);
            this.results.push(value);
            this.pairs.push([i,value]);
        }
    }

    displayResults(): void {
        console.log("\nFibonacci Results:");
        for (let pair of this.pairs) {
            console.log("Term", pair[0], "=", pair[1]);
        }
        console.log(`\nAll values: [${this.results.join(', ')}]` );
    }
}
console.log("Fibonacci Generator\n");


rl.question("Enter the number of terms: ", (input: string) => {
    let numTerms: number = Number(input);

    try {
    let app = new FibonacciApp(numTerms);
    app.validate();
    app.displayInfo();
    app.generate();
    app.displayResults();
    } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("Error:", error.message)
            }
        }

    rl.close();

});