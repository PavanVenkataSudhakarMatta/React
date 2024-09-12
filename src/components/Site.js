import { Outlet, useLocation, useParams } from "react-router-dom";

export function Home() {
  return <p> This is Home page</p>;
}

export function About() {
  let location = useLocation();
  console.log(location);

  let queryParams = new URLSearchParams(location.search);

  console.log(queryParams);

  let page = queryParams.get("page");
  let term = queryParams.get("term");
  console.log(page);
  console.log(term);

  return (
    <>
      <p> This is About page {page}</p>
      <Outlet />
    </>
  );
}

export function Contact() {
  let { id } = useParams();
  console.log(id);

  return (
    <>
      <p> This is Contact page</p>
    </>
  );
}

export function ErrorPage() {
  return <p> This is Error page</p>;
}

export function Career() {
  return <p> This is Career page</p>;
}
