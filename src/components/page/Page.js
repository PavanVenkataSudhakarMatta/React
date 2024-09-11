import { Outlet } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";


export function Home() {
  return <p>This is Home Page</p>;
}

export function About() {
  return (
    <>
      <p>This is About Page</p>

      <Outlet />
    </>
  );
}

export function ErrorPage() {
    return (
      <>
        <p>This is Error Page</p>
        </>
    );
  }

export function Contact() {
 
    let routeparams = useParams()
    console.log(routeparams.id);

    let queryParams = useLocation()
    console.log(queryParams);
    let parms = new URLSearchParams(queryParams.search)
    console.log(parms.get('page'));


  return <p>This is Contact Page</p>;
}

export function Career() {
  return <p>This is Career Page</p>;
}
