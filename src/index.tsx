import {multiply} from "./test";
import {render} from "react-dom";
import {App} from "./components/App/App";

multiply()

render(
    <App/>,
    document.getElementById('root')
)