export function formatPrice(valueInCents: number) {
    const formattedValue = valueInCents / 100;
    return formattedValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
