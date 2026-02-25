// ==========================================
// V2 Enhanced Data & Logic
// ==========================================

const questions = [
    // --- FASE 1: Inventário Básico (Likert) ---
    // R (Realista)
    { phase: 1, text: "Gosto de operar máquinas, usar ferramentas ou consertar equipamentos com as mãos.", trait: "R", type: "likert" },
    { phase: 1, text: "Prefiro atividades ao ar livre, esportes ou trabalho prático em vez de ficar o dia todo em uma sala.", trait: "R", type: "likert" },
    { phase: 1, text: "Tenho facilidade para entender como objetos físicos, motores ou circuitos elétricos funcionam.", trait: "R", type: "likert" },
    { phase: 1, text: "Prefiro lidar com coisas concretas e imediatas (fazer acontecer na prática) do que ficar só nas ideias.", trait: "R", type: "likert" },

    // I (Investigativo)
    { phase: 1, text: "Sinto muita curiosidade por ciência, tecnologia e adoro pesquisar como as coisas funcionam.", trait: "I", type: "likert" },
    { phase: 1, text: "Gosto de analisar dados, ver gráficos e descobrir o 'porquê' dos problemas complexos.", trait: "I", type: "likert" },
    { phase: 1, text: "Gosto de ler ou assistir vídeos sobre temas como universo, corpo humano, biologia ou programação.", trait: "I", type: "likert" },
    { phase: 1, text: "Me considero muito mais racional, analítico e lógico do que emotivo na hora de tomar decisões.", trait: "I", type: "likert" },

    // A (Artístico)
    { phase: 1, text: "Gosto de me expressar através de arte, design, desenho, escrita criativa, música ou teatro.", trait: "A", type: "likert" },
    { phase: 1, text: "Aprecio ambientes criativos onde posso usar minha imaginação sem regras muito rígidas.", trait: "A", type: "likert" },
    { phase: 1, text: "A estética, a beleza, o visual e a originalidade são muito importantes nas minhas escolhas e hobbies.", trait: "A", type: "likert" },
    { phase: 1, text: "Fico sem energia quando tenho que seguir rotinas repetitivas e me sinto preso em trabalhos mecânicos.", trait: "A", type: "likert" },

    // S (Social)
    { phase: 1, text: "Sinto muita satisfação ao ouvir, aconselhar, cuidar ou ensinar pacientemente outras pessoas.", trait: "S", type: "likert" },
    { phase: 1, text: "No meu grupo de amigos ou família, costumo ser a pessoa que acalma as brigas e une todo mundo.", trait: "S", type: "likert" },
    { phase: 1, text: "Para mim, se uma profissão não ajudar de verdade outras pessoas, ela tem menos valor.", trait: "S", type: "likert" },
    { phase: 1, text: "Tenho muita empatia e consigo facilmente me colocar no lugar do outro quando alguém está triste ou feliz.", trait: "S", type: "likert" },

    // E (Empreendedor)
    { phase: 1, text: "Gosto de assumir posições de liderança no grupo da escola, dar ideias, bater metas e influenciar pessoas.", trait: "E", type: "likert" },
    { phase: 1, text: "Me vejo criando meu próprio negócio ou gerenciando projetos, gostando do risco de lucrar ou de errar tentando.", trait: "E", type: "likert" },
    { phase: 1, text: "Sou um ótimo negociador, sempre uso bons argumentos e convencia para fazer a turma seguir minhas ideias.", trait: "E", type: "likert" },
    { phase: 1, text: "Crescer rápido, ganhar bem e ter reconhecimento são as coisas que mais me motivam para o futuro.", trait: "E", type: "likert" },

    // C (Convencional)
    { phase: 1, text: "Sou perfeccionista e muito organizado com meu dinheiro, minhas pastas no computador e meus horários.", trait: "C", type: "likert" },
    { phase: 1, text: "Trabalho melhor quando sei exatamente a regra do jogo, com manuais, planilhas e instruções claras.", trait: "C", type: "likert" },
    { phase: 1, text: "Presto muita atenção aos pequenos detalhes numéricos e odeio cometer erros por falta de atenção na revisão.", trait: "C", type: "likert" },
    { phase: 1, text: "Ter uma rotina estruturada me faz bem, prefiro saber a que horas eu começo, termino e o que esperam de mim.", trait: "C", type: "likert" },

    // Big Five - Personalidade (Extroversão, Afabilidade, Conscienciosidade, Neuroticismo, Abertura)
    { phase: 1, text: "Minhas baterias recarregam quando estou no meio de muita gente, como em uma festa agitada com os amigos (Alta Extroversão).", trait: "Ext_plus", type: "likert_b5" },
    { phase: 1, text: "Prefiro ficar quietinho lendo um livro ou jogando no final de semana e fujo de falar em público (Baixa Extroversão).", trait: "Ext_minus", type: "likert_b5" },
    { phase: 1, text: "Sou muito compreensivo e quase sempre abro mão das minhas vontades para evitar confusão com os outros (Alta Afabilidade).", trait: "Agr_plus", type: "likert_b5" },
    { phase: 1, text: "No dia a dia sou mais direto e focado no resultado do que na amizade, separando bem emoção da razão (Baixa Afabilidade).", trait: "Agr_minus", type: "likert_b5" },
    { phase: 1, text: "Minha vida é super planejada; se prometi entregar o trabalho escolar sexta às 10h, eu entrego (Alta Conscienciosidade).", trait: "Con_plus", type: "likert_b5" },
    { phase: 1, text: "Não gosto de planejar muito, deixo as coisas acontecerem de forma espontânea e às vezes deixo para a última hora (Baixa Conscienciosidade).", trait: "Con_minus", type: "likert_b5" },
    { phase: 1, text: "Fico muito ansioso perdendo o sono pensando se fui bem na prova ou me preocupando demais com o que pode dar errado (Alto Neuroticismo).", trait: "N_plus", type: "likert_b5" },
    { phase: 1, text: "Pode estar um caos gigantesco ao meu redor, geralmente eu não me desespero e mantenho a calma numa boa (Baixo Neuroticismo).", trait: "N_minus", type: "likert_b5" },
    { phase: 1, text: "Minha mente está sempre buscando novidades: estilos diferentes, artes abstratas ou conhecer lugares diferentes sem roteiro (Alta Abertura).", trait: "Open_plus", type: "likert_b5" },
    { phase: 1, text: "Quando acho uma roupa, comida, música ou rotina de estudo que funciona para mim, não quero mudar o que já dá certo (Baixa Abertura).", trait: "Open_minus", type: "likert_b5" },

    // --- FASE 2: Escolha Forçada (Ipsativa) ---
    {
        phase: 2,
        text: "Matriz 1: Escolha a atividade profissional que você MAIS gostaria de atuar e a que MENOS gostaria.",
        subtext: "Você não pode escolher 'Mais' para duas opções, tem que ser exclusivo.",
        type: "forced",
        options: [
            { id: "opt1", text: "Trabalhar em um laboratório testando a cura para novos vírus", trait: "I" },
            { id: "opt2", text: "Liderar uma empresa de tecnologia no centro de uma cidade agitada, buscando ser o nº1", trait: "E" },
            { id: "opt3", text: "Dar aulas particulares gratuitas em um bairro humilde para apoiar crianças a crescerem", trait: "S" }
        ]
    },
    {
        phase: 2,
        text: "Matriz 2: Novamente, indique sua Maior e Menor preferência do que seria o seu dia perfeito:",
        type: "forced",
        options: [
            { id: "opt1", text: "Colocar a mão na massa e consertar o motor de um carro ou os componentes de um computador", trait: "R" },
            { id: "opt2", text: "Ouvir música enquanto escreve o roteiro de um filme ou tira fotografias criativas na rua", trait: "A" },
            { id: "opt3", text: "Organizar planilhas e conferir se as contas do evento do colégio bateram até o último centavo", trait: "C" }
        ]
    },
    {
        phase: 2,
        text: "Matriz 3: Das opções abaixo, decida a que parece Mais e Menos interessante dependendo do seu gosto:",
        type: "forced",
        options: [
            { id: "opt1", text: "Trabalhar num consultório ajudando pessoas a curarem seus maiores traumas psicológicos", trait: "S" },
            { id: "opt2", text: "Desenhar todo o visual de um novo aplicativo famoso, escolhendo as cores e as animações", trait: "A" },
            { id: "opt3", text: "Ajudar o governo a programar um sistema rígido de segurança para proteger senhas de bancos", trait: "C" }
        ]
    },
    {
        phase: 2,
        text: "Matriz 4: Qual a sua MAIOR e MENOR preferência entre áreas distintas?",
        type: "forced",
        options: [
            { id: "opt1", text: "Passar a tarde lendo sobre astronomia e buracos negros para tentar entender o universo", trait: "I" },
            { id: "opt2", text: "Fazer uma trilha no meio da floresta para ver como estão as plantas e os animais do local", trait: "R" },
            { id: "opt3", text: "Ser o Diretor Geral de uma grande campanha para arrecadar doações milionárias para sua ONG", trait: "E" }
        ]
    },

    // --- FASE 3: Teste de Julgamento Situacional (Comportamental) ---
    {
        phase: 3,
        text: "Cenário 1: Sua equipe da feira de ciências da escola está com o prazo estourado, faltam poucas horas, está a maior bagunça e o trabalho não está pronto. O que você faz?",
        type: "situational",
        options: [
            { text: "Tomo a frente de tudo (mesmo se precisar falar mais alto), divido as tarefas e exijo que todos terminem, focando no resultado.", trait: "Ext_plus", trait2: "Agr_minus" },
            { text: "Tento manter a calma no grupo, não critico ninguém e pergunto com educação como posso ajudar quem está precisando de apoio.", trait: "Agr_plus", trait2: "Ext_minus" },
            { text: "Me concentro apenas na MINHA parte para garantir que pelo menos o que eu fiz fique perfeito e sem defeitos.", trait: "Con_plus", trait2: "Ext_minus" },
            { text: "Ignoro algumas amarras de regras ou estéticas exigidas e invento de improviso uma forma super original e rápida de entregar.", trait: "Open_plus", trait2: "Con_minus" }
        ]
    },
    {
        phase: 3,
        text: "Cenário 2: A escola/empresa implementou do nada um sistema completamente novo no computador que ninguém sabe mexer. Como você reage?",
        type: "situational",
        options: [
            { text: "Leio o manual técnico inteiro do aplicativo e pesquiso até me tornar o melhor e mais seguro no uso.", trait: "Con_plus", trait2: "Open_minus" },
            { text: "Bato no ombro daquele colega que entende de computadores, bato papo com ele e peço pra ele me ensinar rápido.", trait: "Ext_plus", trait2: "Agr_plus" },
            { text: "Adoro uma mudança! Vou clicando em todos os botões do sistema para descobrir o que faz por pura intuição e tentativa e erro.", trait: "Open_plus", trait2: "Con_minus" },
            { text: "Isso me dá muita ansiedade ou medo, e fico frustrado lamentando que mudaram o programa que eu já estava acostumado a usar.", trait: "N_plus", trait2: "Open_minus" }
        ]
    },
    {
        phase: 3,
        text: "Cenário 3: Exigem que você corte alguém ou algum grupo do trabalho na feira escolar porque não há verbas para imprimir todo mundo. Como lida com esse limite?",
        type: "situational",
        options: [
            { text: "Faço o corte pelo lado lógico: escolho descartar a parte do trabalho que estava menos eficiente, mesmo se a pessoa ficar chateada.", trait: "Agr_minus", trait2: "Con_plus" },
            { text: "Brigo de frente e negocio com o professor/diretor arriscando a minha própria nota para defender todos os amigos da turma.", trait: "Agr_plus", trait2: "Ext_plus" },
            { text: "Passo a noite toda em claro remoendo preocupações, com dor de barriga pelo estresse imenso de decepcionar e chatear colegas.", trait: "N_plus", trait2: "Ext_minus" },
            { text: "Uso as verbas curtas só pra pagar a estrutura e recrio a apresentação do trabalho de forma digital totalmente grátis, não precisando cortar nada.", trait: "Open_plus", trait2: "Con_plus" }
        ]
    },
    {
        phase: 3,
        text: "Cenário 4: Você ganha o prêmio global de 'O Melhor Aluno / Maior Inovador do Ano' escolar diante de centenas de pais no palco.",
        type: "situational",
        options: [
            { text: "Subo na maior alegria pulando, cumprimento todos, faço meu discurso chamando energia da galera e tiro selfies para o Insta.", trait: "Ext_plus", trait2: "N_minus" },
            { text: "Fico super feliz, mas com muita vergonha e tímido; digo um 'muito obrigado', poso rápido para foto e volto voando corado para o fundo.", trait: "Ext_minus", trait2: "N_plus" },
            { text: "Lá em cima, emociono ao ceder todos os aplausos e créditos diretamente à professora, à turma inteira e a cada colega que me ajudou.", trait: "Agr_plus", trait2: "Ext_plus" },
            { text: "Estava confiante, aceito formalmente o prêmio com muito respeito enquanto friamente enfatizo e celebro meu esforço e as horas rígidas de estudo da última década.", trait: "Con_plus", trait2: "Open_minus" }
        ]
    }
];

