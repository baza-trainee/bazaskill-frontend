import { ChangeEvent, useEffect } from 'react';

interface ILanguagesProps {
  languages: Array<{ language: string; level: string }>;
  deleteLanguage: (index: number) => void;
  addLanguage: () => void;
  choseLanguage: (id: number, value: string) => void;
  choseLevel: (id: number, value: string) => void;
}
const Languages: React.FC<ILanguagesProps> = ({
  languages,
  deleteLanguage,
  addLanguage,
  choseLanguage,
  choseLevel,
}) => {
  return (
    <div className="flex w-full flex-col gap-[32px]">
      {languages.map(
        (
          {
            language,
            level,
          }: { language: string; level: string },
          index
        ) => (
          <div key={index} className="flex grow gap-[24px]">
            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label>
                Іноземна Мова{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue={language}
                value={language}
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLSelectElement>) =>
                  choseLanguage(index, value)
                }
              >
                <option value="">Please Select</option>
                <option
                  disabled={
                    languages.find(
                      (el) => el.language === 'English'
                    )
                      ? true
                      : false
                  }
                  value="English"
                >
                  English
                </option>
                <option
                  disabled={
                    languages.find(
                      (el) => el.language === 'Polish'
                    )
                      ? true
                      : false
                  }
                  value="Polish"
                >
                  Polish
                </option>
                <option
                  disabled={
                    languages.find(
                      (el) => el.language === 'Duchland'
                    )
                      ? true
                      : false
                  }
                  value="Duchland"
                >
                  Duchland
                </option>
                <option
                  disabled={
                    languages.find(
                      (el) => el.language === 'Spanish'
                    )
                      ? true
                      : false
                  }
                  value="Spanish"
                >
                  Spanish
                </option>
                <option
                  disabled={
                    languages.find(
                      (el) => el.language === 'French'
                    )
                      ? true
                      : false
                  }
                  value="French"
                >
                  French
                </option>
              </select>
            </div>

            <div className="flex w-full max-w-[442px] grow flex-col gap-[5px]">
              <label htmlFor="phone">
                Рівень володіння мовою{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                defaultValue={level}
                value={level}
                className="box-border h-[44px] rounded-[4px] px-[16px] py-[6px] text-black outline-none"
                onChange={({
                  target: { value },
                }: ChangeEvent<HTMLSelectElement>) =>
                  choseLevel(index, value)
                }
              >
                <option value="">Please Select</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
            </div>

            <LanguageControls
              index={index}
              languages={languages}
              addLanguage={addLanguage}
              deleteLanguage={deleteLanguage}
            />
          </div>
        )
      )}
    </div>
  );
};

interface ILanguageControlsProps
  extends Omit<
    ILanguagesProps,
    'choseLanguage' | 'choseLevel'
  > {
  index: number;
}
const LanguageControls: React.FC<
  ILanguageControlsProps
> = ({ index, languages, addLanguage, deleteLanguage }) => {
  return (
    <div className="flex w-full max-w-[442px] grow flex-col justify-end gap-[5px]">
      {index === 0 && languages.length <= 1 ? (
        <div className="flex w-full justify-end">
          <div className="flex h-[44px] max-w-[442px] grow items-center justify-end self-end text-end">
            <span
              onClick={addLanguage}
              className="flex cursor-pointer justify-end underline"
            >
              + Додати ще мову
            </span>
          </div>
        </div>
      ) : languages.length > 1 &&
        languages.length - 1 === index ? (
        <div className="flex w-full justify-end">
          <div
            onClick={() => deleteLanguage(index)}
            className="flex h-[44px] cursor-pointer items-center self-end"
          >
            X
          </div>
          <div className="flex h-[44px] max-w-[442px] grow items-center justify-end self-end text-end">
            <span
              onClick={addLanguage}
              className="flex cursor-pointer justify-end underline"
            >
              + Додати ще мову
            </span>
          </div>
        </div>
      ) : (
        index !== 0 && (
          <div className="flex w-full justify-start">
            <div
              onClick={() => deleteLanguage(index)}
              className="flex h-[44px] cursor-pointer items-center self-end"
            >
              X
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Languages;
