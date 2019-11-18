const source = {
  core: { book: 'Core Rules', key: 'core', version: 'v1' },
  coreab: { book: 'Abhumans (Beta)', key: 'coreab', version: 'v0.5' },
  aaoa: { book: 'An Abundance of Apocrypha', key: 'aaoa', version: '', path: '/vault/an-abundance-of-apocrypha' },
  lotn: { book: 'Legacy of the Necrontyr', key: 'lotn', version: '', path: '/vault/legacy-of-the-necrontyr' },
  thaot: { book: 'The High Altar of Technology', key: 'thaot', version: '', path: '/vault/the-high-altar-of-technology' },
  ltgb: { book: 'Let The Galaxy Burn', key: 'ltgb', version: '', path: '/vault/let-the-galaxy-burn' },
  aptb: { book: 'ArdentPurple\'s Tyranid Bestiary', key: 'aptb', version: '', path: '/vault/ardentpurples-tyranid-bestiary' },
  jtb: { book: 'Javelin\'s Tyranid Bestiary', key: 'jtb', version: '', path: '/vault/javelins-tyranid-bestiary' },
  aotgt: { book: 'Agents of the Golden Throne', key: 'aotgt', version: '', path: '/vault/agents-of-the-golden-throne' },
  tea: { book: 'The Emperor\'s Angles', key: 'tea', version: '', path: '/vault/the-emperors-angels' },
  heva: { book: 'Hesperaxs\'s Vault', key: 'heva', version: '', path: '/vault/hesperaxs-vault' },
  goen: { book: 'God Engines', key: 'goen', version: '', path: '/vault/god-engines' },
  tog: { book: 'Tome of Glory', key: 'tog', version: '', path: '/vault/tome-of-glory' },
  pax: { book: 'Pax Imperialis', key: 'pax', version: '', path: '/vault/pax-imperialis' },
  sotah: { book: 'The Deathwatch - Slayer of the Alien Hordes', key: 'sotah', version: '', path: '/vault/the-deathwatch---slayers-of-the-alien-horde' },
};

const stringToKebab = function(text) {
  return text.toLowerCase().replace(/\W/gm, '-');
};

const kebabToCamel = function(slug) {
  return slug.replace(/-([a-z0-9])/g, function (g) { return g[1].toUpperCase(); });
};

const stringToKebabToCamel = function(text) {
  const slug = stringToKebab(text);
  return kebabToCamel(slug);
};

const simpleStub = function(sourceKey, sourcePage, group, name, hint, bp, tier) {
  return {
    source: {
      ...source[sourceKey],
      page: sourcePage,
    },
    key: `${stringToKebabToCamel(sourceKey+' '+name)}`,
    name: name,
    hint: hint,
    group: group,
    cost: bp,
    tier: tier,
  };
};

