export const getPagination = (page = 1, per_page = 3) => {
  const limit = Number(per_page)
  const offset = (page - 1) * Number(per_page)
  return { limit, offset }
}

export const getPagingData = (data, page = 1, limit) => {
  const { count: totalItems, rows } = data
  const currentPage = Number(page)
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, totalPages, currentPage, rows }
}

