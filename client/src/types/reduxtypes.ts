import { ICategory } from "../types/dbtypes";

export interface RootState {
    categories: {
        categories: ICategory[];
        loading: boolean;
        error: string | null;
    };
}
