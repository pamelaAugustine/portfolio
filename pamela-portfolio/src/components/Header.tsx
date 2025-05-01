import { motion } from "framer-motion";
import { Mail, Menu } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-black shadow-md z-50"
    >
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg">Pamela Augustine</div>
        <div className="flex gap-3">
          <a
            href="https://github.com/pamelaAugustine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
         3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
         0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
         1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 
         1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 
         0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
         0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 
         2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 
         1.653.24 2.873.12 3.176.765.84 1.23 1.91 
         1.23 3.22 0 4.61-2.805 5.625-5.475 
         5.92.42.36.81 1.096.81 2.215 0 1.6-.015 
         2.887-.015 3.286 0 .315.21.69.825.57C20.565 
         22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/pamela-augustine-752822213/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 hover:text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 
         2.239 5 5 5h14c2.761 0 5-2.239 
         5-5V5c0-2.761-2.239-5-5-5zm-11 
         19H5V9h3v10zm-1.5-11.268c-.966 
         0-1.75-.79-1.75-1.764S5.534 
         4.204 6.5 4.204s1.75.79 
         1.75 1.764-.784 1.764-1.75 
         1.764zM20 19h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.869 
         0-2.156 1.46-2.156 2.968V19h-3V9h2.882v1.366h.041c.402-.762 
         1.382-1.562 2.845-1.562 3.042 
         0 3.604 2.003 3.604 4.609V19z"
              />
            </svg>
          </a>

          <a href="mailto:pamela.augustine10@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 text-sm items-center">
        <a href="#work" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">
          Work
        </a>
        <a href="#about" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">
          About
        </a>
        <a href="#contact" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </a>
        <ThemeToggle />
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-black">
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-4 flex flex-col gap-4 text-base px-4">
              <SheetClose asChild>
              <a href="#work" className="hover:underline">
                Work
              </a>
              </SheetClose>
              <SheetClose asChild>
              <a href="#about" className="hover:underline">
                About
              </a>
              </SheetClose>
              <SheetClose asChild>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
              </SheetClose>
              <ThemeToggle />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
