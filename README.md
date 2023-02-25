# Piotr Kałuża - Front End Developer portfolio web site

This website was build with react.js.
It's simple one-page website.
It uses scss for styles, BEM class naming metedology
...

Workaround for Sendgrid email package:
```
resolve: {
    fallback: {
        fs: false,
        path: false
    }
}
```
Add it to \node_modules\react-scripts\config\webpack.config.js 
Do not push build to repo - sendgrid api key is bundled in js file and it blocks the api key.