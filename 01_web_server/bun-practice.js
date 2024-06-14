import {serve} from 'bun';

serve({
    fetch(request) {

        const url = new URL(request.url);
        if(request.url === '/') {
            return new Response('hello world!', {status: 200});
        } else if(request.url === '/python') {
            return new Response('hello python', {status: 200});
        } else {
            return new Response('error', {status: 404})
        }
    },
    port: 3000,
    hostname: '127.0.0.01'
    
})