import Head from "next/head";
import MyPost from "../components/MyPost";
import CardPost from "../components/CardPost";
import { useState } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Dummy from "../utils/posts.json";
import head from "next/head";

export default function Home() {
  const [posts, setPosts] = useState(Dummy);
  return (
    // setting gradient warna abu abu dari 600 ke 900
    <Layout>
      <head>
        <title>Home &mdash; Epicweb</title>
      </head>
      <Container>
        <MyPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
