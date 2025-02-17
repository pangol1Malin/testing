
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function Page() {
  return (
    <Layout title="évasion">
      <article className="prose dark:prose-invert max-w-none">
        <h1>évasion</h1>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
        
        <h2 id="aeaze">aeaze</h2>
        <ReactMarkdown>
          {`azeazeazeazeazeaze
# Titre
> citation`}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}