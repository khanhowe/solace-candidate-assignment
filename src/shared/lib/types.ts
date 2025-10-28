import { SPECIALTIES } from "./constants";

export type Order = "asc" | "desc";

export type SearchParameters = {
  query: string;
  sortKey: SortKey;
  dir: Order;
  page: number;
  pageSize: number;
};

export type SortKey = keyof Pick<
  Advocate,
  | "firstName"
  | "lastName"
  | "city"
  | "degree"
  | "yearsOfExperience"
  | "phoneNumber"
  | "specialties"
>;

export type Degree = "MD" | "PhD" | "MSW";

export type Specialty = (typeof SPECIALTIES)[number];

/** Represents an advocate in the system. */
export type Advocate = {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  degree: Degree;
  specialties: Specialty[];
  yearsOfExperience: number;
  phoneNumber: number;
};
