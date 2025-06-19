export const generateActivationCode = (): string => {
  return Math.floor(1_000_000_000 + Math.random() * 9_000_000_000).toString()
}