const coreRep = [
  {
    key: 'human',
    name: 'Human',
    group: 'Mankind',
    hint: 'The humble human',
    source: { ...source.core, page: 86 },
    cost: 0,
    baseTier: 1,
    speed: 6,
    attributes: 'None',
    modifications: [],
    keywords: [],
    abilities: null,
    description: 'Each human is just one of untold billions spread across the galaxy over millions of planets. Those in the Imperium live under the authority of the Emperor, but He has not stirred from His Golden Throne on Holy Terra for over ten thousand years. The remorseless government agencies of the Imperium use His authority to mercilessly rule Humanity according to their interpretations of the Emperor’s will. Every planet has its own culture and unique interpretations of the Imperium’s laws and sacred beliefs, but a few things are especially common.',
    avatar: null,
    theme: null
  },
  {
    key: 'ratling',
    name: 'Ratling',
    group: 'Mankind',
    hint: 'Half-man by name, but not by nature',
    description: 'These small Abhumans are loud, lecherous, hungry, and always on the lookout for something to steal. They like to go into battle barefoot so they can feel the ground beneath their feet. They are often referred to as akin to a plague of rats, for a squad of these Ratlings can strip an Imperial Guard canteen bare in the time it takes the cook to call a squad to mess. Despite this, Ratlings are considered a valuable resource for the Astra Militarum.',
    source: { ...source.coreab },
    cost: 15,
    baseTier: 1,
    speed: 5,
    size: 'Small',
    attributes: 'Agility +1, Strength -1',
    modifications: [
      { targetGroup: 'attributes', targetValue: 'strength', modifier: -1 },
      { targetGroup: 'attributes', targetValue: 'agility', modifier: 1 },
    ],
    keywords: ['Scum'],
    abilities: 'Abhuman,Born Sharpshooter,Conniving',
    avatar: null,
    theme: null
  },
  {
    key: 'ogryn',
    name: 'Ogryn',
    group: 'Mankind',
    hint: 'The brutal, eeh... human?',
    source: { ...source.coreab },
    description: 'Ogryns are the heavy assault backbone of the Astra Militarum, usually attached to the various regiments of the Imperial Guard. These Abhumans are loyal, stalwart, brutal, and extremely strong. They are capable of shrugging off damage that would slaughter a human outright; in short, they make perfect assault and shock troopers when the Imperial Guard requires a heavy fist. Some Ogryns take this to heart, bearing shields and clubs to act as melee powerhouses, whilst many others use their prized (and heavily constructed) Ripper guns.',
    cost: 15,
    baseTier: 2,
    speed: 4,
    size: 'Large',
    attributes: 'Strength +2, Toughness +2, Fellowship -1, Intellect -1',
    modifications: [
      { targetGroup: 'attributes', targetValue: 'strength', modifier: 2 },
      { targetGroup: 'attributes', targetValue: 'toughness', modifier: 2 },
      { targetGroup: 'attributes', targetValue: 'fellowship', modifier: -1 },
      { targetGroup: 'attributes', targetValue: 'intellect', modifier: -1 },
    ],
    keywords: [],
    abilities: 'Abhuman,Burly',
    avatar: null,
    theme: null
  },
  {
    key: 'eldar',
    name: 'Eldar',
    group: 'Aeldari',
    hint: 'The Mysterious Aeldari',
    source: { ...source.core, page: 90 },
    cost: 10,
    baseTier: 1,
    speed: 8,
    attributes: 'Agility +1',
    modifications: [
      {
        targetGroup: 'attributes',
        targetValue: 'agility',
        modifier: 1
      }
    ],
    keywords: [],
    abilities: 'Outsider,Intense Emotion,Psychosensitive',
    description: 'The Aeldari ruled the galaxy for millions of years. During their rise to power, this species uncovered secrets of the galaxy’s very essence, learning to create and shatter entire worlds. They discovered and developed the webway, enabling them to quickly travel across the galaxy without the risk of warp travel. Their collective knowledge eventually reached the point that any drive to learn dampened, as they could accomplish virtually any task they could imagine. The longlived Aeldari existed in luxury, pursuing whatever interests drew their attention. Eventually, such leisure led to increasingly hedonistic pursuits that spread in cults across their entire population. Those moral failings, over time, coalesced within the warp, giving birth to Slaanesh.',
    avatar: null,
    theme: null
  },
  {
    key: 'ork',
    name: 'Ork',
    group: 'Orks',
    source: { ...source.core, page: 88 },
    cost: 10,
    baseTier: 1,
    speed: 6,
    attributes: 'Toughness +1',
    modifications: [
      {
        targetGroup: 'attributes',
        targetValue: 'toughness',
        modifier: 1
      }
    ],
    keywords: [],
    abilities: 'Outsider,Orky,Bigger is Better',
    hint: 'The savage brute',
    description: 'Orks are ubiquitous throughout the galaxy. Their incomprehensible physiology and ecosystem is capable of actively proliferating in even the most hostile of environments—from ash wastes, to overgrown Death Worlds, to barren asteroids. Even a small tribe of a few dozen Orks can inexplicably grow into a force of tens of thousands in relatively short order. The biological mechanisms behind this growth and adaptability confound even the most accomplished scholars of the Adeptus Mechanicus. There are no consistent requirements for Orks to thrive within any climate. However, their functionality is clearly evident on the countless worlds they have subsumed.',
    avatar: null,
    theme: null
  },
  {
    key: 'adeptusAstartes',
    name: 'Adeptus Astartes',
    group: 'Mankind',
    source: { ...source.core, page: 92 },
    cost: 50,
    baseTier: 2,
    speed: 7,
    attributes: 'Strength +1, Agility +1, Toughness +1, Resolve +1',
    modifications: [
      { targetGroup: 'attributes', targetValue: 'strength', modifier: 1 },
      { targetGroup: 'attributes', targetValue: 'agility', modifier: 1 },
      { targetGroup: 'attributes', targetValue: 'toughness', modifier: 1 },
      { targetGroup: 'traits', targetValue: 'resolve', modifier: 1 }
    ],
    keywords: [],
    abilities: 'Angel of Death,Honour the Chapter,Space Marine Implants',
    hint: 'the sword of mankind',
    description: 'Prior to launching the Great Crusade, the Emperor of Man created the Adeptus Astartes and assembled them into his legions. Each began as a mortal man, but a combination of genetic manipulations and physical implantations transformed each into a superhuman warrior—an Imperial Space Marine. The Emperor initially created twenty legions of Space Marines, each one containing vast numbers. All members of each of the twenty legions used a gene-seed developed from one of the twenty godlike Primarchs, whom the emperor also created. During the Great Crusade, Primarchs served as the generals of the Space Marine Legions, as the Emperor strove to reunify all lost human worlds, bringing the galaxy into Imperial Compliance.',
    avatar: null,
    theme: null
  },
  {
    key: 'primarisAstartes',
    name: 'Primaris Astartes',
    group: 'Mankind',
    hint: 'the newborn breed',
    source: { ...source.core, page: 98},
    cost: 100,
    baseTier: 4,
    speed: 7,
    attributes: 'Strength +2, Agility +1,Toughness: +1, Resolve +1, Wounds +4',
    modifications: [
      { targetGroup: 'attributes', targetValue: 'strength', modifier: 2 },
      { targetGroup: 'attributes', targetValue: 'agility', modifier: 1 },
      { targetGroup: 'attributes', targetValue: 'toughness', modifier: 1 },
      { targetGroup: 'traits', targetValue: 'resolve', modifier: 1 },
      { targetGroup: 'traits', targetValue: 'wound', modifier: 4 }
    ],
    keywords: [],
    abilities: 'Angel of Death,Honour the Chapter (Primaris),Space Marine Implants',
    description: 'In the wake of the Horus Heresy, after completing the Codex Astartes, Primarch Roboute Guilliman decided that the Adeptus Astartes needed further enhancements to better defend the Imperium from outside threats—including those Space Marines who had turned traitor. He assigned the job of improving them to Archmagos Dominus Belisarius Cawl of the Adeptus Mechanicus. To aid the Tech-Priest, Guilliman provided him with an archive of genetic material taken from his fellow Primarchs, called the Sangprimus Portum.',
    avatar: null,
    theme: null
  }
];

