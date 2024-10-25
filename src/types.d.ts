export interface Iposts {
  id: string;
  title: string;
  text: string;
  time: string;
}

export interface IAuthor {
  title: string;
  text: string;
}

export interface IPostAPI {
  [key: string]: Iposts;
}

export interface IPosrAddMutation {
  author: IAuthor;
}
