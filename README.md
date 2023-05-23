# WEB for lunch-voting

## folder structure

```sh
.
├─ public # holds all public images
├─ src
│  ├─ components # you can find all components here
│  │  ├─ ui # all Shadcn components
│  │  └─ ... # all custom components can be found here
│  ├─ lib # holds data transfer objects (read: requests and responses)
│  ├─ pages # contains all pages, see https://nextjs.org/docs/pages/building-your-application/routing for more information
│  ├─ server # we do not need this folder for now
│  └─ styles # contains all tailwind base styles and resets
├─ .env # holds environment variables for local environment
└─ package.json # contains a list of our dependencies

```

## commands

### install pnpm

If you don't have pnpm installed, go to [pnpm Installation](https://pnpm.io/installation)

```sh
# Install pnpm according to your OS

pnpm --version
# 8.5.1
```

### install all dependencies

```sh
pnpm install
```

### run `web` with

```sh
pnpm dev
```

### install new Shadcn component

Select pnpm to install a Shadcn component!

```sh
pnpx shadcn-ui add button

# remember to install the Shadcn component in src/components/ui
```
