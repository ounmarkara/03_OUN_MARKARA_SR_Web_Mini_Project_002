import "../../globals.css";

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">{children}</body>
    </html>
  );
}
