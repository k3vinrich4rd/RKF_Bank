/**
 * Variáveis de ambiente públicas, lidas em um único lugar.
 *
 * `process.env.NEXT_PUBLIC_*` precisa ser acessado de forma estática para o
 * Next.js conseguir inliná-lo no bundle do cliente — por isso a referência
 * literal abaixo, sem indexação dinâmica.
 */
export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
} as const;
