import { RouteProps } from "react-router-dom"
import { Dashboard, HomePage, NotFoundPage, SettingsPage } from 'src/pages'


export enum AppRouters {
    HOME = 'home',
    SETTINGS = 'settings',
    DASHBOARD = 'dashboard',
    NOT_FOUND = 'notFound',

}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: "/",
    [AppRouters.SETTINGS]: "/settings",
    [AppRouters.DASHBOARD]: "/dashboard",
    [AppRouters.NOT_FOUND]: "*",
}

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRouters.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <Dashboard />
    },
    [AppRouters.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />

    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />
    },
}