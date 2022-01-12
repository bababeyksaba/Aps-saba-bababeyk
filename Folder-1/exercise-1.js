const person = {
    name : "Saba Bababeyk",
    weight : "60kg",
    height : "170cm",
    status : "student",
    favColor :["blue","black"],
    age : 20,

}
console.log(person.name)
console.log(person["weight"])
person["name"] = "Asghar";
console.log(person.name)
console.log(this.person)

const persons = person.filter(y => y.include("Bababeyk"))
console.log(persons)

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    console.log('this user has written these blogs:');
    this.blogs.forEach(blog => {
      console.log(blog);
    })
  }
};

// console.log(this);
user.logBlogs();
// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// 

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));
// 

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);



userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);