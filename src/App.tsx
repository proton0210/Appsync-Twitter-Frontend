import '@aws-amplify/ui-react/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useRoutes } from 'react-router';
import routes from './routes';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedIn } = useSelector((state: any) => state.auth);

  const routing = useRoutes(routes(loggedIn));

  return <>{routing}</>;
}
