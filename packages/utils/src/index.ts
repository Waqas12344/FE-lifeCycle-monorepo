export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
        currency: "PKR",
        style: "currency"
    }).format(amount)
}