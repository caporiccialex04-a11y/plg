export type FieldErrors = Record<string, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s().-]{7,20}$/;

export function required(value: string, label: string) {
  if (!value.trim()) return `${label} is required.`;
  return "";
}

export function email(value: string, label = "Email") {
  const missing = required(value, label);
  if (missing) return missing;
  if (!EMAIL_PATTERN.test(value.trim())) return "Enter a valid email address.";
  return "";
}

export function phone(value: string, label = "Phone", optional = false) {
  if (!value.trim()) return optional ? "" : `${label} is required.`;
  if (!PHONE_PATTERN.test(value.trim())) return "Enter a valid phone number.";
  return "";
}

export function compactErrors(errors: FieldErrors) {
  return Object.fromEntries(
    Object.entries(errors).filter(([, message]) => Boolean(message)),
  );
}

export function hasErrors(errors: FieldErrors) {
  return Object.keys(compactErrors(errors)).length > 0;
}
