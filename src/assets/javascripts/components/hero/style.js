import { css } from 'lit-element';

export const heroStyle = css`
  .hero {
    display: flex;
    align-items: center;
    min-height: 380px;
    width: 100%;
    text-align: center;
    background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(250, 148, 42, .65)),
                var(--primary-color) url('./hero.jpg') no-repeat center center fixed;
    background-size: cover;
  }

  .hero-container {
    margin: 0 auto;
  }

  .hero-heading {
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
  }

  .hero-tagline {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
  }

  @media (max-width: 575.98px) {
    .hero-heading {
      font-size: 2.5rem;
    }
  
    .hero-tagline {
      font-size: 1rem;
    }
  }
`;