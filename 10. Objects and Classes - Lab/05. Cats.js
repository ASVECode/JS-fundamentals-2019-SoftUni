function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    arr.forEach(element => {
        let [name, age] = element.split(' ');
        let cat = new Cat(name, age);
        cat.meow();

    });
}
cats(['Mellow 2', 'Tom 5']);