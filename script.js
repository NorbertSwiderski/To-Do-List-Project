function addTask() {
    let inputText = document.querySelector('.input-js').value;
    let todoContainer = document.querySelector('.todo_container-js');
    let newCard = `<div class="card text-white bg-dark mb-3 card-js" style="max-width: 18rem;">
    <div class="card-header">Do zrobienia:</div>
    <div class="card-body">
        <h5 class="card-title">${inputText}</h5>
        <button type="button" class="btn btn-success button-js" onclick="toggleTask(this)">Zrobione!</button>
        <button type="button" class="btn btn-danger float-right" onclick="deleteTask(this)">Usuń</button>
    </div>
    </div>`

    if (inputText) {
        todoContainer.insertAdjacentHTML('beforeend', newCard);
        document.querySelector('.input-js').value = "";
    }
    else {
        alert("Podaj nazwę zadania!");
    }
}
function deleteTask(item) {
    item.parentElement.parentElement.remove();
}
function toggleTask(item){
    let card = item.parentElement.parentElement;
    card.classList.toggle("bg-dark");
    card.classList.toggle("bg-success");
    let todoTextEl = item.previousElementSibling;
    if (item.innerText =="Zrobione!"){
        item.innerText = "Cofnij wykonanie!";
        card.firstElementChild.innerText = "Zrobione!";

        todoTextEl.innerHTML = `<del>${todoTextEl.innerText}</del>`;
    }
    else {
        item.innerText = "Zrobione!";
        card.firstElementChild.innerText = "Do zrobienia:"
        todoTextEl.innerHTML = todoTextEl.innerText;
    }
}
function selectAll(){
    let card = document.querySelectorAll('.card-js')
    card.forEach(task =>{
        task.classList.toggle("bg-dark");
        task.classList.toggle("bg-success");
    })
    // if (card.classList.contains('bg-dark')){
    //     card.classList.toggle("bg-dark");
    //     card.classList.toggle("bg-success");
    // }
    // let classList = card.classList;
    // let result = classList.contains("bg-dark");
    // if(result){
    //     card.classList.remove("bg-dark");
    //     card.classList.add("bg-success");
    // }
}

