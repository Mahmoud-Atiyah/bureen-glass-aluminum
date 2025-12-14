import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">Privacy Policy</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
          <p>
            We collect the information you submit through the quote form (such as name, phone, email, and project
            details) to respond to your request. We do not sell personal information.
          </p>
          <p>If you have questions about privacy, contact us using the information on the Contact page.</p>
        </div>
      </Container>
    </div>
  );
}
