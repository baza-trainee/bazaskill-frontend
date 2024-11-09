import { create } from "zustand";

interface ValuesState {
  values: {
    specialization: string;
    level: string;
    salary: number;
    educationCost: number;
    projectValue: number;
    productivity: number;
    fullProductivityYears: string;
  };
  ROI: string;
  setValues: (newValues: ValuesState["values"]) => void;
  resetValues: () => void
}

const calculateRoi = (values: ValuesState["values"]) => {
  const totalCost = Number(values.salary) + Number(values.educationCost);
  const totalProductivity = Number(values.productivity) * parseInt(values.fullProductivityYears);
  const roi = Math.round((totalProductivity / totalCost) * 100);
  return roi;
}


const calculateROI = (values: ValuesState["values"]) => {
  const salary = typeof values.salary === 'string' ? parseInt(values.salary) : values.salary;
  const educationCost = typeof values.educationCost === 'string' ? parseInt(values.educationCost) : values.educationCost;
  const productivity = typeof values.productivity === 'string' ? parseInt(values.productivity) : values.productivity;
  const projectValue = typeof values.projectValue === 'string' ? parseInt(values.projectValue) : values.projectValue;

  if (isNaN(salary) || isNaN(educationCost) || isNaN(productivity) || isNaN(projectValue)) {
    throw new Error("Invalid numeric values provided");
  }

  const investment = salary * 12 + educationCost + (values.level.toLowerCase() === "junior" ? educationCost : 0);

  const revenue = (projectValue * productivity) / 100;

  return (((revenue - investment) / investment) * 100).toFixed(0);
};


export const useValues = create<ValuesState>((set) => ({
  values: {
    specialization: "UI/UX Designer",
    level: "Junior",
    salary: 0,
    educationCost: 0,
    projectValue: 0,
    productivity: 0,
    fullProductivityYears: "0",
  },
  ROI:'',
  setValues: (newValues) => set({ values: newValues, ROI: calculateROI(newValues) }),
  resetValues:()=>set({values:{ specialization: "UI/UX Designer", level: "", salary: 0, educationCost: 0, projectValue: 0, productivity: 0, fullProductivityYears: "0" }, ROI: ''}),
}));