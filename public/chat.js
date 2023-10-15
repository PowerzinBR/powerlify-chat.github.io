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

socket.on('user connected', (user) => {
  // Adiciona o usuário à lista
  userList.push({ name: user, status: 'online' });
  updateUserList();  // Chama a função para atualizar a lista de usuários
});

// Exemplo de lista de usuários
const userList = [];

function updateUserList() {
  const ul = document.getElementById('userList');
  ul.innerHTML = '';

  for (const user of userList) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="status ${user.status}"></span>${user.name}`;
    ul.appendChild(li);
  }
}

updateUserList();
