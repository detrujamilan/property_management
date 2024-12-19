import './App.css'
import {Routes, Route} from "react-router-dom";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import SignIn from "@/pages/signin/SignIn.tsx";
import SignUp from "@/pages/signup/SignUp.tsx";
import Layout from "@/pages/layout/Layout.tsx";
import AllOrders from "@/pages/all-orders/AllOrders.tsx";
import SubscriptionPlan from "@/pages/subscription-plan/SubscriptionPlan.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/all-orders" element={<AllOrders/>}/>
                    <Route path="/subscription-plan" element={<SubscriptionPlan/>}/>
                </Route>
                <Route path="signin" element={<SignIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Routes>
        </>
    )
}

export default App
