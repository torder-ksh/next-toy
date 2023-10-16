import Lnb from "@/app/common/Lnb";
import Header from "./common/Header";
import Providers from "./providers";
import "@/styles/global.scss";

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
              <Lnb />
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
