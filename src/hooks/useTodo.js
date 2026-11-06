import { useQuery } from '@tanstack/react-query'
import { fetchTodoById, todoKeys } from '../api/todos.js'

export function useTodo(id) {
  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: ({ signal }) => fetchTodoById(id, { signal }),
    // A 404 means the task does not exist, so retrying will not help.
    retry: (failureCount, error) => error.status !== 404 && failureCount < 1,
  })
}
