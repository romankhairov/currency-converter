require ('bulma');

const $addItem = document.querySelector('.add-item');
const $writeItem = document.querySelector('.write-item');
const $taskList = document.querySelector('.task-list');
const $addTab = document.querySelector('.add-tab');


$addItem.addEventListener('click', function() {
  var value = $writeItem.value;
  if (value) addItemTodo(value);
});

$addTab.addEventListener('click', function() {
  var value = "Tab";
  if (value) addNewTab(value);
});

function removeItem(e) {
  // console.log(this.parentNode.parentNode.parentNode);
  var item = this.parentNode.parentNode.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

function doneItem() {
  var item = this.parentNode.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target = (id === 'todo') ? document.getElementById('done'):document.getElementById('to-get');

}

function addItemTodo(inputText) {
// const itemTemplate = `
//   <li class="panel-block">
//       <div class="container is-fluid">
//           ${inputText}
//       </div>
//   </li>
// `;
var list = document.getElementById("to-get");

var newItem = document.createElement('li');
newItem.classList.add('panel-block');

var textBlock = document.createElement('div');
textBlock.classList.add('container', 'is-fluid');
textBlock.innerText = inputText;

var control = document.createElement('p');
control.classList.add('control');

var buttons = document.createElement('div');
buttons.classList.add('field', 'is-grouped');

var done = document.createElement('button');
done.classList.add('button', 'is-small', 'is-success', 'is-outlined');
done.innerText = "Done";
var remove = document.createElement('button');
remove.classList.add('delete', 'remove-btn');
remove.addEventListener('click', removeItem);

buttons.appendChild(control);
control.appendChild(done);
control.appendChild(remove);
newItem.appendChild(textBlock);
newItem.appendChild(buttons);
list.insertBefore(newItem, list.childNodes[0]);
}

function addItemTodo(inputText) {

// const itemTemplate = `
//   <li class="panel-block">
//       <div class="container is-fluid">
//           ${inputText}
//       </div>
//   </li>
// `;

var list = document.getElementById("to-get");

var newItem = document.createElement('li');
newItem.classList.add('panel-block');

var textBlock = document.createElement('div');
textBlock.classList.add('container', 'is-fluid');
textBlock.innerText = inputText;

var control = document.createElement('p');
control.classList.add('control');

var buttons = document.createElement('div');
buttons.classList.add('field', 'is-grouped');

var done = document.createElement('button');
done.classList.add('button', 'is-small', 'is-success', 'is-outlined');
done.innerText = "Done";

var remove = document.createElement('button');
remove.classList.add('delete', 'remove-btn');

remove.addEventListener('click', removeItem);


buttons.appendChild(control);
control.appendChild(done);
control.appendChild(remove);
newItem.appendChild(textBlock);
newItem.appendChild(buttons);


list.insertBefore(newItem, list.childNodes[0]);

}
