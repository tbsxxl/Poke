const englishNames = {
  1: "Bulbasaur",
  2: "Ivysaur",
  3: "Venusaur",
  4: "Charmander",
  5: "Charmeleon",
  6: "Charizard",
  7: "Squirtle",
  8: "Wartortle",
  9: "Blastoise",
  25: "Pikachu",
  59: "Arcanine",
  75: "Graveler",
  110: "Weezing",
  135: "Jolteon",
  149: "Dragonite",
  150: "Mewtwo",
  226: "Mantine",
  470: "Leafeon"
  // 👉 Oder hier deine vollständige Liste
};

const nameToId = {};
for (const [id, name] of Object.entries(englishNames)) {
  nameToId[name.toLowerCase()] = parseInt(id);
}
