const apiUrl = 'http://localhost:3000/users';

const form = document.getElementById('formCadastro');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const res = await fetch(apiUrl, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({name, email})
        });

        if (!res.ok) throw new Error('Erro ao completar cadastro');
        if (res.ok) alert('Cadastro efetuado com sucesso!');

        form.reset();

        
    } catch (err) {
        alert('Erro ao completar operação: ' + err.message);
    }
});