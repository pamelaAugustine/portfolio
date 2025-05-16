// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center text-sm text-muted-foreground py-8">
      <p>
        © {new Date().getFullYear()} Pamela Augustine. All rights reserved.
      </p>
    </footer>
  );
}
