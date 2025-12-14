export type AnalyticsEvent =
  | "quote_submit"
  | "quote_success"
  | "quote_error"
  | "call_click"
  | "nav_click";

export function track(event: AnalyticsEvent, properties?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") return;
  if (typeof window === "undefined") return;
  void event;
  void properties;
}

