import { useEffect, useState } from "react";

const useHandlePage = ({ status }) => {
  const [pageOptions, setPageOptions] = useState({
    link: "",
    nextStatus: "",
    backLink: ""
  });

  const handlePage = (status) => {
    switch (status) {
      case "Todo":
        return setPageOptions({
          link: "/on-progress",
          nextStatus: "On Progress",
          backStatus: "Todo",
          backLink: "/"
        });
      case "On Progress":
        return setPageOptions({
          link: "/completed",
          nextStatus: "Completed",
          backStatus: "On Progress",
          backLink: "/"
        });
      case "Completed":
        return setPageOptions({
          link: "/",
          nextStatus: "",
          backStatus: "On Progress",
          backLink: "/on-progress"
        });
    }
  };
  useEffect(() => {
    handlePage(status);
  }, [status]);
  return { pageOptions };
};

export default useHandlePage;
