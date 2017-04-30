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
