const { create } = zustand;

interface KanbanState {
  // Filters
  activeFilters: {
    stages: string[]
    tags: string[]
    searchTerm: string
  }
  // Sorting
  sort: {
    field: 'date' | 'priority' | 'name'
    direction: 'asc' | 'desc'
  }
  // Actions
  setFilter: (key: keyof KanbanState['activeFilters'], value: any) => void
  setSort: (field: KanbanState['sort']['field'], direction: KanbanState['sort']['direction']) => void
  resetFilters: () => void
}

type SetState = (
  partial: KanbanState | Partial<KanbanState> | ((state: KanbanState) => KanbanState | Partial<KanbanState>),
  replace?: boolean
) => void

export const useKanbanStore = create<KanbanState>((set: SetState) => ({
  // Initial state
  activeFilters: {
    stages: [],
    tags: [],
    searchTerm: ''
  },
  sort: {
    field: 'date',
    direction: 'desc'
  },
  // Actions
  setFilter: (key: keyof KanbanState['activeFilters'], value: any) => set((state) => ({
    activeFilters: {
      ...state.activeFilters,
      [key]: value
    }
  })),
  setSort: (field: KanbanState['sort']['field'], direction: KanbanState['sort']['direction']) => set({
    sort: { field, direction }
  }),
  resetFilters: () => set({
    activeFilters: {
      stages: [],
      tags: [],
      searchTerm: ''
    }
  })
}))