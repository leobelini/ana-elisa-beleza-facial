// Paleta de cores da marca
export const colors = {
  goldMain: '#B58E4B',
  goldDark: '#8A6A32',
  iceWhite: '#FBF7F4',
  graySecondary: '#6E5F5B',
  blackMain: '#2A1A18',
  blush: '#F2E4DF',
  rose: '#B9776B',
  cocoa: '#2A1A18',
  onDark: 'rgba(251, 247, 244, 0.72)',
};

export const fonts = {
  display: "'Instrument Serif', 'Times New Roman', serif",
  body: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

// Styled components comuns
export const commonStyles = {
  section: `
    padding: 120px 24px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 72px 20px;
    }
  `,
  sectionTitle: `
    font-family: ${fonts.display};
    font-size: clamp(2.6rem, 6vw, 4.5rem);
    font-weight: 400;
    line-height: 1.02;
    color: ${colors.blackMain};
    margin-bottom: 56px;
  `,
};
