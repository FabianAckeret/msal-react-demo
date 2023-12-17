import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

export const WelcomeName = () => {
  const { instance } = useMsal();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentAccount = instance.getActiveAccount();

    if (currentAccount) {
      setUsername(currentAccount.username);
    }
  }, [instance]);

  return <Typography variant="h6">Welcome, {username}</Typography>;
};
