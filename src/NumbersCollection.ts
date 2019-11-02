export class NumbersCollection {
  constructor(public numbers: number[]) {}

  get length(): number {
    return this.numbers.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.numbers[leftIndex] > this.numbers[rightIndex];
  }

  swap(rightIndex: number, leftIndex: number): void {
    const rightHand = this.numbers[leftIndex];
    this.numbers[leftIndex] = this.numbers[rightIndex];
    this.numbers[rightIndex] = rightHand;
  }
}
