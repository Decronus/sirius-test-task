export function calculateDaysDifference(date1: Date, date2: Date) {
    const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.round(differenceInDays);
}
export function formatNumber(number: number) {
    return new Intl.NumberFormat('ru-RU').format(number);
}
