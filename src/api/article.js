import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/banner',
    method: 'get'
  })
}

