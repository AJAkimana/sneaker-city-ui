const localUser = localStorage.user;

export const getLocalUser = () => {
  let user = {};
  if (localUser) user = JSON.parse(localUser);
  return user;
};
