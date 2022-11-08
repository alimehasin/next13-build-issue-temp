# What is the error

The error I got

```sh
info  - Linting and checking validity of types .Failed to compile.

Type error: Page "src/app/name/[name]/page.tsx" does not match the required types of a Next.js Page.
  Invalid configuration:
    The exported page component isn't correctly typed.
        Expected "NameProps", got "PageProps".
```

## How to reproduce

1. Clone the repo
2. Run `yarn build`
