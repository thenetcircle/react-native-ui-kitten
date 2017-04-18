import React from 'react';

import {
  TouchableHighlight,
  View,
} from 'react-native';
import _ from 'lodash';

import {RkText} from '../text/rkText';
import {RkComponent} from '../rkComponent'
import {changeColor} from '../../styles/colorUtils'

export class RkButton extends RkComponent {
  componentName = 'RkButton';
  typeMapping = {
    wrapper: {
      underlayColor: 'underlayColor',
      backgroundColor: 'backgroundColor',
      borderColor: 'borderColor',
      borderRadius: 'borderRadius',
      borderWidth: 'borderWidth',
      width: 'width',
      height: 'height',
    },
    container: {},
    content: {
      color: 'color',
      colorActive: 'colorActive',
      fontSize: 'fontSize'
    }
  };

  constructor(props) {
    super(props);
    this.setActive = this._setActiveState.bind(this);
    this.setInactive = this._setInactiveState.bind(this);
    this.state = {
      active: false
    }
  }

  _setActiveState() {
    this.setState({
      active: true
    })
  }

  _setInactiveState() {
    this.setState({
      active: false
    })
  }

  _getUnderlayColor(wrapper) {
    let underlayColor = super.extractNonStyleValue(wrapper, 'underlayColor');
    if (underlayColor) {
      underlayColor = changeColor(underlayColor, 1.3);
    }
    return underlayColor;
  }

  _getContentColor(content, underlayColor) {
    let colorInactive = super.extractNonStyleValue(content, 'color');
    let colorActive = super.extractNonStyleValue(content, 'colorActive');
    if (!colorActive) {
      if (!underlayColor || underlayColor === 'transparent')
        colorActive = changeColor(colorInactive, 1.3);
      else
        return colorInactive;
    }

    return this.state.active ? colorActive : colorInactive;
  }

  render() {
    let {wrapper, container, content} = super.defineStyles();
    let underlayColor = this._getUnderlayColor(wrapper);
    let contentColor = this._getContentColor(content, underlayColor);

    content.push({color: contentColor});

    let touchableProps = {
      onPress: this.props.onPress || (() => {
      }),
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
      onLongPress: this.props.onLongPress
    };

    return (
      <TouchableHighlight onShowUnderlay={this.setActive}
                          onHideUnderlay={this.setInactive}
                          activeOpacity={1}
                          underlayColor={underlayColor}
                          style={[wrapper, this.props.style]}
                          {...touchableProps}>
        <View style={[container, this.props.containerStyle]}>
          {this.props.children && this._renderChildren(content)}
        </View>
      </TouchableHighlight>
    );
  }

  _renderChildren(style) {
    let displayText = (text) => (<RkText style={[style, this.props.contentStyle]}>{text}</RkText>);
    if (typeof this.props.children === 'string') {
      return displayText(this.props.children)
    }
    let babies = _.isArray(this.props.children) ? this.props.children : [this.props.children];
    return React.Children.map(babies, (baby) => {
      if (typeof baby === 'string') {
        return displayText(baby);
      } else {
        let {style: babyStyle, ...babyProps} = baby.props;
        return React.cloneElement(baby, {
          style: [style, this.props.contentStyle, babyStyle],
          ...babyProps
        });
      }
    })
  }
}
