import { RouteProps } from "react-router-dom"
import { HomePage, NotFoundPage } from 'src/pages'


export enum AppRouters {
    HOME = 'home',
    NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.HOME]: "/",
    [AppRouters.NOT_FOUND]: "*"
}

export const routerConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.HOME]: {
        path: RoutePath.home,
        element: <HomePage />
    },
    [AppRouters.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />
    }
}