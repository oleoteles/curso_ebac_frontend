$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomeTarefa}</li>`)

        $(novaTarefa).appendTo('ul')
        $('input').val('')
    })

    $('ul').on('click', 'li', function(e){
        e.preventDefault();
        $(this).toggleClass('riscarTarefa')
    })
})


/*código em javascript que não deu certo

const form = document.getElementById('form-lista');
const nomeTarefa = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addTarefa();
    atualizaTabela();

})

function addTarefa() {
    const novaTarefa = document.getElementById('nova-tarefa');

    if(nomeTarefa.includes(novaTarefa.value)){
        alert(`A tarefa ${novaTarefa.value} já foi inserida!`);
    }else {
    
    nomeTarefa.push(novaTarefa.value);

    linha += `<li>${novaTarefa.value}</li>`;
    linhas += linha;
    }
    
    novaTarefa.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('ul');
    tabela.innerHTML = linhas;

    tabela.addEventListener('click', function (e) {
        if(e.target.classList.contains('checked')){
            e.target.classList.remove('checked');
        }else{
            e.target.classList.add('checked');
        }
    });

}*/

