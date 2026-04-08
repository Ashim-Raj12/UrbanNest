# UrbanNest Realty Website Implementation Plan

The objective is to implement the "UrbanNest Realty Website" defined in your Stitch project (`5456414536194438381`) into the existing Next.js App Router project. We will strictly adhere to the "High-End Architectural Editorial" design system provided in the Stitch project's design document, using Indian names, locations, and contacts as requested, and implementing pixel-perfect UI with Framer Motion animations.

## User Review Required

> [!WARNING]
> Please review the chosen dependencies and the page structure before I proceed. This will involve overwriting your current Tailwind configuration and installing multiple new npm packages.

## Proposed Changes

### 1. Dependencies and Configuration

We need to install essential libraries for animations, icons, and conditional class merging.

*   `framer-motion`: For smooth, high-end micro-animations.
*   `lucide-react`: For clean, modern SVG icons.
*   `clsx` & `tailwind-merge`: For a robust custom `cn()` utility to compose Tailwind classes.

We will also update `tailwind.config.ts` (or `globals.css` using Tailwind v4 syntax if applicable) to map the Stitch design tokens (e.g., `surface-container-low`, `primary`, etc.) directly to Tailwind classes.

#### [MODIFY] tailwind configuration (via tailwind config or globals.css based on next version)
#### [MODIFY] app/globals.css
*   Set up base background colors, "No-Line" rule styles, and global reset elements to match the dark `#131313` theme.
#### [MODIFY] app/layout.tsx
*   Integrate `Noto Serif` and `Manrope` fonts using `next/font/google`.
*   Wrap the application with the Main Navbar and Footer.

### 2. Design System Components (`components/ui` & `components/shared`)

*   **`Button`**: Implement Primary (gold gradient to `#d4af37`), Secondary (ghost border `outline-variant` @ 15%), and Tertiary (text only).
*   **`PropertyCard`**: Image with `xl` radius, soft hover glow effect via `surface-bright`.
*   **`BentoGallery`**: Implement the asymmetrical grid for property showcases as outlined in the design doc.
*   **`Navbar`**: Glassmorphic top navigation with a `backdrop-blur`.
*   **`Footer`**: Simple, dark-themed footer.

### 3. Pages & Routes

We will build out the following pages with hardcoded, premium localized Indian content (e.g., "The Oberoi Signature", locations in South Mumbai, Gurgaon, Bangalore).

#### [NEW] app/page.tsx (Home Page)
*   **Hero Section**: Generous letter spacing with `Noto Serif`, large display text, subtle background gradient, and Framer Motion reveal.
*   **Featured Properties**: Horizontal scroll or asymmetric grid showcasing 2-3 premium properties.
*   **About Snippet**: Brief introduction driving to the About page.

#### [NEW] app/properties/page.tsx (Properties Grid)
*   A listing page displaying multiple properties. Separated by `spacing-xl` (generous white space) instead of standard horizontal lines to maintain the "No-Line" rule.

#### [NEW] app/properties/[id]/page.tsx (Property Detail)
*   Dynamic route for a specific property.
*   Features the **Bento Gallery** at the top.
*   Uses `surface-container-low` and `surface-container-high` to create atmospheric depth (no harsh shadows).

#### [NEW] app/about/page.tsx (About Us)
*   High-end editorial layout focusing on typography and brand story.

#### [NEW] app/contact/page.tsx (Contact Us)
*   Minimalist contact forms using `surface-container-high` backgrounds with a soft `sm` corner radius. Focused state triggering a 50% opacity gold border.

## Open Questions

> [!IMPORTANT]
> 1. Do you have any specific Indian placeholder properties or names you want me to use (e.g., properties in specific cities, pricing in INR Crores)? If not, I will generate premium-sounding examples (e.g., "Aura Horizon, Worli", "₹25.5 Cr").
> 2. Would you like me to install Framer Motion and Lucide-React directly or do you prefer using another animation/icon ecosystem?
> 3. Does your project use Tailwind v3 (`tailwind.config.ts`) or the new Tailwind v4 (configuration via CSS)? Currently it looks like Tailwind v3/v4 depending on Next 15's default... Can I configure tokens through `tailwind.config.ts` if it exists, or via `globals.css` variables?

## Verification Plan

### Automated Tests
*   Run `npm run build` to ensure there are no Next.js build errors or hydration mismatches.

### Manual Verification
*   We will run `npm run dev` and I will direct you to review the animated components, ensuring colors, typography, and hover effects precisely match the Stitch "Architectural Curator" design spec.
