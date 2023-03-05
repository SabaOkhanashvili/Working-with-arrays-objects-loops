const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21},
    {name: 'Ana', age: 28}
  ];
  
  function findSmallestAgeWithName(usersArray) {
    let smallestAge = Infinity;
    let nameWithSmallestAge = '';
    
    for (let i = 0; i < usersArray.length; i++) {
      if (usersArray[i].age < smallestAge) {
        smallestAge = usersArray[i].age;
        nameWithSmallestAge = usersArray[i].name;
      }
    }
  
    return nameWithSmallestAge + ' has the smallest age: ' + smallestAge;
  }
  
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = findSmallestAgeWithName(users);
  