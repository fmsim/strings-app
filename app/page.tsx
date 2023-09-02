import Link from "next/link";

function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-2 p-5 w-full max-w-xs bg-slate-800 rounded-lg">
        <div className="text-center my-4">
          <h1>Strings</h1>
        </div>
        <div>
          <Link
            href="/signin"
            className="bg-slate-900 my-4 p-3 rounded-lg block"
          >
            Sign in
          </Link>
        </div>
        <div>
          <Link
            href="/signup"
            className="bg-slate-900 my-4 p-3 rounded-lg block"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
