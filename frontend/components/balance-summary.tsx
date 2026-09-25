import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import type { Account } from "@/types";

interface BalanceSummaryProps {
  account: Account;
}

export function BalanceSummary({ account }: BalanceSummaryProps) {
  return (
    <section className="w-full max-w-sm rounded-xl border border-border bg-card p-6 text-left">
      <p className="text-sm text-muted-foreground">{account.ownerName}</p>

      <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">
        {formatCurrency(account.balance)}
      </p>

      <Button className="mt-6 w-full" disabled>
        Transferir
      </Button>
    </section>
  );
}
