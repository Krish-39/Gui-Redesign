# Berlin.de Anmeldung Portal - Design System & Component Specification

## Design Principles

### 1. Reduced Cognitive Load
- **Progressive Disclosure**: Show only essential information at each step
- **Chunking**: Group related information in digestible segments
- **Visual Hierarchy**: Clear distinction between primary, secondary, and tertiary actions

### 2. Action-Oriented Navigation
- **Clear CTAs**: Every screen has 1-2 primary actions maximum
- **Persistent Context**: Users always know where they are and what's next
- **Recovery Paths**: Error states provide clear next steps

---

## Information Hierarchy

### Priority Levels

**Level 1 - Orientation (Always Visible)**
- Current step/task title
- Progress indicator
- Language selector

**Level 2 - Primary Action**
- The main decision or input required
- Maximum 1-2 primary CTAs per screen
- Smart suggestions/recommendations

**Level 3 - Secondary Options**
- Alternative paths
- Expandable details (accordions)
- Filtering/search

**Level 4 - Support Information**
- Help text
- Document requirements
- Legal disclaimers

---

## Typography Scale

### Hierarchy

```
H1 (Core Task Title)
- Font Size: 2rem (32px) mobile / 2.5rem (40px) desktop
- Font Weight: 700 (Bold)
- Line Height: 1.2
- Use Case: Main screen title, task name
- Color: #111827 (gray-900)

H2 (Section Title)
- Font Size: 1.5rem (24px) mobile / 1.75rem (28px) desktop
- Font Weight: 600 (Semibold)
- Line Height: 1.3
- Use Case: Card headers, major sections
- Color: #111827 (gray-900)

H3 (Component Title)
- Font Size: 1.125rem (18px)
- Font Weight: 600 (Semibold)
- Line Height: 1.4
- Use Case: Card titles, office names
- Color: #111827 (gray-900)

Body Large
- Font Size: 1rem (16px)
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Use Case: Primary descriptions, form labels
- Color: #374151 (gray-700)

Body Regular
- Font Size: 0.875rem (14px)
- Font Weight: 400 (Regular)
- Line Height: 1.6
- Use Case: Secondary text, metadata
- Color: #6B7280 (gray-600)

Caption
- Font Size: 0.75rem (12px)
- Font Weight: 500 (Medium)
- Line Height: 1.5
- Use Case: Badges, timestamps, hints
- Color: #6B7280 (gray-600)
```

---

## Color System

### Primary (Action/Interactive)
- **Primary-600**: #2563EB (Main CTA, links)
- **Primary-700**: #1D4ED8 (Hover state)
- **Primary-50**: #EFF6FF (Background highlight)
- **Primary-100**: #DBEAFE (Light background)

### Success (Confirmations)
- **Success-600**: #16A34A
- **Success-700**: #15803D
- **Success-50**: #F0FDF4

### Warning (Alerts, Required)
- **Warning-600**: #DC2626
- **Warning-700**: #B91C1C
- **Warning-50**: #FEF2F2

### Info (Helpful Tips)
- **Info-500**: #F59E0B
- **Info-600**: #D97706
- **Info-50**: #FFFBEB

### Neutral (Text, Borders)
- **Gray-900**: #111827 (Headings)
- **Gray-700**: #374151 (Body text)
- **Gray-600**: #4B5563 (Secondary text)
- **Gray-200**: #E5E7EB (Borders)
- **Gray-50**: #F9FAFB (Backgrounds)

---

## Spacing System (8px Grid)

```
xs: 0.5rem (8px)   - Icon padding, tight spacing
sm: 0.75rem (12px) - Compact card padding
md: 1rem (16px)    - Standard element spacing
lg: 1.5rem (24px)  - Section spacing
xl: 2rem (32px)    - Major section separation
2xl: 3rem (48px)   - Screen section gaps
```

---

## Component Specifications

### 1. Progress Stepper Component

**Purpose**: Persistent navigation showing user's journey through the registration process

