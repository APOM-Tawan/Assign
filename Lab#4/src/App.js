import TodoPage from "./Pages/TodoPage";
import {Route, Routes} from 'react-router-dom';
import Calendar from '../src/Pages/Calendar';
import Homepage from '../src/Pages/Homepage';
import TodayPage from '../src/Pages/Todaypage';
function App(){
    return (
        <Routes>
          <Route exect path="/" element ={<Homepage/>} />
          <Route path="/todo" element ={<TodoPage/>} />
          <Route path="/today" element ={<TodayPage/>} />
          <Route path="/calendar" element ={<Calendar/>} />
        </Routes>
    );
}
export default App;