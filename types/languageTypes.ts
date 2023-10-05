export type Phone = {
  symbol: string;
  name: string;
  features: string;
};

export type Syllable = {};

export type Morph = {};

export type GrammarRule = {};

export type Language = {
  name: string;
  phones: Phone[];
  syllables: Syllable[];
  morphs: Morph[];
  grammarRules: GrammarRule[];
};

export const emptyLanguage: Language = {
  name: "",
  phones: [],
  syllables: [],
  morphs: [],
  grammarRules: [],
};
