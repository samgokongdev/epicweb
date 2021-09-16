import Container from "../components/Container";
import CardPost from "../components/CardPost";
import Layout from "../components/Layout";
import Dummy from "../utils/posts.json";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

export default function Posts() {
  const [posts, setPosts] = useState(Dummy);

  return (
    <Layout>
      <head>
        <title>Posts &mdash; Epicweb</title>
      </head>
      <Container>
        <SectionHeader>UI Design</SectionHeader>
        {!posts.length ? (
          <div className="text-center py-10">
            <h2 className="text-center text-6xl">No result 😥</h2>
            <p className="mt-4 text-center text-xl text-white/50 md:w-6/12 w-full mx-auto">
              We couldn’t find any posts with the keyword `yahahahayuk`. Please
              try another keyword.
            </p>
          </div>
        ) : (
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Layout>
  );
}
