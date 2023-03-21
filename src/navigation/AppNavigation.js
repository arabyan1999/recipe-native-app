import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer' 
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Recipe from '../screens/Recipe';
import RecipesList from '../screens/RecipesList';
import DrawerContainer from '../screens/DrawerContainer';
import IngredientScreen from '../screens/Ingredient';
import SearchScreen from '../screens/Search';
import IngredientsDetailsScreen from '../screens/IngredientsDetails';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'bold',
                    textAlign: 'center',
                    alignSelf: 'center',
                    flex: 1,
                }
            }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Categories' component={Categories}/>
            <Stack.Screen name='Recipe' component={Recipe}/>
            <Stack.Screen name='RecipesList' component={RecipesList} />
            <Stack.Screen name='Ingredient' component={IngredientScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
        </Stack.Navigator>
    )
}

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerPosition='left'
            initialRouteName='Main'
            drawerStyle={{
                width: 250
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={({ navigation }) => <DrawerContainer navigation={navigation} />}
        >
            <Drawer.Screen name='Main' component={MainNavigator} />
        </Drawer.Navigator>
    )
}

export default function AppContainer() {
    return (
        <NavigationContainer>
            <DrawerStack />
        </NavigationContainer>
    )
}

console.disableYellowBox = true;
