import { RequestUserLogged } from './store/user-logged.actions';

export function UserLoggedInitFactory(store, auth): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise((resolve) => {
            if (auth.token) {
                store.dispatch(new RequestUserLogged());
            }
            resolve();
        });
    };
}
