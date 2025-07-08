// A URL base da API, vinda do arquivo api.yaml.
const API_URL = 'http://localhost:4010';

// Função para tratar as chamadas fetch e erros
async function fetchData(endpoint: string) {
  const res = await fetch(`${API_URL}${endpoint}`);
  
  if (!res.ok) {
    throw new Error(`Falha ao buscar dados de ${endpoint}`);
  }
  
  return res.json();
}

// Funções específicas para cada recurso buscado
export function getJourneys(categoryId: string | null = null) {
  let endpoint = '/journeys';
  // Se um categoryId for fornecido, adicione-o como um parâmetro de busca na URL
  if (categoryId) {
    endpoint += `?categoryId=${categoryId}`;
  }
  return fetchData(endpoint);
}

export function getProjects() {
  return fetchData('/projects');
}

export function getPartners() {
  return fetchData('/partners');
}

export function getCategories() {
  return fetchData('/categories');
}
