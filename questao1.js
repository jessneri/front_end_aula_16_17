const form = document.querySelector("form");
const input = form.querySelector("input");
const aFazer = document.querySelector(".a-fazer");
const feita = document.querySelector(".feita");

const deletarTarefa = (event) => {
    const botaoDeDeletar = event.target;
    const tarefa = botaoDeDeletar.closest("li");
    tarefa.remove();
}

const marcarComoFeita = (event) => {
    const checkbox = event.target;
    const tarefa = checkbox.closest("li");

    if (checkbox.checked) {
        feita.append(tarefa);
    } else {
        aFazer.append(tarefa);

    }
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const tarefa = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("input", marcarComoFeita)

    const texto = document.createElement("span");
    texto.innerText = input.value;

    const botaoDeDeletar = document.createElement("button");
    botaoDeDeletar.innerText = "Deletar";
    botaoDeDeletar.addEventListener("click", deletarTarefa)

    tarefa.append(checkbox) //usando pra incluir texto ou elementos
    tarefa.append(input.value);
    tarefa.append(botaoDeDeletar);

    aFazer.append(tarefa);
    input.value = "";
});