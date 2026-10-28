# Redesign: Anmeldung (Berlin address registration)

A GUI redesign of Berlin's flat-registration (*Anmeldung*) flow, built from a Figma prototype in React and TypeScript. The original service makes people hunt across many Bürgeramt pages for a free slot; this redesign puts the choice, the slot search and the form into one guided flow.

## What it shows

- **Decision hub**: book an appointment at a Bürgeramt or register online, side by side
- **Office selection**: offices grouped by district, filterable by date, plus "smart suggestions" for the soonest free slots
- **Appointment booking and online registration forms**, with a progress stepper and document checklist sidebar
- **Error recovery**: appointment-error screen, recovery modal and toasts instead of dead ends
- **Six languages**: German, English, Turkish, Arabic, Polish and French (`src/lib/translations.ts`)

All office and slot data is mock data in `src/lib/officeData.ts`; nothing is sent anywhere.

## Run locally

Prerequisites: Node.js 20+ and npm.

```bash
npm ci
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # output in build/
```

## Project layout

```
src/
  App.tsx                 screen flow and shared state
  screens/DecisionHub.tsx
  components/             forms, navigation, feedback, cards, support
  lib/                    translations, language context, office data, toasts
  BERLIN_DESIGN_SYSTEM.md design tokens and rules used for the redesign
```

## License

[MIT](LICENSE)
