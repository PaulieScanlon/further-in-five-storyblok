module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'uaIlMvHXQ78NHJo5XlRdQAtt',
        version: 'draft',
        localAssets: false, // Optional parameter to download the images to use with Gatsby Image Plugin
        languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    }
  ]
};
