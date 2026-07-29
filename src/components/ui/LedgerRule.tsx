export default function LedgerRule({ ticks = false }: { ticks?: boolean }) {
  return (
    <div
      className={`ledger-rule ${ticks ? "ledger-rule--ticks" : ""}`}
      aria-hidden="true"
    />
  );
}
