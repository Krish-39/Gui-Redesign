# Berlin.de Official Design System - Anmeldung Portal Redesign

## Official Brand Identity

This design system adheres to the **Berlin Corporate Design Manual** while implementing UX improvements to address information overload and cognitive load issues.

---

## Color System (Official Berlin.de)

### Primary Brand Colors

**Berlin Red** - `#E40422`
- **Usage**: Primary CTAs, urgent alerts, Berlin Bear logo background
- **Examples**: "Termin buchen" button, "Empfohlen" badges
- **Accessibility**: Ensure white text (contrast ratio 4.73:1)

**Berlin Blue** - `#004659`
- **Usage**: Top navigation bar, header background, links, secondary buttons
- **Examples**: Header bar, hyperlinks, secondary actions
- **Accessibility**: White text on blue (contrast ratio 10.4:1)

**Berlin Black** - `#000000`
- **Usage**: Main headlines (H1, H2)
- **Examples**: Page titles, section headers
- **Accessibility**: Maximum contrast on white backgrounds

### Functional Colors

**Success Green** - `#007256`
- **Usage**: Confirmation messages, checkmarks, success states
- **Examples**: "Termin bestätigt", completed step indicators

**Warning Orange** - `#FF6B00`
- **Usage**: Important notices, required field indicators
- **Examples**: "Pflicht" badges, missing document alerts

**Background Light Grey** - `#F2F2F2`
- **Usage**: Page background to separate white content cards
- **Layout**: Full-page background, section dividers

**Text Dark Grey** - `#333333`
- **Usage**: Body paragraph text (softer than pure black)
- **Readability**: Reduced eye strain for long-form content

**Neutral Greys**
- `#666666` - Secondary text, metadata
- `#999999` - Disabled states, placeholder text
- `#CCCCCC` - Borders, dividers
- `#FFFFFF` - Card backgrounds, content containers

---

## Typography

### Official Font Family

**Primary**: Source Sans Pro (Google Fonts - Free)
**Fallback**: Arial, Helvetica, sans-serif

```css
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
```

### Type Scale

```
H1 (Page Title)
- Font Size: 36px (2.25rem)
- Font Weight: 700 (Bold)
- Line Height: 1.2
- Color: #000000 (Berlin Black)
- Letter Spacing: -0.02em

H2 (Section Title)
- Font Size: 28px (1.75rem)
- Font Weight: 700 (Bold)
- Line Height: 1.3
- Color: #000000 (Berlin Black)

H3 (Component Title)
- Font Size: 20px (1.25rem)
- Font Weight: 600 (Semibold)
- Line Height: 1.4
- Color: #000000

Body Large
- Font Size: 18px (1.125rem)
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Color: #333333 (Text Dark Grey)

Body Regular
- Font Size: 16px (1rem)
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Color: #333333

Body Small
- Font Size: 14px (0.875rem)
- Font Weight: 400 (Regular)
- Line Height: 1.5
- Color: #666666 (Secondary Grey)

Caption
- Font Size: 12px (0.75rem)
- Font Weight: 600 (Semibold)
- Line Height: 1.4
- Color: #666666
```

---

## Component Specifications

### 1. Header Component

**Official Berlin.de Header**

**Background**: `#004659` (Berlin Blue)
**Height**: 80px (desktop), 64px (mobile)

**Elements**:
1. **Logo** (Left): "Berlin.de" wordmark + Red Square with White Bear
2. **Search Bar** (Right): White background with grey border
3. **Language Selector**: White text, subtle hover state
4. **Breadcrumb Navigation**: Below header, white background

**Logo Specifications**:
- Text "Berlin" in black: Source Sans Pro Bold, 24px
- Red Square: `#E40422`, 40x40px
- White Bear Icon: Placeholder (replace with official SVG)

---

### 2. Primary Button (CTA)

**Default State**:
```css
background: #E40422 (Berlin Red)
color: #FFFFFF
padding: 14px 32px
border-radius: 4px
font-weight: 600
font-size: 16px
box-shadow: 0 2px 4px rgba(228, 4, 34, 0.2)
```

**Hover State**:
```css
background: #CC0420 (Darker Red)
box-shadow: 0 4px 8px rgba(228, 4, 34, 0.3)
```

**Disabled State**:
```css
background: #CCCCCC
color: #999999
cursor: not-allowed
```

---

### 3. Secondary Button

**Default State**:
```css
background: #004659 (Berlin Blue)
color: #FFFFFF
padding: 14px 32px
border-radius: 4px
font-weight: 600
font-size: 16px
```

**Hover State**:
```css
background: #003545 (Darker Blue)
```

---

### 4. Card Component (Bento Box)

**Background**: `#FFFFFF` (Pure White)
**Border**: `1px solid #CCCCCC`
**Border Radius**: 8px
**Shadow**: `0 2px 8px rgba(0, 0, 0, 0.08)`
**Padding**: 24px (desktop), 16px (mobile)

