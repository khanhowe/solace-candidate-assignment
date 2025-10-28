import { SPECIALTIES } from "../constants";
import { Specialty } from "../types";

/**
 * Generates two random specialties from the SPECIALTIES array.
 * @returns A tuple containing two random specialties.
 */
export const randomSpecialties = (): [Specialty, Specialty] => {
  const random1 = Math.floor(Math.random() * SPECIALTIES.length);

  let random2 = Math.floor(Math.random() * SPECIALTIES.length);

  if (random1 === random2) {
    random2 = (random2 + 1) % SPECIALTIES.length;
  }

  return [SPECIALTIES[random1], SPECIALTIES[random2]];
};
