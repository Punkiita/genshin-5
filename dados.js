let dados = [
    {
      titulo: "Albedo",
      descricao: "Um gênio conhecido como Príncipe do Giz, ele é o chefe alquimista e capitão da equipe de investigação dos cavaleiros de favonius.",
      link: "https://genshin-builds.com/pt/teams/albedo",
      tags: "anemo espada mondstadt"
    },
    {
      titulo: "Alhaitham",
      descricao: "0 atual escriba da academia de sumeru, um homem de grande inteligência e talento. vive sua vida livre e despreocupado, sendo uma pessoa muito difícil de se encontrar.",
      link: "https://genshin-builds.com/pt/teams/alhaitham",
      tags: "dendro	espada sumeru"
    },
    {
      titulo: "Aloy",
      descricao: "Era uma pária, agora uma caçadora de uma avidez inigualável. pronta para fazer a coisa certa com seu arco, a qualquer momento.",
      link: "https://genshin-builds.com/pt/teams/aloy",
      tags: "cyro arco exclusivo ps"
    },
    {
      titulo: "Andarilho",
      descricao: "Um jovem andarilho de identidade misteriosa. ae veste como um shugenja, mas com certeza não age como um.",
      link: "https://genshin-builds.com/pt/teams/wanderer",
      tags: "anemo catalizador inazumo / sumeru"
    },
    {
      titulo: "Arataki itto",
      descricao: "O primeiro e maior chefe da Gangue arataki, famosa em hanamizaka, na cidade de inazuma... espere, o quê? nunca ouviu falar deles? sério?",
      link: "https://genshin-builds.com/pt/teams/arataki_itto",
      tags: "geo espadão inazumo"
    },
    {
      titulo: "Arlecchino",
      descricao: "A serva, a uarta mensageira dos fatui. uma diplomata calma e implacável, o pai que todas as crianças da sasa da lareira temem e a quem reverenciam.",
      link: "https://genshin-builds.com/pt/teams/arlecchino",
      tags: "pyro lança fontaine"
    },
    {
      titulo: "Baizhu",
      descricao: "O dono do chalé de bubu, sempre com uma cobra branca chamada changsheng pendurada no pescoço. um grande conhecedor de medicina, suas verdadeiras intenções são um grande mistério.",
      link: "https://genshin-builds.com/pt/teams/baizhu",
      tags: "dendro	catalizador	liyue"
    },
    {
      titulo: "Chiori",
      descricao: "A dona da boutique chioriya. é uma costureira renomada em fontaine.",
      link: "https://genshin-builds.com/pt/teams/chiori",
      tags: "geo espada	fontaine"
    },
    {
      titulo: "Clorinde",
      descricao: "Uma duelista Representante invicta. espada em mão, ela defende a justiça na Corte de fontaine.",
      link: "https://genshin-builds.com/pt/teams/clorinde",
      tags: "eletro	espada	fontaine"
    },
    {
      titulo: "Cyno",
      descricao: "O general mahamatra é responsável por supervisionar os pesquisadores da academia. dizem que, quando ele está trabalhando, o general mahamatra é ainda mais eficiente do que o grande vayuvyastra feito pelo kshahrewar.",
      link: "https://genshin-builds.com/pt/teams/cyno",
      tags: "eletro	lança	sumeru"
    },
    {
      titulo: "Dehya",
      descricao: "Membro dos eremitas, uma organização mercenária que vaga pelos desertos de sumeru. ela é corajosa, poderosa e tem uma excelente reputação entre os seus colegas eremitas.",
      link: "https://genshin-builds.com/pt/teams/dehya",
      tags: "pyro	espadão	sumeru"
    },
    {
      titulo: "Diluc",
      descricao: "O magnata do império de vinhedos em mondstadt, inigualável em todos os sentidos.",
      link: "https://genshin-builds.com/pt/teams/diluc",
      tags: "pyro	espadão	Mondstadt"
    },
    {
      titulo: "Emilie",
      descricao: "Uma perfumista de fontaine que engarrafa segredos.",
      link: "https://genshin-builds.com/pt/teams/emilie",
      tags: "dendro	lança	fontaine"
    },
    {
      titulo: "Eula",
      descricao: "A cavaleira das ondas, uma descendente da antiga aristocracia, é a capitã de reconhecimento dos cavaleiros de favonius. a razão pela qual uma descendente dos antigos nobres poderia se juntar aos cavaleiros permanece um grande mistério em mondstadt até os dias de hoje.",
      link: "https://genshin-builds.com/pt/teams/eula",
      tags: "cyro	espadão	Mondstadt"
    },
    {
      titulo: "Furina",
      descricao: "O foco absoluto em cima do palco durante um julgamento, até o momento das cortinas caírem e dos aplausos soarem.",
      link: "https://genshin-builds.com/pt/teams/furina",
      tags: "hydro	espada	fontaine"
    },
    {
      titulo: "Ganyu",
      descricao: "Secretária do Pavilhão Yuehai. O sangue da besta iluminada Qilin flui nas suas veias.",
      link: "https://genshin-builds.com/pt/teams/ganyu",
      tags: "cyro	arco	liyue"
    },
    {
      titulo: "Hutao",
      descricao: "A 77.ª diretora da funerária de wangsheng. apesar de ser jovem, já está encarregada de todos os assuntos funerários de liyue.",
      link: "https://genshin-builds.com/pt/teams/hu_tao",
      tags: "pyro	lança	liyue"
    },
    {
      titulo: "Jean",
      descricao: "A justa e rigorosa cavaleira de dandelion, a grande mestre intendente dos cavaleiros de favonius emondstadt.",
      link: "https://genshin-builds.com/pt/teams/jean",
      tags: "anemo	espada	Mondstadt"
    },
    {
      titulo: "Kaedehara kazuha",
      descricao: "Um samurai errante de inazuma que atualmente está com a frota crux de liyue. uma alma gentil e livre cujo coração esconde muitas feridas",
      link: "https://genshin-builds.com/pt/character/kaedehara_kazuha",
      tags: "anemo	espada	inazumo"
    },
    {
      titulo: "Kamisato ayaka",
      descricao: "Filha do clã kamisato da comissão yashiro. solene e elegante, e também sábia e forte.",
      link: "https://genshin-builds.com/pt/character/kamisato_ayaka",
      tags: "cyro	espada	inazumo"
    },
    {
      titulo: "Kamisato ayato",
      descricao: "O jovem promissor e chefe atual da comissão yashiro, é culto e educado, e sempre tem uma forma de fazer as coisa",
      link: "https://genshin-builds.com/pt/character/kamisato_ayato",
      tags: "hydro	espada	inazumo"
    },
    {
      titulo: "Keqing",
      descricao: "A yuheng dos qixing de liyue. tem muito a dizer sobre o rex lapis governando liyue com apenas uma palavra, mas na verdade, esse deus admira muito esses céticos.",
      link: "https://genshin-builds.com/pt/character/keqing",
      tags: "eletro	espada	liyue"
    },
    {
      titulo: "Klee",
      descricao: "Uma visitante frequente da sala de confinamento dos cavaleiros de favonius, também conhecida como sol fugitivo.",
      link: "https://genshin-builds.com/pt/teams/klee",
      tags: "pyro	catalizador	Mondstadt"
    },
    {
      titulo: "Lyney",
      descricao: "Um mágico astuto e habilidoso de Fontaine que sempre conquista o público com seus truques engenhosos e sua eloquência.",
      link: "https://genshin-builds.com/pt/character/lyney",
      tags: "pyro	arco	fontaine"
    },
    {
      titulo: "Mona",
      descricao: "Uma jovem astróloga misteriosa que proclama a si mesma como a grande astróloga mona e que possui as habilidades para o título. uma pessoa erudita, mas orgulhosa.",
      link: "https://genshin-builds.com/pt/teams/mona",
      tags: "hydro	catalizador	Mondstadt"
    },
    {
      titulo: "Mualani",
      descricao: "Uma guia renomada em natlan, proprietária de uma loja de esportes aquáticos e especialista em todas as formas de pegar onda.",
      link: "https://genshin-builds.com/pt/teams/mualani",
      tags: "hydro	catalizador	natlan"
    },
    {
      titulo: "Nahida",
      descricao: "Um pássaro enjaulado no santuário de surasthana, que só pode contemplar o mundo através de seus sonhos.",
      link: "https://genshin-builds.com/pt/teams/nahida",
      tags: "dendro	catalizador	sumeru"
    },
    {
      titulo: "Navia",
      descricao: "A atual presidente da spina di rosula, é a patroa adorável e responsável.",
      link: "https://genshin-builds.com/pt/teams/navia",
      tags: "geo	espadão	fontaine"
    },
    {
      titulo: "Neuvillette",
      descricao: "O juiz supremo de fontaine, conhecido como iudex, é renomado por sua imparcialidade inabalável.",
      link: "https://genshin-builds.com/pt/teams/neuvillette",
      tags: "hydro	catalizador	fontaine"
    },
    {
      titulo: "Nilou",
      descricao: "A estrela do teatro zubayr, ela é bondosa e inocente. Seu estilo de dança é alegre e elegante.",
      link: "https://genshin-builds.com/pt/teams/nilou",
      tags: "hydro	espada	sumeru"
    },
    {
      titulo: "Qiqi",
      descricao: "Uma aprendiz e colhedora de ervas no chalé de bubu. uma morta-viva com pele branca como osso, ela raramente tem muitas palavras ou emoções.",
      link: "https://genshin-builds.com/pt/teams/qiqi",
      tags: "cyro	espada	liyue"
    },
    {
      titulo: "Sangonomiya kokomi",
      descricao: "A sacerdotisa divina da ilha watatsumi. todos os assuntos da ilha estão na ponta dos dedos desta jovem senhora.",
      link: "https://genshin-builds.com/pt/teams/sangonomiya_kokomi",
      tags: "hydro	catalizador	inazumo"
    },
    {
      titulo: "Shenhe",
      descricao: "Uma discípula adepti com um ar muito incomum sobre ela. tendo passado muito tempo vivendo em isolamento nas montanhas de liyue, ela se tornou tão fria e distante quanto os próprios adepti.",
      link: "https://genshin-builds.com/pt/teams/shenhe",
      tags: "cyro	catalizador	liyue"
    },
    {
      titulo: "Sigewinne",
      descricao: "Uma melusine e a enfermeira-chefe da fortaleza meropide. ela cuida igualmente de todo presidiário da prisão submarina.",
      link: "https://genshin-builds.com/pt/teams/sigewinne",
      tags: "hydro	arco	Fortaleza Meropide"
    },
    {
      titulo: "Tartaglia",
      descricao: "O n.º 11 dos mensageiros dos fatui, também conhecido como childe. o seu nome é bastante temido nos campos de batalha.",
      link: "https://genshin-builds.com/pt/teams/tartaglia",
      tags: "hydro	arco	liyue"
    },
    {
      titulo: "Tighnari",
      descricao: "Um jovem pesquisador que conhece bastante de botânica e que atualmente trabalha como um patrulheiro florestal na floresta avidya. ele é extremamente sincero, com um bom coração — e muito bom na orientação até mesmo dos alunos mais ingênuos.",
      link: "https://genshin-builds.com/pt/teams/tighnari",
      tags: "dendro arco sumeru"
    },
    {
      titulo: "Venti",
      descricao: "Um dos muitos bardos de mondstadt que vagueia livremente pelas ruas e becos da cidade.",
      link: "https://genshin-builds.com/pt/teams/venti",
      tags: "anemo	arco	Mondstadt"
    },
    {
      titulo: "Viajante (anemo)",
      descricao: "Um viajante de outro mundo que teve seu ente querido levado e foi forçado a embarcar em uma jornada em busca dos sete.",
      link: "https://genshinbuild.com/traveler-anemo",
      tags: "desconhecido irmao irma irmão irmã espada anemo"
    },
    {
      titulo: "Viajante (geo)",
      descricao: "Um viajante de outro mundo que teve seu ente querido levado e foi forçado a embarcar em uma jornada em busca dos sete.",
      link: "https://genshinbuild.com/traveler-geo",
      tags: "desconhecido irmao irma irmão irmã espada geo"
    },
    {
      titulo: "Viajante (electro)",
      descricao: "Um viajante de outro mundo que teve seu ente querido levado e foi forçado a embarcar em uma jornada em busca dos sete.",
      link: "https://genshinbuild.com/traveler-electro",
      tags: "desconhecido irmao irma irmão irmã espada electro"
    },
    {
      titulo: "Viajante (dendro)",
      descricao: "Um viajante de outro mundo que teve seu ente querido levado e foi forçado a embarcar em uma jornada em busca dos sete.",
      link: "https://genshinbuild.com/traveler-dendro",
      tags: "desconhecido irmao irma irmão irmã espada dendro"
    },
    {
      titulo: "Viajante (hydro)",
      descricao: "Um viajante de outro mundo que teve seu ente querido levado e foi forçado a embarcar em uma jornada em busca dos sete.",
      link: "https://genshinbuild.com/traveler-hydro",
      tags: "desconhecido irmao irma irmão irmã espada hydro"
    },
    {
      titulo: "Wriothesley",
      descricao: "Dque da fortaleza meropide, lorde incógnito das profundezas obscuras.",
      link: "https://genshin-builds.com/pt/teams/wriothesley",
      tags: "cyro	catalizador	fontaine"
    },
    {
      titulo: "Xiao",
      descricao: "Um yaksha, um ser imortal que protege liyue. também chamado de conquistador de demônios ou Guardião Yaksha.",
      link: "https://genshin-builds.com/pt/teams/xiao",
      tags: "anemo	catalizador	liyue"
    },
    {
      titulo: "Xianyun",
      descricao: "Uma dos adepti poderosos e iluminados de jueyun, conhecida como retentora de nuvem. domina as artes mecânicas, seu coração percorre o mundo efêmero dos mortais, e seu nome entre eles é xianyun.",
      link: "https://genshin-builds.com/pt/teams/xianyun",
      tags: "anemo	lança	liyue"
    },
    {
      titulo: "Yae Miko",
      descricao: "A senhorita guuji do grande santuário narukami, e também a editora-chefe da editora yae. por trás de sua bela aparência escondem-se sabedoria e astúcia inimagináveis.",
      link: "https://genshin-builds.com/pt/teams/yae_miko",
      tags: "eletro	lança	inazumo"
    },
    {
      titulo: "Yelan",
      descricao: "uma pessoa misteriosa que afirma trabalhar para o ministério dos assuntos civis, mas não existe nos registros deles.",
      link: "https://genshin-builds.com/pt/teams/yelan",
      tags: "hydro arco liyue"
    },
    {
      titulo: "Yoimiya",
      descricao: "Dona da fogos de artifício naganohara. conhecida como rainha do festival de verão, ela é excelente na criação de fogos de artifício que simbolizam a esperança e os sonhos das pessoas.",
      link: "https://genshin-builds.com/pt/teams/yoimiya",
      tags: "pyro	arco	inazumo"
    },
    {
      titulo: "Zhongli",
      descricao: "Um convidado misterioso da funerária de wangsheng. é um erudito que tem um profundo conhecimento sobre todos os tipos de coisa.",
      link: "https://genshin-builds.com/pt/teams/zhongli",
      tags: "geo lança	liyue"
    }
  ];