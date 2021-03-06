import { upperFirst } from "lodash";

export const createTypeName = (modelId: string) => {
    return upperFirst(modelId);
};

export const createReadTypeName = (baseTypeName: string) => {
    return createTypeName(baseTypeName);
};

export const createManageTypeName = (baseTypeName: string) => {
    return createTypeName(baseTypeName);
};
