
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Ticketing } from "./Pages/Ticketing";
import { ClassManage } from "./Pages/ClassManage";
import { Stationary } from "./Pages/Stationary";
import { Exam } from "./Pages/exam";
import { UsersManegment } from "./Pages/UsersManegment";
import { UserProfile } from "./Pages/UserProfile";
import { PresentUser } from "./Pages/PresentUser";
import { HomeWork } from "./Pages/HomeWork";
import { HomeWorkChart } from "./Pages/HomeWork/HomeWorkChart/index";
import { Grades } from "./Pages/grades";
import { GradesChart } from "./Pages/grades/gradesCharts/index";
import { TicketingChat } from "./Pages/TicktingChat";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/Ticketing',
    element: <Ticketing />
  },
  {
    path: '/Ticketing/chat',
    element: <TicketingChat />
  },
  {
    path: '/HomeWork',
    element: <HomeWork />
  },
  {
    path: '/HomeWork/charts',
    element: <HomeWorkChart />
  },
  {
    path: '/grades',
    element: <Grades />
  },
  {
    path: '/grades/charts',
    element: <GradesChart />
  },
  {
    path: '/ClassManage',
    element: <ClassManage />
  },
  {
    path: '/exam',
    element: <Exam />
  },
  {
    path: '/PresentUser',
    element: <PresentUser />
  },
  {
    path: '/UsersManegment',
    element: <UsersManegment />
  },
  {
    path: '/UserPro',
    element: <UserProfile />
  },
  {
    path: '/Stationary',
    element: <Stationary/>
  },
]);

export default function Router() {
  return (
    <RouterProvider router={routes} />
  );
}
