
export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 py-12 text-center">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-xl font-bold text-white">
            T
          </div>
        </div>

        <p className="mb-4 text-gray-400">
          Designed &amp; built by Tarık&nbsp;Atasoy
        </p>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