// Bibliografia RIASEC (Dicionário de Explicações baseadas em John Holland)
const riasecDefinitions = {
    'R': { title: "Realista (O Fazedor/Prático)", desc: "Pessoas realistas preferem atividades concretas e práticas, lidando frequentemente com ferramentas, máquinas, animais ou trabalho ao ar livre. Valorizam a estabilidade, a destreza física e tendem a abordar a resolução de problemas de forma direta e palpável, preferindo agir a teorizar." },
    'I': { title: "Investigativo (O Pensador)", desc: "Indivíduos com forte perfil investigativo são analíticos, curiosos e adoram aprender. Preferem observar, investigar, analisar e resolver problemas complexos, especialmente os de natureza matemática ou científica. Tendem a trabalhar melhor com ideias do que com pessoas ou coisas físicas." },
    'A': { title: "Artístico (O Criador)", desc: "O perfil artístico valoriza a autoexpressão, originalidade, independência e atividades não estruturadas. Eles lidam bem com inovação, design e abstração. Tendem a evitar rotinas altamente estruturadas ou repetitivas, buscando sempre formas imaginativas e criativas de concluir suas tarefas." },
    'S': { title: "Social (O Ajudante)", desc: "Pessoas sociais são movidas pelo desejo de ajudar, treinar, curar ou educar outras pessoas. Possuem alta empatia e habilidades interpessoais, buscando resolver problemas através do diálogo e do suporte mútuo, sendo excelentes em atividades focadas no bem-estar comunitário." },
    'E': { title: "Empreendedor (O Persuasor)", desc: "O perfil empreendedor é caracterizado pela liderança, ambição e capacidade de influenciar ou persuadir pessoas rumo a objetivos organizacionais ou lucros econômicos. Assumem riscos, gostam de bater metas competitivas e frequentemente prosperam em negócios, vendas ou política." },
    'C': { title: "Convencional (O Organizador)", desc: "Indivíduos convencionais preferem rotinas estruturadas, regras claras e organização meticulosa. São extremamente precisos com dados, números e registros. Trabalham de forma sistemática e cuidadosa, garantindo confiabilidade, padrões e excelência em ambientes corporativos ou lógicos." }
};

