// This is an industrial-grade general-purpose greeter function:
function greet(person: String, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }

greet("Maddison", new Date());