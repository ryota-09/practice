
const getMain = document.getElementById('main');
const createOl = document.createElement('ol');

getMain.appendChild(createOl);


for (let i = 1; i < 6; i++ ){
  const createLi = document.createElement('li');
  createLi.textContent = `アイテム${i}`;
  
  createOl.parentNode.appendChild(createLi);
}
