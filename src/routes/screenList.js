import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from "../screens/login/LoginScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import SalesScreen from "../screens/sales/SalesScreen";
import UserProfileScreen from "../screens/userProfile/UserProfileScreen";

export const publicListScreen = [
    {
        id: 'Registro',
        path: '/',
        component: <LoginScreen />,
        name: 'Registro',
        //icon: <HomeIcon />,
    },
];

export const privateListScreen = [
    {
        id: 'Inicio',
        path: '/inicio',
        component: <HomeScreen />,
        name: 'Inicio',
        //icon: <HomeIcon />,
    },
    {
        id: 'Productos',
        path: '/productos',
        component: <ProductsScreen />,
        name: 'Productos',
        //icon: <FaceIcon />,
    },
    {
        id: 'Ventas',
        path: '/ventas',
        component: <SalesScreen />,
        name: 'Ventas',
        //icon: <MenuBookIcon />,
    },
    {
        id: 'Perfil',
        path: '/perfil',
        component: <UserProfileScreen />,
        name: 'Perfil',
        //icon: <LocalMallIcon />,
    }
];