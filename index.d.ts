import rx from 'rxjs';
import React from 'react';

declare namespace frint {
    class Service {
        constructor(options: Object);
    }

    class Factory extends Service {
        constructor(options: Object);
    }

    class BaseModel {
        constructor(attributes: Object);

        toJS(): Object;
    }

    export class Model extends BaseModel {
        constructor(attributes: Object);
    }

    class BaseStore {
        constructor(options: Object);

        getState$<TState>(): TState;
        getState(): Object;
        dispatch<T>(action: T): T;
        subscribe(callback: Function): Function;
        destroy();
    }

    class BaseApp {
        constructor(opts: Object);
        getRootApp(): BaseApp;
        getModel(model: string); // not yet implemented
        getService(serviceName: string); // not yet implemented
        getFactory(factoryName: string): Factory;
        createStore(rootReducer: Function, initialState: Object): BaseStore;
        getStore(appName: string): BaseStore;
        getState$<T>(appName: T): rx.Observable<T>;
        dispatch<T>(action: T): T;
        getOption(key: string): any;
        registerWidget<T>(widgetApp: BaseApp, regionName: string): rx.Observable<T>;
        beforeMount(): Function;
        render(props: Object): () => {};
        afterMount(): Function;
        beforeUnmount(): Function;
        setRegion<T>(regionName: string): rx.Observable<T>;
        setRegions<T>(regionNames: Array<string>): Array<rx.Observable<T>>;
        getWidgets<T>(regionName: string): Array<rx.Observable<T>>;
        observeWidgets<T>(): rx.Observable<T>;
        readStateFrom(appNames: Array<string>);
    }
}

export const h;

export function combineReducers(reducers: Array<Function>, options: Object): (state: Object, action: string) => {};

export function createApp(options: Object): frint.BaseApp;

export function createStore(options: Object): frint.BaseStore;

export function createModel(extend: Object): frint.Model;

export function createComponent<P>(options: Object): React.ClassicComponentClass<P>;

export function createService(extend: Object): frint.Service;

export function mapToProps(options: Object): React.ClassicComponentClass<{}>;

export const Region: React.ClassicComponentClass<{}>;

export class Provider<P, S> extends React.Component<P, S> {
    static propTypes: Object;
    static childContextTypes: Object;

    constructor(props: Object, context: Object);

    render(): React.ReactElement<any>;
    getChildContext(): Object;
}