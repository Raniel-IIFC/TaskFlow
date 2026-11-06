const BASE_URL = 'https://jsonplaceholder.typicode.com'

export class HttpError extends Error {
  constructor(status) {
    super(`Request failed with status ${status}`)
    this.name = 'HttpError'
    this.status = status
  }
}

async function request(path, { signal } = {}) {
  const response = await fetch(`${BASE_URL}${path}`, { signal })
  if (!response.ok) {
    throw new HttpError(response.status)
  }
  return response.json()
}

export const todoKeys = {
  all: ['todos'],
  detail: (id) => ['todos', id],
}

export function fetchTodos({ signal } = {}) {
  return request('/todos', { signal })
}

export function fetchTodoById(id, { signal } = {}) {
  return request(`/todos/${id}`, { signal })
}
