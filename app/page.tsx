import { NameCard } from "@/components/cards/NameCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { CurrentlyCard } from "@/components/cards/CurrentlyCard";
import { BeaconCard } from "@/components/cards/BeaconCard";
import { WhatIDoCard } from "@/components/cards/WhatIDoCard";
import { GitHubCard } from "@/components/cards/GitHubCard";
import { StormbaneCard } from "@/components/cards/StormbaneCard";
import { LatestPostCard } from "@/components/cards/LatestPostCard";
import { ContactCard } from "@/components/cards/ContactCard";
import { StaggerGrid } from "@/components/effects/StaggerGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-3 py-6 sm:px-4 lg:px-6">
      <StaggerGrid>
        <div className="w-full max-w-[1320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(160px,auto)]">
          {/* Row 1 */}
          <NameCard />
          <LocationCard />
          <CurrentlyCard />

          {/* Row 2 */}
          <BeaconCard />
          <WhatIDoCard />
          <GitHubCard />

          {/* Row 3 */}
          <StormbaneCard />
          <LatestPostCard />
          <ContactCard />
        </div>
      </StaggerGrid>
    </main>
  );
}
