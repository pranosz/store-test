# StoreTest

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


Po kliknięciu w “Production” lub “Non-Production” lub "New Feature Request":
pokazuj nowoczesny formularz.

Form layout:

centered card container
nowoczesny enterprise form
labels nad inputami
spacing zgodny z TailwindCSS
rounded inputs
subtle borders

Pola formularza dla Production i Non-Production:

Summary
standard text input
Business Application ID
text input
App Repository Link
text input z placeholderem Git repository URL
Issue Category
multi-select dropdown
opcje:
Build & Deploy
Runtime Availability
Hosting Platform
multi-select dropdown
opcje:
JDP
DHP
KubOps
Description
duży textarea
placeholder:
“Provide detailed information about the issue, impact and current behavior.”
Severity
single select dropdown
opcje:
Critical
Major
Moderate
High

Na dole formularza:

secondary button:
“Cancel”
primary button:
“Submit Incident”

Production form:

czerwone akcenty,
bardziej critical enterprise feeling.

Non-production form:

amber/orange akcenty,
softer support feeling.

Po kliknięciu “Request Feature”:
pokazuj oddzielny formularz.

Pola formularza “Request Feature”:

Summary
text input
Business Application ID
text input
Description
duży textarea
helper text:
“Please describe what you need and why you need it.”

Na dole:

secondary button:
“Cancel”
primary button:
“Submit Request”

Styl wizualny:

inspirowany:
Linear,
Atlassian,
Vercel dashboard,
enterprise internal tooling,
modern admin systems
subtle gradients
soft shadows
clean typography
lucide-react icons
TailwindCSS aesthetics
Radix UI design patterns