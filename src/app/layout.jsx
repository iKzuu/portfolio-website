import Particles from "@/components/animations/Particles/Particles";
import { poppins } from "../lib/font";
import "./globals.css";

export const metadata = {
  title: "Anang Setiaji",
  description: "Website Portfolio milik Anang Setiaji seorang Forntend Developer",
  icons: {
    icon: '/images/me-kazuma.svg'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <div className="relative min-h-screen w-full overflow-x-clip">
          <div className="fixed inset-0 z-0 w-full h-screen">
              <Particles 
                  particleColors={['#ffffff', '#ffffff']}
                  particleCount={1000}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={100}
                  moveParticlesOnHover={false}
                  alphaParticles={false}
                  disableRotation={false}
              />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}