**Hover State** (if interactive):
```css
border-color: #004659
box-shadow: 0 4px 12px rgba(0, 70, 89, 0.12)
```

---

### 5. Progress Stepper (Official Style)

**Incomplete Step**:
- Circle: `#CCCCCC` background, `#999999` border
- Text: `#666666`
- Connector: `#CCCCCC` dashed line

**Active Step**:
- Circle: `#E40422` (Berlin Red) background, white number
- Text: `#000000` (Bold)
- Ring: `4px solid rgba(228, 4, 34, 0.2)`

**Completed Step**:
- Circle: `#007256` (Success Green) background, white checkmark
- Text: `#007256`
- Connector: `#007256` solid line

---

### 6. Toast Notifications

**Success**:
- Background: `#007256` (Success Green)
- Icon: White checkmark
- Text: White

**Error**:
- Background: `#E40422` (Berlin Red)
- Icon: White X or alert triangle
- Text: White

**Info**:
- Background: `#004659` (Berlin Blue)
- Icon: White info circle
- Text: White

---

### 7. Badge Components

**"Empfohlen" Badge**:
```css
background: #E40422 (Berlin Red)
color: #FFFFFF
padding: 4px 12px
border-radius: 20px
font-size: 12px
font-weight: 600
```

**"Pflicht" (Required) Badge**:
```css
background: #FF6B00 (Warning Orange)
color: #FFFFFF
padding: 4px 8px
border-radius: 4px
font-size: 11px
font-weight: 600
```

**"Verfügbar" (Available) Badge**:
```css
background: #007256 (Success Green)
color: #FFFFFF
padding: 4px 12px
border-radius: 4px
font-size: 12px
font-weight: 600
```

---

## Layout Rules

### Page Background
- Background: `#F2F2F2` (Light Grey)
- Content cards on white `#FFFFFF`

### Maximum Width
- Container: 1280px (centered)
- Reading width: 800px for long-form content

### Spacing Grid (8px base)
```
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
```

### Responsive Breakpoints
```
mobile: 0-767px
tablet: 768px-1023px
desktop: 1024px-1439px
wide: 1440px+
```

---

## Accessibility Requirements

### Contrast Ratios (WCAG AA)
- Berlin Red on White: 4.73:1 ✓
- Berlin Blue on White: 10.4:1 ✓
- Text Dark Grey on White: 12.6:1 ✓
- Success Green on White: 4.89:1 ✓

### Focus States
```css
outline: 2px solid #004659 (Berlin Blue)
outline-offset: 2px
```

### Interactive Elements
- Minimum touch target: 44x44px (mobile)
- Minimum click target: 32x32px (desktop)

---

## Visual Style Guidelines

### Photography
- High contrast, natural lighting
- Authentic Berlin locations
- Diverse representation

### Icons
- Line style: 2px stroke weight
- Size: 24x24px standard, 20x20px small
- Color: Inherit from parent or `#333333`

### Shadows (Elevation)
```css
/* Low elevation (cards) */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

/* Medium elevation (modals) */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

/* High elevation (dropdowns) */
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
```

---

## Component Library Structure

```
/components
  /branding
    BerlinLogo.tsx
  /navigation
    OfficialHeader.tsx
    ProgressStepper.tsx
  /cards
    OfficialCard.tsx
    DualActionCard.tsx
  /buttons
    PrimaryButton.tsx
    SecondaryButton.tsx
  /feedback
    OfficialToast.tsx
    RecoveryModal.tsx
```

---

## Implementation Notes

### CSS Variables
Define official colors as CSS custom properties:

```css
:root {
  --berlin-red: #E40422;
  --berlin-blue: #004659;
  --berlin-black: #000000;
  --success-green: #007256;
  --warning-orange: #FF6B00;
  --bg-light-grey: #F2F2F2;
  --text-dark-grey: #333333;
  --text-medium-grey: #666666;
  --text-light-grey: #999999;
  --border-grey: #CCCCCC;
  --white: #FFFFFF;
}
```

### Font Loading
Import Source Sans Pro in the document head or main CSS file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## Logo Usage

### Official Berlin.de Logo

**Components**:
1. Wordmark "Berlin" in black (Source Sans Pro Bold)
2. Red square `#E40422` containing the white Berlin Bear
3. ".de" extension in grey `#666666`

**Spacing**:
- Minimum clear space: 16px around logo
- Logo height: 48px (desktop), 36px (mobile)

**Placeholder Implementation**:
```tsx
<div className="berlin-logo">
  <span className="wordmark">Berlin</span>
  <div className="bear-square">
    <BearIcon /> {/* Replace with official SVG */}
  </div>
  <span className="extension">.de</span>
</div>
```

**Official Asset Location**:
Download from: `https://www.berlin.de/markenhandbuch/`
Or right-click the logo on the current Berlin.de site

---

*This design system maintains the official Berlin.de visual identity while implementing UX improvements based on user research and usability testing.*
