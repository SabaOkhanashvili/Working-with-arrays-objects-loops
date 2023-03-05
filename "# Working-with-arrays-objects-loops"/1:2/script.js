const user = {
    name: 'saba okhanashvili',
    age: 15,
    email: 'saba@example.com'
  };
  
  function cloneUserObject(original) {
    return Object.assign({}, original);
  }
  
  const originalDiv = document.getElementById('original');
  const clonedDiv = document.getElementById('cloned');
  
  originalDiv.innerText = JSON.stringify(user, null, 2);
  clonedDiv.innerText = JSON.stringify(cloneUserObject(user), null, 2);
  