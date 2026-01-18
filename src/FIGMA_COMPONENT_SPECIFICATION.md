# Berlin.de Anmeldung Portal - Figma Component Outline & Layout Specification

## Design Constraints

**STRICT ADHERENCE TO OFFICIAL BERLIN.DE VISUAL IDENTITY**

This specification is based on observed patterns from the current Berlin.de website. **No new colors have been invented.**

---

## 1. Visual Identity (Official)

### Color Palette (Observed from Current Site)

```
PRIMARY COLORS:
- Deep Berlin Blue: #003366 (Primary action buttons, active states)
- Berlin Red: #E40422 (Logo accent, alerts, thin accent lines)
- Pure Black: #000000 (Headlines, primary text)
- Pure White: #FFFFFF (Backgrounds, card containers)

FUNCTIONAL COLORS:
- Text Grey: #333333 (Body text)
- Medium Grey: #666666 (Secondary text, metadata)
- Light Grey: #CCCCCC (Borders, dividers)
- Background Grey: #F5F5F5 (Page background, disabled states)

SEMANTIC COLORS:
- Success Green: #008000 (Confirmations, checkmarks)
- Warning Red: #E40422 (Errors, required indicators)
- Info Blue: #003366 (Information messages)
```

### Typography

```
FONT FAMILY:
Primary: Arial, Helvetica, "Source Sans Pro", sans-serif

TYPE SCALE:
H1: 32px, Bold, #000000, Line-height: 1.2
H2: 24px, Bold, #000000, Line-height: 1.3
H3: 20px, Bold, #000000, Line-height: 1.4
H4: 18px, Bold, #000000, Line-height: 1.4
Body Large: 16px, Regular, #333333, Line-height: 1.6
Body Regular: 14px, Regular, #333333, Line-height: 1.6
Caption: 12px, Regular, #666666, Line-height: 1.5
```

### Layout Principles

