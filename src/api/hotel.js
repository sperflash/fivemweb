
import fetch from '@/utils/fetch'
// const BASE_API = process.env.BASE_API
// export function getHotel(advpositioncode, city, checkin, checkout, star) {
//   return fetch({
//     url: 'https://hotels.ctrip.com/Domestic/tool/AjaxGetCPTList.ashx',
//     method: 'GET',
//     data: {
//       advpositioncode,
//       city,
//       checkin,
//       checkout,
//       star
//     }
//   })
// }


export function getHotel(page, pageSize, start, end, tenantId) {
  let url = 'https://hotels.ctrip.com/Domestic/tool/AjaxGetCPTList.ashx'
  let method = 'POST'
  let data = {
    page,
    pageSize,
    start,
    end,
    tenantId
  }
  return fetch(url, method, data)
}
