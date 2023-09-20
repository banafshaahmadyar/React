import axios from 'axios';

export const login = (credentials = {}) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}token/`,
    credentials,
    {
      headers: { "Content-Type": "application/json" },
    },
  ).then(
    response => ({
      accessToken: response.data.access,
      refreshToken: response.data.refresh,
    })
  )
export const me = token =>
  axios.get(`${process.env.REACT_APP_API_URL}api/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })

export const refresh = refreshToken =>
  axios.post(
    `${process.env.REACT_APP_API_URL}token/refresh/`,
    { refresh: refreshToken },
    {
      headers: { "Content-Type": "application/json" },
    },
  ).then(response => ({
    refreshToken,
    accessToken: response.data.access,
  }))