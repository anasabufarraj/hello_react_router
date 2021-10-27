import { Route, Switch } from 'react-router-dom';
import AdminArticles from './articles';
import AdminUsers from './users';
import Sidebar from './sidebar';

function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
      <Switch>
        <Route path="/admin/articles" component={AdminArticles} />
        <Route path="/admin/users" component={AdminUsers} />
      </Switch>
    </div>
  );
}

export default Dashboard;