**Visual States**:
- **Incomplete**: Gray circle, gray text, dashed connector
- **Active**: Blue filled circle with white checkmark, blue text, solid connector
- **Completed**: Green filled circle with checkmark, green text, solid connector

**Component Props**:

```typescript
interface Step {
  id: string;
  label: string;
  status: 'incomplete' | 'active' | 'completed';
  screenRoute?: string;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  onStepClick?: (stepIndex: number) => void;
  allowClickableCompleted?: boolean;
}
```

**Accessibility**:
- `role="progressbar"`
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Keyboard navigation support

**Responsive Behavior**:
- Desktop: Horizontal layout at top of screen
- Mobile: Compact horizontal with step numbers only, labels on active step

---

### 2. Dual-Action Card Component (Decision Hub)

**Purpose**: Present clear binary choices without overwhelming the user

**Layout**: Two equal-width cards side-by-side (desktop) or stacked (mobile)

**Card Structure**:
1. **Icon Area** (64x64px, top)
2. **Headline** (H2)
3. **Description** (Body Regular, max 2 lines, 100 chars)
4. **CTA Button** (Full-width, high contrast)
5. **Optional: Small "Learn More" link**

**Component Props**:

```typescript
interface ActionCard {
  id: string;
  icon: ReactNode;
  iconBgColor: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaAction: () => void;
  recommended?: boolean;
  learnMoreLink?: string;
}

interface DualActionCardsProps {
  cards: [ActionCard, ActionCard];
  onCardSelect: (cardId: string) => void;
}
```

**Visual Treatments**:
- **Recommended Card**: Blue border (2px), "Empfohlen" badge, subtle gradient background
- **Standard Card**: Gray border (1px), white background
- **Hover State**: Shadow elevation increase, border color darkens

---

### 3. Smart Office Selection - Categorized List

**Purpose**: Reduce information overload through progressive disclosure and smart filtering

**Sub-Components**:

#### 3a. Smart Suggestion Badge
```typescript
interface SmartBadgeProps {
  type: 'earliest' | 'nearby' | 'available';
  label: string;
  icon?: ReactNode;
}
```

**Visual**: Pill-shaped, colored background, white text, icon on left

#### 3b. Office Card (Enhanced)
```typescript
interface OfficeCardProps {
  id: string;
  name: string;
  address: string;
  district: string;
  nextAvailable: string;
  availableSlots: number;
  distance: string;
  badges?: SmartBadgeProps[];
  isSelected: boolean;
  onSelect: () => void;
  onViewDetails?: () => void;
}
```

**Card Anatomy**:
1. Top: Badges row (max 2 visible)
2. Middle: Office name (H3) + address (Body Small)
3. Metadata Row: Distance | Available slots | Next time
4. Bottom: "Select" CTA button

#### 3c. District Accordion
```typescript
interface DistrictAccordionProps {
  districtName: string;
  officeCount: number;
  offices: Office[];
  isExpanded: boolean;
  onToggle: () => void;
  selectedOfficeId?: string;
  onOfficeSelect: (id: string) => void;
}
```

**Interaction**:
- Click header to expand/collapse
- Chevron icon rotates 180° on expansion
- Smooth height transition (300ms ease)

---

### 4. Recovery Modal Component

**Purpose**: Guide users when errors occur without losing context

**Visual Structure**:
1. **Alert Icon** (48x48px, warning color)
2. **Headline** (H2, problem statement)
3. **Reason List** (Bulleted, max 2-3 items)
4. **Action Buttons** (Primary + Secondary stacked on mobile)

**Component Props**:

```typescript
interface RecoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorType: 'network' | 'validation' | 'session' | 'generic';
  headline: string;
  reasons?: string[];
  primaryAction: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  supportLink?: string;
}
```

**Behavior**:
- Backdrop overlay (semi-transparent black, 60% opacity)
- Modal centered on screen
- Escape key to close
- Focus trap within modal
- Auto-focus on primary action

**Accessibility**:
- `role="alertdialog"`
- `aria-labelledby` pointing to headline
- `aria-describedby` pointing to reason list

