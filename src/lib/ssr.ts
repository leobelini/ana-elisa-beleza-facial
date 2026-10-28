import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

/**
 * Coleta as <style> do styled-components usadas na renderização da ilha React,
 * para serem inseridas no <head> durante o SSR (evita flash sem estilo).
 */
export const collectStyles = <P extends object>(
  Component: React.ComponentType<P>,
  props: P,
): string => {
  const sheet = new ServerStyleSheet();
  try {
    renderToString(sheet.collectStyles(React.createElement(Component, props)));
    return sheet.getStyleTags();
  } finally {
    sheet.seal();
  }
};
