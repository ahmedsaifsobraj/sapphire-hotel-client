import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="my-20">
      <h1 className="text-center font-extralight text-6xl mb-12">404</h1>
      <p className="text-center font-extralight text-6xl mb-12">Not Found</p>
      <p className="text-center  text-yellow-600"><Link to='/'><FontAwesomeIcon icon={faArrowLeft} /> Go back to home</Link></p>
    </div>
  );
}