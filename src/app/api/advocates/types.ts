export type Degree = "MD" | "PhD" | "MSW";

export const SPECIALTIES = [
  "Bipolar",
  "LGBTQ",
  "Medication/Prescribing",
  "Suicide History/Attempts",
  "General Mental Health (anxiety, depression, stress, grief, life transitions)",
  "Men's issues",
  "Relationship Issues (family, friends, couple, etc)",
  "Trauma & PTSD",
  "Personality disorders",
  "Personal growth",
  "Substance use/abuse",
  "Pediatrics",
  "Women's issues (post-partum, infertility, family planning)",
  "Chronic pain",
  "Weight loss & nutrition",
  "Eating disorders",
  "Diabetic Diet and nutrition",
  "Coaching (leadership, career, academic and wellness)",
  "Life coaching",
  "Obsessive-compulsive disorders",
  "Neuropsychological evaluations & testing (ADHD testing)",
  "Attention and Hyperactivity (ADHD)",
  "Sleep issues",
  "Schizophrenia and psychotic disorders",
  "Learning disorders",
  "Domestic abuse",
];

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
