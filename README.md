# PLG Commercial Leasing

Premium marketing site for PLG’s commercial real estate leasing — the destination for advertising, social, and broker traffic around **The Meridian**.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide Icons

## Structure

```
src/
  app/                 # Root layout, homepage, global styles
  components/
    layout/            # Sticky glass header, footer
    sections/          # Homepage modules
    ui/                # Shared controls and visuals
  data/leasingData.ts  # FAQs, units, timeline, amenities, media
  lib/                 # Class helper and form validation
```

Homepage sections: Hero, About & existing property, New development timeline, Unit specifications, Media showcase, Location & amenities, FAQ accordion, and the three-part inquiry funnel (detailed contact form, priority list, reservation portal placeholder).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

Form submissions are client-side only in this draft: they validate locally and show success or error overlays. The “Pay deposit securely” control is a mock payment button.
