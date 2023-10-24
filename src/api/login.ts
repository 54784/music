import request from '@/utils/request'

export const useLoginService = (data: any) => {
  return request.post('/employee/login', {
    data
  })
}
