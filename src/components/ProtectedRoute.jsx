import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.client.user);

  const storedToken =
    localStorage.getItem('token') ||
    sessionStorage.getItem('token');

  const isWaitingForVerification =
    Boolean(storedToken) && !user?.email;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isWaitingForVerification) {
          return (
            <div className="flex min-h-[500px] items-center justify-center bg-[#FAFAFA]">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E6E6E6] border-t-[#23A6F0]" />
            </div>
          );
        }

        if (user?.email) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location.pathname,
              },
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;