export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '629878bea58fcf6709ff533f',
                  title: 'Sanity Studio',
                  name: 'hcn-capital-studio',
                  apiId: '2e7f066a-3b32-49cc-ac30-ffb722f50562'
                },
                {
                  buildHookId: '629878be084400675f361da8',
                  title: 'Landing pages Website',
                  name: 'hcn-capital',
                  apiId: '516244d9-9fc0-47bb-9b3b-55a09a8449b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/manimul/hcn-capital',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hcn-capital.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
