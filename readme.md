Browserify external test
===

To see the issue:

```
npm install
gulp
```

After that compare files in `dist/` folder.

## Expected result

`app.js` file should not contain `PdfKit` package with all it's dependencies.

## Actual result

`app.js` contains all files that `vendor.js` has.

## Note

Requires gulp installed globaly
```
npm install gulp -g
```
