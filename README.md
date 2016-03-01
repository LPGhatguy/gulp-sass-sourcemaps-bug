# gulp-something bug
This is a bug reproduction repository for a bug involving `gulp-sass` reporting incorrect error locations.

## Testing
Make sure you have the gulp CLI installed globally.

```sh
npm install
gulp
```

Output like this should follow:

```
C:\projects\web\gulp-sass-sourcemaps-bug>gulp
[00:33:11] Using gulpfile C:\projects\web\gulp-sass-sourcemaps-bug\gulpfile.js
[00:33:11] Starting 'default'...

events.js:154
      throw er; // Unhandled 'error' event
      ^
 Error: src\main.scss
Error: Undefined variable: "$red".
        on line 15 of stdin
>>      // This line will show in the error message instead.
   --------^

    at options.error (C:\projects\web\gulp-sass-sourcemaps-bug\node_modules\node-sass\lib\index.js:277:32)
```

Check out `src/main.scss` and `gulpfile.js` for details.