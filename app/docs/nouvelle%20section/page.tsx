
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function Page() {
  return (
    <Layout title="Nouvelle Section">
      <article className="prose dark:prose-invert max-w-none">
        <h1>Nouvelle Section</h1>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
        
        <h2 id="nouvelle%20sous-section">Nouvelle Sous-section</h2>
        <ReactMarkdown>
          {`# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation

# Contenu Rédigié

> Citation`}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}