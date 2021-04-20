export default function Home() {
  return <h1>Index</h1>;
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const episodes = await response.json();

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8,
  };
}
