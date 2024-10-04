import './globals.css'; // Import your global styles
import Navbar from "../components/Navbar2";


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
