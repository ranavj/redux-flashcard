import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import { Topics } from './features/topics/topics';
import { NewTopicForm } from './Components/NewTopicForm';
import { Topic } from './features/topics/topic';
import { Quizzes } from './features/quizzes/quizzes';
import { NewQuizForm } from './Components/NewQuizForm';
import { Quizze } from './features/quizzes/quizze';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/topics">
          <TopicsRoute />
        </Route>
        <Route path="/quizzes">
          <QuizzsRoute />
        </Route>
      </Switch>
    </Router>
  );
}

function TopicsRoute() {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match?.path}/new`}>
          <NewTopicForm />
        </Route>
        <Route path={`${match?.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={`${match?.path}`}>
          <Topics />
        </Route>
      </Switch>
    </>
  )
}

function QuizzsRoute() {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match?.path}/new`}>
          <NewQuizForm />
        </Route>
        <Route path={`${match?.path}/:quizId`}>
          <Quizze />
        </Route>
        <Route path={`${match?.path}`}>
          <Quizzes />
        </Route>
      </Switch>
    </>
  )
}

export default App;
