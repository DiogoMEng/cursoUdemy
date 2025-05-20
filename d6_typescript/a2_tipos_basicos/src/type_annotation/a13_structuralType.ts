type VerifyUserFN = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

export const verifyUser: VerifyUserFN = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Diogo', password: '12345' };
const sentUser = { username: 'Diogo', password: '12345' };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
