import fetch from '@/utils/fetch';

export function getOneSchoolInfo(organizationKeyId) {
  return fetch({
    url: '/organization/findOne',
    method: 'post',
    data: {
      organizationKeyId
    }
  })
}


export function cityInfo() {
  return fetch({
    url: '/organization/getCityAndSysCode',
    method: 'post',
    data: {}
  })
}

/**
 * 机构信息
 */
export function getSchool(page, pageSize) {
  return fetch({
    url: '/OperatorOrganizations/getCurrentOrganization',
    method: 'post',
    data: {
      page,
      pageSize
    }
  })
}
export function setCurrentCityCode(cityCode) {
  return fetch({
    url: '/OperatorOrganizations/setCurrentCityCode',
    method: 'post',
    data: {
      cityCode
    }
  })
}
export function findOne(organizationKeyId, relevantType) {
  return fetch({
    url: '/organization/findOne',
    method: 'post',
    data: {
      organizationKeyId,
      relevantType
    }
  })
}
