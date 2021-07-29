export const ACTION_NAP = 'action_nap'
export const ACTION_EAT = 'action_eat'
export const ACTION_PLAY = 'action_play'

export function actionNap() {
    return {
        type: ACTION_NAP
    };
}

export function actionEat() {
    return {
        type: ACTION_EAT
    };
}

export function actionPlay() {
    return {
        type: ACTION_PLAY
    };
}