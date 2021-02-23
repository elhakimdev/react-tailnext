This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## how to contribute

## Documentation
The documentation is being under development
### Project structure 
```
# root directory
\src
## main contains :
     \components    --> we define our components here
          ### included folder and file :
          \core
          \elements
               \more
               \ui       --> we plant to make pre defined ui elements that using our made components, 
                    \accordions
                    \alerts
                    \badges
                    \breadcrumbs
                    \buttons
                    \buttons-group
                    \card
                    \carrousell
                    \collapse
                    \future-ui
          \layouts
               \auths
                    \login.js
                    \register.js
                    \password-forget.js
                    \verifiy-email.js
               \dashboards
                    \fixed-diebar
                    \fixed-navbar
                    \collapse-sidebar
                    \collapse-navbar
               \homepages
          \modules
     \example       --> we also plan to provide more robust example UI/UX layouts here incllude using many our components 
     \pages         --> pages directory 
     \public        --> public assets can be placed here
     .gitignore
     .package-lock.json
     .package.json
     README.md
     tailwind.config.js
```
