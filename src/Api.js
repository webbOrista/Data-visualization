export const fetchDataSet = async (dataSetNumber) => {
    try {
        const url = `https://rcslabs.ru/ttrp${dataSetNumber}.json`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Ошибка:', error);
        return null;
    }
};
