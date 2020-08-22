const form = document.querySelector("form");
const input = form.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feita = document.querySelector(".feita");



form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";

    tarefa.append(checkbox) //usando pra incluir texto ou elementos
    tarefa.append(input.value);
    tarefa.append(botaoDeDeletar);

    aFazer.append(tarefa);

});