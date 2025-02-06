import { Draft, produce } from 'immer'
import { SET, RESET, UPDATE, REMOVE, APPEND, PREPEND } from './constants'
import initialState from './initialState'

interface Action {
  key: keyof typeof initialState
  data?: any
  type: string
}

const appReducer = (state = initialState, action: Action) => {
  return produce(state, (draft: Draft<any>) => {
    const data = action?.data
    const key = action?.key
    const oldState: any = state
    if (!!data?.loadingState) {
      if (!!draft[key]?.loadingState) {
        draft[key] = { ...oldState[key], loading: data?.loading }
      }
      return
    }

    switch (action.type) {
      case SET:
        if (key !== undefined) {
          if (data?.items) {
            const {
              items,
              limit,
              page,
              totalItems,
              totalPages,
              ...restData
            }: any = data
            draft[key] = { ...oldState[key], restData }
            draft[key].items = items || []
            draft[key].totalItems = totalItems
            draft[key].totalPages = totalPages
            draft[key].page = page
            draft[key].loading = false
            draft[key].limit = limit
          } else {
            if (!!draft[key]?.loadingState) {
              draft[key] = {
                ...oldState[key],
                data: data,
                loading: false,
              }
            } else {
              draft[key] = data
            }
          }
        }
        break
      case RESET:
        draft[key] = initialState[key]
        break
      case UPDATE:
        if (key !== undefined) {
          if (!!draft[key]?.items) {
            const findIndex = oldState[key]?.items?.findIndex(
              (item: any) => item?.id === data?.id,
            )
            if (findIndex > -1 && !!oldState[key]?.items[findIndex]) {
              draft[key].items[findIndex] = {
                ...oldState[key]?.items[findIndex],
                ...data,
              }
            }
          } else {
            if (!!draft[key]?.loadingState) {
              if (Array.isArray(draft[key]?.data)) {
                const findIndex = oldState[key]?.data?.findIndex(
                  (item: any) => item?.id === data?.id,
                )
                if (findIndex > -1 && !!oldState[key]?.data[findIndex]) {
                  draft[key].data[findIndex] = {
                    ...oldState[key]?.data[findIndex],
                    ...data,
                  }
                }
              } else {
                draft[key] = {
                  ...oldState[key],
                  data: { ...oldState[key]?.data, ...data },
                  loading: false,
                }
              }
            } else {
              draft[key] = { ...oldState[key], ...data }
            }
          }
        }
        break
      case APPEND:
        if (!!draft[key]?.loadingState) {
          if (!!draft[key]?.items) {
            if (data?.items && Array.isArray(data?.items)) {
              draft[key] = {
                ...data,
                ...oldState[key],
                items: [...oldState[key]?.items, ...data?.items],
                loading: false,
              }
            } else {
              const find = oldState[key]?.items?.find(
                (item: any) => item?.id === data?.id,
              )
              if (!find) {
                draft[key] = {
                  ...oldState[key],
                  items: [...oldState[key]?.items, data],
                  totalItems: oldState[key]?.totalItems + 1,
                  loading: false,
                }
              }
            }
          } else {
            draft[key] = {
              ...oldState[key],
              data: [...oldState[key]?.data, data],
              loading: false,
            }
          }
        } else {
          draft[key] = [...oldState[key], data]
        }
        break
      case PREPEND:
        if (!!draft[key]?.loadingState) {
          if (!!draft[key]?.items) {
            if (data?.items && Array.isArray(data?.items)) {
              draft[key] = {
                ...data,
                ...oldState[key],
                items: [...data?.items, ...oldState[key]?.items],
                loading: false,
              }
            } else {
              const find = oldState[key]?.items?.find(
                (item: any) => item?.id === data?.id,
              )
              if (!find) {
                draft[key] = {
                  ...oldState[key],
                  items: [data, ...oldState[key]?.items],
                  totalItems: oldState[key]?.totalItems + 1,
                  loading: false,
                }
              }
            }
          } else {
            draft[key] = {
              ...oldState[key],
              data: [data, ...oldState[key]?.data],
              loading: false,
            }
          }
        } else {
          draft[key] = [data, ...oldState[key]]
        }
        break
      case REMOVE:
        if (!!draft[key]?.items) {
          draft[key]['items'] = oldState[key]?.items.filter(
            (item: any) => item?.id !== data?.id,
          )
        }
        if (!!draft[key]?.data) {
          draft[key]['data'] = oldState[key]?.data.filter(
            (item: any) => item?.id !== data?.id,
          )
        }
        break
      default:
        break
    }
  })
}

export default appReducer
