import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { CleanA } from "../../atoms/CleanA/CleanA";
import { CodeBlock } from "../../atoms/CodeBlock/CodeBlock";
import { Page } from "../../atoms/Page/Page";
import { Title } from "../../atoms/Title/Title";
import img from "./img/my-beloved-software-i-take-for-granted.gif";

export type BlogDataProps = {
  title: string;
  date: Date;
  id: string;
  preview: string;
  body: JSX.Element[];
  read: number;
};

export const blogData: BlogDataProps[] = [
  {
    title: "My beloved software I take for granted",
    date: new Date("2021-09-12"),
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
  {
    title: "Make Postman more useful",
    date: new Date("2021-09-18"),
    id: "make-postman-more-useful",
    preview: "Okay, Postman is not one of the tools I enjoy working with",
    body: [
      <p>
        Okay, Postman is not one of the tools I enjoy working with. But even so,
        I fallback to it when I get tired of pasting bearer tokens into{" "}
        <code>curl</code>. A recent struggle I had, involved grabbing request
        body, constructing a URL from it and then have it open in the browser.
        Feels like a pretty basic task, but it seem Postman does not support
        this(
        <CleanA href="https://community.postman.com/t/using-window-open-in-pre-request-script/9237">
          some postman thread
        </CleanA>
        ,{" "}
        <CleanA href="https://stackoverflow.com/questions/67105878/can-postman-automatically-open-a-new-browser-window-after-response">
          some stackoverflow post
        </CleanA>
        ,{" "}
        <CleanA href="https://github.com/postmanlabs/postman-app-support/issues/2030">
          some Github issue telling the feature exist but is broken
        </CleanA>
        ). I could write a script, but in the future I plan on sharing this
        collection; and arbitrary scripts are tedious to maintain.
      </p>,
      <p>
        So in order to fix this I need three things:
        <ol>
          <li>Something that can take an URL and open it in a browser</li>
          <li>Something in Postman that communicates with the above</li>
          <li>
            Something that let&apos;s me execute a request in Postman and then
            trigger the above
          </li>
        </ol>
        3. is fairly easy and can be setup using the{" "}
        <CleanA href="https://learning.postman.com/docs/writing-scripts/test-scripts/">
          Postman test feature
        </CleanA>
        , allowing for writing post-request scripts in JS. 1. is where I took
        the hacky highway, creating a simple node server:
        <CodeBlock>
          {`
const express = require("express");
const app = express();
const open = require("open");
const bodyParser = require("body-parser");

const port = 1;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/open-url", (req, res) => {
  open(req.body.q);
  res.send("Opened url!");
});

app.listen(port, () => {
  console.log(\`Listening at http://localhost:\${port}\`);
});
          `}
        </CodeBlock>
        2. could then we achieved by making a mock API call as a part of a
        Postman collection–exported as curl it looked like:
        <CodeBlock>
          {`
curl --location --request GET 'http://localhost:1/open-url' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'q=https://gustavfredriksson.com'
          `}
        </CodeBlock>
      </p>,
    ],
    read: 7,
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
              width: "100%",
            }}
          >
            <Title>{post.title}</Title>
            {post.body}
          </div>
        </div>
      </Page>
    </>
  );
};
