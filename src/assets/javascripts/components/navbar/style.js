import { css } from 'lit-element';

export const navbarStyle = css`
  .navbar {
    position: relative;
    background-color: #fff;
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--primary-color) !important;
    padding: 0 !important;
  }

  .nav-item {
    display: inline-block;
    list-style: none;
  }

  .navbar a {
    text-decoration: none;
    padding: .75rem 1rem;
    color: #495764;
  }

  .nav-item.active a, .nav-item a:hover {
    color: var(--text-color);
  }

  .nav-item.active::after {
    border-radius: 3px;
    bottom: 0;
    content: '';
    display: block;
    height: 3px;
    left: 0;
    margin: 0 1.25rem;
    right: 0;
    background-color: var(--primary-color);
  }

  .navbar-toggler {
    font-size: 2rem;
    display: none;
    padding: .25rem .5rem !important;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }

  @media (max-width: 575.98px) {
    .navbar-collapse {
      display: none;
      -webkit-transform: translate(900px, 0);
      transform: translate(900px, 0);
      transition: all 0.3s ease;
    }
  
    .navbar-toggler {
      display: inline-block;
    }
  
    .open {
      display: block;
      flex-basis: 100%;
      flex-grow: 1;
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  
    .open .navbar-nav {
      display: flex;
      justify-content: center;
      padding: 1rem 0 0;
      border-top: 1px solid rgba(0, 0, 0, .05);
      margin-top: 1rem;
    }
  }

  @media (min-width: 576px) and (max-width: 600px) {
    .navbar-collapse {
      display: none;
    }
  
    .navbar-toggler {
      display: inline-block;
    }
  
    .open .navbar-nav {
      display: flex;
      justify-content: center;
      padding: 1rem 0 0;
      border-top: 1px solid rgba(0, 0, 0, .05);
      margin-top: 1rem;
    }
  }
  
  @media (min-width: 600px) and (max-width: 767.98px) {
    .navbar-toggler {
      display: none;
    }
  }
`;