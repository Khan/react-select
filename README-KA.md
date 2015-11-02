# React Select
## The KA Remix

The original React Select library is divided into three folders:

 - `src`: The original source files, written in `jsx`.
 - `lib`: The files from `src`, piped through a `jsx` --> `js` transform.
 - `dist`: The files from `lib`, packaged for the browser. `browserify-shim` switches out a few of the packaged modules with globals; we do this too, for React :)

We should only ever be dealing with `src`.

## What are we doing here?

This library depends on a few third-party packages of its own; this confuses our packager if we use it directly. To get around this, we use `browserify` to bundle everything up into a single file in advance.

We don't want to bundle React in with our little bundle, because React is big. It also gives us errors if there are multiple instances loaded onto the same page. We use browserify-shim for this; it lets us require `window.React` in place of a bundled version.

## Updating this library
First, navigate to the submodule directory and checkout master:

```
# From webapp:
cd ./third_party/javascript-khansrc/react-select/
git co master
```

Make sure that you've got all the local dependencies you need by running:

```
npm install
```

Next, make your changes. You might want to pull changes from the [upstream branch](https://github.com/JedWatson/react-select):

```
git remote add upstream https://github.com/JedWatson/react-select.git
git p upstream
```

If you want to make style changes, edit files in `less/` and run `gulp build`. At some point the library [might transition to scss or jss](https://github.com/JedWatson/react-select/issues/541).

If you want to make JS changes, develop locally in `src`. As of React 0.14, ReactDOM is split into its own module. It requires `react/lib/ReactDOM`, which confuses browserify-shim and breaks a few things.

The quickest solution _(ahem... hack)_ that I've found for this is:

```bash
open ./node_modules/react-select/package.json
# Change "main" entry to "dist/react-dom.js"
```

Finally, we have to build a bundle for our KA packages. Running:

```
make
```

should do it.

-----

Once you're done with those steps, the library should be good to go! Run through your regular `arc` / `git` workflow, push to master (eventually), and update `webapp` to use the most recent version!