// Estado global
let state = {
    nome: "",
    currentIdx: 0,
    scores: {
        RIASEC: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 },
        BigFive: { E: 0, A: 0, C: 0, N: 0, O: 0 }
    },
    maxScores: {
        // Calculate max theoretically possible for percentages
        RIASEC: { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
    }
};

let stateHistory = [];

// UI Elements
const els = {
    screens: document.querySelectorAll('.screen'),
    nameInput: document.getElementById('student-name'),
    startBtn: document.getElementById('start-btn'),
    qCounter: document.getElementById('question-counter'),
    qBadge: document.getElementById('test-type-badge'),
    qText: document.getElementById('question-text'),
    qSubtext: document.getElementById('question-subtext'),
    progress: document.getElementById('progress'),
    backBtn: document.getElementById('back-btn'),
    optContainer: document.getElementById('options-container'),
    fcContainer: document.getElementById('forced-choice-container'),
    fcSubmit: document.getElementById('fc-submit'),

    // Results
    resName: document.getElementById('res-name'),
    riasecCode: document.getElementById('riasec-code'),
    behavioralReading: document.getElementById('behavioral-reading'),
    clinicalBox: document.getElementById('clinical-conflict-box'),
    clinicalText: document.getElementById('clinical-conflict-text'),
    careerMatches: document.getElementById('career-matches'),
    riasecExplanations: document.getElementById('riasec-explanations'),
    emailLink: document.getElementById('email-link'),
    downloadImgBtn: document.getElementById('download-img-btn'),
    actionsContainer: document.getElementById('action-buttons-container'),
    restartBtn: document.getElementById('restart-btn'),
    percentBars: document.getElementById('percentage-bars')
};

