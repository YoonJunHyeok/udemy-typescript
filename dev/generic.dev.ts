// const names: Array<string> = [];
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
// //   data.split(' ');
// });
/////////////////////////////////

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
// mergedObj.name;
/////////////////////////////////////

interface Lengthy {
  length: number;
}

function countAndDescirbe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no valude.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescirbe([]));
////////////////////////////////////////////

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Valude of ' + obj[key];
}
extractAndConvert({ name: 'max' }, 'name');
//////////////////////////////////////////////////////

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('1');

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'manu'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());
////////////////////////////////////////////

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}
/////////////////////////////////////////////

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
