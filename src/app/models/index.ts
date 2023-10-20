export interface KeyValuePair {
  name: string;
  value: any;
}

export type CardModel = {
  header: string;
  description: string;
  imgURL?: string;
  githubURL?: string;
  techStackList?: string[];
  externalURL?: string;
};

export type ContactMeModel = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export type CookieModel = {
  isPersist: boolean;
  isCookieAnswered: boolean;
  cookieExpiry: number;
};

export type UIState = {
  carouselPosition: number;
  carouselElementCount: number;
  cookie: CookieModel;
  modal: ModalModel;
  isCMS: boolean;
  githubURLCount: number;
  externalURLCount: number;
  techStackCount: number;
};

export interface ModalModel {
  message: string;
  header: string;
  isShow: boolean;
  isError: boolean;
  result: boolean;
  yesCallback: () => void | undefined;
  noCallback: () => void | undefined;
  messageJSX: React.ReactNode;
}

export type ImageModel = {
  name: string;
  extension: string;
  file: File;
};

export type ProjectModel = {
  header?: string | null;
  description?: string | null;
  externalURL?: string[] | undefined;
  githubURL?: string[] | undefined;
  imageURL?: string | null;
  techStacks?: string[] | undefined;
};

export type LoginModel = {
  username: string;
  password: string;
};

export type ResumeModel = {
  id: number;
  company_name: string;
  role: string;
  role_type: string;
  period: string;
  year: string;
  location: string;
  description: string[];
  links?: string[] | undefined;
  is_present: boolean;
};

export type PortFolioState = { modal: ModalModel } & {
  projects: ProjectModel[];
  resume: ResumeModel[];
  contactMes: ContactMeModel[];
};