// Calculate Max Scores dynamically to calculate accurate Percentages
function calculateMaxScores() {
    questions.forEach(q => {
        if (q.type === 'likert') {
            state.maxScores.RIASEC[q.trait] += 5;
        } else if (q.type === 'forced') {
            q.options.forEach(opt => {
                state.maxScores.RIASEC[opt.trait] += 3; // +3 is max points for 'Mais'
            });
        }
    });
}
calculateMaxScores();

// Listeners
els.nameInput.addEventListener('input', checkStartForm);
els.startBtn.addEventListener('click', startQuiz);
els.restartBtn.addEventListener('click', resetQuiz);
els.fcSubmit.addEventListener('click', submitForcedChoice);
els.downloadImgBtn.addEventListener('click', downloadImage);
els.backBtn.addEventListener('click', goBack);

function checkStartForm() {
    if (els.nameInput.value.trim() !== '') {
        els.startBtn.removeAttribute('disabled');
    } else {
        els.startBtn.setAttribute('disabled', 'true');
    }
}

function switchScreen(screenId) {
    els.screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    state.nome = els.nameInput.value.trim();
    state.currentIdx = 0;
    stateHistory = [];

    Object.keys(state.scores.RIASEC).forEach(k => state.scores.RIASEC[k] = 0);
    Object.keys(state.scores.BigFive).forEach(k => state.scores.BigFive[k] = 5); // Base start 5

    switchScreen('quiz-screen');
    renderQuestion();
}

// Variables for Forced Choice
let fcState = { mais: null, menos: null, qData: null };

