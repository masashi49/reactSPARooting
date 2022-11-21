import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About";
import Contact from "./Contact"
import NotFound from "./NotFound";
import Nav from "./Nav";
// BrowserRouter
// thml5のhistoryAPIを使用している。
// 全てのコンポーネントを格納するための親コンポーネントで、1プロジェクトで1どだけ使える。
// UIとURLの動機を維持する

// Route
// ルーティング先のURLと、そのURLで表示したいコンポーネントを指定する

// exact
// pathに完全に一致するコンポーネントだけ表示できる

// Switch
// pathがURLに一致するコンポーネントだけを表示させる

function App () {
  return (
    <BrowserRouter basename="/calendar">
      {/*<Route path="/" component={ Home } />{/*どちらもHomeを表示できるけどちょっと意味が違う*/ }
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />{/* Routにpathの指定なし */ }
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
