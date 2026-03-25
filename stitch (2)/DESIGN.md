# Design System Strategy: The Luminous Horizon

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Luminous Horizon."** 

Unlike traditional financial interfaces that rely on rigid grids and clinical borders to convey "security," this system communicates trust through clarity, depth, and a sense of infinite space. We are moving away from the "template" look. Instead, we embrace an **Editorial Aspirational** aesthetic—one that uses intentional asymmetry, overlapping elements, and high-contrast typography scales to mimic the expansive feeling of a sunrise. 

This design system treats the screen not as a flat canvas, but as an atmospheric environment where light and layering guide the user’s eye toward their financial future.

---

## 2. Colors & Surface Philosophy
The palette transitions from the deep, reliable depths of the ocean to the optimistic warmth of a new day.

### The "No-Line" Rule
To achieve a premium, custom feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, sophisticated edge without the visual noise of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper or frosted glass.
*   **Base:** `surface` (#f4faff)
*   **Depth:** Use `surface-container-low` (#ecf5fb) for large background sections.
*   **Emphasis:** Place `surface-container-lowest` (#ffffff) cards onto those sections to create a natural "lift."
*   **Interaction:** Use `surface-container-high` (#e0e9ef) or `highest` (#dbe4ea) for elements that need to feel "closer" to the user, such as active states or navigation drawers.

### The Glass & Gradient Rule
To move beyond a standard UI, utilize **Glassmorphism** for floating elements (e.g., navigation bars or modal overlays). Use semi-transparent `surface` colors with a `backdrop-blur` of 12px–20px. 

### Signature Textures
Main CTAs and Hero backgrounds should utilize a **Signature Gradient**: a soft transition from `primary` (#004ac6) to `primary_container` (#2563eb). This provides a visual "soul" and a sense of movement that flat colors cannot replicate.

---

## 3. Typography
Our typography is a dialogue between **Manrope** (The Authority) and **Plus Jakarta Sans** (The Guide).

*   **Display & Headlines (Manrope):** These are our "Horizon" elements. They should be bold, confident, and given massive breathing room. Use `display-lg` (3.5rem) for hero statements to create an editorial impact.
*   **Body & Labels (Plus Jakarta Sans):** Chosen for its modern, approachable warmth. 
*   **Editorial Contrast:** Create high-contrast layouts. For example, pair a `display-md` headline with a `label-md` that has increased letter-spacing (0.05rem) to evoke a high-end magazine feel.

---

## 4. Elevation & Depth
Hierarchy is achieved through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Stack `surface-container` tiers to create depth. A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft, natural lift.
*   **Ambient Shadows:** When a "floating" effect is required, shadows must be extra-diffused. 
    *   *Blur:* 40px–60px.
    *   *Opacity:* 4%–8%.
    *   *Color:* Use a tinted version of `on-surface` (#141d21) rather than pure black to mimic natural atmospheric light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** Roundedness `full`. Use the Signature Gradient (Primary to Primary-Container) with `on-primary` text.
*   **Secondary:** Roundedness `full`. `surface-container-highest` background with `primary` text. No border.
*   **Tertiary:** Roundedness `full`. No background. `primary` text. Use a soft `surface-variant` hover state.

### Cards
*   **Style:** No borders. Use `surface-container-lowest` for the card body. 
*   **Spacing:** Use `6` (2rem) padding for internal content to maintain an "expensive" feel.
*   **Separation:** Forbid the use of divider lines. Use vertical white space (`8` or `10` from the spacing scale) to separate content blocks.

### Input Fields
*   **Style:** Soft-filled containers using `surface-container-highest`.
*   **Active State:** A 2px "Ghost Border" using `primary` at 40% opacity.
*   **Roundedness:** Use `sm` (0.5rem) for a modern, architectural feel.

### Additional Signature Component: The Horizon Progress Bar
A custom linear progress indicator that uses a gradient from `tertiary_fixed` (#ffddb8) to `tertiary` (#784b00), mimicking a sun rising across the bar. Use `full` roundedness and a `surface-container-high` track.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts where imagery overlaps background containers.
*   **Do** utilize the `tertiary` (Golden Amber) tokens sparingly as "sparks" of optimism—CTAs, notifications, or success states.
*   **Do** embrace white space. If a layout feels "full," increase the spacing by two increments on the scale.

### Don’t
*   **Don’t** use 1px solid dividers to separate list items. Use background alternating tints or `3` (1rem) of white space.
*   **Don’t** use harsh drop shadows. If it looks like it's "popping" off the screen, the shadow is too dark. It should "glow," not "drop."
*   **Don’t** use pure black (#000000) for text. Always use `on-surface` (#141d21) to maintain the tonal softness of the sunrise theme.