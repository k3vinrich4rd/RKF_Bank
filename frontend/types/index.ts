/**
 * Valor monetário em centavos (inteiro). Nunca represente dinheiro como
 * fração de reais — a conversão acontece só na formatação.
 */
export type Cents = number;

/** Conta bancária exposta pela API. */
export interface Account {
  id: string;
  ownerName: string;
  balance: Cents;
}
