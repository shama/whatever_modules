# whatever_modules

Finally! We can rename the `node_modules` folder to whatever we want. The tyranny is over! Now we can put whatever modules we want in there! Wooo!

## Usage

`npm install whatever_modules --save` and add the following to your `package.json`:

```json
{
  "name": "totally-not-a-node-module",
  "version": "0.x.0-semver-weeee",
  "scripts": {
    "install": "whatever_modules theseAreMy_modules"
  }
}
```

Now when you run `npm install` it will install everything to `theseAreMy_modules`. Hooraay!

