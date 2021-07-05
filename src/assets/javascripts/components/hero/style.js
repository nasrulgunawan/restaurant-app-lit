import { css } from 'lit-element';

export const heroStyle = css`
  .hero {
    display: flex;
    min-height: 380px;
    width: 100%;
    text-align: center;
    max-height: 500px;
  }

  .hero img {
    width: 100%;
    height: 380px;
    object-fit: cover;
  }

  .hero-container {
    width: 100%;
    height: 380px;
    margin: 0 auto;
    position: absolute;
    background: linear-gradient(to right, rgba(0, 0, 0, .4), rgba(250, 148, 42, .65)),
      no-repeat center center fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero-heading {
    color: #fff;
    font-weight: 700;
    font-size: 3rem;
    margin: 0;
  }

  .hero-tagline {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: .5rem;
    margin-bottom: 0;
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