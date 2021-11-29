import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
  DocumentProps,
} from "next/document";

type Props = Record<string, unknown> & DocumentProps;

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/CalSans-SemiBold.ttf" rel="stylesheet" />
          <link href="/fonts/Inter-Regular.otf" rel="stylesheet" />
        </Head>
        <body className="bg-white dark:bg-gray-800 pb-32">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
