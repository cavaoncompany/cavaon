module.exports = {
  content: [
    [
      'blog',
      {
        page: '/blog/_slug',
        permalink: '/blog/:slug',
        isPost: false,
        anchorLevel: 4,
        generate: ['get', 'getAll']
      }
    ]
  ],
  api: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    browserBaseURL: process.env.BASE_URL || 'http://localhost:3000'
  }
}
