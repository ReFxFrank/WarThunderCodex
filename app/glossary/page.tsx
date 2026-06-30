import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = { title: "Glossary" };

export default function Page() {
  return (
    <ComingSoon
      eyebrow="Acronyms & terms"
      title="Glossary"
      intro="The shared dictionary the rest of the site links into. Every acronym that shows up in prose — BR, RP, SL, GE, BnZ, TnB, CAS, SPAA, ATGM, APHE, APFSDS, uptier, spaded — gets a concise, original definition here."
      phase="Lands in Phase 2"
      planned={[
        "Searchable list of acronyms and terms",
        "Concise, original definitions with see-also links",
        "Deep links so any term in an article jumps straight here",
      ]}
    />
  );
}
