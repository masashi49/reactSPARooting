// hrefを使うと、ページ全体が更新されてしまう。
// Linkコンポーネントを使用する事でコンポーネントのみ更新されます。
// Linkを使用する事で、ページの再読み込みがなくなった。
// NavLinkを使用すると、現在のURLと一致するNavLinkにclass名を付与できる。

// exact すると、完全一致の箇所にだけclass名が付与される

import { Link, NavLink } from "react-router-dom"

function Nav () {
  return (
    <ul>
      <li>
        <Link to="/">HOME</Link>
        <NavLink activeClassName="active" to="/" exact>HOME</NavLink>
        <NavLink activeStyle={ {
          color: 'red',
        } } to="/" exact>HOME</NavLink>
      </li>
      <li>
        <Link to="/about">About</Link>
        <NavLink activeClassName="active" to="/about">About</NavLink>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
        <NavLink activeClassName="active" to="/contact">Contact</NavLink>
      </li>

    </ul>

  );
}

export default Nav;