function renderQuestion() {
    if (state.currentIdx >= questions.length) {
        finishQuiz();
        return;
    }

    const q = questions[state.currentIdx];
    els.qText.textContent = q.text;
    els.qSubtext.textContent = q.subtext || '';

    // Updates Header
    els.qCounter.textContent = `Fase ${q.phase} de 3 - Etapa ${state.currentIdx + 1}/${questions.length}`;
    const progPercent = (state.currentIdx / questions.length) * 100;
    els.progress.style.width = `${progPercent}%`;

    // Type Badge
    const badges = {
        1: { text: "Inventário Básico", color: "#e879f9", bg: "rgba(192, 132, 252, 0.2)" },
        2: { text: "Escolha Forçada", color: "#38bdf8", bg: "rgba(56, 189, 248, 0.2)" },
        3: { text: "Julgamento Situacional", color: "#fcd34d", bg: "rgba(251, 191, 36, 0.2)" }
    };

    // Back botão logica
    els.backBtn.style.display = state.currentIdx > 0 ? 'inline-block' : 'none';

    els.qBadge.textContent = badges[q.phase].text;
    els.qBadge.style.color = badges[q.phase].color;
    els.qBadge.style.background = badges[q.phase].bg;

    // Reset Containers
    els.optContainer.innerHTML = '';
    els.optContainer.style.display = 'none';
    els.fcContainer.className = 'forced-choice-hidden';
    els.fcSubmit.disabled = true;

    if (q.type === 'likert' || q.type === 'likert_b5') {
        els.optContainer.style.display = 'flex';
        const labels = ["Concordo Totalmente", "Concordo em Parte", "Neutro", "Discordo em Parte", "Discordo Totalmente"];
        labels.forEach((label, i) => {
            const val = 5 - i;
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = label;
            btn.onclick = () => handleLikertAnswer(val, q);
            els.optContainer.appendChild(btn);
        });
    }
    else if (q.type === 'situational') {
        els.optContainer.style.display = 'flex';
        q.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.style.padding = '20px';
            btn.textContent = opt.text;
            btn.onclick = () => handleSituationalAnswer(opt);
            els.optContainer.appendChild(btn);
        });
    }
    else if (q.type === 'forced') {
        els.fcContainer.className = 'forced-choice-active';
        fcState = { mais: null, menos: null, qData: q };

        q.options.forEach((opt, index) => {
            const row = document.getElementById(`fc-option-${index + 1}`);
            row.querySelector('.fc-desc').textContent = opt.text;

            const btns = row.querySelectorAll('.fc-btn');
            btns.forEach(b => {
                b.className = `fc-btn fc-${b.dataset.val}`; // reset
                b.onclick = () => selectForcedOption(b, opt.trait, index + 1);
            });
        });
    }
}

// Logic handlers
function saveState() {
    stateHistory.push({
        currentIdx: state.currentIdx,
        scores: JSON.parse(JSON.stringify(state.scores))
    });
}

function goBack() {
    if (stateHistory.length > 0) {
        const lastState = stateHistory.pop();
        state.currentIdx = lastState.currentIdx;
        state.scores = lastState.scores;
        renderQuestion();
    }
}

function handleLikertAnswer(val, q) {
    saveState();
    if (q.type === 'likert') {
        state.scores.RIASEC[q.trait] += val;
    } else {
        applyBigFiveScore(q.trait, val);
    }
    nextQuestion();
}

function handleSituationalAnswer(opt) {
    saveState();
    if (opt.trait) applyBigFiveScore(opt.trait, 3); // 3 points for priority choice
    if (opt.trait2) applyBigFiveScore(opt.trait2, 2); // 2 points for secondary
    nextQuestion();
}

function selectForcedOption(btn, trait, rowIdx) {
    const isMais = btn.dataset.val === 'mais';
    const type = isMais ? 'mais' : 'menos';

    // UI Reset
    document.querySelectorAll(`.fc-${type}`).forEach(b => b.classList.remove(`selected-${type}`));
    const rowBtns = document.getElementById(`fc-option-${rowIdx}`).querySelectorAll('.fc-btn');
    rowBtns.forEach(b => { if (b !== btn) b.classList.remove('selected-mais', 'selected-menos'); });

    btn.classList.add(`selected-${type}`);

    // logic
    if (isMais) {
        fcState.mais = trait;
        if (fcState.menos === trait) fcState.menos = null;
    } else {
        fcState.menos = trait;
        if (fcState.mais === trait) fcState.mais = null;
    }

    if (fcState.mais && fcState.menos && fcState.mais !== fcState.menos) {
        els.fcSubmit.disabled = false;
    } else {
        els.fcSubmit.disabled = true;
    }
}

function submitForcedChoice() {
    saveState();
    state.scores.RIASEC[fcState.mais] += 3; // +3 for most
    state.scores.RIASEC[fcState.menos] -= 1; // Penalty for least
    nextQuestion();
}

function applyBigFiveScore(traitCombo, points) {
    const split = traitCombo.split('_');
    const trait = split[0]; // Ext, Agr, Con, N, Open
    const isPlus = split[1] === 'plus';

    const map = { 'Ext': 'E', 'Agr': 'A', 'Con': 'C', 'Open': 'O', 'N': 'N' };
    const t = map[trait];
    if (!t) return;

    if (isPlus) state.scores.BigFive[t] += points;
    else state.scores.BigFive[t] -= points;
}

function nextQuestion() {
    state.currentIdx++;
    renderQuestion();
}

// Results Phase
let chartInstance = null;

function finishQuiz() {
    switchScreen('result-screen');
    els.resName.textContent = state.nome;
    calculateAndRender();
}

