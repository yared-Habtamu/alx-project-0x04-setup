// interface/index.ts

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface HomePageProps {
  message: string;
}

import { PageRouteProps } from "@/interface";

const HomePage: React.FC<PageRouteProps> = ({ message }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HomePage;
export interface PageRouteProps {
  pageRoute: string;
}
