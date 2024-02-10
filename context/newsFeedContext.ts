import { createContext } from "react";

const NewsFeedContext = createContext({
  isChanged: false,
  setIsChanged: (isChanged: boolean) => { },
});

export default NewsFeedContext;

