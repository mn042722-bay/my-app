import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Static Site Generation",
  };

  export default function SSG() {
    return (
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです。
        </p>
      </main>
    );
  }