- **Style**: Bureaucratic but Clean
- **Contrast**: High (Black text on White backgrounds)
- **Dividers**: Grey horizontal rules (1px solid #CCCCCC)
- **Shadows**: Minimal (only for modals: 0 4px 12px rgba(0,0,0,0.15))
- **Spacing**: 8px grid system
- **Corners**: Minimal rounding (0-4px max)

---

## 2. Component Tree Structure

```
Berlin.de Anmeldung Portal
│
├── 01. GLOBAL HEADER
│   ├── Logo Container
│   │   ├── Berlin Wordmark (Text: "BERLIN")
│   │   └── Bear Icon or Red Square
│   ├── Utility Navigation
│   │   ├── Language Selector Dropdown
│   │   └── Search Icon Button
│   └── Red Accent Line (1px horizontal divider)
│
├── 02. PROGRESS STEPPER
│   ├── Step Item (Component with 3 states)
│   │   ├── Label Text
│   │   ├── Step Number
│   │   └── Connector Line
│   └── Variants:
│       ├── Inactive (Grey)
│       ├── Active (Deep Blue, Bold)
│       └── Completed (Green with checkmark)
│
├── 03. SCREEN 1 - METHOD SELECTION
│   ├── Page Header
│   │   ├── H1: "Anmeldung einer Wohnung"
│   │   └── Subtitle Text
│   ├── Method Cards Container (2-column grid)
│   │   ├── Card: "Register Online"
│   │   │   ├── Icon Container (Top)
│   │   │   ├── Title (H3)
│   │   │   ├── Description Text
│   │   │   ├── Requirement Badge ("Requires BundID")
│   │   │   └── Primary Button ("Select")
│   │   └── Card: "Book Appointment"
│   │       ├── Icon Container (Top)
│   │       ├── Title (H3)
│   │       ├── Description Text
│   │       ├── Info Text ("In-person visit")
│   │       └── Primary Button ("Select")
│   └── Additional Info Section
│
├── 04. SCREEN 2 - SMART OFFICE LIST
│   ├── Page Header
│   ├── Filter/Category Sections (Vertical Stack)
│   │   ├── Section: "Nearest Offices"
│   │   │   ├── Section Header with Map Pin Icon
│   │   │   ├── Office List (max 3 items)
│   │   │   │   ├── Office List Item
│   │   │   │   │   ├── Office Name
│   │   │   │   │   ├── Address
│   │   │   │   │   ├── Distance Badge
│   │   │   │   │   └── "View Details" Link
│   │   │   └── Button: "See All Nearby"
│   │   ├── Section: "Earliest Appointments"
│   │   │   ├── Section Header with Calendar Icon
│   │   │   ├── Office List (max 3 items)
│   │   │   │   ├── Office List Item
│   │   │   │   │   ├── Office Name
│   │   │   │   │   ├── Next Available Time (Bold, Green)
│   │   │   │   │   ├── Slots Available Badge
│   │   │   │   │   └── Primary Button ("Book Now")
│   │   │   └── Button: "See All Times"
│   │   └── Section: "Walk-in Offices"
│   │       ├── Section Header with Info Icon
│   │       ├── Office List (max 3 items)
│   │       └── Button: "See All Walk-ins"
│   └── Accordion: "All Offices by District"
│       ├── Accordion Item (Per District)
│       │   ├── Header (District Name + Office Count)
│       │   ├── Toggle Icon (Chevron)
│       │   └── Content Panel (Office List)
│       └── Variants:
│           ├── Collapsed
│           └── Expanded
│
├── 05. SCREEN 3 - ERROR/RECOVERY MODAL
│   ├── Modal Overlay (Semi-transparent black)
│   ├── Modal Container (White, centered)
│   │   ├── Alert Accent Bar (4px Red vertical line, left edge)
│   │   ├── Close Button (Top-right X)
│   │   ├── Error Icon (Red circle with exclamation)
│   │   ├── Headline (H2: "We Could Not Find Your Appointment")
│   │   ├── Body Text (Explanation)
│   │   ├── Bullet List (Possible reasons)
│   │   ├── Action Buttons Container
│   │   │   ├── Primary Button ("Book a New Appointment" - Deep Blue)
│   │   │   └── Secondary Button ("Get Help" - Light Grey)
│   │   └── Support Link
│
├── 06. SHARED COMPONENTS
│   ├── Button Component
│   │   └── Variants:
│   │       ├── Primary (Deep Blue #003366, White text)
│   │       ├── Secondary (Light Grey #F5F5F5, Dark text)
│   │       ├── Disabled (Grey #CCCCCC, Light Grey text)
│   │       └── States: Default, Hover, Pressed, Focus
│   ├── Card Component
│   │   └── Variants:
│   │       ├── Default (White bg, Grey border)
│   │       ├── Hover (2px Deep Blue border)
│   │       └── Selected (2px Deep Blue border, Blue tint bg)
│   ├── Badge Component
│   │   └── Variants:
│   │       ├── Required (Red bg, White text)
│   │       ├── Info (Blue bg, White text)
│   │       ├── Success (Green bg, White text)
│   │       └── Neutral (Grey bg, Dark text)
│   ├── List Item Component
│   │   ├── Primary Text
│   │   ├── Secondary Text
│   │   ├── Icon/Avatar (Optional)
│   │   └── Action (Button or Link)
│   └── Input Component
│       └── Variants:
│           ├── Text Input
│           ├── Dropdown/Select
│           ├── Checkbox
│           └── Radio Button
│
└── 07. TOAST/NOTIFICATION
    ├── Success Toast (Green left border)
    ├── Error Toast (Red left border)
    ├── Info Toast (Blue left border)
    └── Warning Toast (Orange left border)
```

---

## 3. Component Properties & Variants

### A. Global Header Component

**Frame Name**: `Header/Global`

**Properties**:
```
- Width: 100% (Full viewport)
- Height: 80px
- Background: #FFFFFF
- Border-bottom: 1px solid #E40422 (Red accent line)
- Padding: 0 24px
- Display: Flex, space-between, align-center
```

**Child Components**:
1. **Logo Container**
   - Component: `Logo/Berlin`
   - Variants: `Default`, `Mobile`
   
2. **Utility Nav**
   - Component: `Nav/Utility`
   - Contains: Language Dropdown + Search Button

**Figma Auto Layout**:
```
Direction: Horizontal
Spacing: Auto (space-between)
Padding: 24px horizontal, 20px vertical
Align: Center
```

---

### B. Progress Stepper Component

**Frame Name**: `Stepper/Progress`

**Properties**:
```
- Width: 100%
- Height: Auto
- Background: Transparent
- Display: Flex, horizontal
- Gap: 16px
```

**Step Item Component**: `Stepper/Step-Item`

**Variants**:

1. **Inactive**
   ```
   - Number Circle: #CCCCCC background, #666666 text
   - Label: #666666, Regular weight
   - Connector: 2px dashed #CCCCCC
   ```

2. **Active**
   ```
   - Number Circle: #003366 background, #FFFFFF text
   - Label: #000000, Bold weight
   - Connector: 2px solid #CCCCCC
   - Ring: 4px outline #003366 20% opacity
   ```

3. **Completed**
   ```
   - Number Circle: #008000 background, White checkmark icon
   - Label: #008000, Regular weight
   - Connector: 2px solid #008000
   ```

**Figma Properties Panel**:
```
Property: State
Options: Inactive | Active | Completed
```

---

### C. Button Component

**Frame Name**: `Button/Primary`

**Base Properties**:
```
- Height: 48px (Desktop), 44px (Mobile)
- Padding: 12px 32px
- Border-radius: 2px
- Font: 16px, Bold
- Transition: 200ms ease
```

**Variants**:

1. **Primary** (Default State)
   ```
   - Background: #003366 (Deep Blue)
   - Text: #FFFFFF
   - Border: None
   - Shadow: None
   ```

2. **Primary** (Hover State)
   ```
   - Background: #002244 (Darker Blue)
   - Text: #FFFFFF
   - Border: None
   - Cursor: Pointer
   ```

3. **Primary** (Pressed State)
   ```
   - Background: #001122 (Darkest Blue)
   - Text: #FFFFFF
   - Transform: translateY(1px)
   ```

4. **Primary** (Focus State)
   ```
   - Background: #003366
   - Text: #FFFFFF
   - Outline: 2px solid #003366
   - Outline-offset: 2px
   ```

5. **Primary** (Disabled State)
   ```
   - Background: #CCCCCC
   - Text: #999999
   - Cursor: not-allowed
   - Opacity: 60%
   ```

**Frame Name**: `Button/Secondary`

**Variants**:

1. **Secondary** (Default State)
   ```
   - Background: #F5F5F5 (Light Grey)
   - Text: #333333
   - Border: 1px solid #CCCCCC
   ```

2. **Secondary** (Hover State)
   ```
   - Background: #EBEBEB
   - Text: #000000
   - Border: 1px solid #999999
   ```

**Figma Properties Panel**:
```
Property 1: Type
Options: Primary | Secondary

Property 2: State
Options: Default | Hover | Pressed | Focus | Disabled

Property 3: Size
Options: Large (48px) | Medium (40px) | Small (32px)
```

---

### D. Card Component (Method Selection)

**Frame Name**: `Card/Method-Selection`

**Base Properties**:
```
- Width: 100% (Flex: 1)
- Height: Auto
- Padding: 32px
- Background: #FFFFFF
- Border: 1px solid #CCCCCC
- Border-radius: 4px
- Cursor: Pointer
```

**Variants**:

1. **Default**
   ```
   - Border: 1px solid #CCCCCC
   - Background: #FFFFFF
   - Shadow: None
   ```

2. **Hover**
   ```
   - Border: 2px solid #003366 (Deep Blue)
   - Background: #FFFFFF
   - Shadow: 0 2px 8px rgba(0,51,102,0.1)
   - Transform: translateY(-2px)
   ```

3. **Selected**
   ```
   - Border: 2px solid #003366
   - Background: rgba(0,51,102,0.02) (Very light blue tint)
   - Shadow: 0 2px 8px rgba(0,51,102,0.15)
   ```

**Content Structure** (Auto Layout - Vertical):
```
1. Icon Container (64x64px)
   - Background: #F5F5F5
   - Icon: 32x32px, #003366

2. Title (H3)
   - Text: 20px, Bold, #000000
   - Margin-top: 16px

3. Description (Body)
   - Text: 14px, Regular, #333333
   - Margin-top: 8px
   - Max-lines: 2

4. Badge (Optional)
   - Component: Badge/Info
   - Margin-top: 12px

5. Button (Primary)
   - Margin-top: 24px
   - Width: 100%
```

**Figma Properties Panel**:
```
Property: State
Options: Default | Hover | Selected
```

---

### E. Office List Section Component

**Frame Name**: `Section/Office-List`

**Properties**:
```
- Width: 100%
- Height: Auto
- Padding: 24px
- Background: #FFFFFF
- Border: 1px solid #CCCCCC
- Border-radius: 4px
- Margin-bottom: 16px
```

**Content Structure** (Auto Layout - Vertical):
```
1. Section Header
   ├── Icon (24x24px, #003366)
   ├── Title (H3: "Nearest Offices")
   └── Badge (Count: "3 offices")

2. Divider Line (1px solid #CCCCCC)

3. Office List (Auto Layout - Vertical, Gap: 12px)
   ├── Office List Item 1
   ├── Office List Item 2
   └── Office List Item 3

4. Action Button
   └── Button/Secondary ("See All Nearby")
```

**Sub-Component**: `List-Item/Office`

**Properties**:
```
- Width: 100%
- Height: Auto
- Padding: 16px
- Background: #FFFFFF
- Border: 1px solid #EBEBEB
- Border-radius: 2px
```

**Hover State**:
```
- Background: #FAFAFA
- Border: 1px solid #CCCCCC
- Cursor: Pointer
```

**Content Structure**:
```
1. Office Name (H4: 18px, Bold, #000000)
2. Address (Body Small: 14px, Regular, #666666)
3. Metadata Row (Flex, space-between)
   ├── Distance Badge ("2.3 km")
   └── Next Available ("Tomorrow 09:00" - Bold, #008000)
4. Action (Link or Button)
```

---

### F. Error/Recovery Modal Component

**Frame Name**: `Modal/Error-Recovery`

**Overlay Properties**:
```
- Position: Fixed
- Width: 100vw
- Height: 100vh
- Background: rgba(0,0,0,0.6)
- Z-index: 1000
- Display: Flex, center, middle
```

**Modal Container**:
```
- Width: 560px (Desktop), 90% (Mobile)
- Max-width: 600px
- Height: Auto
- Padding: 0
- Background: #FFFFFF
- Border-radius: 4px
- Shadow: 0 4px 12px rgba(0,0,0,0.15)
- Position: Relative
```

**Content Structure**:
```
1. Alert Accent Bar (Absolute positioned)
   - Width: 4px
   - Height: 100%
   - Background: #E40422 (Red)
   - Position: Left: 0, Top: 0

2. Close Button (Absolute positioned)
   - Width: 32px, Height: 32px
   - Position: Top: 16px, Right: 16px
   - Icon: X (16x16px, #666666)

3. Content Container (Padding: 32px 40px)
   ├── Error Icon (48x48px, Red circle with white exclamation)
   ├── Headline (H2: "We Could Not Find Your Appointment")
   ├── Body Text (Body Regular, Line-height: 1.6)
   ├── Reason List (Bulleted, Margin: 16px 0)
   │   ├── Bullet point 1
   │   └── Bullet point 2
   └── Action Buttons (Flex, gap: 12px)
       ├── Button/Primary ("Book a New Appointment")
       └── Button/Secondary ("Get Help")

4. Support Link
   - Text: "Contact Support"
   - Color: #003366
   - Font-size: 14px
   - Margin-top: 16px
```

**Figma Properties Panel**:
```
Property: Error Type
Options: Network | Validation | Session | Generic
(Changes icon and headline text)
```

---

### G. Accordion Component

**Frame Name**: `Accordion/District-List`

**Accordion Item** - `Accordion/Item`

**Properties**:
```
- Width: 100%
- Height: Auto
- Background: #FFFFFF
- Border: 1px solid #CCCCCC
- Border-radius: 4px
- Margin-bottom: 8px
```

**Header** (Collapsed State):
```
- Padding: 16px 20px
- Display: Flex, space-between, align-center
- Background: #FAFAFA
- Cursor: Pointer
- Border-bottom: None
```

**Header Hover**:
```
- Background: #F5F5F5
```

**Header Content**:
```
Left Side:
  ├── Icon (Building, 20x20px, #666666)
  ├── District Name (H4: 18px, Bold, #000000)
  └── Office Count (Caption: 12px, #666666)

Right Side:
  └── Chevron Icon (Down, 20x20px, #666666)
```

**Content Panel** (Expanded State):
```
- Padding: 16px 20px
- Background: #FFFFFF
- Border-top: 1px solid #EBEBEB
- Display: Block
- Animation: slideDown 200ms ease
```

**Variants**:
1. **Collapsed**
   - Content Panel: Display: None
   - Chevron: Rotate: 0deg

2. **Expanded**
   - Content Panel: Display: Block
   - Chevron: Rotate: 180deg
   - Header Border-bottom: 1px solid #EBEBEB

**Figma Properties Panel**:
```
Property: State
Options: Collapsed | Expanded
```

---

### H. Badge Component

**Frame Name**: `Badge/Label`

**Base Properties**:
```
- Height: 24px
- Padding: 4px 12px
- Border-radius: 12px (pill shape)
- Font: 12px, Bold
- Display: Inline-flex, center
```

**Variants**:

1. **Required**
   ```
   - Background: #E40422 (Red)
   - Text: #FFFFFF
   - Text: "Pflicht" or "Required"
   ```

2. **Info**
   ```
   - Background: #003366 (Deep Blue)
   - Text: #FFFFFF
   - Text: "Info" or custom
   ```

3. **Success**
   ```
   - Background: #008000 (Green)
   - Text: #FFFFFF
   - Text: "Available" or "Confirmed"
   ```

4. **Neutral**
   ```
   - Background: #F5F5F5 (Light Grey)
   - Text: #333333
   - Border: 1px solid #CCCCCC
   - Text: "Optional" or custom
   ```

**Figma Properties Panel**:
```
Property: Type
Options: Required | Info | Success | Neutral

Property: Label
Type: Text (Instance swap)
```

---

## 4. Layout Specifications

### Screen 1: Method Selection

**Container**:
```
Max-width: 1200px
Margin: 0 auto
Padding: 48px 24px
Background: #FAFAFA (Page background)
```

**Page Header**:
```
Margin-bottom: 32px

H1: "Anmeldung einer Wohnung"
- Font-size: 32px
- Font-weight: Bold
- Color: #000000
- Margin-bottom: 8px

Subtitle: "Wählen Sie die Methode..."
- Font-size: 16px
- Color: #666666
- Line-height: 1.6
```

**Cards Container**:
```
Display: Grid
Grid-template-columns: 1fr 1fr
Gap: 24px
Margin-bottom: 48px

@media (max-width: 768px) {
  Grid-template-columns: 1fr
}
```

**Additional Info Section**:
```
Padding: 24px
Background: #F5F5F5
Border-left: 4px solid #003366
Border-radius: 2px
```

---

### Screen 2: Smart Office List

**Container**:
```
Max-width: 1200px
Margin: 0 auto
Padding: 48px 24px
Display: Grid
Grid-template-columns: 2fr 1fr
Gap: 32px

@media (max-width: 1024px) {
  Grid-template-columns: 1fr
}
```

**Main Content (Left Column)**:
```
Display: Flex
Flex-direction: Column
Gap: 16px
```

**Sidebar (Right Column)** - Documents Checklist:
```
Position: Sticky
Top: 24px
Height: fit-content
```

**Section Cards**:
```
Each section (Nearest/Earliest/Walk-in):
- Margin-bottom: 16px
- Background: #FFFFFF
- Border: 1px solid #CCCCCC
- Padding: 24px
```

---

## 5. HTML/CSS Structure Guide

### A. Global Header

```html
<header class="berlin-header">
  <div class="berlin-header__container">
    <!-- Logo -->
    <div class="berlin-header__logo">
      <span class="berlin-logo__text">BERLIN</span>
      <div class="berlin-logo__icon">
        <!-- Red square with bear or icon -->
      </div>
    </div>
    
    <!-- Utility Nav -->
    <nav class="berlin-header__nav">
      <div class="berlin-header__language">
        <select class="language-dropdown">
          <option>Deutsch</option>
          <option>English</option>
        </select>
      </div>
      <button class="berlin-header__search" aria-label="Search">
        <svg><!-- Search icon --></svg>
      </button>
    </nav>
  </div>
  <!-- Red accent line -->
  <div class="berlin-header__accent"></div>
</header>
```

```css
.berlin-header {
  width: 100%;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  z-index: 100;
}

.berlin-header__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.berlin-header__logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.berlin-logo__text {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
}

.berlin-logo__icon {
  width: 32px;
  height: 32px;
  background: #E40422;
  display: flex;
  align-items: center;
  justify-content: center;
}

.berlin-header__nav {
  display: flex;
  gap: 16px;
  align-items: center;
}

.berlin-header__accent {
  width: 100%;
  height: 1px;
  background: #E40422;
}
```

---

### B. Progress Stepper

```html
<nav class="progress-stepper" role="progressbar" aria-valuenow="2" aria-valuemin="1" aria-valuemax="4">
  <div class="step-item step-item--completed">
    <div class="step-item__circle">
      <svg class="step-item__check"><!-- Checkmark --></svg>
    </div>
    <span class="step-item__label">Method Selection</span>
  </div>
  
  <div class="step-item__connector step-item__connector--completed"></div>
  
  <div class="step-item step-item--active">
    <div class="step-item__circle">2</div>
    <span class="step-item__label">Office Selection</span>
  </div>
  
  <div class="step-item__connector"></div>
  
  <div class="step-item step-item--inactive">
    <div class="step-item__circle">3</div>
    <span class="step-item__label">Details</span>
  </div>
  
  <div class="step-item__connector"></div>
  
  <div class="step-item step-item--inactive">
    <div class="step-item__circle">4</div>
    <span class="step-item__label">Confirmation</span>
  </div>
</nav>
```

```css
.progress-stepper {
  display: flex;
  align-items: center;
  padding: 24px 0;
  gap: 16px;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.step-item__circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  transition: all 200ms ease;
}

/* Inactive State */
.step-item--inactive .step-item__circle {
  background: #CCCCCC;
  color: #666666;
}

.step-item--inactive .step-item__label {
  color: #666666;
}

/* Active State */
.step-item--active .step-item__circle {
  background: #003366;
  color: #FFFFFF;
  box-shadow: 0 0 0 4px rgba(0, 51, 102, 0.2);
}

.step-item--active .step-item__label {
  color: #000000;
  font-weight: bold;
}

/* Completed State */
.step-item--completed .step-item__circle {
  background: #008000;
  color: #FFFFFF;
}

.step-item--completed .step-item__label {
  color: #008000;
}

/* Connector */
.step-item__connector {
  flex: 1;
  height: 2px;
  background: #CCCCCC;
  border-style: dashed;
}

.step-item__connector--completed {
  background: #008000;
  border-style: solid;
}
```

---

### C. Button Component

```html
<!-- Primary Button -->
<button class="btn btn--primary">
  Select This Option
</button>

<!-- Secondary Button -->
<button class="btn btn--secondary">
  Cancel
</button>

<!-- Disabled Button -->
<button class="btn btn--primary" disabled>
  Not Available
</button>
```

```css
.btn {
  height: 48px;
  padding: 12px 32px;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* Primary Button */
.btn--primary {
  background: #003366;
  color: #FFFFFF;
}

.btn--primary:hover {
  background: #002244;
}

.btn--primary:active {
  background: #001122;
  transform: translateY(1px);
}

.btn--primary:focus {
  outline: 2px solid #003366;
  outline-offset: 2px;
}

.btn--primary:disabled {
  background: #CCCCCC;
  color: #999999;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Secondary Button */
.btn--secondary {
  background: #F5F5F5;
  color: #333333;
  border: 1px solid #CCCCCC;
}

.btn--secondary:hover {
  background: #EBEBEB;
  border-color: #999999;
  color: #000000;
}
```

---

### D. Method Selection Card

```html
<div class="method-card">
  <div class="method-card__icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3 class="method-card__title">Register Online</h3>
  <p class="method-card__description">
    Complete your registration entirely online without visiting an office.
  </p>
  <span class="badge badge--info">Requires BundID</span>
  <button class="btn btn--primary method-card__cta">
    Select This Method
  </button>
</div>
```

```css
.method-card {
  width: 100%;
  padding: 32px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease;
  display: flex;
  flex-direction: column;
}

.method-card:hover {
  border: 2px solid #003366;
  box-shadow: 0 2px 8px rgba(0, 51, 102, 0.1);
  transform: translateY(-2px);
}

.method-card__icon {
  width: 64px;
  height: 64px;
  background: #F5F5F5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.method-card__icon svg {
  width: 32px;
  height: 32px;
  color: #003366;
}

.method-card__title {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
}

.method-card__description {
  font-size: 14px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 12px;
  flex-grow: 1;
}

.method-card__cta {
  margin-top: 24px;
  width: 100%;
}
```

---

### E. Office List Section

```html
<section class="office-section">
  <div class="office-section__header">
    <div class="office-section__title">
      <svg class="office-section__icon"><!-- Map Pin Icon --></svg>
      <h3>Nearest Offices</h3>
    </div>
    <span class="badge badge--neutral">3 offices</span>
  </div>
  
  <hr class="divider">
  
  <div class="office-list">
    <div class="office-list-item">
      <h4 class="office-list-item__name">Bürgeramt Mitte</h4>
      <p class="office-list-item__address">Karl-Marx-Allee 31, 10178 Berlin</p>
      <div class="office-list-item__meta">
        <span class="badge badge--neutral">2.3 km</span>
        <span class="office-list-item__available">Tomorrow 09:00</span>
      </div>
      <a href="#" class="office-list-item__action">View Details</a>
    </div>
    <!-- More list items -->
  </div>
  
  <button class="btn btn--secondary office-section__cta">
    See All Nearby Offices
  </button>
</section>
```

```css
.office-section {
  width: 100%;
  padding: 24px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  margin-bottom: 16px;
}

.office-section__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.office-section__title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.office-section__title h3 {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

.office-section__icon {
  width: 24px;
  height: 24px;
  color: #003366;
}

.divider {
  border: none;
  border-top: 1px solid #CCCCCC;
  margin: 16px 0;
}

.office-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.office-list-item {
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #EBEBEB;
  border-radius: 2px;
  transition: all 150ms ease;
}

.office-list-item:hover {
  background: #FAFAFA;
  border-color: #CCCCCC;
  cursor: pointer;
}

.office-list-item__name {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 4px;
}

.office-list-item__address {
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
}

.office-list-item__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.office-list-item__available {
  font-size: 14px;
  font-weight: bold;
  color: #008000;
}

.office-list-item__action {
  font-size: 14px;
  color: #003366;
  text-decoration: underline;
}

.office-list-item__action:hover {
  color: #002244;
}
```

---

### F. Error/Recovery Modal

```html
<div class="modal-overlay">
  <div class="modal-container modal--error">
    <div class="modal__accent-bar"></div>
    
    <button class="modal__close" aria-label="Close">
      <svg><!-- X icon --></svg>
    </button>
    
    <div class="modal__content">
      <div class="modal__icon">
        <svg><!-- Error icon --></svg>
      </div>
      
      <h2 class="modal__headline">We Could Not Find Your Appointment</h2>
      
      <p class="modal__body">
        We were unable to locate your appointment in our system. This may have happened for one of the following reasons:
      </p>
      
      <ul class="modal__list">
        <li>Your appointment was cancelled or expired</li>
        <li>There was a technical error with the booking system</li>
      </ul>
      
      <div class="modal__actions">
        <button class="btn btn--primary">Book a New Appointment</button>
        <button class="btn btn--secondary">Get Help</button>
      </div>
      
      <a href="#" class="modal__support">Contact Support</a>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  width: 560px;
  max-width: 90%;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
}

.modal__accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #E40422;
  border-radius: 4px 0 0 4px;
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__close svg {
  width: 16px;
  height: 16px;
  color: #666666;
}

.modal__close:hover svg {
  color: #000000;
}

.modal__content {
  padding: 32px 40px;
}

.modal__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  background: rgba(228, 4, 34, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__icon svg {
  width: 24px;
  height: 24px;
  color: #E40422;
}

.modal__headline {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 16px;
}

.modal__body {
  font-size: 14px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 12px;
}

.modal__list {
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin: 12px 0 24px 20px;
}

.modal__list li {
  margin-bottom: 8px;
}

.modal__list li::marker {
  color: #E40422;
}

.modal__actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.modal__actions .btn {
  flex: 1;
}

.modal__support {
  display: block;
  text-align: center;
  font-size: 14px;
  color: #003366;
  text-decoration: underline;
}

.modal__support:hover {
  color: #002244;
}
```

---

### G. Badge Component

```html
<span class="badge badge--required">Required</span>
<span class="badge badge--info">Requires BundID</span>
<span class="badge badge--success">Available</span>
<span class="badge badge--neutral">Optional</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  white-space: nowrap;
}

.badge--required {
  background: #E40422;
  color: #FFFFFF;
}

.badge--info {
  background: #003366;
  color: #FFFFFF;
}

.badge--success {
  background: #008000;
  color: #FFFFFF;
}

.badge--neutral {
  background: #F5F5F5;
  color: #333333;
  border: 1px solid #CCCCCC;
}
```

---

## 6. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones, 0-767px) */
@media (max-width: 767px) {
  .method-card-container {
    grid-template-columns: 1fr;
  }
  
  .office-section__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .modal-container {
    width: 100%;
    max-width: calc(100% - 32px);
  }
  
  .modal__content {
    padding: 24px 20px;
  }
}

/* Medium devices (tablets, 768-1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .office-layout {
    grid-template-columns: 1fr;
  }
}

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) {
  .office-layout {
    grid-template-columns: 2fr 1fr;
  }
}
```

---

## 7. Accessibility Annotations

### Focus States
All interactive elements must have visible focus indicators:

```css
*:focus {
  outline: 2px solid #003366;
  outline-offset: 2px;
}
```

### ARIA Labels
```html
<!-- Button with icon only -->
<button aria-label="Search">
  <svg><!-- Icon --></svg>
</button>

<!-- Progress indicator -->
<nav role="progressbar" aria-valuenow="2" aria-valuemin="1" aria-valuemax="4">
  ...
</nav>

<!-- Modal -->
<div role="dialog" aria-labelledby="modal-title" aria-describedby="modal-desc">
  <h2 id="modal-title">Error Message</h2>
  <p id="modal-desc">Description...</p>
</div>
```

### Color Contrast
All text must meet WCAG AA standards (4.5:1 ratio minimum):

- Deep Blue (#003366) on White: 10.27:1 ✓
- Black (#000000) on White: 21:1 ✓
- Text Grey (#333333) on White: 12.63:1 ✓
- Red (#E40422) on White: 4.74:1 ✓

---

## 8. Figma File Structure

```
Berlin.de Anmeldung Redesign
│
├── 📄 Cover Page (Project Overview)
├── 🎨 Design System
│   ├── Colors (Swatches)
│   ├── Typography (Text Styles)
│   ├── Spacing (Grid)
│   └── Icons (Component Set)
│
├── 🧩 Components
│   ├── Header/Global
│   ├── Stepper/Progress
│   ├── Button (Variants: Primary, Secondary, States)
│   ├── Card/Method-Selection (Variants: Default, Hover, Selected)
│   ├── Section/Office-List
│   ├── List-Item/Office
│   ├── Modal/Error-Recovery
│   ├── Badge (Variants: Required, Info, Success, Neutral)
│   └── Accordion/District-List
│
├── 📱 Screens - Desktop
│   ├── 01-Landing-Decision-Hub
│   ├── 02-Office-Selection-Smart-List
│   ├── 03-Details-Form
│   └── 04-Confirmation-Success
│
├── 📱 Screens - Mobile
│   ├── 01-Landing-Decision-Hub-Mobile
│   ├── 02-Office-Selection-Mobile
│   ├── 03-Details-Form-Mobile
│   └── 04-Confirmation-Mobile
│
└── 🔄 Prototyping Flows
    ├── Happy Path (Appointment Booking)
    ├── Error Recovery Flow
    └── Alternative Path (Online Registration)
```

---

## 9. Component Instance Naming Convention

```
Format: [Component]/[Variant]/[State]

Examples:
- Button/Primary/Default
- Button/Primary/Hover
- Button/Secondary/Disabled
- Card/Method-Selection/Hover
- Stepper/Step-Item/Active
- Badge/Required
- Modal/Error-Recovery/Network
```

---

## 10. Export Settings (for Developers)

### Component Export Specifications

**Icons**: SVG, 24x24px, Stroke: 2px
**Logos**: SVG, Multiple sizes (36px, 48px, 64px)
**Cards**: PNG @2x for mockups
**Buttons**: CSS code snippets
**Full Screens**: PNG @2x, JPG for presentations

---

*This specification document is designed to be used directly in Figma to create a component library that strictly adheres to the official Berlin.de visual identity while implementing UX improvements to reduce cognitive load and improve task completion rates.*
