var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".tx-resultado");
var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [    
            {
                texto: "Vai eliminar tarefas monotonas",
                afirmacao: ""

            },
            {
                texto: "Vai tirar muitos empregos",
                afirmacao: ""

            }
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [
            {
                texto: "Maravilhoso",
                afirmacao: ""
            },
            {
                texto: "Assustador",
                afirmacao: ""
            }
            
        ]
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [
            {
                texto: "Não vejo problemas",
                afirmacao: ""
            },
            {
                texto: "É o fim dos empregos como conhecemos hoje",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [
            {
                texto: "Incrível",
                afirmacao: ""
            },
            {
                texto: "Sinistro",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
            {
                texto: "Surpreendente",
                afirmacao: ""
            },
            {
                texto: "Mão de obra barata",
                afirmacao: ""
            }
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
