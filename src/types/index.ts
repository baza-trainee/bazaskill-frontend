export interface PageProps {
  params: {
    locale: string;
  };
}

export interface DocsPageProps {
  params: {
    locale: string;
    title: string;
  };
}

export interface IdPageProps {
  params: {
    id: string;
    locale: string;
  };
}

export type TAdvantages = {
  id: string;
  title: string;
  text: string;
  icon: string;
};
