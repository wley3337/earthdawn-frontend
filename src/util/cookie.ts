const getCookie = (name: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  // debugger;
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(";").shift();
    console.log({ cookieValue });
    return cookieValue;
  }
};

export const getXCSRFToken = (): string => {
  return getCookie("csrf_access_token") ?? "";
};
