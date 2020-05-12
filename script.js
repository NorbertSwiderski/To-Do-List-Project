function addTask() {
    let inputText = document.querySelector('.input-js').value;
    let todoContainer = document.querySelector('.todo_container-js');
    let newCard = `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">Do zrobienia:</div>
    <div class="card-body">
        <h5 class="card-title">${inputText}</h5>
        <button type="button" class="btn btn-success" onclick="toggleTask()">Zrobione!</button>
        <button type="button" class="btn btn-danger float-right" onclick="deleteTask()">Usuń</button>
    </div>`;
    if(inputText){
        todoContainer.insertAdjacentHTML('beforeend', newCard);
    }
    else{
        alert("Podaj nazwę zadania!");
    }
}
function deleteTask(){
    
}

