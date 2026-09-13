import type { Metadata } from "next";
import { Action } from "@/components/poster/Action";
import { Band } from "@/components/poster/Band";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <Band tone="blue">
        <p className="tnum text-display font-extrabold font-stretch-[112%]">
          404
        </p>
        <p className="text-lead mt-6">boh.</p>
        <p className="text-on-blue-2 mt-2">There is nothing at this address.</p>
        <div className="mt-10">
          <Action href="/" tone="blue">
            Back to the start
          </Action>
        </div>
      </Band>
    </main>
  );
}
