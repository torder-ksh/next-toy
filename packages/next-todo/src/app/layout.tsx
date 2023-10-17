import Header from "./common/Header";
import Providers from "./providers";
import "@/styles/global.scss";
import HydratedLnb from "./common/HydratedLnb";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <div className="flex flex-row">
            <div className="flex">
              <HydratedLnb />
            </div>
            <div>
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
