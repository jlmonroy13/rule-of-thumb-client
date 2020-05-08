/**
 * View Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a view component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or view with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/views/{{properCase name}}/{{properCase name}}.js',
        templateFile: './view/view.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/views/{{properCase name}}/index.js',
        templateFile: './view/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/views/{{properCase name}}/{{dashCase name}}.scss',
        templateFile: './view/view.scss.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/views/{{properCase name}}/{{properCase name}}.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/views/',
    });

    return actions;
  },
};
