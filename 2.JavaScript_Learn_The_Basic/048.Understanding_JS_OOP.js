const teacherJay = {
    name: 'Jay',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}

const studentBbo = {
    name: 'Bbo',
    age: 20,
    exp: 0,
    gainExp: function() {
        this.exp++;
    }
}

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);

const studentProto = {
    gainExp: function() {
        this.exp++;
    }
}

const harin = {
    name: 'harin',
    age: 10,
    exp: 0,
    __proto__: studentProto
};

const bbo = {
    name: 'bbo',
    age: 20,
    exp: 10,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);