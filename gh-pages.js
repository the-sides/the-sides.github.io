import {
    publish
} from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/the-sides/the-sides.github.io', // Update to point to your repository
        user: {
            name: 'Jacob Sides', // update to use your name
            email: 'sides798@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);