import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky left-0 top-0 w-[100%] bg-slate-500  p-3">
        <h1>Page Title</h1>
      </header>
      <div className="flex min-h-screen flex-col items-center justify-between p-7">
        <h1>Main Text</h1>
      </div>
      <footer>
        <h1>Page Footer</h1>
      </footer>
    </>
  );
}
