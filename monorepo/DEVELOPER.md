## Major Pain points in developement and workarounds :man_facepalming:

We're using the [latest version (v0.61.2)](https://github.com/facebook/react-native/releases/tag/v0.61.2) of react native for the mobile & [v0.55.4](https://github.com/facebook/react-native/releases/tag/v0.55.4) for the web. So Mobile Package uses ```no-hoist``` option to house react-native & react modules.

One of the biggest complains of React-Native is that symlinks doesn't work with the default bundler -     Metro.

So even though you seperate the common components it wouldn't get properly connected via metro bundler.
(In our case shared components gets hoisted in the project root)

An easy solution to fix this is to use [WML by Wix](https://github.com/wix/wml).

 * Install wml globally

   ```npm install -g wml```

 * Add the shared package to mobiles node modules. Run this command from root directory of the project.

   ```wml add ./packages/shared ./packages/mobile/node_modules/@astrosmasher/shared```

   ps: There is no need to add this to web package as the ```react-scripts``` handles symlinks.
 
 * Start watching the links added

   ```wml start```