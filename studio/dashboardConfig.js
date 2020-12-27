export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fe872add3fff96e87fec39b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-11su66wg',
                  apiId: 'af9604aa-8cbe-4e8f-b00e-cbce63fa7858'
                },
                {
                  buildHookId: '5fe872ad02f86e6c401ccab0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-bu1p17k5',
                  apiId: 'd0103207-b780-4486-a103-2da7434fda1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rahullokanathan/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-bu1p17k5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
