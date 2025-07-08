// Baseado no schema 'JourneyCard' da API
export interface Journey {
  id: string;
  title: string;
  imageUrl: string;
  categoryName: string;
}

// Baseado no schema 'Project' da API
export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  description: string; 
}

// Baseado no schema 'Partner' da API
export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

// Baseado no schema 'Category' da API
export interface Category {
  id: string;
  name: string;
  description: string;
}
