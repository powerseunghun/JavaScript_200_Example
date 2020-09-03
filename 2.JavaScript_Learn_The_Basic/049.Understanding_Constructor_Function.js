function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student) {
        console.log('Teach ' + this.subject + ' To ' + student);
    };
}

const jay = new Teacher('jay', 30, 'JavaScript');
console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30, 'JavaScript');
console.log(jay2);
console.log(age);