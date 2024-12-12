export const formatDate = (date: string | Date): string => {
    date = new Date(date);

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export const formatPrice = (price: string | number, sign: string = ''): string => {
    return `${sign}${price} zł`;
}