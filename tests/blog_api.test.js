const listHelper = require("../utils/list_helper");

// dummy tests
test("dummy returns one", () => {
  // initialize an empty array
  const blogs = [];

  const result = listHelper.dummy(blogs);
  expect(result).toBe(1);
});

// totalLikes tests
describe("total likes", () => {
  // initialize an empty array
  const emptyList = [];

  // initialize an array with one blog
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  // initialize an array with multiple blogs
  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b512c36234d17f8",
      title: "New Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 2,
      __v: 0,
    },
    {
      _id: "6f322aa71b54a676234d17f8",
      title: "Third Blog Post",
      author: "Frank Rich",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 3,
      __v: 0,
    },
  ];

  test("of empty list is zero", () => {
    const result = listHelper.totalLikes(emptyList);
    expect(result).toBe(0);
  });

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(biggerList);
    expect(result).toBe(10);
  });
});

describe("favourite blog", () => {
  // initialize an array with multiple blogs
  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b512c36234d17f8",
      title: "New Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 2,
      __v: 0,
    },
    {
      _id: "6f322aa71b54a676234d17f8",
      title: "Third Blog Post",
      author: "Frank Rich",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 3,
      __v: 0,
    },
  ];

  // favourite blog data
  const favouriteBlogData = {
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    likes: 5,
  };

  test("from the list of blogs", () => {
    const result = listHelper.favoriteBlog(biggerList);
    expect(result).toEqual(favouriteBlogData);
  });
});

describe("most blogs", () => {
  // initialize an array with multiple blogs
  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b512c36234d17f8",
      title: "New Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 2,
      __v: 0,
    },
    {
      _id: "6f322aa71b54a676234d17f8",
      title: "Third Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 3,
      __v: 0,
    },
  ];

  // favourite blog data
  const favouriteBlogData = {
    author: "Edgar wright",
    blogs: 2,
  };

  test("by a single author", () => {
    const result = listHelper.mostBlogs(biggerList);
    expect(result).toEqual(favouriteBlogData);
  });
});

describe("most likes", () => {
  // initialize an array with multiple blogs
  const biggerList = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b512c36234d17f8",
      title: "New Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 2,
      __v: 0,
    },
    {
      _id: "6f322aa71b54a676234d17f8",
      title: "Third Blog Post",
      author: "Edgar wright",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 1,
      __v: 0,
    },
  ];

  // favourite blog data
  const mostLikesBlogData = {
    author: "Edsger W. Dijkstra",
    likes: 5,
  };

  test("by a single author", () => {
    const result = listHelper.mostLikes(biggerList);
    expect(result).toEqual(mostLikesBlogData);
  });
});
