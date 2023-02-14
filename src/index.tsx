import {multiply} from "./test";
import {render} from "react-dom";
import {Counter} from "./components/Counter/Counter";

multiply()

render(
    <Counter/>,
    document.getElementById('root')
)