function getPercentages() {
    const percents = {};
    for (let t in state.scores.RIASEC) {
        let score = state.scores.RIASEC[t];
        let max = state.maxScores.RIASEC[t] || 1;
        if (score < 0) score = 0;
        let pct = (score / max) * 100;
        percents[t] = Math.min(Math.round(pct), 100);
    }
    return percents;
}

function calculateAndRender() {
    const oceanic = state.scores.BigFive;
    const percents = getPercentages();

    // Sort to find Top Code
    const sortedPct = Object.entries(percents).sort((a, b) => b[1] - a[1]);
    const topCode = sortedPct.slice(0, 3).map(e => e[0]).join('');
    const firstTrait = sortedPct[0][0];

    els.riasecCode.textContent = topCode;

    // Render Percentage Bars
    const rNames = { 'R': 'Realista', 'I': 'Investigativo', 'A': 'Artístico', 'S': 'Social', 'E': 'Empreendedor', 'C': 'Convencional' };
    const rColors = { 'R': '#f87171', 'I': '#fbbf24', 'A': '#a78bfa', 'S': '#34d399', 'E': '#60a5fa', 'C': '#94a3b8' };

    els.percentBars.innerHTML = '';
    sortedPct.forEach(([t, val]) => {
        const div = document.createElement('div');
        div.className = 'p-bar-row';
        div.innerHTML = `
            <span class="p-label">${rNames[t]}</span>
            <div class="p-track">
                <div class="p-fill" style="width: ${val}%; background: ${rColors[t]}"></div>
            </div>
            <span class="p-value">${val}%</span>
        `;
        els.percentBars.appendChild(div);
    });

    // Chart.js Setup
    const ctx = document.getElementById('riasecChart').getContext('2d');
    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Realista', 'Investigativo', 'Artístico', 'Social', 'Empreendedor', 'Convencional'],
            datasets: [{
                label: 'Aderência %',
                data: [percents.R, percents.I, percents.A, percents.S, percents.E, percents.C],
                backgroundColor: 'rgba(99, 102, 241, 0.25)',
                borderColor: '#6366f1',
                pointBackgroundColor: '#c084fc',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#cbd5e1', font: { size: 13, family: "'Outfit', sans-serif" } },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // Big Five Thresholds
    let isExt = oceanic.E > 8;
    let isCon = oceanic.C > 8;

    // Logic - Behavioral Reading (Resumo em Cards HTML)
    let reading = "";
    if (isCon) {
        reading += "<strong>🎯 Foco e Organização:</strong> Altíssima disciplina. Você é metódico, planeja com rigor e cobra excelência.<br><br>";
    } else {
        reading += "<strong>🌊 Adaptabilidade:</strong> Perfil flexível. Prefere fluidez a rotinas ou micro-planejamentos estruturados.<br><br>";
    }

    if (isExt) {
        reading += "<strong>🗣️ Interação:</strong> Extroversão alta. Você lidera, motiva pessoas e atua bem em grandes grupos.";
    } else {
        reading += "<strong>🧠 Independência:</strong> Traço analítico e introvertido. Rende mais independente de constante exposição social.";
    }

    els.behavioralReading.innerHTML = reading;

    // Clinical Logic / Conflict
    els.clinicalBox.style.display = 'none';
    let tip = "";

    if ((topCode.includes('S') || topCode.includes('E')) && !isExt) {
        els.clinicalBox.style.display = 'block';
        els.clinicalText.textContent = `Atenção: Seu interesse em Sociedade/Liderança (${percents[topCode[0]]}%) é alto, mas sua capacidade inata de tolerar superexposição social é baixa. Foque na estratégia dos bastidores.`;
        tip = "Procure atuar em planejamento, pesquisa ou liderança de times menores, evitando posições de atendimento frontal contínuo.";
    } else {
        tip = "Faça aulas ou visite de forma ouvinte um curso técnico na sua área principal para sentir a 'pressão' prática antes de ir para a universidade.";
    }

    // Usando condicional para prevenir erro se goldenTip não existir na DOM antiga acidentalmente
    const tipEl = document.getElementById('golden-tip');
    if (tipEl) tipEl.textContent = tip;

    // Renderizando as Explicações RIASEC (TOP 3 letras)
    if (els.riasecExplanations) {
        els.riasecExplanations.innerHTML = '';
        topCode.split('').forEach((letter, idx) => {
            const def = riasecDefinitions[letter];
            const sizeMap = { 0: 'Principal (Base Maior)', 1: 'Secundário (Apoio)', 2: 'Terciário (Complementar)' };

            const div = document.createElement('div');
            div.innerHTML = `
                <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border-left: 4px solid ${rColors[letter]}">
                    <h4 style="color: ${rColors[letter]}; margin-bottom: 5px; font-size: 1.1rem;">${def.title} <span style="font-size: 0.85rem; color: #94a3b8; font-weight: normal;"> - Traço ${sizeMap[idx]}</span></h4>
                    <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.5;">${def.desc}</p>
                </div>
            `;
            els.riasecExplanations.appendChild(div);
        });
    }

    // Career Matches Database Expanded V3 (with University and Technical routes)
    const matchesDB = [
        // R (Realista) focus
        { name: "Engenharia de Energias Renováveis", reason: "Contato direto com hardware, sustentabilidade e inovação técnica no campo.", uni: "Eng. de Energia, Elétrica", tec: "Energias Renováveis, Eletrotécnica", traits: ['R', 'I', 'E'] },
        { name: "Engenharia Mecatrônica / Robótica", reason: "Mão na massa em automação, hardware avançado e montagem de sistemas.", uni: "Eng. Mecatrônica, Controle e Automação", tec: "Mecatrônica, Eletrônica", traits: ['R', 'I', 'C'] },
        { name: "Medicina Veterinária de Campo", reason: "Trabalho de campo constante com manejo físico e cuidado animal.", uni: "Medicina Veterinária, Zootecnia", tec: "Téc. Agropecuária", traits: ['R', 'S', 'I'] },
        { name: "Logística Avançada & Supply Chain", reason: "Otimizar movimentação física e processos complexos de distribuição do mundo real.", uni: "Engenharia de Produção, Logística", tec: "Téc. em Logística", traits: ['R', 'C', 'E'] },

        // I (Investigativo) focus
        { name: "Engenheiro(a) de Inteligência Artificial", reason: "Construção de modelos que aprendem com dados, alto foco em raciocínio abstrato.", uni: "Ciência da Computação, Matemática Computacional", tec: "Bootcamps de IA, Especialização em Python", traits: ['I', 'R', 'C'] },
        { name: "Cientista de Dados (Data Science)", reason: "Análise analítica profunda para descobrir padrões lógicos e predizer futuros.", uni: "Estatística, Sistemas de Informação", tec: "Bootcamps de Data Science", traits: ['I', 'C', 'E'] },
        { name: "Pesquisa Acadêmica Avançada / Biotecnologia", reason: "Foco total no rigor científico e desenvolvimento de curas e materiais.", uni: "Biomedicina, Biologia, Farmácia", tec: "Técnico em Biotecnologia", traits: ['I', 'R', 'S'] },
        { name: "Especialista em Cibersegurança", reason: "Resolver enigmas complexos, proteger estruturas lógicas e antecipar falhas.", uni: "Defesa Cibernética, Segurança da Informação", tec: "Certificações Red/Blue Team (CompTIA, CEH)", traits: ['I', 'R', 'C'] },

        // A (Artístico) focus
        { name: "UX/UI Designer", reason: "Inovação visual, compreensão psicológica do usuário e desenho de interfaces.", uni: "Design Digital, Desenho Industrial", tec: "Bootcamps Figma, Design System", traits: ['A', 'I', 'S'] },
        { name: "Direção Criativa e Audiovisual", reason: "Gestão do intangível, contar histórias e expressar visões artísticas originais.", uni: "Cinema, Rádio e TV, Publicidade", tec: "Téc. Produção Audiovisual", traits: ['A', 'E', 'S'] },
        { name: "Desenvolvimento de Jogos (Game Design)", reason: "Criação de mundos, roteiros lúdicos e mecânicas engajadoras.", uni: "Design de Games, Sistemas Digitais", tec: "Desenvolvimento de Jogos", traits: ['A', 'I', 'R'] },
        { name: "Arquitetura Sustentável", reason: "Design artístico no espaço real focando em sustentabilidade.", uni: "Arquitetura e Urbanismo", tec: "Design de Interiores, Edificações", traits: ['A', 'R', 'I'] },

        // S (Social) focus
        { name: "Psicologia Clínica / Mental Health Tech", reason: "Cuidado direto, escuta ativa profunda e inovação em saúde mental.", uni: "Psicologia, Neurociência", tec: "Cursos livres em Terapia e Escuta", traits: ['S', 'I', 'A'] },
        { name: "Especialista em Sucesso do Cliente (CS)", reason: "Apoiar fortemente outras pessoas, tirar dúvidas e engajar clientes.", uni: "Relações Públicas, Administração", tec: "Certificações em Customer Success", traits: ['S', 'E', 'C'] },
        { name: "Educação Corporativa e Tech", reason: "Ensinar tecnologias e desenvolver trilhas de aprendizado para adultos.", uni: "Pedagogia, Recursos Humanos", tec: "Design Instrucional", traits: ['S', 'E', 'A'] },
        { name: "Saúde Preventiva e Telemedicina", reason: "Apoio humanizado mesclado com tecnologia de ponta no atendimento.", uni: "Enfermagem, Fisioterapia, Medicina", tec: "Téc. em Enfermagem", traits: ['S', 'I', 'R'] },

        // E (Empreendedor) focus
        { name: "Product Manager (Gestão de Produtos)", reason: "Liderança de times multidisciplinares, visão de negócios e persuasão.", uni: "Administração, Eng. de Produção", tec: "Certificações Agile, Bootcamps PM", traits: ['E', 'I', 'C'] },
        { name: "Growth Hacker / Marketing Estratégico", reason: "Vender ideias em massa usando testes rápidos e ousados, assumindo risco.", uni: "Marketing, Comunicação", tec: "Tráfego Pago, Certificações Ads/Analytics", traits: ['E', 'A', 'I'] },
        { name: "Advogado(a) Corporativo Tech / DPO", reason: "Negociação de alto nível e proteção legal e de dados empresariais.", uni: "Direito", tec: "Certificação DPO (Proteção de Dados)", traits: ['E', 'C', 'I'] },
        { name: "Fundador de Startup / C-Level", reason: "Liderar do zero, persuadir investidores e criar do nada.", uni: "Empreendedorismo, Comércio Exterior", tec: "Aceleradoras, Sebrae", traits: ['E', 'S', 'A'] },

        // C (Convencional) focus
        { name: "Engenharia de Qualidade (QA / Tester)", reason: "Procedimentos rígidos, encontrar erros ocultos e testes metodológicos em software.", uni: "Engenharia de Software, Sistemas", tec: "Certificação em Automação (CTFL)", traits: ['C', 'I', 'R'] },
        { name: "Finanças Quantitativas / Controladoria", reason: "Organização implacável de planilhas gigantes e governança de regras.", uni: "Ciências Contábeis, Economia", tec: "Téc. em Contabilidade", traits: ['C', 'E', 'I'] },
        { name: "Ciência Atuarial / Análise de Risco", reason: "Previsão meticulosa de perdas com estatísticas sólidas e sem margem para erro.", uni: "Ciências Atuariais, Matemática", tec: "Formação em Excel/VBA Avançado", traits: ['C', 'I', 'E'] },
        { name: "Data Privacy & Compliance", reason: "Garantir que todas as diretrizes regulatórias e de segurança sejam arquivadas e seguidas.", uni: "Administração, Gestão de TI", tec: "Compliance, LGPD Standards", traits: ['C', 'E', 'S'] }
    ];

    // Calcula o percentual de match para cada carreira
    matchesDB.forEach(career => {
        const t1 = percents[career.traits[0]] || 0;
        const t2 = percents[career.traits[1]] || 0;
        const t3 = percents[career.traits[2]] || 0;
        // Peso: 50% para a principal letra, 30% pra segunda, 20% pra terceira
        career.matchScore = (t1 * 0.5) + (t2 * 0.3) + (t3 * 0.2);
    });

    // Ordena decrescente e pega os 5 primeiros
    const top5Matches = matchesDB.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);

    els.careerMatches.innerHTML = '';

    top5Matches.forEach(mc => {
        const matchPct = Math.round(mc.matchScore);
        const li = document.createElement('li');
        li.className = 'career-item';
        li.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start;">
                <div class="career-title">${mc.name}</div>
                <div class="code-badge" style="font-size: 0.9rem; margin-left: 10px; background: linear-gradient(135deg, #10b981, #059669);">${matchPct}% Match</div>
            </div>
            <div class="career-reason">${mc.reason}</div>
            <div class="aca-tags">
                <strong>🎓 Cursos Superiores:</strong>
                <span>${mc.uni}</span>
                <strong>🛠️ Cursos Técnicos / Livre:</strong>
                <span>${mc.tec}</span>
            </div>
        `;
        els.careerMatches.appendChild(li);
    });

    // Email
    const mailText = `Olá ${state.nome},%0D%0A%0D%0AAqui está o seu Mapa Vocacional V2!%0D%0A%0D%0ACódigo Predominante: ${topCode}%0D%0AAlinhamento Principal: ${rNames[firstTrait]} (${percents[firstTrait]}%)%0D%0A%0D%0A${tip}`;
    els.emailLink.href = `mailto:?subject=Seu Mapa Vocacional V2&body=${mailText}`;
}

function resetQuiz() {
    switchScreen('start-screen');
}

function downloadImage() {
    window.scrollTo(0, 0); // Reset scroll
    const originalText = els.downloadImgBtn.innerHTML;
    els.downloadImgBtn.innerHTML = '⏳ Gerando...';
    els.downloadImgBtn.disabled = true;

    const element = document.querySelector('.results-container');

    // Esconde botões para bater a foto limpa
    els.actionsContainer.style.display = 'none';

    html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0f172a' // Cor de fundo natural do App
    }).then(canvas => {
        // Restaura botões
        els.actionsContainer.style.display = 'flex';
        els.downloadImgBtn.innerHTML = originalText;
        els.downloadImgBtn.disabled = false;

        // Dispara o download da imagem em PNG
        const link = document.createElement('a');
        link.download = `Mapa_Vocacional_${state.nome.replace(/\\s+/g, '_') || 'Resultado'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error("Erro ao gerar imagem:", err);
        els.actionsContainer.style.display = 'flex';
        els.downloadImgBtn.innerHTML = originalText;
        els.downloadImgBtn.disabled = false;
        alert("Ocorreu um erro ao gerar a imagem.");
    });
}
