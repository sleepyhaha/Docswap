const mongoose = require("mongoose");
const db = require("../config/connection");
const { User, Documents } = require("../models");

const seedDatabase = async () => {
  await db.once("open", async () => {
    // Drop existing collections
    await User.deleteMany({});
    await Documents.deleteMany({});

    // Create users
    const users = await User.create(userSeed);

    // Update document authors
    documentsSeed[0].author = [users[0]._id];
    documentsSeed[1].author = [users[1]._id];

    // Create documents
    const documents = await Documents.create(documentsSeed);

    // Update user uploadedDocs
    await User.findByIdAndUpdate(users[0]._id, {
      uploadedDocs: [documents[0]._id],
    });
    await User.findByIdAndUpdate(users[1]._id, {
      uploadedDocs: [documents[1]._id],
    });

    console.log("Database seeded successfully!");
    process.exit(0);
  });
};

// Define seed data
const userSeed = [
  {
    name: "yep",
    email: "yep@yep.com",
    password: "yepyep",
    description: "A sample user",
    uploadedDocs: [],
    purchasedDocs: [],
  },
  {
    name: "okay",
    email: "okay@okay.com",
    password: "okayokay",
    description: "Another sample user",
    uploadedDocs: [],
    purchasedDocs: [],
  },
];

const documentsSeed = [
  {
    author: [], // This will be populated later
    title: "Sample Document 1",
    description: "A sample document",
    price: 100,
    preview: "sample-preview-1",
    location: "sample-location-1",
  },
  {
    author: [], // This will be populated later
    title: "Sample Document 2",
    description: "Another sample document",
    price: 200,
    preview: "sample-preview-2",
    location: "sample-location-2",
  },
];

seedDatabase();
