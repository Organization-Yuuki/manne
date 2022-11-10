import dayjs from 'dayjs'

/*
 * FORMAT
 */
const NOW_FORMAT = 'YYYY/MM/DD HH:mm:ss'

/*
 * NOW
 */
export const nowDate = (): string => dayjs().format(NOW_FORMAT)
