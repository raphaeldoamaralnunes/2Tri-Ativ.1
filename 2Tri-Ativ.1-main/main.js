var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".tx-resultado");
var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [    
            "Vai eliminar tarefas monotonas",
            "Vai tirar muitos empregos"
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
            "Maravilhoso",
            "Assustador"
        ]
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            "Não vejo problemas",
            "É o fim dos empregos como conhecemos hoje"
        ]
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
           
            "Incrível",
            "Sinistro"
        ]
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
            "Surpreendente",
            "Mão de obra barata"
        ]
    }
];

var posiçãoAtual = 0;
var perguntaAtual;

mostraPergunta();

function mostraPergunta(){
    perguntaAtual = perguntas[posiçãoAtual];
    cxPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (var alternativa of perguntaAtual.alternativas) {
        var botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        cxAlternativas.appendChild(botaoAlternativas);
    }
}
