import { useEffect } from "react";
import CardFilterContainer from "../components/CardFilterContainer";
import { useLocation } from "react-router-dom";

export default function PackagesPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <CardFilterContainer />
    </div>
  );
}
