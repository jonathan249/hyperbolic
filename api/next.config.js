module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/api/tasks",
        permanent: true,
      },
    ];
  },
};
