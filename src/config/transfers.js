export const transferBudget = {
  remainingUSD: 140_000_000,
  usedUSD: 75_000_000
};

if (typeof window !== 'undefined') {
  window.TRANSFER_CONFIG = transferBudget;
}
