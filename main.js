let contador = 1; 

function cadastra() {
    const title = document.getElementById('titulo').value;

    const a = document.createElement('div');
    a.classList.add('col-md-4', 'mb-4');

    
    a.innerHTML = `
        <div class="card">
            <img src="https://picsum.photos/200?random=${contador}" class="card-img-top" alt="">
            <div class="card-body d-flex align-items-center flex-column">
                <h5 class="card-title">${title}</h5>
                <button class="btn btn-danger" onclick="removerCard(this)">Remover</button>
            </div>
        </div>
    `;

    const container = document.getElementById('cardContainer');
    container.appendChild(a);

    
    document.getElementById('titulo').value = "";

    
    contador++;
}

function removerCard(botao) {
    botao.closest('.col-md-4').remove();
}

function apaga_todos() {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ""; 
    contador = 1; 
}