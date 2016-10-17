'use strict'

exports.html = (data) => {
  const echo = data.echo
  return `
  <h2>${echo._id}</h2>
  <ul>
    <li>Params: ${echo.params || ''}</li>
    <li>Query: ${echo.query || ''}</li>
    <li>Skills: ${echo.body || ''}</li>
  </ul>
  `
}

exports.text = (data) => {
  const echo = data.echo
  return `
  ${echo._id}
  ==================

  Params: ${echo.params || ''}
  Query: ${echo.query || ''}
  Skills: ${echo.body || ''}
  `
}
