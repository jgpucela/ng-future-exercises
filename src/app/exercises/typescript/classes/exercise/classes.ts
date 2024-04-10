// tslint:disable
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance:number = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move()

class ClassWithPrivateMethodsAndProperties {
  publicProperty:number = 42
  private privateProperty:number = 42

  publicMethod():number {
    return this.privateMethod()
  }

  private privateMethod():number {
    return this.privateProperty
  }
}

class ImprovedConstructorAssignment {
  constructor(public name: string) {}

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Person {
  private _age: number

  set age(age:number) {
    this._age = age
  }

  get age():number {
    return this._age
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: string,
    private readonly foo: string,
    private readonly person: Person,
  ) {}

  bar(): string {
    this.person.age = 43
    return this.name + this.foo
  }
}

abstract class CostCalculator {
  abstract billingCost(): number

  calculateCost(baseCost: number) {
    const total = baseCost + this.productionCost() + this.logisticsCost() + this.marketingCost() + this.billingCost()
    return total
  }

  private productionCost():number {
    return 5
  }

  private logisticsCost():number {
    return 2
  }

  private marketingCost():number {
    return 1
  }
}

class SpainCostCalculator extends CostCalculator {
  override billingCost(): number {
    return 21
  }
}

class FranceCostCalculator extends CostCalculator {
  override billingCost(): number {
    return 21
  }
}

export {}
