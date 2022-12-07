# Minimal Remix Stack with Humanode OAuth2

This is a community maintained Remix Stack. Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template xendarboh/remix-stack-minimal-humanode
```

## What's in the stack

- Sybil-resistant proof of unique living Human with [HUMΔNODE](https://humanode.io/)
- Authenticated session management with [Remix Auth](https://github.com/sergiodxa/remix-auth)
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

## Development

- This step only applies if you've opted out of having the CLI install dependencies for you:

  ```sh
  npx remix init
  ```

- Copy `env` config file from the example and customize. Current values work for local development:

  ```sh
  cp .env.example .env
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

Learn more about [Remix Deployment](https://remix.run/docs/en/v1/guides/deployment).

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

## Testing

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete. To run type checking across the whole project, run `npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.

## Resources

Upstream template: https://github.com/BogDAAAMN/minimal-remix-stack
