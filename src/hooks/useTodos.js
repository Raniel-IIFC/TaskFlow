import { useQuery } from '@tanstack/react-query'
import { fetchTodos, todoKeys } from '../api/todos.js'

export function useTodos() {
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: ({ signal }) => fetchTodos({ signal }),
  })
}
