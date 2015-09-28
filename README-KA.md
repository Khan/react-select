# React Select
## The KA Remix

The original React Select library is divided into three folders:

 - `src`: The original source files, written in `jsx`.
 - `lib`: The files from `src`, piped through a `jsx` --> `js` transform.
 - `dist`: The files from `lib`, packaged for the browser. `browserify-shim` switches out a few of the packaged modules with globals; we do this too, for React :)

We should only ever be dealing with `src`.

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

Next, make your changes. Develop locally in `src`, or pull changes from the [upstream branch](https://github.com/JedWatson/react-select):

```
git remote add upstream https://github.com/JedWatson/react-select.git
git p upstream
```

Finally, we have to build a bundle for our package system. Running:

```
make
```

should do it.

Once you're done with those steps, the library should be good to go! Run through your regular `arc` / `git` workflow, push to master (eventually), and update `webapp` to use the most recent version!
