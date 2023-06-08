
const nodes = []

nodes.push({
  section: "abertura",
  tokens: [
    "aaa",
    "aa não",
    "puts",
    "po",
    "serio",
    "porra"
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
    "cara",
    "parça",
    "patrão",
    "patroa",
    "fi de rapariga",
    "moça",
    "moço"
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
    "mano"
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
    "pra pqp",
    "se lascá",
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
    "infeliz",
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
    "porra"
  ],
  next: [
    "complemento"
  ]
});

nodes.push({
  section: "complemento",
  tokens: [
    "\ntá me tirando?",
    "\nme erra",
    "\nsai fora",
    "\ntá loco",
    "\nfoda viu"
  ],
  next: [
    "fim"
  ],
  optional: true
});

const getNodeBySection = (section) => {
  return nodes.find(node => node.section == section);
}

const generateInsult = () => {
  const insultTokens = [];

  var next = getNodeBySection("abertura");

  while(next !== undefined){

    // console.log(next.section);

    let useThisSection = true;
    if(typeof next.optional != "undefined" && next.optional === true){
      useThisSection = Math.random() > 0.5;
    }

    if(useThisSection){
      const tokens_to_use = next.tokens.filter(word => !insultTokens.includes(word));
      let randomToken = Math.floor(Math.random()*tokens_to_use.length);
      const chosenToken = tokens_to_use[randomToken];
      insultTokens.push(chosenToken);
    }

    if(next.section == "fim"){
      break;
    }

    let randomNext = Math.floor(Math.random()*next.next.length);
    let nextSection = next.next[randomNext];
    next = getNodeBySection(nextSection);
  }

  return insultTokens.join("\n");
};
