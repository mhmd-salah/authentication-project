const jsonServer = require("json-server");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router("db.json"); // ملف قاعدة البيانات
const middlewares = jsonServer.defaults();

// استخدام المصادقة
server.db = router.db; // ربط قاعدة البيانات بالمصادقة
server.use(middlewares);
server.use(auth);
server.use(router);

// تشغيل الخادم
server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});
