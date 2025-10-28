/** Formats a phone number as (XXX) XXX-XXXX */
export const formatPhoneNumber = (phoneNumber: number) => {
  const phoneString = phoneNumber.toString().padStart(10, "0");
  return `(${phoneString.slice(0, 3)}) ${phoneString.slice(
    3,
    6
  )}-${phoneString.slice(6)}`;
};
