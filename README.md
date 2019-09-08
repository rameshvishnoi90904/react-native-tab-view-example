# react-native-tab-view-example


React Native TabView Example using react-native-tab-view 

> git clone https://github.com/rameshvishnoi90904/react-native-tab-view-example.git

##step 1
```
npm install / yarn install
```

##step 2: for ios build
```
cd ios
pod install
cd ..
```

##step 3: Update MainActivity.java

```
package com.swmansion.gesturehandler.react.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}

#Screenshot
![demo screenshot](https://raw.githubusercontent.com/rameshvishnoi90904/react-native-tab-view-example/master/demo/demo.png)


