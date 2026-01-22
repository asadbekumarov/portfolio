export default function Footer() {
  return (
    <footer className="bg-sapphire-4 text-sapphire-1 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm flex items-center justify-between">
        <p>© {new Date().getFullYear()} Asadbek Umarov. All rights reserved.</p>
        <p className="opacity-80">Built with React, TypeScript, TailwindCSS.</p>
      </div>
    </footer>
  )
}
