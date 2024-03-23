'use client';
import React, { useState } from 'react';

const AddCandidate = () => {
  const [languages, setLanguages] = useState<
    Array<{ language: string; level: string }>
  >([{ language: '', level: '' }]);
  return (
    <div className="flex flex-col">
      <h2>Інформація про кандидата</h2>
      <div>
        <h3>Персональна інформація</h3>

        <form className="flex flex-col gap-[32px] font-sans text-[16px]">
          <div className="flex w-full gap-[24px]">
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="name_ua">
                Ім`я <span className="text-red-500">*</span>
              </label>
              <input
                id="name_ua"
                name="name_ua"
                placeholder="Ім`я"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="surname_ua">
                Прізвище{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="surname_ua"
                name="surname_ua"
                placeholder="Прізвище"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="country">
                Країна{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                name="country"
                placeholder="Країна"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="surname">
                Surname{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="surname"
                name="surname"
                placeholder="Surname"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="city">
                Місто{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                name="city"
                placeholder="Місто"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="phone">
                Телефон{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Телефон"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="email">
                Email{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]"></div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="linkedin">
                Linkedin{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="linkedin"
                name="linkedin"
                placeholder="Linkedin"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="discord">
                Discord{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="discord"
                name="discord"
                placeholder="Discord"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>

            <div className="flex max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="telegram">
                Telegram{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="telegram"
                name="telegram"
                placeholder="Telegram"
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
              />
            </div>
          </div>

          <div className="flex w-full gap-[24px]">
            <div className="flex w-full flex-col gap-[32px]">
              {languages.map(
                (
                  {
                    language,
                    level,
                  }: { language: string; level: string },
                  index
                ) => (
                  <div
                    key={index}
                    className="flex grow gap-[24px]"
                  >
                    <div className="flex max-w-[442px] grow flex-col gap-[5px]">
                      <label htmlFor="phone">
                        Рівень володіння мовою{' '}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <select
                        defaultValue=""
                        className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                      >
                        <option value="">
                          Please Select
                        </option>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                      </select>
                    </div>

                    <div className="flex max-w-[442px] grow flex-col gap-[5px]">
                      <label htmlFor="phone">
                        Іноземна Мова{' '}
                        <span className="text-red-500">
                          *
                        </span>
                      </label>
                      <select
                        defaultValue=""
                        className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                      >
                        <option>Please Select</option>
                        <option value="English">
                          English
                        </option>
                        <option value="Spanish">
                          Spanish
                        </option>
                        <option value="Polish">
                          Polish
                        </option>
                        <option value="Duchland">
                          Duchland
                        </option>
                        <option value="French">
                          French
                        </option>
                      </select>
                    </div>
                    {index !== 0 ? (
                      <div className="flex w-full max-w-[442px] grow gap-[5px]">
                        <div
                          onClick={() =>
                            setLanguages(
                              languages.splice(1, index)
                            )
                          }
                          className="flex h-[44px] cursor-pointer items-center self-end"
                        >
                          X
                        </div>
                        {languages.length - 1 === index && (
                          <div
                            onClick={() =>
                              setLanguages([
                                ...languages,
                                { language: '', level: '' },
                              ])
                            }
                            className="flex h-[44px] max-w-[442px] grow cursor-pointer items-center justify-end self-end text-end"
                          >
                            <span className="flex justify-end underline">
                              + Додати ще мову
                            </span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex h-[44px] max-w-[442px] grow cursor-pointer items-center justify-end self-end text-end">
                        {languages.length <= 1 && (
                          <span
                            onClick={() =>
                              setLanguages([
                                ...languages,
                                { language: '', level: '' },
                              ])
                            }
                            className="flex w-full justify-end underline"
                          >
                            + Додати ще мову
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
            {/* <div
              onClick={() =>
                setLanguages([
                  ...languages,
                  { language: '', level: '' },
                ])
              }
              className="flex justify-end items-center text-end h-[44px] cursor-pointer self-end w-full max-w-[442px] grow"
            >
              
              <span className="underline w-full flex justify-end pr-[]">
              +{' '}
                Додати ще мову
              </span>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
