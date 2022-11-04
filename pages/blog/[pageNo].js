import React from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const pagenumber = router.query.pageNo;
  return (
    <>
      <h1>Hello {pagenumber} blog</h1>
    </>
  );
};

export default Blog;
