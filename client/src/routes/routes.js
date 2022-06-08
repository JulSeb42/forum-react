// Basic pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"
import SearchResults from "../pages/SearchResults"

import Seed from "../pages/Seed"

// Auth
import Signup from "../pages/auth/Signup"
import ThankYou from "../pages/auth/ThankYou"
import Verify from "../pages/auth/Verify"
import Login from "../pages/auth/Login"
import ForgotPassword from "../pages/auth/ForgotPassword"
import ForgotSent from "../pages/auth/ForgotSent"
import ResetPassword from "../pages/auth/ResetPassword"
import Goodbye from "../pages/auth/Goodbye"

// User
import MyAccount from "../pages/user/MyAccount"
import EditAccount from "../pages/user/EditAccount"
import EditPassword from "../pages/user/EditPassword"
import PublicProfile from "../pages/user/PublicProfile"
import AllUsers from "../pages/user/AllUsers"
import Notifications from "../pages/user/Notifications"

// Topics
import TopicDetail from "../pages/topics/TopicDetail"
import NewTopic from "../pages/topics/NewTopic"

// Messages
import AllConversations from "../pages/messages/AllConversations"
import Conversation from "../pages/messages/Conversation"

// Routes
const routes = [
    // Basic pages
    {
        path: "/",
        element: Homepage,
        protected: false,
        anon: false,
    },
    {
        path: "*",
        element: NotFound,
        protected: false,
        anon: false,
    },
    {
        path: "/search-results",
        element: SearchResults,
        protected: false,
        anon: false,
    },

    {
        path: "/seed",
        element: Seed,
        protected: false,
        anon: false,
    },

    // Auth
    {
        path: "/signup",
        element: Signup,
        protected: false,
        anon: true,
    },
    {
        path: "/thank-you",
        element: ThankYou,
        protected: false,
        anon: false,
    },
    {
        path: "/verify/:token/:id",
        element: Verify,
        protected: false,
        anon: false,
    },
    {
        path: "/login",
        element: Login,
        protected: false,
        anon: true,
    },
    {
        path: "/login/forgot-password",
        element: ForgotPassword,
        protected: false,
        anon: true,
    },
    {
        path: "/login/forgot-password/email-sent",
        element: ForgotSent,
        protected: false,
        anon: true,
    },
    {
        path: "/reset-password/:token/:id",
        element: ResetPassword,
        protected: false,
        anon: true,
    },
    {
        path: "/goodbye",
        element: Goodbye,
        protected: false,
        anon: false,
    },

    // User
    {
        path: "/my-account",
        element: MyAccount,
        protected: true,
        anon: false,
    },
    {
        path: "/my-account/edit",
        element: EditAccount,
        protected: true,
        anon: false,
    },
    {
        path: "/my-account/edit-password",
        element: EditPassword,
        protected: true,
        anon: false,
    },
    {
        path: "/users/:username",
        element: PublicProfile,
        protected: false,
        anon: false,
    },
    {
        path: "/all-users",
        element: AllUsers,
        protected: false,
        anon: false,
    },
    {
        path: "/notifications",
        element: Notifications,
        protected: true,
        anon: false,
    },

    // Topics
    {
        path: "/topics/:id",
        element: TopicDetail,
        protected: false,
        anon: false,
    },
    {
        path: "/topics/new-topic",
        element: NewTopic,
        protected: true,
        anon: false,
    },

    // Messages
    {
        path: "/messages",
        element: AllConversations,
        protected: true,
        anon: false,
    },
    {
        path: "/messages/:id",
        element: Conversation,
        protected: true,
        anon: false,
    },
]

export default routes
