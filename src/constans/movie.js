export const GET_HOURS = (duration) => Math.floor(duration / 60);
export const GET_MINUTS = (duration) => duration % 60;

export const DEFAULT_VISIBLE_MOVIES = {
    LARGE_SIZE: {
        COUNT_MOVIES_VISIBLE: 12,
        STEP_MOVIES_MORE: 3
    },
    LOWER_1279PX: {
        COUNT_MOVIES_VISIBLE: 8,
        STEP_MOVIES_MORE: 2
    },
    LOWER_768PX: {
        COUNT_MOVIES_VISIBLE: 5,
        STEP_MOVIES_MORE: 2
    }
}