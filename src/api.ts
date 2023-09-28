import type {State} from '@vincjo/datatables/remote';
import config from "./config";

export const reload = async (state: State) => {
    const response = await fetch(config.urlTest);
    return response.json();
}