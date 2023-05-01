import { Language, emptyLanguage } from "@/types/languageTypes";
import { PropsWithChildren, createContext, useState } from "react";

type localLanguageType = {
  language: Language;
  setLanguage: (update: Language) => void;
};
const localLanguageTypeDefaults: localLanguageType = {
  language: emptyLanguage,
  setLanguage: () => {},
};

const LocalLanguageContext = createContext<localLanguageType>(
  localLanguageTypeDefaults
);

export const LocalLanguageProvider = (props: PropsWithChildren) => {
  const [localLanguage, setLocalLanguage] = useState<Language>({
    ...emptyLanguage,
    name: "new language",
  });
  const setLanguage = (update: Language) =>
    setLocalLanguage({ ...localLanguage, ...update });
  const value: localLanguageType = {
    language: localLanguage,
    setLanguage: setLanguage,
  };

  return (
    <LocalLanguageContext.Provider value={value}>
      {props.children}
    </LocalLanguageContext.Provider>
  );
};

export default LocalLanguageContext;
