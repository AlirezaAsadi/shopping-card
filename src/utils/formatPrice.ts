const formatPrice = (price: number, currencyId: string): string => {
  switch (currencyId) {
    case 'RIAL':
      return price.toFixed(2).replace('.', ',');
    default:
      return price.toFixed(2);
  }
};

export default formatPrice;
