import React from "react";
import * as Swap from "swap-sdk";

// mode
const mode = "production";

/* @jloup
As a general rule : if you do not specify payment_type in configuration, everything is optional even delivery address.
- Buying domain is a custom flow, you must set payment_type=iov and delivery_address
- Buying IOVs: you can leave payment_type empty and set currency=iov
*/

// configuration for buying a starname
const configStarname = {
   payment_type: "iov",
   email_editable: true,
};
// configuration for buying IOV tokens
const configTokens = {
   email_editable: true,
   currency: "iov",
   amount: 25,
   amount_editable: true,
};

// embedded widget
const embeddedStarname = new Swap.Widget( {
   type: "embed",
   embedContainerId: "div-starname",
   mode: mode,
   config: configStarname,
} );
const embeddedTokens = new Swap.Widget( {
   type: "embed",
   embedContainerId: "div-tokens",
   mode: mode,
   config: configTokens,
} );

// modal buttons
const modalButtonStarname = new Swap.Widget( {
   type: "modal",
   buttonId: "button-starname",
   mode: mode,
   config: configStarname,
} );
const modalButtonTokens = new Swap.Widget( {
   type: "modal",
   buttonId: "button-tokens",
   mode: mode,
   config: configTokens,
} );

// modal spans
const modalSpanStarname = new Swap.Widget( {
   type: "modal",
   buttonId: "span-starname", // use buttonId despite applyling to a span
   mode: mode,
   config: configStarname,
} );
const modalSpanTokens = new Swap.Widget( {
   type: "modal",
   buttonId: "span-tokens", // use buttonId despite applyling to a span
   mode: mode,
   config: configTokens,
} );

// styles
const margin = {
   margin: "10px",
};
const styleDiv = {
   display: "flex",
   justifyContent: "space-between",
   width: "100%",
};
const styleEmbedded = {
   border: "1px solid red",
   height: "67%",
   width: "49%",
};
const styleSpan = {
   border: "1px solid black",
   backgroundColor: "black",
   color: "white",
};


class App extends React.Component {
   componentDidMount() {
      // initializations
      [
         embeddedStarname,
         embeddedTokens,
         modalButtonStarname,
         modalButtonTokens,
         modalSpanStarname,
         modalSpanTokens,
      ].forEach( savitar => savitar.init() );
   }


   render() {
      return (
         <div style={margin}>
            <p>
               Check out Savitar's <a href="https://github.com/savitar-exchange/swap-sdk" target="_blank" rel="noopener noreferrer">swap-sdk</a> for more configuration options and event listener documentation.
            </p>

            <p>
               The code for this web page is <a href="https://github.com/iov-one/savitar-widgets/blob/master/src/App.js" target="_blank" rel="noopener noreferrer">here</a>.
            </p>

            <fieldset style={margin}>
               <legend>Modal Widget</legend>
               <div style={styleDiv}>
                  <button id="button-starname">
                     Buy A Starname
                  </button>

                  <button id="button-tokens">
                     Buy IOV Tokens
                  </button>

                  <span id="span-starname" style={styleSpan}>
                     Buy A Starname
                  </span>

                  <span id="span-tokens" style={styleSpan}>
                     Buy IOV Tokens
                  </span>
               </div>
            </fieldset>
            <fieldset style={margin}>
               <legend>Embedded Widget</legend>
               <div style={styleDiv}>
                  <div id="div-starname" style={styleEmbedded} />

                  <div id="div-tokens" style={styleEmbedded} />
               </div>
            </fieldset>
         </div>
      );
   }
}


export default App;
