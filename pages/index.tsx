import Head from "next/head";

import Footer from "components/footer";
import Tile from "components/tile";
import Board from "components/board";

export default function Home() {
  let tiles = [];
  for (let i = 0; i < 32; i++) {
    tiles.push(i % 2 == 0 ? "blue" : "red");
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-wrap">
          <Board dimensions={{ x: 25, y: 25 }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
