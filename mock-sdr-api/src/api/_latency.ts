// Simulates real API latency: 50–200ms random delay.
export function randomLatencyMs(): number {
  return 50 + Math.floor(Math.random() * 151); // 50..200 inclusive
}

export function delay(ms: number = randomLatencyMs()): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
