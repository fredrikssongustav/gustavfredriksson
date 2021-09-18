import React from "react";
import styled from "styled-components";
import { Page } from "../atoms/Page/Page";
import { CleanA } from "../atoms/CleanA/CleanA";
import { blogData, BlogDataProps } from "../pages/Blog/Blog";
import { useTrackPage } from "../atoms/useTrackPage/useTrackPage";
import { Title } from "../atoms/Title/Title";

const HeaderContainer = styled.div``;

const ResponsiveContentSwapper = styled.div`
  /* Regular styling */
  @media (min-device-width: 700px) {
    flex-direction: row;
    justify-content: flex-end;
    display: flex;

    ${HeaderContainer} {
      display: flex;
      flex-grow: 1;
      justify-content: center;
    }
  }

  /* Styling for smaller screens */
  @media (max-device-width: 700px) {
    flex-direction: column;

    ${HeaderContainer} {
      margin-bottom: 50px;
    }
  }
`;

const BlogItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  margin-bottom: 20px;

  i,
  span {
    color: ${(props) => props.theme.fg};
  }
`;

const BlogItem = ({
  title,
  date,
  id,
  preview,
  read,
}: Omit<BlogDataProps, "body">) => {
  return (
    <CleanA href={`/blog/${id}`} title={title}>
      <BlogItemBlock>
        <b>{title}</b>
        <i>{`${preview.slice(0, 25).trimEnd()}...`}</i>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <i>{date.toDateString()}</i>
          <div>
            <span>{`⏱ ${read}'`}</span>
          </div>
        </div>
      </BlogItemBlock>
    </CleanA>
  );
};

export const BlogPreview: React.FC = () => {
  useTrackPage();

  return (
    <Page>
      <ResponsiveContentSwapper>
        <HeaderContainer>
          <Title>Blog.</Title>
        </HeaderContainer>
        <div
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {blogData
            .sort((a, b) => b.date.valueOf() - a.date.valueOf())
            .map(({ id, title, preview, date, read }) => {
              return <BlogItem {...{ id, title, preview, date, read }} />;
            })}
        </div>
      </ResponsiveContentSwapper>
    </Page>
  );
};
