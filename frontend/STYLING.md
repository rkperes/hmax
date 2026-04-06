# Hydromax Styling Guide

This global stylesheet implements the Hydromax brand guidelines for a landing page and institutional website for a truck crane company. The design philosophy is **authoritative and technical, but modern**.

## Color Palette

All colors are tied directly to the brand name and values:

| Role      | Name      | Hex       | Usage                                                 |
|-----------|-----------|-----------|-------------------------------------------------------|
| Base      | Base      | `#000000` | Dominant background, sets premium/technical tone      |
| Primary   | Hydro     | `#3AA8C1` | Logo symbol, icons, highlights, interactive elements |
| Secondary | Max       | `#C4CBCF` | Text on dark backgrounds, supporting UI elements      |

### CSS Variables
```css
--color-base: #000000;
--color-hydro: #3AA8C1;
--color-max: #C4CBCF;
--color-light: #F9FAFB;
```

### Tailwind Classes
Use these to reference brand colors:
- `text-hydromax-base`, `bg-hydromax-base`
- `text-hydromax-hydro`, `bg-hydromax-hydro`
- `text-hydromax-max`, `bg-hydromax-max`
- `text-hydromax-light`, `bg-hydromax-light`
- Dark gray scale: `text-hydromax-dark-50` through `text-hydromax-dark-900`

## Typography

**Font Family**: Space Grotesk (Google Fonts)

The font is a geometric, industrial typeface with sharp angular cuts, reinforcing the technical and bold character of heavy equipment machinery.

### Heading Hierarchy
```tsx
<h1>Largest, main titles (48px) – used once per page</h1>
<h2>Section titles (36px)</h2>
<h3>Subsection titles (30px)</h3>
<h4>Card/block titles (24px)</h4>
<h5>Small titles (20px)</h5>
<h6>Labels/captions (18px)</h6>
```

### Text Sizes
- **Body text**: 16px / 24px line-height (default)
- **Small text**: 14px / 20px line-height (`text-sm`)
- **Captions**: 12px / 16px line-height (`text-xs`)

## Brand Geometric Shapes

The brand defines three core values, each expressed as a geometric form. Use these as visual anchors for sections:

### 1. Robustness — `.shape-robustness`
Solid, perspective-skewed rectangular block. Use for sections about product quality, durability, materials.
```tsx
<div className="shape-robustness py-24 px-12">
  {/* Content about robust features */}
</div>
```

### 2. Versatility — `.shape-versatility`
Diagonal slash/parallelogram. Use for sections about product range, adaptability, applications.
```tsx
<div className="shape-versatility py-24 px-12">
  {/* Content about versatility */}
</div>
```

### 3. Amplitude — `.shape-amplitude`
Logo symbol (interlocking angular brackets). Use for company scope, global reach, breadth of solutions.
```tsx
<div className="shape-amplitude" />
```

All shapes use teal (#3AA8C1) on light/neutral grey backgrounds.

## Components

### Buttons

**Primary Button** (call-to-action, main interactions)
```tsx
<button className="btn-primary">Learn More</button>
```

**Secondary Button** (alternative actions)
```tsx
<button className="btn-secondary">View Details</button>
```

**Ghost Button** (low-emphasis actions)
```tsx
<button className="btn-ghost">Skip</button>
```

### Form Elements

Auto-styled with dark backgrounds and teal focus states:
```tsx
<input type="text" placeholder="Enter your email" />
<textarea placeholder="Your message" />
<select>
  <option>Choose an option</option>
</select>
```

### Utility Classes

- `.text-hydro` – Apply primary teal color to text
- `.text-max` – Apply secondary grey color to text
- `.bg-hydro` – Apply primary teal to background
- `.border-hydro` – Apply teal border color
- `.accent-underline` – Add a 40px teal underline beneath text

## Layout & Spacing

Consistent spacing system for institutional layouts:

- **Gutter**: 24px (sides, columns)
- **Section spacing**: 64px (vertical section gaps)
- **Container padding**: 24px (mobile) → 48px (desktop)

### Utility Classes

- `.container-gutter` – Apply responsive horizontal padding (24px → 48px)
- `.section-spacing` – Apply responsive vertical padding (64px → 128px)
- `.grid-cols-auto-fit` – Responsive auto-fit grid (280px minimum per column)

## Section Backgrounds

Predefined section style combinations:

```tsx
{/* Dark background (brand primary) with grey text */}
<section className="section-dark">
  <h2>Dark Section</h2>
  <p>Text in teal/light grey on black</p>
</section>

{/* Light background with dark text */}
<section className="section-light">
  <h2>Light Section</h2>
  <p>Text in dark on light</p>
</section>

{/* Teal accent background with dark text */}
<section className="section-accent">
  <h2>Accent Section</h2>
  <p>Highlighted content on teal</p>
</section>
```

## Hero Section

Pre-styled with a subtle gradient background:
```tsx
<section className="hero">
  <div className="container-gutter">
    <h1>Welcome to Hydromax</h1>
    <p>Amplifying possibilities, increasing productivity.</p>
  </div>
</section>
```

## Responsive Design

All components are mobile-first and scale appropriately across devices:
- **Mobile**: Smaller spacing, larger touch targets
- **Tablet**: Increased horizontal padding
- **Desktop**: Full spacing and multi-column layouts

## Accessibility

✓ **Focus indicators**: All interactive elements have teal outline focus states
✓ **Motion**: Respects `prefers-reduced-motion` – animations disabled if user prefers
✓ **Contrast**: 4.5:1+ WCAG AA contrast on all text combinations
✓ **Keyboard navigation**: All buttons and links are keyboard accessible

## Dark Mode (Default)

The brand is dark-first with a black background as the dominant tone. Light mode is automatically applied if the user's system preference is set to light, but the design emphasizes dark mode.

## Animations

Smooth transitions for interactive elements:
- `.animate-fadeIn` – Fade in animation (0.4s)
- `.animate-slideUp` – Slide up with fade (0.5s)

Transition durations:
- `--transition-fast`: 150ms
- `--transition-base`: 200ms
- `--transition-slow`: 300ms

## Print Styles

All content is printable with sensible defaults:
- Dark text on white background
- Teal accents maintained for links
- Proper spacing and readability

---

**For more on the Hydromax brand**: See `/design/context.md` for the complete branding guidelines.
