import assert from "assert";
import {binderFactory} from "./binder";

describe("binder", () => {
  it("basics", async () => {
    // No binds provided
    assert.strictEqual(binderFactory()({value:""}), "");
    // Basic functionality
    assert.strictEqual(binderFactory()({value:"x ${yy}", binds:{yy:"1"}}), "x 1");
    // Missing binds key
    assert.strictEqual(binderFactory()({value:"My name is ${username}.", binds:{age: "50"}}), "My name is ?{username}.");
    // Multiple placeholder values
    assert.strictEqual(binderFactory()({value:"This is a ${func} function with ${number} templated values.", binds:{func: "binder", number: "two"}}), "This is a binder function with two templated values.");
    // Providing a normalization function to binderFactory()
    assert.strictEqual(binderFactory(b=>b.toLowerCase())({value:"My name is ${USERNAME}.", binds:{username:"Bob"}}), "My name is Bob.");
  })
});
