import { useParams } from "react-router";

const SigleBooksDetails = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1>SigleBooksDetails</h1>
    </div>
  );
};

export default SigleBooksDetails;
