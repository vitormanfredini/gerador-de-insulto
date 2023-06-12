
const nodes = []

nodes.push({
  section: "abertura",
  tokens: [
    "aaa",
    "aa não",
    "puts",
    "po",
    "sério",
    "porra",
    "aê",
    "aou",
    "olha só",
    "com todo respeito",
    "na moral"
  ],
  next: [
    "quem"
  ]
});

nodes.push({
  section: "quem",
  tokens: [
    "mano",
    "mina",
    "madame",
    "jão",
    "zé",
    "tia",
    "cara",
    "parça",
    "piá",
    "guria",
    "patrão",
    "patroa",
    "fi de rapariga",
    "moça",
    "moço",
    "cuzão",
    "cuzona"
  ],
  next: [
    "abertura_opcional"
  ],
  optional: true
});

nodes.push({
  section: "abertura_opcional",
  tokens: [
    "sério",
    "po",
    "puts",
    "porra"
  ],
  next: [
    "principal_1",
    "principal_2",
    "principal_3",
    "principal_4"
  ]
});

nodes.push({
  section: "principal_1",
  tokens: [
    "enfia"
  ],
  next: [
    "principal_1_B"
  ]
});

nodes.push({
  section: "principal_1_B",
  tokens: [
    "essa bosta",
    "essa merda",
    "isso aí",
    "isso",
  ],
  next: [
    "principal_1_C"
  ],
  optional: true
});

nodes.push({
  section: "principal_1_C",
  tokens: [
    "no cu",
    "no rabo",
    "no seu cu",
    "no seu rabo"
  ],
  next: [
    "finalizacao"
  ]
});

nodes.push({
  section: "principal_2",
  tokens: [
    "para"
  ],
  next: [
    "principal_2_b"
  ]
});

nodes.push({
  section: "principal_2_b",
  tokens: [
    "né",
    "com isso"
  ],
  next: [
    "principal_2_c"
  ]
});

nodes.push({
  section: "principal_2_c",
  tokens: [
    "fei",
    "véi",
    "mano",
    "mina"
  ],
  next: [
    "finalizacao"
  ],
  optional: true
});

nodes.push({
  section: "principal_3",
  tokens: [
    "vai"
  ],
  next: [
    "principal_3_b"
  ]
});

nodes.push({
  section: "principal_3_b",
  tokens: [
    "se fuder",
    "tomar no cu",
    "tmnc",
    "pra pqp",
    "pra casa do caralho",
    "se lascá",
    "pro inferno"
  ],
  next: [
    "principal_3_c"
  ]
});

nodes.push({
  section: "principal_3_c",
  tokens: [
    "véi",
    "po"
  ],
  next: [
    "finalizacao"
  ],
  optional: true
});

nodes.push({
  section: "principal_4",
  tokens: [
    "vc é"
  ],
  next: [
    "principal_4_b"
  ]
});

nodes.push({
  section: "principal_4_b",
  tokens: [
    "foda",
    "triste",
    "um infeliz",
    "um arrombado",
    "otário",
    "fdp",
    "fia da puta",
  ],
  next: [
    "principal_4_c"
  ]
});

nodes.push({
  section: "principal_4_c",
  tokens: [
    "memo"
  ],
  next: [
    "principal_4_d"
  ],
  optional: true
});

nodes.push({
  section: "principal_4_d",
  tokens: [
    "ein"
  ],
  next: [
    "finalizacao"
  ],
  optional: true
});

nodes.push({
  section: "finalizacao",
  tokens: [
    "caralho",
    "krl",
    "caraio",
    "sifudê",
    "porra",
    "arrombado",
    "cuzão",
    "arrombado dos inferno",
    "cuzão dos inferno"
  ],
  next: [
    "complemento"
  ]
});

nodes.push({
  section: "complemento",
  tokens: [
    "tá me tirando?",
    "me erra",
    "sai fora",
    "tá loco",
    "foda viu"
  ],
  next: [
    "fim"
  ],
  optional: true
});

