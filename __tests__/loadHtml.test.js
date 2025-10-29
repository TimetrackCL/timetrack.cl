import { loadHtml } from '../lib/loadHtml'

describe('loadHtml', () => {
  test('extracts metadata from HTML file', () => {
    const result = loadHtml('index.html')
    expect(result.title).toMatch(/Timetrack/)
    expect(result.body).toContain('<')
  })
})
