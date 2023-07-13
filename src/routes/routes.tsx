//Router dom
import { Routes, Route } from "react-router-dom";

//Pages
import { Home } from "../pages/Home";
import { Post } from "../pages/Post";

//Layout
import { DefaultLayout } from "../layout/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>} >
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}