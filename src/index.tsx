import {render} from "react-dom";
import {App} from "app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider/ui/ThemeProvider";
// import i18n (needs to be bundled ;)) 
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)