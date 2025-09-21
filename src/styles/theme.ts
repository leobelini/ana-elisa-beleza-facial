// Paleta de cores da marca
export const colors = {
  goldMain: "#C8A968",
  goldDark: "#A17C3C", 
  iceWhite: "#FAF8F6",
  graySecondary: "#8C8C8C",
  blackMain: "#1E1E1E",
}

// Styled components comuns
export const commonStyles = {
  section: `
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      padding: 60px 20px;
    }
  `,
  button: `
    display: inline-block;
    background: linear-gradient(135deg, ${colors.goldMain} 0%, ${colors.goldDark} 100%);
    color: white;
    padding: 15px 35px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(200, 169, 104, 0.3);
    border: none;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(200, 169, 104, 0.4);
    }
  `,
  sectionTitle: `
    font-size: 2.5rem;
    font-weight: 300;
    color: ${colors.blackMain};
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: ${colors.goldMain};
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  `
}