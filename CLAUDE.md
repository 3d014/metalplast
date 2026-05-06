# Metalplast Project Instructions

## Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* next-intl

## Localization

* Supported locales: bs, en, de
* Default locale: bs

## Important Rules

* Do NOT inspect:

  * node_modules
  * .next
  * dist
  * build output
* Do NOT recursively scan the entire project
* Only inspect files relevant to the task

## Main Source Directories

* src/app
* src/components
* src/i18n

## Coding Rules

* Use App Router only
* Use Server Components by default
* Keep components reusable
* Use TypeScript strictly
* Prefer clean architecture over quick hacks

## i18n Rules

* Use next-intl
* Translation files must be static JSON files
* Never use dynamic JSON imports that break Next.js builds

## Workflow

1. Inspect relevant files only
2. Propose a short plan
3. Implement incrementally
4. Avoid unnecessary changes
