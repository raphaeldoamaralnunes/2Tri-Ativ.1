var cxPrincipal = document.querySelector(".cx-principal");
var cxPerguntas = document.querySelector(".cx-perguntas");
var cxAlternativas = document.querySelector(".cx-alternativas");
var cxResultado = document.querySelector(".cx-resultado");
var txResultado = document.querySelector(".texto-resultado");

var perguntas = [
    {
        enunciado: "A IA pode automatizar tarefas repetitivas.",
        alternativas: [ 
            {
                texto: "Vai eliminar tarefas monotonas",
                afirmaçao: "A IA é habilidosa em lidar com tarefas rotineiras e previsíveis. Ela não se cansa, não comete erros por distração e pode executar essas tarefas de forma consistente e rápida.",
            },
            {
                texto: "Vai tirar muitos empregos",
                afirmaçao: "Em vez de pensar na automação como uma ameaça, podemos considerá-la como uma mudança no cenário profissional.",
            }                    
        ]
    },
    {
        enunciado: "A IA pode tomar decisões baseadas em dados.",
        alternativas: [ 
            {
                texto: "Maravilhoso",
                afirmaçao: "IA pode processar enormes quantidades de dados em tempo recorde. Ela não se deixa levar por emoções ou preconceitos.",
            },
            {
                texto: "Assustador",
                afirmaçao: "Isso pode ser assustador quando pensamos em decisões que afetam vidas, como diagnósticos médicos ou aprovações de crédito.",
            }
        ]
    },
    {
        enunciado: "A IA pode substituir certos empregos.",
        alternativas: [ 
            {
                texto: "Não vejo problemas",
                afirmaçao: "A automação impulsionada pela IA está mudando a paisagem profissional. Tarefas repetitivas e previsíveis estão sendo gradualmente assumidas por máquinas.",
            },
            {
                texto: "É o fim dos empregos como conhecemos hoje",
                afirmaçao: "A automação e a IA estão transformando o cenário de empregos, mas não necessariamente significam o fim de todos os empregos.",
            }
        ]
    },
    {
        enunciado: "A IA pode ajudar a prever tendências de mercado.",
        alternativas: [ 
            {
                texto: "Incrível",
                afirmaçao: "A IA pode processar enormes volumes de dados em tempo real. Ela examina padrões, correlações e mudanças sutis que seriam impossíveis para um ser humano acompanhar.",
            },
            {
                texto:  "Sinistro",
                afirmaçao: "No entanto, o mercado financeiro é complexo e muitas vezes imprevisível. Mesmo a IA não pode prever eventos inesperados, como crises econômicas ou pandemias.",
            }
        ]
    },
    {
        enunciado: "A IA pode trabalhar 24/7 sem pausas.",
        alternativas: [
            {
                texto: "Surpreendente",
                afirmaçao: "Enquanto nós, seres humanos, precisamos de pausas para descansar, tomar café e recarregar nossas energias, a IA não tem essas limitações.",
            },
            {
                texto:  "Mão de obra barata",
                afirmaçao: "A questão é como equilibramos essa eficiência com a responsabilidade ética. A IA não deve ser apenas uma ferramenta de corte de custos, mas sim uma aliada na busca por melhores resultados.",
            }
        ]
    },
];

var atual = 0;
var perguntaAtual;
var historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    cxPerguntas.textContent = perguntaAtual.enunciado;
    cxAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        cxAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    var afirmacoes = opcaoSelecionada.afirmaçao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    cxPerguntas.textContent = "";
    txResultado.textContent = historiaFinal;
    cxAlternativas.textContent = "";
}

mostraPergunta();
