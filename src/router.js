import Vue from "vue";
import Router from "vue-router";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Dashboard from "./components/Dashboard";
import CreateNotes from "./components/CreateNotes";
import DisplayNotes from "./components/DisplayNotes";
import UpdateNote from "./components/UpdateNote";
import Trash from "./components/Trash";
import CreateLabel from "./components/CreateLabel";
import GetLabel from "./components/GetLabel";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/forgotPassword",
      name: "ForgotPassword",
      component: ForgotPassword,
    },
    {
      path: "/resetPassword/:token",
      name: "ResetPassword",
      component: ResetPassword,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      children: [
        {
          path: "/createNotes",
          component: CreateNotes,
        },
        {
          path: "/displayNotes",
          component: DisplayNotes,
        },
        {
          path: "/updateNotes",
          component: UpdateNote,
        },
        {
          path: "/trash",
          component: Trash,
        },
        {
          path: "/archive",
          component: Trash,
        },
        {
          path: "/createLabel",
          component: CreateLabel,
        },
        {
          path: "/getLabel",
          component: GetLabel,
        },
      ],
    },
  ],
});
