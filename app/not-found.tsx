import type { Metadata } from "next";
import Image from "next/image";
import { Action } from "@/components/poster/Action";
import { Band } from "@/components/poster/Band";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <Band>
        <Image
          src="/memoji.png"
          alt=""
          width={160}
          height={160}
          className="size-32 md:size-40"
        />
        <p className="tnum text-display mt-8 font-extrabold font-stretch-[112%]">
          404
        </p>
        <p className="text-lead mt-6">There is nothing at this address.</p>
        <div className="mt-10">
          <Action href="/">Back to the start</Action>
        </div>
      </Band>
    </main>
  );
}
