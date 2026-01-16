//---------------------------------------------------------->ADIÇÃO DE PERSONAGEM<----------------------------------------------------------------

function adicionarPersonagem(){
    const pegarMarcados = (idContainer) => {
        const container = document.getElementById(idContainer);
        if (!container) return []; // Retorna lista vazia se não achar o ID
        
        const selecionados = container.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(selecionados).map(input => input.value);
    };
const nome_adicao = document.getElementById("nome_adicao").value;
const foto_adicao = document.getElementById("foto_adicao").value;

const MBTI = document.getElementById("MBTI_escolha");
const marcados_MBTI = pegarMarcados("MBTI_escolha")

const Anagrama = document.getElementById("anagrama_escolha");
const marcados_anagrama =pegarMarcados("Anagrama_escolha");

const Subtipo = document.getElementById("subtipo_escolha");
const marcados_subtipo = pegarMarcados("subtipo_escolha")

const tritipo = document.getElementById("tritipo_escolha").value

const Temperamento = document.getElementById("temperamento_escolha");
const marcados_temperamento = pegarMarcados("temperamento_escolha");

const Big_Five = document.getElementById("big_five_escolha");
const marcados_Big_Five = pegarMarcados("big_five_escolha");

const Alinhamento = document.getElementById("alinhamento_escolha");
const marcados_alinhamento = pegarMarcados("alinhamento_escolha");
console.log(marcados_MBTI)

fetch("/Personagens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({nome_adicao, foto_adicao,marcados_MBTI, marcados_anagrama, marcados_subtipo, tritipo, marcados_temperamento, marcados_Big_Five, marcados_alinhamento})
    })

    
}