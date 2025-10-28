/**
 * Formats a phone number as (XXX) XXX-XXXX
 * @param phoneNumber - phone number as a number
 * @returns formatted phone number as a string
 */
export const formatPhoneNumber = (phoneNumber: number) => {
  const phoneString = phoneNumber.toString().padStart(10, "0");
  return `(${phoneString.slice(0, 3)}) ${phoneString.slice(
    3,
    6
  )}-${phoneString.slice(6)}`;
};
