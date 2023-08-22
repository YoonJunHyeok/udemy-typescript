// const person: {
//   name: string;
//   age: number;
// } = {

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Junhyeok",
  age: 30,
  hobby: ["Sports", "Cooking", "Reading"],
  role: Role.ADMIN,
};

console.log(person.name);

for (const hobby of person.hobby) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
