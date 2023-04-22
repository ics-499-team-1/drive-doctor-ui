import React from 'react'

const authHeader = (access_token: string | null) => {
  const config = { headers: { 'Authorization': `Bearer ${access_token}` } }
  return config;
}

export default authHeader