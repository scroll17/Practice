export const restoreValues = (item) => {
    return JSON.parse(sessionStorage.getItem(item))
};