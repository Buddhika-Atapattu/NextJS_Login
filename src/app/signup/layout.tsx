import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div className="container">
            {children}
        </div>
      </section>
    )
  }