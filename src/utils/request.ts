import axios from 'axios'
import { store, Actions } from '../store'
import { toast } from 'react-toastify'

const APP_BASE_URL: string = process.env.APP_BASE_URL || ''

const storeProcess = async (config: any, data: any) => {
  const actionType: 'set' | 'append' | 'update' | 'remove' | 'reset' =
    config.action
  if (actionType !== 'reset') {
    store.dispatch(Actions[actionType](config.key, data))
  } else {
    store.dispatch(Actions['reset'](config.key))
  }
}

const loadingProcess = async (config: any, loading = false) => {
  if (!!config?.store) {
    const actionType: 'set' | 'update' | 'remove' | 'reset' =
      config?.store?.action
    if (actionType === 'set' || actionType === 'update') {
      const loadingData: any = {
        loading: loading,
        loadingState: true,
      }
      store.dispatch(Actions[actionType](config?.store?.key, loadingData))
    }
  }
}

const request = async (configuration: any) => {
  const { authorization, config, ...restConfiguration } = configuration
  const defaultHeader: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Api-Key': process.env.API_KEY,
  }

  if (!!authorization) {
    defaultHeader.Authorization = `Bearer`
  }

  await loadingProcess(configuration, true)
  return await axios({
    ...restConfiguration,
    url: `${APP_BASE_URL}/${restConfiguration?.url.toString()}`,
    headers: defaultHeader,
  })
    .then(async (resp) => {
      if (!!resp?.data?.errors) {
        throw new Error(resp?.data?.errors[0]?.message)
      }
      const data = resp?.data?.data
      if (!!config.store) {
        await storeProcess(config.store, data)
      }
      if (!!config.successMsg) {
        toast.success(configuration?.config?.successMsg)
      }
      return data
    })
    .catch(async (err) => {
      const message =
        err.response.data.message ||
        err.response.data.errors[0]?.message ||
        err?.message
      if (!!config?.showErr) {
        toast.error(message)
      }
      if (err?.response?.status === 401 || message == 'Unauthorized') {
      } else {
        await loadingProcess(config, false)
      }

      throw new Error(err)
    })
}

export default request
