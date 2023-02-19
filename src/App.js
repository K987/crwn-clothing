import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
import { useAppDispatch } from "./store/hook";
import { setCurrentUser } from "./store/user/user.slice";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

const App = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        const userPayload = user && (({accessToken, email}) => ({accessToken, email}))(user);
        dispatch(setCurrentUser(userPayload));
        if (user) {
            createUserDocumentFromAuth(user);
        }
    })
    return unsubscribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //dispatch is immutable

  return (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path="auth" element={<Authentication />}/>
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
  );
};

export default App;
