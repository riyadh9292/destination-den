import { Redirect, Route } from "react-router";

function PrivateRoute({ children, ...rest }) {
  /* getting user from localstorage or provide an empty object */
  const localUser = localStorage.getItem("user");
  const user = JSON.parse(localUser) || {};
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