---

### 5. Success/Feedback Toast Component

**Purpose**: Provide immediate feedback for every user interaction

**Toast Variants**:
- **Success**: Green background, checkmark icon
- **Error**: Red background, X icon
- **Info**: Blue background, info icon
- **Warning**: Yellow background, alert icon

**Component Props**:

```typescript
interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  description?: string;
  duration?: number; // milliseconds, default 4000
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

interface ToastContainerProps {
  position: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
  toasts: ToastProps[];
}
```

**Animation**:
- Enter: Slide in from right + fade in (200ms)
- Exit: Slide out to right + fade out (150ms)
- Progress bar showing time remaining

**Stacking**:
- Max 3 toasts visible simultaneously
- Older toasts dismissed automatically when new ones arrive

---

## Layout Patterns

### Bento Box / Card-Based Layout

**Principle**: Separate concerns into distinct visual containers

**Implementation**:
- Use cards for all major content blocks
- Minimum 16px padding inside cards
- 8-24px gap between cards
- Cards have subtle shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Rounded corners: 8px (standard) or 12px (large cards)

**Example Structure**:
```
┌─────────────────────────────────────┐
│  Header (Breadcrumb + Title)        │
└─────────────────────────────────────┘

┌─────────────────┐  ┌───────────────┐
│                 │  │               │
│  Primary Card   │  │  Sidebar Card │
│                 │  │  (Sticky)     │
│                 │  │               │
└─────────────────┘  └───────────────┘

┌─────────────────────────────────────┐
│  Secondary Section (Accordion)      │
└─────────────────────────────────────┘
```

---

## Interaction Patterns

### 1. Loading States
- **Skeleton Screens**: For initial page load
- **Spinner + Disabled State**: For button actions
- **Progress Indicator**: For multi-step submissions

### 2. Empty States
- Illustration (optional)
- Headline explaining why empty
- CTA to populate (if applicable)

### 3. Validation
- **Inline Validation**: Show errors immediately below field
- **Success Indicators**: Green checkmark when field is valid
- **Form-Level Summary**: Show all errors at top before submission

---

## Responsive Breakpoints

```
mobile: 0-639px
tablet: 640px-1023px
desktop: 1024px+
wide: 1280px+
```

**Responsive Adaptations**:
- Progress Stepper: Horizontal → Compact horizontal with numbers
- Dual Cards: Side-by-side → Stacked
- Office Cards: 3-column grid → 2-column → 1-column
- Sidebar: Sticky right → Collapsed accordion at bottom
- Modal: Full-screen → Centered with margins

---

## Implementation Guidelines

### Component File Structure
```
/components
  /navigation
    ProgressStepper.tsx
  /cards
    DualActionCard.tsx
    OfficeCard.tsx
  /feedback
    Toast.tsx
    RecoveryModal.tsx
  /layout
    Header.tsx
    Sidebar.tsx
```

### State Management
- Use React Context for: Language, Toast notifications, User session
- Local state for: Form inputs, Accordion expand/collapse
- URL params for: Current step, Selected filters

### Performance
- Lazy load district office lists
- Virtualize long lists (if >50 items)
- Debounce search/filter inputs (300ms)

---

## Testing Requirements

### Accessibility Checklist
- [ ] All interactive elements keyboard accessible
- [ ] Color contrast ratio ≥ 4.5:1 for text
- [ ] Screen reader announces all state changes
- [ ] Focus indicators visible on all elements
- [ ] Form errors associated with inputs

### Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile Safari iOS 14+
- Android Chrome 90+

---

## Metrics for Success

### User Experience
- **Task Completion Time**: Target <5 minutes for full registration
- **Error Rate**: <5% of users encounter validation errors
- **Abandonment Rate**: <15% drop-off between steps

### Performance
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s
- **Lighthouse Accessibility Score**: ≥95

---

*This design system should be treated as a living document and updated as new patterns emerge or user research reveals areas for improvement.*
