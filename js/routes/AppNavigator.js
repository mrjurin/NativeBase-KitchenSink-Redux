import Routes from './routes';
import { StackNavigator } from "react-navigation";

export default StackNavigator( Routes, {
	initialRouteName: "Drawer",
	headerMode: "none",
});
