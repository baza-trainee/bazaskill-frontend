import UserIcon from "../icons/UserIcon";
import SkillIcon from "../icons/SkillIcon";
import SalaryIcon from "../icons/SalaryIcon";
import EducationIcon from "../icons/EducationIcon";
import MenthorIcon from "../icons/MenthorIcon";
import ProductivityIcon from "../icons/ProductivityIcon";
import ClockIcon from "../icons/ClockIcon";

export const specialities = [
  "UA/UX Designer",
  "Frontend",
  "QA Manual",
  "Backend",
  "Fullstack",
  "Project Manager",
];
export const skills = ["Junior", "Middle"];
export const times = ["1 рік", "2 роки", "3 роки"];

export interface Item {
  name: string;
  title: string;
  icon: React.ComponentType;
  text: string;
}

export const itemSpecialization: Item = {
  name: "specialization",
  title: "спеціалізація",
  icon: UserIcon,
  text: "Обрати спеціалізацію для розрахунку",
};
export const itemLevel: Item = {
  name: "level",
  title: "pівень кваліфікації",
  icon: SkillIcon,
  text: "Обрати рівень кваліфікації для розрахунку",
};
export const itemSalary: Item = {
  name: "salary",
  title: "місячна зарплата ($)",
  icon: SalaryIcon,
  text: "Вказати заробітну плату за місяць (у доларах) для відповідного кандидата",
};
export const itemEducation: Item = {
  name: "educationCost",
  title: "вартість навчання ($)",
  icon: EducationIcon,
  text: "Вказати загальну суму витрат на підготовку та адаптацію відповідного кандидата",
};
export const itemMentoring: Item = {
  name: "projectValue",
  title: "вартість проекта ($)",
  icon: MenthorIcon,
  text: "Параметр “Вартість проекта” включає загальну вартість проекту, яка необхідна для розрахунку прибутку компанії від кандидата",
};
export const itemProductivity: Item = {
  name: "productivity",
  title: "початкова продуктивність (%)",
  icon: ProductivityIcon,
  text: "Вказати початкову продуктивність кандидата (оцінка за показниками компанії). Довідково: визначають для Junior - 50%, для Middle - 80%",
};
export const itemFullProductivityYears: Item = {
  name: "fullProductivityYears",
  title: "досягнення повної продуктивності",
  icon: ClockIcon,
  text: "Обрати відповідний період для досягнення повної продуктивності відповідного кандидата",
};
