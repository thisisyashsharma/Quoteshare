import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
function App() {
    return (
        <Layout>
            <Suspense fallback={<div className="centered"> <LoadingSpinner /> </div> } >
          <Switch>
              <Route path="/" exact>
                <Redirect to="/quotes" />
              </Route>
              <Route path="/quotes" exact>
                <AllQuotes />
              </Route>
              <Route path="/quotes/:quoteId">
                <QuoteDetail />
              </Route>
              <Route path="/new-quote">
                <NewQuote />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
          </Switch>
            </Suspense>
        </Layout>
      );
    }
    
    export default App;
    
    
    
  //  To redeploy , the teminal commands are 
  // - npm run build 
  // - firebase deploy only,
  // it has already firebase init