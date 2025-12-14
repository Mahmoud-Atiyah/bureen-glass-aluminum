import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Terms</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
          <p>
            This website provides general information about services. Estimates and scheduling are subject to availability
            and site conditions. For emergency service, please call.
          </p>
        </div>
      </Container>
    </div>
  );
}
