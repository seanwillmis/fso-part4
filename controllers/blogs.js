const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.app.get("/api/blogs", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.get("/:id", async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.json(blog);
  } else {
    response.status(404).end();
  }
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  const savedBlog = await blog.save();
  response.status(201).json(savedBlog);
});

blogsRouter.delete("/:id", async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

// blogsRouter.put("/:id", (request, response, next) => {
//   const body = request.body;

//   const blog = {
//     content: body.content,
//     important: body.important,
//   };

//   Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
//     .then((updatedBlog) => {
//       response.json(updatedBlog);
//     })
//     .catch((error) => next(error));
// });

module.exports = blogsRouter;
