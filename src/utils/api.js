export async function fetchAddress(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
