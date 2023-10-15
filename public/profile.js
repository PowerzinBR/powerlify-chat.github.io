function createProfile() {
    const username = document.getElementById('usernameInput').value;
    const status = document.getElementById('statusInput').value;
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePicture = profilePictureInput.files[0];
  
    if (username) {
      const profile = { username, status, profilePicture };
      localStorage.setItem('profile', JSON.stringify(profile));
      window.location.href = 'index.html';
    } else {
      alert('Por favor, insira um nome de usuário.');
    }
  }
  