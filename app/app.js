const socket = io('ws://localhost:5050');

// pageElements
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

socket.on('message', data => {
  const li = document.createElement('li');
  ul.append(li);
  li.innerHTML = data;
})

button.onclick = () => {
  const data = input.value;
  socket.emit('message', data);
  input.value = '';
}