const io = require('socket.io')
const socket = io();

let username = localStorage.getItem('username');

function sendMessage() {
  const message = document.getElementById('messageInput').value;
  if (message.trim() !== '') {
    socket.emit('chat message', { username, message });
    document.getElementById('messageInput').value = '';
  }
}

socket.on('chat message', (data) => {
  const ul = document.getElementById('messages');
  const li = document.createElement('li');
  li.innerHTML = `<span class="username">${data.username}:</span> ${data.message}`;
  ul.appendChild(li);
});
