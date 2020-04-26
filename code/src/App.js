import React from "react"
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ScanBarcode } from "components/ScanBarcode"
import { food } from './reducers/food'

const reducer = combineReducers({
  food: food.reducer
})

export const store = configureStore({ reducer })

// const onDetected = (code) => {
//   console.log(`Code: ${code}`);
//   fetch(`https://world.openfoodfacts.org/api/v0/product/${code}.json`)
//     .then((data) => data.json())
//     .then((json) => {
//       console.log(json);
//     });
// };

export const App = () => {
  return (
    <Provider store={store}>
      <ScanBarcode />
    </Provider>
  );
};


// export const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <label>
//           {" "}
//         Test codes here:{" "}
//           {/* <input type="text" onChange={(e) => onDetected(e.target.value)}></input> */}
//         </label>
//         <p>
//           {" "}
//         Use the field above to test barcodes manually and keep an eye on your
//         console in the browser. i.e. Type 7311070347272 - Pågen Gifflar. Yum
//       </p>
//         <ScanBarcode />
//         {/* <BarcodeScanner onDetected={onDetected}></BarcodeScanner> */}
//       </div>
//     </Provider>
//   );
// };