const synonyms = [
  ["porra", "pô", "po"],
  ["caralho", "caraio", "krl"],
  ["fdp", "fia da puta"],
  ["vsf", "sifudê", "se fuder"],
  ["arrombado dos inferno", "arrombado", "arrombada dos inferno", "arrombada"],
  ["cuzão dos inferno", "cuzão", "cuzona dos inferno", "cuzona"],
  ["tomar no cu", "tmnc"]
];

const genderedPairs = [
  {
    masculine: 'mano',
    feminine: 'mina',
  },
  {
    masculine: 'piá',
    feminine: 'guria',
  },
  {
    masculine: 'jão',
    feminine: 'fia',
  },
  {
    masculine: 'zé',
    feminine: 'tia',
  },
  {
    masculine: 'hómi',
    feminine: 'muié',
  },
  {
    masculine: 'patrão',
    feminine: 'patroa',
  },
  {
    masculine: 'moço',
    feminine: 'moça',
  },
  {
    masculine: 'otário',
    feminine: 'otária',
  },
  {
    masculine: 'um infeliz',
    feminine: 'uma infeliz',
  },
  {
    masculine: 'um arrombado',
    feminine: 'uma arrombada',
  },
  {
    masculine: 'arrombado',
    feminine: 'arrombada',
  },
  {
    masculine: 'um cuzão',
    feminine: 'uma cuzona',
  },
  {
    masculine: 'cuzão',
    feminine: 'cuzona',
  },
  {
    masculine: 'arrombado dos inferno',
    feminine: 'arrombada dos inferno',
  },
  {
    masculine: 'cuzão dos inferno',
    feminine: 'cuzona dos inferno',
  },
  {
    masculine: 'senhor',
    feminine: 'madame'
  }
];

const getNodeBySection = (section) => {
  return nodes.find(node => node.section == section);
}

const generateInsult = () => {
  const insultTokens = [];

  let isMasculineInsult = false;
  let isFeminineInsult = false;

  var next = getNodeBySection("abertura");

  while(next !== undefined){

    // console.log(next.section);

    let useThisSection = true;
    if(typeof next.optional != "undefined" && next.optional === true){
      useThisSection = Math.random() < 0.5;
    }

    if(useThisSection){

      let chosenToken = next.tokens[Math.floor(Math.random() * next.tokens.length)];

      if(isFeminineInsult){
        for(const genderedPair of genderedPairs){
          if(genderedPair.masculine == chosenToken){
            chosenToken = genderedPair.feminine;
            break;
          }
        }
      }else if(isMasculineInsult){
        for(const genderedPair of genderedPairs){
          if(genderedPair.feminine == chosenToken){
            chosenToken = genderedPair.masculine;
            break;
          }
        }
      }else{
        for(const genderedPair of genderedPairs){
          if(genderedPair.feminine == chosenToken){
            isFeminineInsult = true;
            break;
          }
          if(genderedPair.masculine == chosenToken){
            isMasculineInsult = true;
            break;
          }
        }
      }

      let usedSynonym = false;
      for(const synonymsList of synonyms){
        if(synonymsList.includes(chosenToken)){
          for(const synonymToken of synonymsList){
            if(insultTokens.join(" ").split(" ").includes(synonymToken)){
              usedSynonym = true;
              console.log(synonymsList);
              break;
            }
          }
        }
      }

      const tokenAlreadyUsed = insultTokens.join(" ").split(" ").includes(chosenToken);

      if(!tokenAlreadyUsed && !usedSynonym){
        insultTokens.push(chosenToken);
      }
    }

    if(next.section == "fim"){
      break;
    }

    const nextSection = next.next[Math.floor(Math.random() * next.next.length)];
    next = getNodeBySection(nextSection);
  }

  let insult = insultTokens.join("\n");
  insult = insult.split(" dos inferno").join("\ndos inferno");
  insult = insult.split(" do caralho").join("\ndo caralho");
  return insult;
};
