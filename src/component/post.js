import React from "react";

const Post1 = ({ post }) => {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{post.title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Author: {post.author}</h6>
				<p className="card-text">{post.content}</p>
				<p className="card-text">Tags: {post.tags.join(", ")}</p>
				<p className="card-text">Posted on: {post.timestamp.toDateString()}</p>
				<p className="card-text">Status: {post.status}</p>
			</div>
		</div>
	);
};

const Post = () => {
	const posts = [
		{
			id: "post123",
			title: "Introduction to JavaScript",
			author: "John Smith",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
			timestamp: new Date("2023-10-30"),
			tags: ["JavaScript", "Programming", "Web Development"],
			status: "true",
		},
	];

	const activePosts = posts.filter((post) => post.status);

	return (
		<div className="container">
			<h1 className="my-4">Posts</h1>
			{activePosts.map((post) => (
				<Post1 post={post} key={post.id} />
			))}
		</div>
	);
};

export default Post;
