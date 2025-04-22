import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageCode } from '../../i18n/translations';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../ui/toggle-group";

export const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: "EN" as LanguageCode, selected: currentLanguage === "EN" },
    { code: "ES" as LanguageCode, selected: currentLanguage === "ES" },
    { code: "PT" as LanguageCode, selected: currentLanguage === "PT" },
  ];

  const handleLanguageChange = (value: string) => {
    if (value && (value === "EN" || value === "ES" || value === "PT")) {
      setLanguage(value as LanguageCode);
    }
  };

  return (
    <ToggleGroup
      type="single"
      value={currentLanguage}
      defaultValue="EN"
      onValueChange={handleLanguageChange}
      className="flex items-center gap-1"
    >
      {languages.map((lang) => (
        <ToggleGroupItem
          key={lang.code}
          value={lang.code}
          className={`px-4 py-3 rounded-[5px] border border-solid border-black ${
            lang.selected ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <span className="font-['Geist',Helvetica] font-normal text-2xl leading-6">
            {lang.code}
          </span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};