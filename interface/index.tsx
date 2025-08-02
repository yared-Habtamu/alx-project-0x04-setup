import Button from "@/components/common/Button";
import { useRouter } from "next/router";
//interface/index.tsx - 

export default function Home() {
  const router = useRouter();

  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

export interface PageRouteProps {
  pageRoute: string;
}

export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}