# with-preact

> This example extends the `basic` skeleton and bundles `preact` in production
> mode instead of `react` and `react-dom` for a smaller bundle size

This is a basic example of a `quercia` application. You should now install the
npm dependencies with your favorite package manager, and later run one of these
scripts:

- `dev` - runs the quercia compiler in watch mode and builds a development
  application

- `build` - builds the application for production mode and optimizes code

- `mock` - runs the mocking server and serves the aforementioned application

## workflow

The ideal workflow for development is running `dev` in one terminal to build the
application and hot-reload on changes, while mocking example server responses
with the `mock` command(defined in the `mocks` folder).

## production

Your application will include `preact/compat` aliased to `react` and
`react-dom`. This will lower bundle size. Be careful and test the application
before any deployment because it could cause issues(when using internal and
unsupported react-specific api). You can also inspect the bundle size and
imports of each chunk of your application via the `stats` command, uploading the
`stats.json` file on websites like chrisbateman's
[webpack analyzer](https://chrisbateman.github.io/webpack-visualizer/)
