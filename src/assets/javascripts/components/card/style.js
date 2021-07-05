import { css } from 'lit-element';

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

  .card {
    flex: 1 1 300px;
    flex-direction: column;
    display: flex;
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    transition: all .5s ease;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 8px 28px 50px rgba(39, 44, 49, .07), 1px 6px 12px rgba(39, 44, 49, .04);
    transition: all .4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }

  .card-img {
    position: relative;
    flex: 1 1 auto;
    border-radius: .25rem;
  }

  .card-body {
    flex: 0 1 200px;
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