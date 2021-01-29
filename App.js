import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AccountContainer from "./Components/Account/AccountContainer";
import SearchContainer from "./Components/Search/SearchContainer";
import ListContainer from "./Components/List/ListContainer";
import { Provider as PaperProvider } from "react-native-paper";

//redux
// npm i react-redux redux redux-persist redux-thunk
//npm i redux-devtools-extension
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/RootReducer";

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = applyMiddleware(thunk);

const composeEnhacers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer, composeEnhacers(middleware));

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="List" component={ListContainer} />
            <Tab.Screen name="Search" component={SearchContainer} />
            <Tab.Screen name="Account" component={AccountContainer} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
