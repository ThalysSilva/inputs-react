import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import * as colors from './colors';

export const config: ThemeOverride = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'SF-Pro-display',
    body: 'SF-Pro-display',
  },
  styles: {
    global: {
      body: {
        color: 'black',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  colors: { ...colors },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '3xl',
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'semibold',
        color: 'primary.600',
      },
    },
    Text: {
      baseStyle: {
        color: 'black',
        lineHeight: 'taller',
      },
    },
    Link: {
      baseStyle: {
        color: 'gray.600',
      },
    },
  },
};

export const theme = extendTheme(config);
