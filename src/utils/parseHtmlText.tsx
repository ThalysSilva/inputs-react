import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Box } from '@chakra-ui/react';

export function parseHtmlText(text: string) {
  return text
    .split('\r\n')
    .filter((item) => item)
    .map((item, index) => (
      <Box key={index} lineHeight={'taller'}>
        {HTMLReactParser(item)}
      </Box>
    ));
}
