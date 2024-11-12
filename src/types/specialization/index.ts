export interface ISpecialization {
  id: number;
  title: string;
}

export interface SpecializationStack {
  id: number;
  title: string;
  specialization_stack_id: number;
}

export interface ISpecializationWithStack extends ISpecialization {
  stack: SpecializationStack[];
}

export interface Specialization {
  id: number;
  title: string;
}
