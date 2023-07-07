import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <body className="flex flex-col h-screen">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </body>
  );
}

export default App;
