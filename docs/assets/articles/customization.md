### Overview
Customization of `react-native-ui-kitten` is really easy and very extensible. 
It allows you to build beautiful and flexible component styles in a simple and elegant way.

### rkType

Most of the components in this framework contain *rkType* property.
For those who's familiar with web, you can think of it as an HTML *class* property.
Fundamentally, the idea is to separate styles definition from jsx templates.
Our components already have a set of predefined rkTypes. 
Moreover, you can configure *rkType*s somewhere in your application and then you're able to reuse that style in your components by just passing it as an input property.
In addition it's always possible to override types for some specific component.

For example, consider this code: 

```
import {RkButton} from 'react-native-ui-kitten';

//... 

<RkButton rkType='outline small'>
  Say Hello
</RkButton>

```

In this case, `RkButton` will have two styles: *outline* (style that 
draws a rounded border for a button) and *small* (the one that reduces button size).

You're able to create your custom *rkType*s for specific components.
Here is the example of creating *rkType* for rkButton:

```jsx
import {RkButton, RkTheme} from 'react-native-ui-kitten';

let accent = '#ed1c4d';

RkTheme.setType('RkButton', 'accent', {
  backgroundColor: accent,
  color: 'white'
});

//...

<RkButton rkType='accent'>
  Click me.
</RkButton>
```

### Platform-dependent styles

In some cases, it may be necessary to write different styles depending on current platform. It's possible to define a platform dependent value. Let's create `rkType` for `RkButton` which on *iOS* will have a blue background color and green on *Android*.

```jsx
import {RkTheme} from 'react-native-ui-kitten';

//...

RkTheme.setType('RkButton','different',{
  backgroundColor: {
    ios: 'blue',
    android: 'green'
  }
});

//... or using internal control components:

RkTheme.setType('RkButton','different',{
  container: {
    backgroundColor: {
      ios: 'blue',
      android: 'green'
    }
  }
});

```

### Default values
Sometimes it is very useful to set default style for all components in a whole application without need to set explicitly `rkType`
for each component. All *rk-components* have a type which always applied. The name of this type is set in `RkComponent.defaultType` variable.
All standard *rk-components* has defaultType `basic`. In order to change the style for all components - just override this type.

Let's change color and size for all `RkText` components in the app:

```jsx
  RkTheme.setType('RkText', 'basic', {
    fontSize: 12,
    color: 'midnightblue'
  });
```

### Themes

All base *rkTypes* depends on theme of an application. *Theme* contains base values (colors, fontSizes etc) for all *rk-components*.
You can easily override values in theme or even define your own theme using `RkTheme`.
But user-defined *rkType*s should also be able to respond theme changes.
For this purpose property functions can be used instead of values.
Let's create `rkType` for `RkText` which will depend on some value from the theme.

```jsx
RkTheme.setType('RkText','primaryBackground',{
  backgroundColor: theme => theme.colors.primary
});
```

Variable `theme` here is an example of the current theme. So, in case the theme has been switched using `RkTheme.setTheme` function, the `rkType`
 created above will also be changed and all components using this type will be updated as well.

Sometimes there is a necessity to use their values for regular components. In this case, you need to use `RkStyleSheet`.
