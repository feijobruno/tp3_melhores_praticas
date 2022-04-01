export const mask = (v: string): string => {
  let cpf = v;

  cpf = v.replace(/\D/g, '');
  cpf = v.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = v.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
};
