'use strict';

// деструктуризация массива

{
  let [firstName, secondName] = ['Василий', 'Задов'];
  console.log(firstName + ' ' + secondName);
}

{
  let [,,secondName] = ['Василий','Петрович','Задов'];
  console.log(secondName);
}

{
  let [a, b, ...spread] = ['запахло', 'гниль', 'в' , 'королевстве', 'датском'];
  console.log(spread);
}

{
  let [firstName = 'Василий', secondName = 'Задов'] = ['Павел'];
  console.log(firstName + ' ' + secondName);
}

// деструктуризация объекта
{
  let options =
  {
    name: 'someName'
  };

  let {width = 100, height = 50, name: n} = options;
  console.log(width + ' ' + height + ' ' + n );
}

//параметры по умолчанию у функций
{
  function print(name = 'Василий', surname = 'Задов')
  {
    console.log(name + ' ' + surname);
  }

  print('Павел');
  print(undefined, 'Кот');

  function getName()
  {
    return 'Вася';
  }

  function printf(name = getName(), surname = 'Задов')
  {
    console.log(name + ' ' + surname);
  }

  printf(undefined, 'Кот');

  function print1()
  {
    console.log(arguments);
  }

  function print2(...spread)
  {
    console.log(spread);
  }

  let print3 = () => console.log('sunf');

  print1(1,2,3,4,5);
  print2(1,2,3,4,5);
  print3();
}

//строки
{
  console.log(`много
    строчный
    текст`);

    const apple = 666;
    console.log(`стив съел ${apple} яблок`);

    const str = 'ветер с моря дул... ';
    console.log(str.repeat(2));
    console.log(str.startsWith('ветер'));
}

//объекты и прототипы
{
  let name = 'someName';

  let obj =
  {
    [name]: 'someValue'
  };

  console.log(obj);
  console.log('someName' in obj);
  console.log(name in obj);

  let some =
  {
    hello()
    {
      console.log('hello!');
    }
  };

  some.hello();
}

//классы
{
  class User
  {
    constructor(name)
    {
      this.name = name;
    }

    hello()
    {
      console.log(`hello ${this.name}!!!`);
    }

    get fullName()
    {
      return this.name;
    }

    set fullName(name)
    {
      this.name = name;
    }
  };

  class ExtUser extends User
  {
     constructor(name, surname)
     {
       super(`${name} ${surname}`);
     }
  };


  let usr = new User('Вася');
  usr.hello();
  console.log(usr.fullName);
  usr.fullName = 'Петя';
  usr.hello();

  let euser = new ExtUser('Вася', 'Задов');
  euser.hello();
}

//итераторы
{
   let myObj =
  {
    content: [1,2,3,666,4]
  };

  myObj[Symbol.iterator] = function()
  {
    let current = 0;
    let source = this.content;
    return {
      next()
      {
          if(current < source.length)
          {
            current++;
            return {done: false, value: source[current - 1]};
          }
          else
          {
            return {done: true};
          }
      }
    }
  };

  for(let val of myObj)
  {
    console.log(val);
  }
}

//map
{
  let map = new Map();
  map.set(1, 'вася');
  map.set(2, {name: 'петя'});

  console.log(map);

  for(let val of map.values())
  {
    console.log(val);
  }
}

//set
{
  let set  = new Set();
  set.add(1);
  set.add(2);
  set.add(1);
  set.add(4);

  console.log(set);
}

console.log('\x1b[32m%s\x1b[0m', 'этот текст будет зелёным');
console.log('\x1b[31m%s\x1b[0m', 'а этот красным');

//промисы
{
  let promise = new Promise((accept, reject) => {
    setTimeout(() => {
    // accept('success');
    reject(new Error('fuck!'));
    }, 1000);
  });

// promise.then(
//   result => {
//     console.log(`result ${result}`);
//   },
//   error => {
//     console.log(`error ${error.message}`);
//   }
// );

promise
.then(result => {console.log('some done'); return result;})
.then(result => {console.log(result); return 666;})
.then(num => console.log(num))
.catch(error => console.log(error));
}
