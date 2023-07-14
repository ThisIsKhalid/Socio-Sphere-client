import axios from "axios";
import { toast } from "react-hot-toast";

export const saveUserInDB = (name, email) => {
  const user = { name, email };

  axios
    .post(
      "https://socio-sphere-server-nine.vercel.app/api/v1/users/create-user",
      user
    )
    .then(() => {
      toast.success("User created successfully!");
    })
    .catch((error) => {
      console.error(error);
      toast.error("Error creating user.");
    });
};
