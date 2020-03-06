import { Server, Response, Model } from 'miragejs';

let users = [
  { name: 'hyper', password: '123', token: 'dssdfdsf' },
  { name: 'jared', password: '987', token: 'sdfdsfsdfpijpjpoj' }
];
new Server({
  routes() {
    this.namespace = '/api';

    this.post('/auth/login', (schema, request) => {
      let { name, password } = JSON.parse(request.requestBody);
      let user = users.find(
        user => user.name === name && user.password === password
      );
      if (!user) return new Response(400);
      return { user, token: user.token };
    });

    this.post('/auth/signup', (schema, request) => {
      let user = { ...request.requestBody, token: Math.random() + Date.now() };
      users.push(user);
      return { user, token: user.token };
    });
  }
});
