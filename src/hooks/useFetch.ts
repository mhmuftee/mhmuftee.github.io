import { useEffect, useReducer } from "react"

import axios from "utils/axios"

type State = {
  isLoading: boolean
  isError: boolean
  data: any
}

type Action = {
  type: "FETCH_SUCCESS" | "FETCH_INIT" | "FETCH_FAILURE"
  payload?: any
}

const dataFetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

export const useFetch = (api: string, initialData: any): State => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })

  useEffect(() => {
    let isCancelled = false
    const fetchData = () => {
      dispatch({ type: "FETCH_INIT" })
      axios
        .get(api)
        .then((res) => {
          if (!isCancelled)
            dispatch({ type: "FETCH_SUCCESS", payload: res.data })
        })
        .catch(() => {
          if (!isCancelled) dispatch({ type: "FETCH_FAILURE" })
        })
    }
    fetchData()
    return () => {
      isCancelled = true
    }
  }, [api])

  return state
}
