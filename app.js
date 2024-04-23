const studentsList = document.getElementById('student-list');

function renderStudents(doc){
    let li = document.createElement('li');
    let nome = document.createElement('span');
    let cpf = document.createElement('span');
    let rg = document.createElement('span');
    let email = document.createElement('span');
    let telefone_aluno = document.createElement('span');
    let telefone_responsa = document.createElement('span');
    let data_nascimento = document.createElement('span');
    let excluir = document.createElement('div');

    excluir.textContent = 'X';

    li.setAttribute('data-id', doc.id);
    nome.textContent = doc.data().nome;
    cpf.textContent = doc.data().cpf;
    rg.textContent = doc.data().rg;
    email.textContent = doc.data().email;
    telefone_aluno.textContent = doc.data().telefone_aluno;
    telefone_responsa.textContent = doc.data().telefone_responsa;
    data_nascimento.textContent = doc.data().data_nascimento;
    
    li.appendChild(nome);
    li.appendChild(cpf);
    li.appendChild(rg);
    li.appendChild(email);
    li.appendChild(telefone_aluno);
    li.appendChild(telefone_responsa);
    li.appendChild(data_nascimento);

    li.appendChild(excluir);

    excluir.addEventListener('click', (event) =>{
        event.stopPropagation();

        let id = event.target.parentElement.getAttribute('data-id');
    
        db.collection('bd3-nosql-atv5').doc(id).delete()
        .then(() =>{
            window.location.reload();
        });
    });

    studentsList.appendChild(li);
}

db.collection('bd3-nosql-atv5')
.get()
.then(
    (snapshot) =>{
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
            renderStudents(doc)
        });
    }
)

const form = document.getElementById('student-form')

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    db.collection('bd3-nosql-atv5').add({
        nome: form.nome.value,
        cpf: form.cpf.value,
        rg: form.rg.value,
        email: form.email.value,
        telefone_aluno: form.telefone_aluno.value,
        telefone_responsa: form.telefone_responsa.value,
        data_nascimento: form.data_nascimento.value

    }).then(() =>{
        form.nome.value = '';
        form.cpf.value = '';
        form.rg.value = '';
        form.email.value = '';
        form.telefone_aluno.value = '';
        form.telefone_responsa.value = '';
        form.data_nascimento.value = '';

        window.location.reload();
    })
});