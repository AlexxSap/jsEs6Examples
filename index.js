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
