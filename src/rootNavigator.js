import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Contacts from './components/contacts';
import Details from './components/details';



const Stack = createStackNavigator({
     contacts : {
           screen : Contacts,
           navigationOptions : {
                title : "Contact"
           }
          },
     details : {
           screen : Details,
           navigationOptions : {
               title : "Details"
          }
          }
});


export default createAppContainer(Stack);



// {
//     headerMode: "none",
//     mode: Platform.OS === "ios" ? "modal" : "card",
//     defaultNavigationOptions: {
//       gesturesEnabled: false
//     },
//     transitionConfig: TransitionConfiguration
//   }