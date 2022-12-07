import { UserDetailResponse } from '../../../@types/api/response'
import { User } from '../../../@types/entities/user'
import { apiInstance } from '../axios'
import { ERROR_CODES } from '../error'

// NOTE: 仮
export const fetchUserDetail = async ({
  userId,
}: {
  userId: number
}): Promise<UserDetailResponse> => {
  try {
    const { data } = await apiInstance.get<User>(`/user/${userId}`)
    return {
      user: data,
      code: 1000,
      msg: '',
    }
  } catch (err: unknown) {
    // TODO: 条件分岐
    return {
      user: {
        id: '',
        username: '',
        email: '',
        description: '',
        thumbnail: '',
      },
      code: ERROR_CODES.INTERNAL_SERVER_ERROR.errCode,
      msg: ERROR_CODES.INTERNAL_SERVER_ERROR.errMsg,
    }
  }
}
