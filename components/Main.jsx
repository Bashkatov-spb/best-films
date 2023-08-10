const React = require('react');
const Layout = require('./Layout');

function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>This is main page</h1>
    </Layout>
  );
}

module.exports = Main;
