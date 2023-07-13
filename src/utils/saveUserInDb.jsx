import axios from "axios";
import { toast } from "react-hot-toast";

export const saveUserInDB = (name, email) => {
  const user = { name, email };

  axios
    .post("http://localhost:5000/api/v1/users/create-user", user)
    .then((response) => {
      console.log(response.data);
      toast.success("User created successfully!");
    })
    .catch((error) => {
      console.error(error);
      toast.error("Error creating user.");
    });
};
