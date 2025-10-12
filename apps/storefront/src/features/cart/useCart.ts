import { create } from 'zustand'

export type Item = { id: string; title: string; price: number; qty: number }
type State = {
  items: Item[];
  add: (p: { id: string; title: string; price: number }) => void;
  clear: () => void;
}

export const useCart = create<State>((set) => ({
  items: [],
  add: (p) => set((s) => {
    const ex = s.items.find(i => i.id === p.id)
    if (ex) return { items: s.items.map(i => i.id===p.id ? { ...i, qty: i.qty+1 } : i) }
    return { items: [...s.items, { ...p, qty: 1 }] }
  }),
  clear: () => set({ items: [] })
}))
