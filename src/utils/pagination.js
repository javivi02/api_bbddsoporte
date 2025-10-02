export const getPagination = (page = 1, perPage = 3) => {
  const limit = Number(perPage)
  const offset = (page - 1) * Number(perPage)
  return { limit, offset }
}

export const getPagingData = (data, totalItems, page = 1, limit) => {
  const currentPage = Number(page)
  const totalPages = Math.ceil(totalItems / limit)
  return { data, totalItems, totalPages, currentPage }
}
