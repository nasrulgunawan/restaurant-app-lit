import { css } from 'lit-element';

export const mainStyle = css`
  main {
    width: 100%;
    padding: 0 2rem;
  }

  .cards {
    display: grid;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: .5rem .5rem 0 0;
    object-fit: cover;
  }

  .card-text {
    position: relative;
    flex-grow: 1;
    padding: .5rem 0;
  }

  .text-small {
    font-weight: 300;
    font-size: .95rem;
    color: #444;
  }

  .card-title {
    font-weight: 500;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .card-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 575.98px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1200px) and (max-width: 1599.98px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .cards {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;