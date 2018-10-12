// @flow
import * as React from "react";
import { router } from "webiny-app/router";
import { withProps } from "recompose";

export type WithRouterProps = {
    router: typeof router
};

export const withRouter = (): Function => {
    return (BaseComponent: typeof React.Component) => {
        return withProps({ router })(BaseComponent);
    };
};
