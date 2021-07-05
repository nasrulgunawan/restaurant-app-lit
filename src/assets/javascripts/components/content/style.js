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

  x-card {
    flex: 1 1 300px;
    flex-direction: column;
    display: flex;
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    transition: all .5s ease;
    cursor: pointer;
  }

  x-card:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, .07), 1px 6px 12px rgba(39, 44, 49, .04);
    transition: all .4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: .5rem .5rem 0 0;
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