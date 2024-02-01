'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/components/icons/Logo';
import Link from 'next/link';
import { occupations } from './data';
import HeaderDropdown from './header_dropdown/HeaderDropdown';
import HeaderSearchIcon from '@/components/icons/HeaderSearchIcon';
import HeaderCaretDown from '@/components/icons/HeaderCaretDown';
import HeaderCaretUp from '@/components/icons/HeaderCaretUp';
import { transformMenuItem } from '@/helpers/transformMenuItem';

const languages = ['UA', 'EN', 'PL'];

const Header = () => {
  const menuItems = Object.keys(occupations);
  // const [checkedStates, setcheckedStates] = useState<
  //   boolean[]
  // >(menuItems.map(() => false));
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);

  const [langOpen, setLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages[0]
  );

  const toggleActive = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    if (activeIndex === index) {
      setActiveIndex(null);
      setIsOpen(false);
    }
  };

  // const toggleChecked = (index: number) => {
  //   const newCheckedStates = [...checkedStates];
  //   newCheckedStates[index] = !newCheckedStates[index];
  //   setcheckedStates(newCheckedStates);
  // };

  useEffect(() => {
    const handlePressESC = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
    };

    document.addEventListener('keydown', handlePressESC);
    return () => {
      document.removeEventListener(
        'keydown',
        handlePressESC
      );
    };
  }, []);

  const handlelanguageClick = () => {
    setLangOpen((prev) => !prev);
  };

  const handleLanguageSelect = () => {
    setLangOpen(false);
  };

  const languageOptions = languages.map((lang) => (
    <li
      key={lang}
      onClick={() => {
        setSelectedLanguage(lang);
        handleLanguageSelect();
      }}
      className="cursor-pointer py-2 pr-8 text-white hover:text-rose"
    >
      {lang}
    </li>
  ));

  return (
    <header className="relative border-b border-[#4E4E4E] bg-darkGraphite px-20">
      <div className="flex h-[100px] items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <ul className="flex">
            {menuItems.map((occupation, index) => (
              <li
                key={index}
                className={`group relative flex cursor-pointer flex-row  p-4 text-base text-white hover:text-yellow ${activeIndex === index && 'bg-gray'}`}
              >
                {activeIndex === index && (
                  <HeaderDropdown
                    data={
                      occupations[
                        occupation as keyof typeof occupations
                      ]
                    }
                  />
                )}
                <HeaderSearchIcon />
                <span onClick={() => toggleActive(index)}>
                  {transformMenuItem(occupation)}
                </span>
                {activeIndex === index ? (
                  <HeaderCaretUp />
                ) : (
                  <HeaderCaretDown />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div
            className="group flex cursor-pointer flex-row text-white hover:text-yellow"
            onClick={handlelanguageClick}
          >
            {selectedLanguage}
            {!langOpen ? (
              <HeaderCaretDown />
            ) : (
              <HeaderCaretUp />
            )}
          </div>
          {langOpen && (
            <ul className="absolute top-full mt-2 rounded bg-[#202020] shadow-lg">
              {languageOptions.map((lang, index) => (
                <li
                  key={index}
                  onClick={() => {
                    handleLanguageSelect();
                  }}
                  className={`cursor-pointer border border-[#454444] text-left text-white hover:text-rose`}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fade absolute left-0 top-[100px] z-40 min-h-[calc(100vh-100px)] w-full bg-black opacity-50"></div>
      )}
    </header>
  );
};

export default Header;
