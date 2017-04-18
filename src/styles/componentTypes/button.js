export const RkButtonTypes = (theme) => {
  return ({
    _base: {
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
      wrapper: {
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
        overflow: 'hidden',
        width: 128,
        height: 44,
      },
      content: {
        fontSize: theme.fonts.sizes.base,
        textAlign: 'center'
      }
    },
    basic: {
      backgroundColor: theme.colors.back.primary,
      color: theme.colors.text.additional
    },
    primary: {
      backgroundColor: theme.colors.back.primary,
      underlayColor: theme.colors.back.primaryActive,
      color: theme.colors.text.additional
    },
    warning: {
      backgroundColor: theme.colors.back.warning,
      underlayColor: theme.colors.back.warningActive,
      color: theme.colors.text.additional
    },
    danger: {
      backgroundColor: theme.colors.back.danger,
      underlayColor: theme.colors.back.dangerActive,
      color: theme.colors.text.additional
    },
    success: {
      backgroundColor: theme.colors.back.success,
      underlayColor: theme.colors.back.successActive,
      color: theme.colors.text.additional
    },
    info: {
      backgroundColor: theme.colors.back.info,
      underlayColor: theme.colors.back.infoActive,
      color: theme.colors.text.additional
    },
    outline: {
      underlayColor: theme.colors.back.primaryActive,
      borderColor: theme.colors.border.base,
      borderWidth: 1,
      color: theme.colors.text.primary,
      colorActive: theme.colors.text.additional,
      backgroundColor: theme.colors.back.outline
    },
    rounded: {
      borderRadius: 22
    },
    circle: {
      borderRadius: 300
    },
    small: {
      fontSize: theme.fonts.sizes.small,
      height: 36,
      width: 80,
      wrapper: {
        paddingVertical: 4,
        paddingHorizontal: 6,
      }
    },
    medium: {
      wrapper: {
        paddingVertical: 8,
        paddingHorizontal: 12,
      },
      fontSize: theme.fonts.sizes.medium,
    },
    large: {
      fontSize: theme.fonts.sizes.large,
      height: 52,
      width: 180,
      wrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
      }
    },
    xlarge: {
      fontSize: theme.fonts.sizes.xlarge,
      height: 60,
      width: -1,
      wrapper: {
        alignSelf: 'stretch',
        paddingVertical: 15,
        paddingHorizontal: 20,
      }
    },
    clear: {
      backgroundColor: 'transparent',
      width: null,
      height: null,
      wrapper: {
        paddingVertical: 0,
        paddingHorizontal: 0,
      }
    }
  })
};
