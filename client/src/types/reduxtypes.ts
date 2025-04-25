import { ICollection } from "../types/dbtypes";

export interface RootState {
    collections: {
        collections: ICollection[];
        loading: boolean;
        error: string | null;
    };
}
