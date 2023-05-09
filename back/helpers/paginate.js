function paginate(req) {
  const { limit, page } = req.query;

  const pageNumber = Number.parseInt(page, 10);
  const limitNumber = Number.parseInt(limit, 10);

  let pages = 0;

  if (pageNumber > 0 && !Number.isNaN(pageNumber)) {
    pages = pageNumber;
  }

  let size = 10;

  if (limitNumber > 0 && !Number.isNaN(limitNumber)) {
    size = limitNumber;
  }

  return { size: size, pages: pages };
}

export default paginate;
