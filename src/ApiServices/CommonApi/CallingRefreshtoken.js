const handleSecureAction = async () => {
    const newToken = await refreshAccessToken();
    if (newToken) {
      console.log("Token refreshed successfully:", newToken);
    } else {
      console.log("Session expired. Redirecting to login.");
    }
  };
  