import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../screens/Details";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ route }) => {
  const { detail } = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Detalhe"
        component={Detail}
        initialParams={{ detail }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
