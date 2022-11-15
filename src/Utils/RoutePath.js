import React from "react";
import { useUniqueId } from "../hook/useId";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import PlantCare from "../Pages/PlantCare";
import Shop from "../Pages/Shop";

// const Home=lazy(()=>import('../Pages/Home'))
// const Shop=lazy(()=>import('../Pages/Shop'))
const routPath= [{

    id:useUniqueId,
    title:'Home',
    path:'/home',
    element:<React.Suspense fallback={<React.Fragment>Loading....</React.Fragment>}><Home/></React.Suspense>,
    private:false,
    hidden:false,
},
{

    id:useUniqueId,
    title:'Shop',
    path:'/shop',
    element:<React.Suspense fallback={<React.Fragment>Loading....</React.Fragment>}><Shop/></React.Suspense>,
    private:false,
    hidden:false,
},
{

    id:useUniqueId,
    title:'Plantcare',
    path:'/plantcare',
    element:<React.Suspense fallback={<React.Fragment>Loading....</React.Fragment>}><PlantCare/></React.Suspense>,
    private:false,
    hidden:false,
}
,
{

    id:useUniqueId,
    title:'Blogs',
    path:'/blogs',
    element:<React.Suspense fallback={<React.Fragment>Loading....</React.Fragment>}><Blogs/></React.Suspense>,
    private:false,
    hidden:false,
},
{

    id:useUniqueId,
    title:'Login',
    path:'/login',
    element:<React.Suspense fallback={<React.Fragment>Loading....</React.Fragment>}><Login/></React.Suspense>,
    private:false,
    hidden:false,
}





]