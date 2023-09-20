document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

document.getElementById('register-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simule a autenticação bem-sucedida (você deve substituir esta simulação pela lógica real de autenticação)
    const isAuthenticated = true;

    if (isAuthenticated) {
        // Redirecionar para a próxima página (dashboard.html) após o login bem-sucedido
        window.location.href = 'https://flowgames.gg/';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});


document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simule o cadastro bem-sucedido (substitua esta simulação pela lógica real de cadastro)
    const isRegistered = true;

    if (isRegistered) {
        // Redirecionar para a próxima página (dashboard.html) após o cadastro bem-sucedido
        window.location.href = 'https://flowgames.gg/';
    } else {
        alert('Erro ao cadastrar. Tente novamente.');
    }
});

