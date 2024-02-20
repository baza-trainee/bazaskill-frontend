export interface ISpecialization {
  id: number;
  title: string;
}

export type SpecializationStack = {
  id: number;
  title: string;
  specialization_stack_id: number;
};

export interface ISpecializationWithStack
  extends ISpecialization {
  stack: SpecializationStack[];
}

export type Specialization = {
  id: number;
  title: string;
};
