import { j as json } from './index-TYVuJacS.js';

let countdown_to = null;
const GET = () => {
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        if (countdown_to instanceof Date) {
          controller.enqueue(`data: ${countdown_to.getTime()}

`);
        }
        await new Promise((resolve) => setTimeout(resolve, 1e3));
      }
    },
    cancel() {
    }
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    }
  });
};
const POST = (request) => {
  const value = request.url.searchParams.get("value");
  if (!value) {
    countdown_to = null;
    return json({ countdown_to });
  }
  const minutes = Number(value) || 0;
  const datetime = /* @__PURE__ */ new Date();
  datetime.setMinutes(datetime.getMinutes() + minutes);
  countdown_to = datetime;
  return json({ countdown_to });
};

export { GET, POST };
//# sourceMappingURL=_server.ts--jlv5ko2.js.map
