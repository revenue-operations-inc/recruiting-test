import { Body, Heading2, Heading3, typo } from "@/components/typography";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f5f4]">
      <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-4 border-b border-gray-200/70 bg-[#f6f5f4] py-4 pl-4 pr-6 sm:pl-6 sm:pr-8 md:pl-8 md:pr-12 lg:pl-10 lg:pr-16">
        <span className="inline-flex h-10 items-center font-signifier text-[21px] leading-none tracking-[-0.015em] text-gray-900">
          Revenue Operations Inc — Recruiting Exercise
        </span>
      </header>

      <main className="mx-auto max-w-[64ch] px-6 pb-24 pt-12">
        <article
          className={cn(
            "text-gray-700",
            "[&>h2]:[text-wrap:balance] [&>h3]:[text-wrap:balance]",
            "[&>p]:[text-wrap:pretty] [&>p]:hyphens-auto",
            "[&_li]:[text-wrap:pretty] [&_li]:hyphens-auto",
            "[&>h2+p]:mt-6 [&>h3+p]:mt-5 [&>h3+ul]:mt-5",
            "[&>p+p]:mt-7",
            "[&>p+h3]:mt-16 [&>ul+h3]:mt-16",
          )}
        >
          <Heading2 className="font-medium text-gray-900 [text-wrap:initial]">
            Design a sub-agent system for outbound.
          </Heading2>

          <Body>
            Given an enriched contact, design a sub-agent system that decides{" "}
            <strong className="font-semibold text-gray-900">(a) who on our side should reach out</strong> and{" "}
            <strong className="font-semibold text-gray-900">(b) what the message should say</strong>.
          </Body>

          <Body>
            <strong className="font-semibold text-gray-900">Both email and LinkedIn are fixed.</strong> The system
            must be designed for both channels — channel is not a variable to pick from or an input to your agents.
            Every run produces outputs for email and LinkedIn.
          </Body>

          <Heading3 className="text-gray-900">What&apos;s in this repo</Heading3>

          <ul className="list-disc space-y-4 pl-6 marker:text-gray-900">
            <li className={cn(typo.body, "pl-1")}>
              <code className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em]">mock-sdr-api/</code> — a mock data
              layer for an AI SDR targeting mortgage lenders. Enriched orgs and contacts, buying signals,
              prior outreach, the outbound team, closed-won deals, full lifecycle messaging, meeting transcripts,
              and a mock send endpoint. Everything is in-memory TypeScript with simulated latency.
            </li>
            <li className={cn(typo.body, "pl-1")}>
              A minimal Next.js scaffold (this page) so you can optionally build a UI. You don&apos;t have to.
            </li>
          </ul>

          <Heading3 className="text-gray-900">What you build</Heading3>

          <Body>
            No similarity matching, scoring, sender selection, or message generation is provided. That is the
            exercise. See <code className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em]">mock-sdr-api/src/index.ts</code>{" "}
            for exported endpoints and <code className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em]">mock-sdr-api/examples/walkthrough.ts</code>{" "}
            for a worked example calling each one.
          </Body>

          <Body>
            We care more about how you <em>string agents together</em> than about polished output — the architecture,
            where you split responsibility, what each sub-agent gets as context, and how the pieces compose across
            email and LinkedIn.
          </Body>

          <Heading3 className="text-gray-900">Running it</Heading3>

          <Body>
            <code className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em]">make dev</code> starts the Next app. The
            mock API is a workspace package — import it directly:
          </Body>

          <pre className="mt-5 overflow-x-auto rounded bg-gray-900 p-4 text-sm text-gray-100">
{`import { getTargetContact, getSenders } from "mock-sdr-api";`}
          </pre>
        </article>
      </main>
    </div>
  );
}
