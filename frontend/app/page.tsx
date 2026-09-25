import { BalanceSummary } from "@/components/balance-summary";
import type { Account } from "@/types";

// Placeholder até a integração com a API do backend.
const demoAccount: Account = {
  id: "demo",
  ownerName: "Conta corrente",
  balance: 123456, // centavos → R$ 1.234,56
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-medium text-muted-foreground">
          RKF Bank
        </span>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Banco digital RKF
        </h1>

        <p className="mt-3 max-w-md text-muted-foreground">
          Uma experiência financeira simples, segura e inteligente.
        </p>

        <div className="mt-10">
          <BalanceSummary account={demoAccount} />
        </div>
      </div>
    </main>
  );
}
