/**
 * Analytics hook placeholder.
 * Replace with your preferred provider (e.g. Plausible, Fathom, Vercel Analytics).
 * No vendor lock-in: use a simple event interface.
 */

export type AnalyticsEvent = {
  name: string;
  props?: Record<string, string | number | boolean>;
};

export function track(event: AnalyticsEvent): void {
  if (typeof window === "undefined") return;
  // Example: window.plausible?.(event.name, { props: event.props });
  // Example: window.gtag?.("event", event.name, event.props);
  console.debug("[analytics]", event.name, event.props);
}

export function trackPageView(path: string): void {
  track({ name: "page_view", props: { path } });
}
