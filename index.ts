import figlet from 'figlet';
import index from './index.html'; 

const server = Bun.serve({
  port: 22125,
  routes: {
    "/": index,
    "/figlet": () => {
      const body = figlet.textSync('ULE - Bun corriendo!');
      return new Response(body);
    }
  }
});

console.log(`Activo en ${server.url}`);
