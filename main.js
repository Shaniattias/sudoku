
const soduku1 =
[[1, 7, 4, 3, 8, 5, 9, 6, 2],
[2, 9, 3, 4, 6, 7, 1, 5, 8],
[5, 8, 6, 1, 9, 2, 7, 3, 4],
[4, 5, 1, 9, 2, 3, 8, 7, 6],
[9, 2, 8, 6, 7, 4, 3, 1, 5],
[3, 6, 7, 8, 5, 1, 2, 4, 9],
[7, 1, 9, 5, 4, 8, 6, 2, 3],
[6, 3, 5, 2, 1, 9, 4, 8, 7],
[8, 4, 2, 7, 3, 6, 5, 9, 1]]
const soduku2 =
[[5, 4, 2, 9, 8, 7, 6, 1, 3],
[8, 9, 6, 4, 3, 1, 5, 2, 7],
[7, 3, 1, 6, 5, 2, 9, 8, 4],
[4, 2, 5, 3, 1, 9, 7, 6, 8],
[1, 8, 3, 2, 7, 6, 4, 5, 9],
[6, 7, 9, 5, 4, 8, 2, 3, 1],
[3, 1, 4, 7, 2, 5, 8, 9, 6],
[2, 6, 7, 8, 9, 3, 1, 4, 5],
[9, 5, 8, 1, 6, 4, 3, 7, 2]]
const soduku3 =
[[9, 1, 4, 7, 8, 2, 3, 6, 5],
[3, 8, 5, 4, 1, 6, 7, 9, 2],
[7, 2, 6, 5, 9, 3, 4, 1, 8],
[8, 9, 2, 6, 3, 7, 5, 4, 1],
[4, 6, 3, 2, 5, 1, 8, 7, 9],
[5, 7, 1, 9, 4, 8, 2, 3, 6],
[1, 4, 8, 3, 2, 9, 6, 5, 7],
[2, 5, 7, 1, 6, 4, 9, 8, 3],
[6, 3, 9, 8, 7, 5, 1, 2, 4]]
// create table
function show(num) {
let tab = document.createElement('table');
let mainDiv = document.getElementById('mainDiv');
for (let i = 0; i < 9; i++) {
  let tr = document.createElement('tr');
  tr.id = 'td' + { i }
  for (let j = 0; j < 9; j++) {
    let td = document.createElement('td');
    td.id = `td${i}${j}`
    let input = document.createElement("input");
    input.type = "text";
    input.id = `inp${i}${j}`;
    input.setAttribute('type','number')
    td.appendChild(input);
    tr.appendChild(td);
  }
  tab.appendChild(tr);
}
mainDiv.appendChild(tab);

document.getElementById('sudokuTable').style.display = 'block';
document.getElementById('chooseLevel').style.display = 'none';


numOfBoard=Math.ceil(Math.random()*3);
let soduku=[];
if(numOfBoard==1)
{
  soduku=soduku1;
}
else if(numOfBoard==2)
{
  soduku=soduku2;
}
else
{
  soduku=soduku3;
}
let x,y;
if (num == 1) {
  for(let i=0;i<60;i++)
  {
    x=Math.floor(Math.random()*9);
    y=Math.floor(Math.random()*9);
    if(document.getElementById(`inp${x}${y}`).value!='')
    {
      i--
      continue
    }
    else{
      document.getElementById(`inp${x}${y}`).value=soduku[x][y];
      document.getElementById(`inp${x}${y}`).disabled=true;
      }
  }
 
}
else if (num == 2) 
{
  for(let i=0;i<40;i++)
  {
    x=Math.floor(Math.random()*9);
    y=Math.floor(Math.random()*9);
    if(document.getElementById(`inp${x}${y}`).value!='')
    {
      i--
      continue
    }
    else{
      document.getElementById(`inp${x}${y}`).value=soduku[x][y];
      document.getElementById(`inp${x}${y}`).disabled=true;
      }
  }  
}
else 
{
  for(let i=0;i<20;i++)
  {
    x=Math.floor(Math.random()*9);
    y=Math.floor(Math.random()*9);
    if(document.getElementById(`inp${x}${y}`).value!='')
    {
      i--
      continue
    }
    else{
      document.getElementById(`inp${x}${y}`).value=soduku[x][y];
      document.getElementById(`inp${x}${y}`).disabled=true;
      }
  } 
}

for(let i = 0;i<9;i++){
  for(let j =0;j<9;j++){
    if(document.getElementById(`inp${i}${j}`).value != ''){
      document.getElementById(`inp${i}${j}`).disabled=true;
    }
  }
}
}
//user name & password
function check() {

let usern = document.getElementById('user').value;
let password = document.getElementById('pasword').value;
let user1 = 'abcd';
let password1 = '1234';
if (usern != user1 || password != password1) {
  document.getElementById("demo").innerHTML = 'Your password or username is incorrect';
}
else {
  document.getElementById('chooseLevel').style.display = 'block';
  document.getElementById('signIn').style.display = 'none';
}

}
// check rows                               
function check1() {                           
                                            
for (let i = 0; i < 9; i++) {
  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let j = 0; j < 9; j++) {
    let number = document.getElementById(`inp${i}${j}`).value;
    arr[number - 1]++;
  }
  for (let k = 0; k < 9; k++) {
    if (arr[k] != 1) {
      return false;
    }
  }
}
return true;
}
//check columns
function check2() {

for (let i = 0; i < 9; i++) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let j = 0; j < 9; j++) {
    let number = document.getElementById(`inp${j}${i}`).value;
    arr[number - 1]++;

  }
  for (let k = 0; k < 9; k++) {
    if (arr[k] != 1) {
      return false;
    }

  }
}
return true;
}
// check board
function check3() {
if (check1() && check2()) {
  alert('GREAT!!!')
}
else
  alert('Oops,try again')
}