const homebrewReps = [
  simpleStub('heva', 6, 'Aeldari', 'Dark Eldar', 'From the shadows, from the Dark City', 20, 1),
  simpleStub('lotn', 3, 'Necrons', 'Necron', 'Living metal form the deepest slumber', 60, 3),
  simpleStub('aaoa', 10, 'Mankind', 'Death World Origin', 'Humans from the deadly worlds', 10, 1),
  simpleStub('aaoa', 10, 'Mankind', 'Hive World Origin', 'Humans from the overcrowded cities', 10, 1),
  simpleStub('aaoa', 10, 'Mankind', 'Voidborn Origin', 'Humans form the void of space', 10, 1),
  simpleStub('aaoa', 11, 'Mankind', 'Forge World Origin', 'Humans form the mechanical grindhouse', 10, 1),
  simpleStub('aaoa', 11, 'Mankind', 'Scholar Progenium Origin', 'Humans form the nobel orphanage', 25, 1),
  simpleStub('aaoa', 11, 'Mankind', 'Shrine World Origin', 'Humans form the cradle of the imperial creed', 10, 1),
  simpleStub('aaoa', 16, 'Mankind', 'Pharia', 'The blank, the untouched, the hated', 30, 2),
  simpleStub('aaoa', 17, 'Mankind', 'Squat', 'Abhuman and dwarfish underground variant', 15, 1),
  simpleStub('aaoa', 18, 'Mankind', 'Beastman', 'Touched by fate... eeh chaos.', 20, 1),
  simpleStub('pax', 13, 'Mankind', 'Beastman', 'Beastly touch of unknown origin', 10, 1),
  simpleStub('pax', 14, 'Mankind', 'Navigator', 'Blessed with the third eye', 50, 1),
  simpleStub('pax', 18, 'Mankind', 'Untouchable', 'The soulless', 20, 1),
];

module.exports = [
  ...coreRep,
  ...homebrewReps,
];

