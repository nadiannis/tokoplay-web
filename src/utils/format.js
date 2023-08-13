export const formatNumberAsRupiah = (number) => {
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    currency: 'IDR',
  }).format(number);

  return `Rp${formattedNumber}`;
};
