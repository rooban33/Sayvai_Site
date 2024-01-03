import { Manrope } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Assistify',
  description: 'AI Startup and Technology Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
