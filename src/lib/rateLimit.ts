type Entry = { count: number; resetAt: number };

const store: Map<string, Entry> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).__bureen_rate_limit_store__ ?? new Map<string, Entry>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).__bureen_rate_limit_store__ = store;

export function checkRateLimit(key: string, opts?: { windowMs?: number; max?: number }) {
  const windowMs = opts?.windowMs ?? 10 * 60 * 1000;
  const max = opts?.max ?? 6;

  const now = Date.now();
  const existing = store.get(key);
  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1, resetAt: now + windowMs };
  }

  if (existing.count >= max) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  store.set(key, existing);
  return { allowed: true, remaining: max - existing.count, resetAt: existing.resetAt };
}

