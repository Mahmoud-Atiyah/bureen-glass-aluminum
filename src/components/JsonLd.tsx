/**
 * Renders a JSON-LD <script> tag. Pass a schema object built in src/lib/schema.ts.
 * Server component — the JSON is serialized at build/render time, never from user input.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema is fully app-controlled (sourced from site content), so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
