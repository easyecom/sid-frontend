export const formatMoney = (value) => "R$ " + (value || 0).toFixed(2).replace(".", ",");
