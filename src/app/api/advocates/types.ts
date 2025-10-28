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

/**
 * Represents an advocate in the system.
 * Note: I'm using this type both in the API and the frontend for simplicity.
 * In a real-world application, I would build types separately for the API and frontend
 * to avoid tight coupling between the two layers.
 */
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
