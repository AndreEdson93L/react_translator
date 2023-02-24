//#region AppContext
/*The code wraps the entire application with a context provider 
(UserProvider) so that all components have access to its state and methods.
It imports the UserProvider component from the "./UserContext" file and 
defines a functional component named
AppContext that returns UserProvider with the children prop passed in 
as its child component.
*/
//#endregion

import UserProvider from "./UserContext";

const AppContext = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default AppContext;
