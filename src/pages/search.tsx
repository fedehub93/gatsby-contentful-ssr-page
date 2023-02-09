import React from "react";
import { GetServerData, PageProps } from "gatsby";

type ServerDataProps = {
  title: string;
};

const Search = ({
  serverData,
}: PageProps<object, object, unknown, ServerDataProps>): JSX.Element => (
  <h1>{serverData.title}</h1>
);

export default Search;

export const getServerData: GetServerData<ServerDataProps> = async (props) => {
  return {
    props: {
      title: "Test SSR",
    },
  };
};
