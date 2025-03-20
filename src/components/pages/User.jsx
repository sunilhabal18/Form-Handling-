// Developed by sunil habal, date:-18/03/2025
// This is the Dynamic Routering Page..



import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  return <div className=" text-center mt-10 text-4xl text-red-500 font-bold">The user name is {params.username}...</div>;
};
export default User;
