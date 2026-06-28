export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t py-6 mt-12">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} MyAgency. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}