import * as React from "react";
import * as ReactDom from "react-dom/client";
import FormCard from "./components/form-with-input-validation/form-card";

const App = () => {
    return <>
        <FormCard />
    </>
}

const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(<App />);