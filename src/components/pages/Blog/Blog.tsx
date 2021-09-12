import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { CleanA } from "../../atoms/CleanA/CleanA";
import { Page } from "../../atoms/Page/Page";
import { Title } from "../../atoms/Title/Title";
import img from "./img/my-beloved-software-i-take-for-granted.gif";

export type BlogDataProps = {
  title: string;
  date: string;
  id: string;
  preview: string;
  body: JSX.Element[];
  read: number;
};

export const blogData: BlogDataProps[] = [
  {
    title: "My beloved software I take for granted",
    date: "2021-09-12",
    id: "my-beloved-software-i-take-for-granted",
    preview:
      "Every once in a while we should pause and appreciate what we have",
    body: [
      <p>
        Every once in a while we should pause and appreciate what we have. It is
        a cliché really, but also a good mental exercise to figure out what
        brings actual value to one&apos;s life. With respect to tooling,
        it&apos;s likely to think of your favourite IDE, note carrier or version
        control tooling. All very important, but also equally known for their
        value.
      </p>,
      <p>
        I want to shed light on the obscure tooling, that thing that likely
        started as someone&apos;s backyard project and seldom updates but
        nonetheless keeps on working. For me that tooling is{" "}
        <CleanA href="https://www.spectacleapp.com/">Spectacle</CleanA>.
        Spectacle is minimalistic, it is plug-n-play, never disturbs it&apos;s
        users and has two features: re-locate and re-size windows.
      </p>,
      <p>
        Ever witnessed the near-torture experience of seeing someone screenshare
        and trying to find the re-size corner? Well, that wasn&apos;t me.
        Though, MacOS do provide similar features, but satisfactory enough for
        me, aspiring to be the Gandalf of window re-sizing 🧙🏽‍.
      </p>,
      <p>Actual footage of me flexing these features:</p>,
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={img}
          title="Gif of me re-sizing windows"
          alt="Gif of me re-sizing windows"
          style={{ width: "100%", maxWidth: "600px" }}
        />
      </div>,
    ],
    read: 5,
  },
];

export const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const post = blogData.find((p) => p.id === id);

  if (!post) return <Redirect to="" />;

  return (
    <>
      <Page>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
            }}
          >
            <Title>{post.title}</Title>
            <p>{post.date}</p>
            {post.body}
          </div>
        </div>
      </Page>
    </>
  );
};
