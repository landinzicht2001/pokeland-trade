export const metadata = {
  title: 'PokéLand Trade',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>{children}</body>
    </html>
  );
}
