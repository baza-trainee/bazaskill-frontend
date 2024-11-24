import { create } from 'zustand';

interface ValuesState {
  values: {
    salary: number;
    profit: number;
    educationCost: number;
    menthorshipTime: number;
    middleSalary: number;
    profitLoss: number;
  };
  ROI: string;
  setValues: (newValues: ValuesState['values']) => void;
  resetValues: () => void;
}

const calculateROIFormula = (
  salary: number,
  profit: number,
  educationCost: number,
  menthorshipTime: number,
  middleSalary: number,
  profitLoss: number
): number => {
  // Погодинна ставка Middle (припускаємо, що 160 годин на місяць)
  const S_M = middleSalary / 160;

  // Загальні витрати
  const totalCosts = salary + educationCost + (menthorshipTime * S_M) + profitLoss;

  // Якщо витрати 0 або негативні, ROI не можна обчислити
  if (totalCosts <= 0) return 0;

  // Формула розрахунку ROI
  return profit / totalCosts * 100;
};

export const useValues = create<ValuesState>((set) => ({
  values: {
    salary: 0,
    profit: 0,
    educationCost: 0,
    menthorshipTime: 0,
    middleSalary: 0,
    profitLoss: 0
  },
  ROI: '',
  setValues: (newValues) => {
    // Оновлюємо значення
    set({ values: newValues });

    // Оновлені значення
    const { salary, profit, educationCost, menthorshipTime, middleSalary, profitLoss } = newValues;

    // Обчислюємо ROI
    const ROI = calculateROIFormula(
      salary,
      profit,
      educationCost,
      menthorshipTime,
      middleSalary,
      profitLoss
    );

    // Зберігаємо результат
    set({ ROI: ROI > 0 ? ROI.toString() : '' });
  },
  resetValues: () =>
    set({
      values: {
        salary: 0,
        profit: 0,
        educationCost: 0,
        menthorshipTime: 0,
        middleSalary: 0,
        profitLoss: 0
      },
      ROI: ''
    })
}));
