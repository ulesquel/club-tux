import figlet from 'figlet';
const server = Bun.serve({
  port: 22125,
  routes: {
    "/": () => new Response('ULE - Bun corriendo!'),
    "/figlet": () => {
      const body = figlet.textSync('ULE - Bun corriendo!');
      return new Response(body);
    }
  }
});

console.log(`Activo en ${server.url}`);
