import {css} from 'lit-element';

export const cardStyle = css`
  .post-header {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
  }

  a.card {
    text-decoration: none;
    color: inherit;
  }

  .card-img {
    position: relative;
    flex: 1 1 auto;
    border-radius: .25rem;
  }

  .card-body {
    flex: 0 1 250px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-footer {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: flex-end;
  }

  .card-footer img {
    display: flex;
    flex-wrap: wrap-reverse;
    width: 2rem;
    height: 2rem;
  }

  .card-footer p {
    line-height: 2rem;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .rating .icon {
    margin-right: 0.25rem;
    color: var(--primary-color);
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
  }

  .verified-restaurant {
    position: absolute;
    top: .45rem;
    right: .45rem;
  }

  .text-green {
    color: #41c485;
  }
`;