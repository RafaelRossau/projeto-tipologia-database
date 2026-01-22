//----------------------------------------------------------> ADIÇÃO DE PERSONAGEM <----------------------------------------------------------------

function adicionarPersonagem(){
    const pegarMarcados = (idContainer) => {
        const container = document.getElementById(idContainer);
        if (!container) return []; // Retorna lista vazia se não achar o ID
        
        const selecionados = container.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(selecionados).map(input => input.value);
    };
const nome_adicao = document.getElementById("nome_adicao").value;
const foto_adicao = document.getElementById("foto_adicao").value;
const marcados_MBTI = pegarMarcados("MBTI_escolha")
const marcados_anagrama =pegarMarcados("Anagrama_escolha");
const marcados_subtipo = pegarMarcados("subtipo_escolha")
const tritipo = document.getElementById("tritipo_escolha").value
const marcados_temperamento = pegarMarcados("temperamento_escolha");
const marcados_Big_Five = pegarMarcados("big_five_escolha");
const marcados_alinhamento = pegarMarcados("alinhamento_escolha");

let head = false
let guts = false
let heart = false
let triade = false

if(tritipo.includes("2") || tritipo.includes("3") || tritipo.includes("4")){
    heart = true
}
else{
    heart = false
}
if(tritipo.includes("5") || tritipo.includes("6") || tritipo.includes("7")){
head = true
}
else{
head = false
}
if(tritipo.includes("8") || tritipo.includes("9") || tritipo.includes("1")){
    guts = true
}
else{
    guts = false
}
if(heart == true && head == true && guts == true){
    triade = true
}
else{
    triade = false
}
console.log(marcados_MBTI)
console.log(marcados_anagrama)
console.log(tritipo)
if(nome_adicao.length == 0 || nome_adicao.length > 50){
    alert("O nome não pode ser vazio ou ultrapassar o limite de 50 caracteres.")
}
else if(foto_adicao === ""){
alert("Selecione uma foto.")
}
else if(marcados_MBTI.length !== 1){
alert("Selecione apenas um MBTI.")
}
else if(marcados_anagrama.length !== 1){
    alert("Selecione apenas um anagrama.")
}
else if(marcados_subtipo.length !== 1){
    alert("Selecione apenas um subtipo")
}
else if(tritipo.length !== 3 || triade == false){
    alert("Digite um tritipo existente!(OBS: o tritipo é composto por 3 anagramas e cada anagrama vem de um centro diferente, tendo que ter um do intestino, coração e mente.)")
}
else if(marcados_temperamento.length !== 1){
    alert("Selecione apenas um temperamento")
}
else if(marcados_Big_Five.length !== 1){
    alert("Selecione apenas um Big Five.")
}
else if(marcados_alinhamento.length !== 1){
    alert("Selecione apenas um alinhamento moral.")
}
else{
    alert("Enviado com sucesso!")
fetch("/Personagens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({nome_adicao, foto_adicao,marcados_MBTI, marcados_anagrama, marcados_subtipo, tritipo, marcados_temperamento, marcados_Big_Five, marcados_alinhamento})
    })
}
    
}

